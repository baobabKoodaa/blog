---
title: A comparison of voting schemes' security properties
tags: ["voting", "crypto", "adversarial", "i-made-thing"]
cover: bulbs.jpg
author: atte juvonen
---

<re-img
    src="bulbs.jpg"
    title="Photo by Skye Studios on Unsplash"
    href="https://unsplash.com/photos/NDLLFxTELrU"
    >
</re-img>

Voting is a uniquely difficult problem with seemingly contradictory requirements. On one hand, in order to prevent coercion and vote-buying, we must ensure the secrecy of the vote. On the other hand, in order to prevent manipulation of the results, we must ensure that votes are counted correctly. How can we achieve both goals at the same time?

I explore these issues in my Master's thesis,

"_A framework for comparing the security of voting schemes_".

Abstract:

> We present a new framework to evaluate the security of voting schemes. We utilize the framework to compare a wide range of voting schemes, including practical schemes in real-world use and academic schemes with interesting theoretical properties. In the end we present our results in a neat comparison table.
>
> We strive to be unambiguous: we specify our threat model, assumptions and scope, we give definitions to the terms that we use, we explain every conclusion that we draw, and we make an effort to describe complex ideas in as simple terms as possible.
>
> We attempt to consolidate all important security properties from literature into a coherent framework. These properties are intended to curtail vote-buying and coercion, promote verifiability and dispute resolution, and prevent denial-of-service attacks. Our framework may be considered novel in that trust assumptions are an output of the framework, not an input. This means that our framework answers questions such as ''how many authorities have to collude in order to violate ballot secrecy in the Finnish paper voting scheme?''

Results of the comparison:

<re-img
    src="voting_schemes_comparison.jpg"
    title="Comparison table of voting schemes' security properties"
    meme=True
    >
</re-img>

You can download the thesis below. I'd be happy to receive any comments or corrections. I will fix any discovered errors and I pledge to keep both updated and historical versions available on this site. I have released the thesis under a permissive license (CC BY 4.0), so you are free to do what you want with it.

- <a href="/thesis-voting-security-2019-10-09.pdf" target="_blank">v-2019-10-09</a> ← _latest version submitted to University_
- <a href="/thesis-voting-security-2019-10-01.pdf" target="_blank">v-2019-10-01</a>