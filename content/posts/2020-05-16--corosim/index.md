---
title: Corosim – a tool for modelling the COVID-19 epidemic in Finland
tags: ["web", "i-made-thing"]
cover: coronavirus.jpg
author: atte juvonen
---

<re-img
    src="coronavirus.jpg"
    title="Photo by Fusion Medical Animation"
    href="https://unsplash.com/photos/rnr8D3FNUNY"
    >
</re-img>

<a href="https://corosim.attejuvonen.fi" target="_blank">Corosim</a> is a project I worked on during my time in Futurice. Corosim combines historical estimates and model predictions for the COVID-19 epidemic in Finland. This means you can use Corosim to get some insight towards questions such as ''how many Finns have been infected so far'' or ''when will the epidemic peak''.

Our model is a classical epidemiological model (deterministic SEIR). By default the model is initialized with the latest historical estimate & you can easily configure an earlier timepoint as the starting point for the model. You can also tune parameters which impact both historical estimates and model predictions. You can also set action markers to model the effects of different policy changes or other events. All of this configuration is easily discoverable and modifiable directly in the user interface. You can tinker with parameters and see the results immediately.

### Historical estimates

Historical estimates <s>are</s> were updated daily based on data provided by <a href="https://github.com/HS-Datadesk/koronavirus-avoindata" target="_blank">Helsingin Sanomat</a>. Automatic updates have been turned off and Corosim is now frozen in time. Latest available historical estimate is frozen to 26.09.2021 (although the historical estimates ''curtain'' is currently dragged to 28.07.2020, you can drag to change this timepoint). As Corosim is a fully static web app, there was no backend involved in data updates. Instead, the static web app was updated at build-time on a 6-hour timer.

We would like to emphasize that historical estimates have not been created with the model. Historical estimates are based on historical (past-looking) observations, not (forward-looking) predictions. Although the model is a legitimate epidemiological model, our historical estimates are merely simple ''back of the napkin'' type calculations based on confirmed cases, confirmed deaths, and hospitalization data. For example, the estimate for the number of infected is based on the number of confirmed cases, but is also affected by various parameters, such as the percentage of undetected infections, length of the incubation period, how long individuals remain infectious, and so forth. We refer to <a href="https://github.com/futurice/corona-simulations/blob/master/src/models/historical_estimates.js#L4" target="_blank">the source code</a> for details on historical estimates.

Corosim is unique in the way it combines model predictions with historical estimates. Other Coronavirus modelling websites begin the simulation from a theoretical ''day zero'', which is useful to simulate how a theoretical epidemic might spread in a theoretical environment. However, these ''day zero'' simulations are not that useful in simulating how the current, real-life Coronavirus epidemic might spread. We are in the middle of the epidemic &#8212; long past day zero. Doesn't it make sense to start the simulation from the most recent estimate of the current situation? That's what Corosim does.

We have <a href="https://github.com/futurice/corona-simulations" target="_blank">open sourced Corosim on GitHub</a> under the MIT license. The README has instructions on <a href="https://github.com/futurice/corona-simulations#want-to-fork-this-repo-and-customize-it-for-your-country" target="_blank">how to</a> customize Corosim for different countries or local areas. Corosim has already been customized for at least Germany and Columbia.

### Model predictions

Epidemic models can be divided into compartmentalized models and agent-based models. Generally speaking, agent-based models are often stochastic and simulate individual agents (_''Jack meets... rolls dice... 6 people today''_) whereas compartmentalized models are often deterministic and simulate groups of people rather than individuals (_''today we have 1000 infected... increases by 10%... tomorrow we have 1100 infected''_). Agent-based models are often simple on math side, but require significant efforts in software engineering and computational power. Compartmentalized models require more math (typically differential equations), but they are simple to write in terms of software engineering, and they don't require a lot of computational power. Agent-based models are closer to reality, which makes them easier to extend to different use cases. Corosim implements a compartmentalized model.

