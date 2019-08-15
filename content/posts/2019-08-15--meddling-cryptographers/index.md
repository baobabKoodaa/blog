---
title: If it weren't for those meddling cryptographers!
tags: ["voting", "crypto", "adversarial", "everything-is-broken"]
cover: pug.jpg
author: atte juvonen
---

_This is a story about how you should not respond to a vulnerability disclosure._

<re-img
    src="pug.jpg"
    title="Photo by Matthew Henry on Unsplash"
    href="https://unsplash.com/photos/2Ts5HnA67k8"
    >
</re-img>

Back in 2015 a man-in-the-middle (MITM) vulnerability was discovered in an Australian internet voting system called iVote®. Things 
were heating up because the discovery was made while the system was used by hundreds of thousands of people in a real election. The New South Wales Electoral Commission (NSWEC) didn't take kindly to meddling cryptographers. They <a href="https://www.elections.nsw.gov.au/About-us/Public-interest-information/iVote-reports/Response-from-the-NSW-Electoral-Commission-to-iVot" target="_blank">responded</a> in more than few words. This blog post is a commentary on that response.

Just to clarify the severity of <a href="https://en.wikipedia.org/wiki/FREAK" target="_blank">the vulnerability</a>: it allowed an attacker to tamper with votes, but they needed a privileged network position to do so (for example, the operator of a WiFi hotspot or an Internet Service Provider could perform the attack). (The vulnerability was caused by loading an analytics JS from a poorly configured external web server. Due to the poor configuration, a MITM would be able to downgrade the encryption, break the weakened encryption, and then serve any JS instead of the real JS file.)

Let's begin.

> This response concerns allegations made during the NSW 2015 state election regarding the security and integrity of the Commission's iVote®internet voting system by researchers Dr Halderman (University of Michigan – USA) and Dr Teague (University of Melbourne).

"Allegations". I can see we're off to a good start here. The NSWEC then goes on a rampage about how their authority is not being respected:

> Teague and Halderman sent a report [...] to media outlets and CERT Australia [...] The correct agency for Drs Teague and Halderman to have reported this incident was in fact the NSW Electoral Commission [...] CERT Australia is a federal government agency, it is unable to deal with a state government agency such as NSW Electoral Commission.

<re-img
    src="meme-cartman.jpg"
    title="Meme"
    meme=True
    >
</re-img>

Let me get this straight: the national Computer Emergency Response Team was not the correct agency to report this emergency, because this was only a state level emergency, not a federal one. If you are wondering how things would have turned out if the researchers had contacted NSWEC only, wonder no more:

> ABC contacted the Commission [...] did NOT advise the Commission they were operating under an embargo [...] the Commission understood that publication of a story on the content of the report was imminent and not conditional on remediation of the system. Realising this and knowing the potential concern such a story would have on public confidence, particularly if the report's proposed remediation action had not been undertaken. The Commission knew it had no option but to remove the Piwik link to the iVote® system immediately. Therefore the removal of the link was done expeditiously and without the benefit of an independent risk assessment being performed.

Here's a free risk assessment for you: The downside of removing that one line of code is you lose analytics. The upside is MITM 
attackers can't manipulate votes on your internet voting system. NSWEC is straight up telling us that without the media pressure they would have left the vulnerability unfixed while they would conduct their "independent risk assessment".

> Then the ABC, without advising the Commission, ran the story [...] This news story, gave a false impression of the iVote® system's operation to the public [...]

Yeah, false how exactly? They don't say. Oh, and HOW DARE the media report on this without our permission!

> Drs Teague and Halderman were aware that the related Piwik website was used only to provide statistics regarding the iVote core 
voting system's operation and was not essential to its main function of receiving votes.

That's a clever bit of misdirection right there. Yes, the NSWEC _intended_ the JS dependency ("Piwik website") to be used only for 
collecting analytics. That's what they want to highlight for the reader. Not the fact that a MITM attacker could leverage the same dependency to manipulate votes.

> The vulnerability was found by Drs Teague and Halderman using a free internet based certificate test service [...] The relatively poor certificate test result [...]

What a curious choice of words. Relative to what? The test result -- an F -- was poor relative to other possible test results, namely A, B, C, D and E. I gotta hand it to them, they're technically right. Everything is relative after all.

