---
layout: post
title: RSS Reader in the making
---

I've been a moderately heavy user of Google Reader for several years now. Everyday I peruse the latest headlines and read various posts from my favorite blogs. This will all change soon as [Google shuts down the service](http://googleblog.blogspot.com/2013/03/a-second-spring-of-cleaning.html), meaning I must move somewhere else.

[![Google Reader Trends](/images/posts/rss-reader-part-1/google.png)](/images/posts/rss-reader-part-1/google.png)

Over the past few weeks, many developers/users have been moving to other services. I've decided to build my own. Why you might ask? Simple. I want to build something that will never go down unless I say. Something I can host, develop and have full control over.

### The Stack

+ [BackboneJS](http://backbonejs.org/)
+ [Ruby on Rails](http://rubyonrails.org/)
+ [Postgres](http://www.postgresql.org/)
+ various gems/helpers (Details in upcoming posts)

I'm very excited to use BackboneJS for this project. I can't imagine not using it again (or something similar). It just makes everything so easy and maintainable.

I've chosen to develop the new app on Ubuntu 12.10 using Rails, which I've found is cheaper to host and is much quicker to get up and running. ASP.NET MVC was another choice, however, I found Azure and other windows hosting too costly, plus I like to get my hands dirty in something I don't know much about!

### The (super) Rough Prototype

Currently, you can add/delete a feed and poll all of the feeds for new entries. It's super basic right now as much of my time was spent troubleshooting incompatible gems.

[![overview](/images/posts/rss-reader-part-1/overview.png)](/images/posts/rss-reader-part-1/overview.png)

Adding a new item (it's not pretty...)

[![new](/images/posts/rss-reader-part-1/new.png)](/images/posts/rss-reader-part-1/new.png)

Editing a Subscription

[![edit](/images/posts/rss-reader-part-1/edit.png)](/images/posts/rss-reader-part-1/edit.png)

Confirm deleting

[![confirm](/images/posts/rss-reader-part-1/confirm.png)](/images/posts/rss-reader-part-1/confirm.png)

The poller simply reads the RSS feeds and adds the entries if they are new. I'll be moving this of course as it's not ideal to have this in a public controller, it's more suited for a cron job of some sort to run at set intervals. It's great for testing however.

[![Poller](/images/posts/rss-reader-part-1/poller.png)](/images/posts/rss-reader-part-1/poller.png)

### More Coming

I'll be posting more as I develop this further! I'm really hoping to make this really slick and easy to use. I have tons of ideas, I just need to get the basic RSS functionality down first.

Until next time...
