---
title: How to set up email in 2019
tags: ["how-to", "email"]
cover: ink_letters.jpg
author: atte juvonen
---

<re-img
    src="ink_letters.jpg"
    title="Photo by Joanna Kosinska on Unsplash"
    href="https://unsplash.com/photos/B6yDtYs2IgY"
    >
</re-img>

Here's some practical advice to maximize your chances of receiving and delivering email. Yes, it's 2019, and somehow, <re-link to="/dont-send-email-from-your-own-server/">delivering messages over the internet is considered to be a hard problem</re-link>. Let's start with the most obvious choice for email and then look at other options.

### Why you shouldn't use Gmail/Outlook

If you use Gmail/Outlook, you will not receive 100% of your legitimate incoming email. Some of the email will be bounced with a notification to the sender, some will be accepted and placed in your spam folder where you have 30 days or so to catch it, and some will be simply accepted and dropped in a black hole, never to be seen again.

When I've talked about this in the past, a common reaction has been "what, none of my email has ever disappeared". I have two counter-arguments to this statement: first of all, how would you know? Secondly, when you actually <a href="https://glockapps.com/" target="_blank" rel="noopener noreferrer">measure</a> delivery rates, you don't find a magical email unicorn that delivers 100% of legitimate email. That's the sending side. On the receiving end it's possible to get to 100%, just not with aggressively spam-filtering services like Gmail. There's also <a href="https://news.ycombinator.com/item?id=16367197" target="_blank" rel="noopener noreferrer">many</a> <a href="https://news.ycombinator.com/item?id=18379050" target="_blank" rel="noopener noreferrer">other</a> <a href="https://news.ycombinator.com/item?id=18435016" target="_blank" rel="noopener noreferrer">reasons</a> to avoid Gmail, but we'll ignore those for now.

### Why you should rent a custom domain

Even if you use Gmail as a host, rent a custom domain. You want to minimize the risk of losing access to your email addresses. If you are using a custom domain and Gmail decides to ban you for life because you <a href="https://news.ycombinator.com/item?id=20235120" target="_blank" rel="noopener noreferrer">accidentally clicked on a Google+ link</a>, or <a href="https://news.ycombinator.com/item?id=17115643" target="_blank" rel="noopener noreferrer">any other reason that may or may not make sense</a>, at least you can migrate your email addresses onto a new host.

One of the perks of renting a custom domain is that you can generate unique on-the-fly addresses. For example, if you need to give up your email address for pizza delivery, you might use pizza139432@yourdomain.fi. If you ever start receiving spam into that address, you can simply close the address. Plus you get to know which service sold your contact info. But the absolutely best part about on-the-fly addresses is that you don't need spam filtering, which means you get to receive 100% of your legitimate incoming email (if you run your own server or if you use a host which allows you to turn off spam filtering). This may sound like a chore, but it's not. You can set up a catch-all mailbox which receives email from all unregistered addresses under your domain. Some software also allows you to edit the sender field on the fly (for example, Thunderbird).

You might be thinking "hey, I can do the same thing with Gmail's + suffix". No you can't. You can't turn off Gmail's spam filtering. The main purpose of on-the-fly addresses is to serve as a spam filter with a 0 false positive rate. If you use on-the-fly addresses together with aggressive spam filtering, what's the point?

### How to rent a custom domain

Choose a domain registrar that isn't known for <a href="https://www.uptimechecker.io/blog/how-domain-registrar-can-kill-your-business" target="_blank" rel="noopener noreferrer">accidentally losing domains</a> and isn't <a href="https://news.ycombinator.com/item?id=18655630" target="_blank" rel="noopener noreferrer">intentionally scamming its customers</a>. Choose a top-level domain that is not plagued by incompetence (<a href="https://news.ycombinator.com/item?id=15664347" target="_blank" rel="noopener noreferrer">.io</a>) and doesn't get seized for political reasons (<a href="https://en.wikipedia.org/wiki/United_States_v._Scheinberg#Domain_name_seizure" target="_blank" rel="noopener noreferrer">.com</a>, <a href="https://www.eff.org/deeplinks/2018/04/brexit-doesnt-have-mean-deleting-domains" target="_blank" rel="noopener noreferrer">.eu</a>). As a Finnish citizen I went with <a href="https://en.wikipedia.org/wiki/.fi" target="_blank" rel="noopener noreferrer">.fi</a>, one of the more reliable top-level domains out there.

### Incoming mail

By use case:

- Personal: if you set up your own server to receive email, you will be able to receive 100% of email sent to you. You can get pretty close by using a commercial email host which doesn't do aggressive spam filtering. I'm not sure if any email host allows you to completely turn off spam filtering.
- Business: you obviously can't use on-the-fly addresses because your business needs to have stable, public email addresses. You should not set up your own server. Just live with the crappy spam filtering by commercial email providers.

### Outgoing mail

By use case:

- Personal: Gmail and other large providers have pretty good deliverability. The key is sending your email from a server which is sending a lot of email with a very low percentage of spam in it.
- Transactional: Postmark provides excellent deliverability for transactional email.
- Marketing: Do not mix your marketing email with your transactional or personal email. Your marketing email is not going to get good deliverability and it's not supposed to get good deliverability. If you use a personal/transactional email platform to send marketing email, you also hurt the deliverability of other peoples' important mail.

### Email client recommendations

Beware of traps. For example, BlueMail is a highly rated Android app made by a company that is not selling any services publically. Furthermore, the developers behind BlueMail prefer to remain anonymous. You know, good samaritans who like to spend their days anonymously polishing an email client that they just give out for free. It's still in the app store, even though it's been caught <a href="http://www.sklar.com/2014/10/14/blue-mail/" target="_blank" rel="noopener noreferrer">sending users' email data to BlueMail servers with no explanation why</a> and also <a href="https://mobilsicher.de/security-desaster-blue-mail-app-and-other-email-apps-transmit-login-credentials" target="_blank" rel="noopener noreferrer">caught sending users' email login credentials to BlueMail servers</a>. 

I recommend using Thunderbird for desktop and K-9 Mail for Android. I don't know if there are trustworthy clients for the iPhone. Sorry.

### Email host recommendations

- ProtonMail offers custom domain catch-all for 6.25€/month, although you have to pay more if you want to send emails.
- Fastmail offers custom domain catch-all for $5/month, although you have to manually set up addresses to send emails.
- Migadu offers custom domain catch-all for 4€/month, although you have to manually set up addresses to send emails. This company might be one person's overgrown hobby project, which represents an additional security risk compared to ProtonMail and FastMail.

_Disclaimer: This site is not monetized in any way. There are no advertisements and no affiliate links. I do not get paid for these recommendations in any way._

### In conclusion

Do you enjoy roleplaying sysadmin on your free time?

- YES → Set up your private server to _receive_ e-mail and piggyback off a large corporation to _send_ e-mail.
- NO → Use Migadu/Protonmail/Fastmail.

Furthermore,

- Get a custom domain.
- Use an e-mail client that doesn't steal your private data (Thunderbird/K-9 Mail)
- If you need to send transactional e-mails, use Postmark.
- If you need to send marketing e-mails, use a platform that's intended for marketing e-mails.