> We have been advised that the likelihood of someone intercepting online votes using this approach is similar to that of a malicious postman replacing a postal vote.

That's a false equivalence if I've ever seen one. A rogue postman will be able to replace a few votes at best. MITM attacks on a 
computerized voting system scale quite differently: the effort to replace a single vote with this attack is roughly the same as the effort to change a lot of votes. For example, a large Internet Service Provider (or a rogue employee) that executes this attack would be able to change _all_ of the votes sent via their connections, compared to just a few votes that a postman would be able to change.

> Should the attack [...] have actually occurred the Commission would have reasonably expected that our verification service would 
alerted affected voters who would have contacted the Commission. Some 1.7% of electors who voted using iVote® also used the verification service and none of them identified any anomalies with their vote.

More than a year after the election it <a href="http://www.parliament.wa.gov.au/Parliament/commit.nsf/(Evidence+Lookup+by+Com+ID)/805D229860DF8D224825817D0010CDF1/$file/Submission+9+-+University+of+Melbourne.pdf" target="_blank">turned out</a> that this claim was false. A staggering 10% of verification attempts had failed to retrieve any vote. It is unclear whether the NSWEC was aware of the successful verification rate and lied, or was oblivious to the successful verification rate and lied.

The NSWEC then goes on to reveal the "hidden agenda" of Teague and Halderman:

> Teague and Halderman are advisory board members of the US based anti-internet voting lobby group Verified Voting [...] Halderman and Teague are anti-internet voting activists [...] Halderman has supported a statement [...] Teague has endorsed [...] She has also said [...] Halderman has also undertaken activism [...] Halderman is well known for his dramatisation of security issues [...] Teague and Halderman typically do not disclose to the public their affiliation with US based anti-internet voting lobby group Verified Voting when making media statements on this subject.

In other news, anti-heroin activists are critizing a strain of heroin. They are claiming that this particular strain is bad, when in fact they oppose all strains of heroin! We have uncovered their hidden agenda by looking at their public affiliations, board memberships in anti-heroin organizations, and statements to the media made over a number of years, all of which they attempted to hide from the public eye.

The attacks on Teague and Halderman continue:

> Some of the statements they have made appear to fall outside their core areas of research. In particular they recommended in "The Conversation" that electors "stick with an old-fashioned paper ballot". The Commission is not aware of any research done by Drs Halderman and Teague which assesses the comparative risks of internet voting against paper voting for NSW elections. We therefore believe this statement is more likely a strongly held personal view rather than a product of peer reviewed and evidence based research, either conducted by them or other reputable researchers.

Your Honor, the witness may be an expert in <a href="https://www.researchgate.net/profile/Peter_Ryan7/publication/228822923_Pretty_Good_Democracy/links/09e41506482dc48b99000000/Pretty-Good-Democracy.pdf" target="_blank">electronic voting systems</a>, an expert in <a href="https://arxiv.org/pdf/1404.6822.pdf" target="_blank">paper-based voting systems</a>, and sure, she may have <a href="https://www.usenix.org/system/files/conference/evtwote12/evtwote12-final9_0.pdf" target="_blank">implemented some voting systems specifically in Australia</a>, but let me ask the court, has she published any peer-reviewed studies on the comparative risks of internet voting against paper voting in New South Wales specifically? I rest my case.

> <mark style="color: #666">The Commission's view is that internet voting is not a problem for academic cryptographers to solve</mark>, but rather an evolving technology requiring a broad range of technical and electoral skills and engagement with electoral stakeholders.

Although the entire article is a comedy goldmine, this one takes the cake. We want a broad range of technical and other skills, except for technical skills in cryptography, which we don't want, because they'd just reveal how horribly insecure our internet voting system is. And remind me again, what _are_ problems for cryptographers exactly, since internet voting isn't one of them?

<re-img
    src="meme-meddling.jpg"
    title="Meme"
    meme=True
    >
</re-img>

This reminds me of a quote by another Australian politician, Malcolm Turnbull:

> The laws of mathematics are very commendable, but the only law that applies in Australia is the law of Australia.

I don't know what it is with Australian politicians. Do they all think math just goes away if you outlaw it or pretend it doesn't exist? If a tree falls in the forest and no cryptographers are around to hear it, is the New South Wales iVote® system still insecure?