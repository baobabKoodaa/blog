---
title: Protecting web forms without reCAPTCHA
tags: ["web", "meta", "how-to", "adversarial"]
cover: honeypot.jpg
author: atte juvonen
---

<re-img
    src="honeypot.jpg"
    title="Photo by Sonja Langford on Unsplash"
    href="https://unsplash.com/photos/RQHzRELE2Ss"
    >
</re-img>

If you keep any kind of public web forms online, you have to deal with a constant influx of spam. Many developers opt for the most obvious solution, Google's <a href="https://www.youtube.com/watch?v=fsF7enQY8uI" target="_blank">reCAPTCHA</a>, which is becoming ubiquitous as a website anti-spam measure. But using reCAPTCHA to protect your average online form is like swatting flies with a sledgehammer. It's overkill and your users will suffer.<sup><a href="https://news.ycombinator.com/item?id=20147015" target="_blank">[1]</a><a href="https://news.ycombinator.com/item?id=20294801" target="_blank">[2]</a></sup>

You should resort to reCAPTCHA only if your website is receiving _targeted_ attacks. If you have a typical low traffic website that doesn't incentivize attacks, then the only attacks you're going to see will be untargeted attacks by spammers who are scanning the web and filling out forms wholesale with simple heuristics. If you've ever wondered what is the sophistication level of automated web form spam, I can answer that for you right now:

**A simple honeypot field is sufficient to prevent untargeted attacks.**

The contact form on this web site has a hidden `email` type input field which is also named `email` (there is also a visible email field with a different name). Curiously, 100% of automated spammers will attempt to fill this field (as long as you don't literally call it `honeypot`). I would have expected at least a few spammers to have some kind of adaptive system which would react to errors by filling out  a different combination of input fields, but alas, no-one does that.

When you implement a honeypot on a contact form, consider if you want to support users who have JS disabled. If you are happy with serving JS users only, then you can implement the honeypot on the client side (hijack the submit button, check the honeypot, send data if honeypot is not filled). If you want to support users who have JS disabled, then you need to enable sending the form without JS, so you need to look for the honeypot on server side. For example, I use Google App scripts to handle the contact form data, and checking for the honeypot is only a few extra lines of code. I believe Netlify provides honeypot support automatically, although I haven't tested it myself.

I've seen some people claim that their simple honeypot fields do not stop attacks on random low traffic websites. I haven't seen any evidence of this and I don't believe it's true. There are some ways to screw up the implementation (e.g. literally naming your field `honeypot` or implementing the honeypot check in JS only while simultaneously allowing spammers to fill out your form without JS). Nonetheless, if you are implementing anti-spam measures on a typical website, it doesn't really hurt to start with something simple and expand into heavier solutions when you need to.