Corosim uses Gabriel Goh's implementation of a <b><a href="https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SEIR_model" target="_blank">SEIR</a></b> model (<b>S</b>usceptible → <b>E</b>xposed → <b>I</b>nfected → <b>R</b>emoved). This is a classical infectious disease model, commonly used to this day in the front lines of research. For example, the Finnish health authority THL <a href="https://thl.fi/fi/-/koronaepidemian-mallinnus-ihmiskontaktien-rajoittaminen-vaikuttaa-epidemian-kestoon-ja-paivittaisten-tartuntojen-maaraan" target="_blank"> uses a similar SEIR odel for their official Coronavirus forecasts.</a> One key difference between Corosim and THL's model is that THL's model is initialized to a theoretical ''day zero'', whereas Corosim is initialized to the latest historical estimate. Another key difference is that THL's model is divided into age groups, Corosim's model is not. These are certainly not the only differences between these models &#8212; unfortunately THL has not published their entire model, so we are unable to provide a thorough comparison. Most of the discussion around models in Finland seems to revolve around parameter choices, rather than models themselves.

The clinical dynamics in this model are an elaboration on SEIR that simulates the disease's progression at a higher resolution, subdividing _R_ into _mild_ (patients who recover without the need for hospitalization), _moderate_ (patients who require hospitalization but survive) and _fatal_ (patients who require hospitalization and do not survive). Each of these variables follows its own trajectory to the final outcome, and the sum of these compartments add up to the _R_ in SEIR.

Note that the model is a simplification of reality in many ways:

- All hospitalizations are assumed to occur immediately after the infectious period.
- Individuals who are recovering in home or hospital are assumed to be completely isolated.
- Hospitalization duration is assumed to be the same for regular ward, ICU, and fatalities.
- Icu capacity is just a visual indicator, exceeding capacity has no effect on fatalities.
- All fatalities are assumed to come from hospitals. In reality, many fatalities come from nursing homes,
  which means that this model overestimates hospitalization and ICU counts. Note that the model does _not_
  necessarily underestimate fatalities; the fatality rate can be adjusted to take into account all deaths,
  regardless of where they occur.

### Attribution

Corosim is a fork of Gabriel Goh's <a href="https://gabgoh.github.io/COVID/index.html" target="_blank">Epidemic Calculator</a>.

<a href="https://github.com/futurice/corona-simulations" target="_blank">Source code available on GitHub.</a>

Key differences between Corosim and Epidemic Calculator:

- Historical estimates. The original Epidemic Calculator initiates the simulation from a theoretical ''day zero''. Corosim initiates the simulation from the latest historical estimate. Estimates <s>are</s> were updated daily.
- Corosim is tailored to the current situation in Finland. In addition to Finnish historical data, all the parameter default values have been chosen based on latest scientific research (as of 2020/05), and specific to Finland when applicable. For example, the most crucial parameter in this model is _R_. It's constantly changing and it's specific to the population which you are trying to model (meaning, the _R_ for Italy will be different than the _R_ for Finland).
- User-facing states are different (e.g. infected vs. infectious). The old Epidemic Calculator is a great educational tool about the progression of epidemics in general, but our focus was on practical real-world questions related to this epidemic right now. The states we have chosen to visualize are relevant for practical questions, such as ''how many people are infected'' or ''do we have enough health care capacity''.
- Multiple action markers. The old Epidemic Calculator only has a single action marker, labeled ''intervention'' and it can only reduce the transmission of the virus, not increase it. What if you wanted to model the effect of <i>stopping</i> an intervention? How about modelling multiple policy changes? You can do those things with Corosim. Action markers can be added, deleted, dragged, renamed, and their effect on disease transmission can be tuned.
- Scenario outcome summary. The old Epidemic Calculator does not have an easy way summarize an outcome. If you want to compare two different strategies, you need to manually zoom out and eyeball the peak, fatalities, etc. Corosim provides a scenario outcome summary of the most crucial metrics.
- Small changes to the model itself: hospitalizations go to hospital without delay and fatalities are affected by the same hospitalization time as recovering patients. These simplifications were motivated by a desire to make the parameterization easier to communicate to the end user. For example, in the original Epidemic Calculator there is a parameter labelled ''Length of hospital stay'', but it actually affects only those patients who eventually survive, not those who eventually die. It would have been difficult to convey the meaning of this parameter to end users, if we would have maintained it as it were. We noticed similar issues with parameters ''Time to hospitalization'' and ''Case fatality rate''. In the original Epidemic Calculator, case fatality rate actually affects the hospitalization rate, but this effect is hidden from the end user.
- Various design and UX improvements (real dates, more tooltips, reduced clutter, etc.)
