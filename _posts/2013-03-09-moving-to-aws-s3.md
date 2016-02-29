---
layout: post
title: Moving the blog
---

I've decided to move my blog from a shared hosting provider to [Amazon's S3 storage service](http://aws.amazon.com/s3/). I've also enabled [Cloudfront](http://aws.amazon.com/cloudfront/) to provide a CDN and the [Route 53](http://aws.amazon.com/route53/) to properly route my domain to the proper place. All of this gives me a super cheap place to host my site and a very fast configuration no matter where you are accessing the site.

This of course only works with static sites. Last year I moved to [Jekyll](https://github.com/mojombo/jekyll), so all I had to do is a *git clone* on my github repo and push the "_site" to AWS.

With this new setup, I can now easily push updates to my site via a simple script I found online.

	s3cmd sync --delete-removed _site/ s3://leemckinnon.com/ --verbose

Using [s3cmd](http://s3tools.org/s3cmd) and the script above, I can run the following and all my changes are pushed to the site.

	sudo jekyll && ./publish.sh
