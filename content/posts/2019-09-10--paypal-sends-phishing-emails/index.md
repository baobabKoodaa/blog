---
title: PayPal sends phishing emails to its customers
tags: ["email", "everything-is-broken"]
cover: fishing.jpg
author: atte juvonen
---

<re-img
    src="fishing.jpg"
    title="Photo by Robson Hatsukami Morgan on Unsplash"
    href="https://unsplash.com/photos/qr7tsSwDOg0"
    >
</re-img>

I rarely use PayPal for anything, so imagine my shock when PayPal sent me an email asking me to "review my recent transactions now". Oh my god, has someone hacked my PayPal account and is instigating fraudulent transactions?! I should definitely review those transactions right now by following this link in the email and then inserting my username and password to whichever page opens up. Although text in the email indicates it's linking to paypal.fi, clicking on it actually points to paypal-communication.com. That may sound risky, but I'm willing to do anything to keep my account safe.

<re-img
    src="paypal_phishing1.jpg"
    title="Screenshot of PayPal phishing email"
    >
</re-img>

If you've ever been to the internet, you probably recognize this email as a phishing attempt. You would be wrong. This is a _legitimate_ email from PayPal.<a href="https://security.stackexchange.com/questions/182161/why-would-paypal-send-messages-from-another-domain" target="_blank"><sup>[1]</sup></a> Because PayPal, apparently, wants to normalize phishing emails and risky user behavior. But don't take my word for it. Take <a href="https://www.paypal.com/us/smarthelp/article/how-to-spot-fake-emails-faq2340">their word</a> instead:

> How to spot fake, fraudulent, spoof, or phishing emails

> Emails from PayPal will always address you by your first and last names or by your business name. 

Silly me. Here I was, thinking that the way to spot a fake email is by looking at the sender field (and trusting that a massive financial institution is able to set up <a href="https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail">DKIM</a>). No, what was I thinking, that's way too complicated. Instead, let's just tell our users to literally trust anyone who knows their name.




