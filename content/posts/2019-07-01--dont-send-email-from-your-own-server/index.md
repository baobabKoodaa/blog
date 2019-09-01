---
title: Don't send email from your own server
tags: ["email", "adversarial", "everything-is-broken"]
cover: mailboxes.jpg
author: atte juvonen
---

It's fine to run your own server to receive email, but save yourself a headache, don't try to send any. This is a cautionary tale about not believing things you read on the internet. It's also a story about a decentralized communication protocol that was widely adopted by the entire world, only to be slowly suffocated to death by a giant adtech company. But first and foremost, it's a story about me trying to send email to my mom.

<re-img
    src="mailboxes.jpg"
    title="Photo by Mathyas Kurmann on Unsplash"
    href="https://unsplash.com/photos/fb7yNPbT0l8"
    >
</re-img>

## Prologue

It was a cold morning in 2016. After two decades of using email like a normal person I had finally had enough. I was going to set up my own server. And I was going to do it perfectly, so I wouldn't have to deal with these problems that were caused by other people running my email server. What problems, you ask? Two words: spam filtering.

One time I would reply to my mom's email -- a Gmail address -- and a week later she would call to check that I'm alive because she never got my email. Then I would call my email service provider, which at the time was my ISP, and they would tell me that Gmail blacklisted them for a few days because someone was using their servers to send spam. ''But don't worry'', they would say, ''it works now''. Sure, maybe it works _today_. And maybe tomorrow my mom has to worry again because someone didn't set up bounce notifications. (Fun fact: later this ISP just closed my email address because they were ending B2C services in anticipation of a buyout.)

Have you ever registered to a service and wondered why you had to wait 2 hours for the confirmation email? This used to be a common issue for me, and I now know it was caused by an anti-spam method called _graylisting_. Graylisting means that incoming email from unfamiliar servers is bounced with a note that says ''please try again later''. The sending server then tries again. And again. And again. After a few hours the receiving server says ''ok I guess you're not a spammer since you went through all this trouble'' and the email finally lands in the inbox. Uh, ok, so... first we wrapped optical fiber around the entire planet so we could send near-instant messages across the world. Then someone looked at this system and said "I know how we can make it better: let's create a protocol that delays messages for hours!" Progress, I guess?

## My brand new email server

The first thing you need to know about setting up an email server is that it's not just the original email protocol. It's a whole dance. If you want the cool kids to play with you, you need to configure a bunch of different things like reverse DNS, DKIM, SPF, HELO, and about 12 other protocols which I'm actively trying to forget and will not be enumerating at this time. After that you need to sacrifice a goat and perform a rain dance. If your email is still not delivered you might as well pray to the rain gods, because the cool kids (Gmail and Outlook) sure as hell are not going to tell you what you did wrong.

So I did the whole dance thing. Then I used a bunch of services like DKIMValidator, mail-tester and Glockapps to validate that my server is operating correctly. I fixed every tiny thing that they indicated may be affecting my deliverability negatively. I continued until there was nothing left to fix. Despite these efforts, my personal email wasn't getting past spam filters. This was unfathomable to me: I'm the only person sending email from this dedicated domain and dedicated IP, I only send personal email, and somehow, those emails are being labelled as spam.

Maybe someone has gained access to my server and is using it to spam without my knowledge? I know this is not the case because I've configured DMARC and Gmail is sending me DMARC reports which show 1 outgoing email from my server to Gmail on the days that I email my mom. I've also periodically checked that my domain and IP are not on any spammer blacklists.

## Rain gods, do you hear my prayer?

Both Outlook and Gmail provide forms to report deliverability issues. Gmail didn't answer my prayers. Outlook answered that I'm "not eligible for mitigation". They wouldn't say why, but they were kind enough to provide some helpful tips, like "ensure your email lists are up to date". I tried to explain to them, again, that I mostly email my mom and I don't have any email lists because I'm not a spammer. They replied "after reviewing" my case that I should "ensure that the unsubscribe process is visible", among other tips which they thought would be helpful to people who try to send personal emails to their loved ones.

