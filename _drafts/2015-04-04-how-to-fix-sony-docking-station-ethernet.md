---
layout: post
title: How to Fix - Sony Docking Station Ethernet does not work (Port Replicator)
---

## The Problem
I purchased a Sony Vaio Laptop about 3 years ago and with it came a free [Sony Vaio VGP-PRS35 Docking station](https://esupport.sony.com/US/p/model-home.pl?mdl=VGPPRS35&LOC=3&session_id=e080aeac515378a727af89f3dd8774fc#/howtoTab), or port replicator. I plugged everything in, but soon found out the wired Ethernet ports (there are two of them) don’t seem to work at all.

Fast forward 3 years and it still didn’t work. I wanted to fix the thing as it’s been in my closet all these years.

My situation was the following:

* Ethernet jack on laptop worked fine
* Ethernet jack on docking station did not
* Windows/Ubuntu would detect the ethernet on the Docking Station, but couldn’t establish a connection.

Something was really fishy.

I took apart the unit and found nothing of interest, but I noticed the Ethernet pins were not level, some were pushed upwards. This could cause errors causing the Ethernet to fail to establish a connection.

![The Parts](/images/posts/how-to-fix-sony-replicator/broken_pins.jpg)
{: style="text-align: center;"}

*These two pins are pushed down out of alignment*
{: style="text-align: center;"}

## The Fix
Please try this at your own risk. These pins are extremely fragile and will snap easily. If that happens, you’re out of luck (unless you know how to replace the jack).
* Find a small pin, or paperclip.
* Stick the pin/paperclip between the mis-aligned pin
* Try to nudge it upward, try snagging the paperclip/pin under the ethernet pin and nudge it.

It took me some time, but it ended up fixing the problem. You'll notice the two bent pins are slightly higher and more aligned with the others. They should make better contact with the connector.

![The Parts](/images/posts/how-to-fix-sony-replicator/working_pins.jpg)
{: style="text-align: center;"}

*I nudged the pins upward with a paperclip. Not the ideal tool, but it’s the smallest thing I could find*
{: style="text-align: center;"}

I plugged everything back and booted my machine and it recognized the port!