The cool kids also offer some interactive tools to monitor email deliverability and help troubleshoot issues. Gmail's offering is called _Postmaster tools_ whereas Outlook offers _Junk Mail Reporting Program_ and _Smart Network Data Services Program_. I joined all of these. None of them show me any data, because I am not a _~~spammer~~ large volume sender_.

Gmail offers <a href="https://support.google.com/mail/answer/81126" target="_blank">this article</a> for those who are interested in improving their deliverability to Gmail. The title of the article is _~~Spammer~~ Bulk Sender Guidelines_, which gives you some indication of whose deliverability Gmail wants to improve.

Here is a quote from <a href="https://www.migadu.com/en/guides/deliverability.html" target="_blank">Migadu</a>, a small email provider:

> In some cases recipient servers intentionally rejected correct emails just because we are a low volume sender. Ironically that is how an ideal sender should be.

Wait, what? Why would anybody do that? <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ips.html#dedicated-ips-managed-reputation" target="_blank">AWS docs</a> seem to confirm this:

> If you use dedicated IP addresses, it is your responsibility to maintain your sender reputation by sending consistent and predictable volumes of email [...] you must warm up those addresses by sending an amount of email that gradually increases every day [...] Once your dedicated IP addresses are warmed up, you must then maintain a 
consistent sending pattern [...] Most internet service providers (ISPs) only track the reputation of a given IP address if they receive a significant volume of mail from that address.

<re-img
    src="spam-meme.jpg"
    title="Meme"
    meme=True
    >
</re-img>

I'm sure you've noticed the pattern already, but I'm going to spell it out anyway: Gmail and Outlook are not delivering clearly legitimate email from low-volume senders. Deliverability tools, mitigations and guidelines are available for ~~spammers~~ large-volume senders only. This is pretty much what you might expect in a dystopia where the largest email providers are huge adtech companies.

## I give up

Over the course of 2 years that I was actively using my own server to send email from the same domain and same IP, there were periods of time when my emails were landing in Gmail's inbox. And then there were periods of time when my emails were placed in spam, sometimes outright bounced, and sometimes received and dropped without even landing in the spam folder. You could never know what Gmail would do with your email. Outlook was worse. During those 2 years I was _never_ able to land an email to Outlook's inbox. Not even to my girlfriend, who frequently emailed me back from the very same address. Yes, Outlook's spam filtering is somehow even worse than Gmail's.

## But did you do the thing?

Yes I did do the thing. Yes I did join DNSWL. Yes I did configure return-path header to match reply-to header. Yes I did tell my server it's been naughty when it's been telling other servers it's from 127.0.0.1. Yes I did configure SPF 3.0, and that isn't even a real thing, and you wouldn't even have noticed that I just made it up, because email deliverability is a dystopian hellscape.

For some reason many people are in disbelief when I tell this story. A common response is "did you do this one thing where you twirl counter-clockwise while you are shouting the rain god's name and..." YES I DID, and I also tried twirling clockwise, just in case that would work, and also why is this a thing? Just for the sake of argument, let's suppose that I did do something wrong. Let's suppose that it _is_ possible to deliver emails to Outlook and Gmail from your personal email server. If it's this difficult to achieve, does it seem like a worthwhile endeavour?

I'm not the only one with this problem. Periodically a thread about email deliverability blows up on Hacker News and a lot of people are ranting about the same issue. <a href="https://news.ycombinator.com/item?id=19756125" target="_blank">Here's one</a>. These threads also seem to bring personal email evangelists out of the woodwork, saying things like "It's easy to get your email delivered. Just do this one thing..." Don't believe everything you see on the internet, even when it's repeated by many reputable sources. These people mean well, but they are not presenting any evidence, which leads me to the obvious conclusion that they don't actually _measure_ their deliverability. They just _feel like_ their email is delivered. When the occasional mail is lost, it's easy to assume that the intended receiver simply chose not to write back. And you know what, maybe one of them actually has the secret sauce to deliver email, IP from the holy maiden IP block, a domain touched by a lucky rabbit's foot, whatever. I ask again: does this seem like a worthwhile endeavour?

.

_Disclaimers: The dystopian hellscape joke is stolen from John Oliver. Gmail's spam filtering almost always let me email my mom, the real trouble was emailing new contacts._
