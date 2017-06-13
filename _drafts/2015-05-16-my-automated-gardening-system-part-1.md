---
layout: post
title: My Automated Gardening System using Drip Irrigation and a Raspberry Pi (Part I)
---

**Update Jan 29, 2016:** Unfortunately due to time, I did not finish connecting this all to a Raspberry Pi to automate it last summer. After a Ground-Hog ate half of it, I threw in the towel due to time. 2016 looks to be a better year!

***
{: style="border: 1px solid #CCC; margin-bottom: 15px;"}

Growing up, my father always had a fairly large sized garden with plenty of fruits and veggies. One of the chores of maintaining the garden was the watering, which can be a pain when you’re busy all summer and even more so when you’re the one footing the water bill. Who wants to do that after a month and summer is well underway? Who’s going to water your precious, succulent vegetables and fruits that you’ve spent so much time cultivating?

My answer: Computers of course!

##My Garden

![My Garden](/images/posts/my-automated-gardening-system-part-1/garden.jpg)
{: style="text-align: center;"}

*My garden during early spring, very few plants so far!*
{: style="text-align: center;"}

Above is my garden (soon to be at least). It measures around 15′ by 11′ (or 4.5 x 3.3 meters for the rest of the world). It doesn’t look like much, but I have plans to add more plants in the next week or so.

My plan is to build a Drip Irrigation System. My source of water and what determines when to water, will differ from most off-the-shelf systems though. I’ll be using a rain barrel and a Rasbperry Pi which will turn the pump on or off based on the time and weather using Z-wave. At least that’s the plan.

##The Parts

![The Parts](/images/posts/my-automated-gardening-system-part-1/drip-irrigation-parts.jpg)
{: style="text-align: center;"}

*Emitters, Tubing, the Pump, some anchors and rain barrel among other things.*
{: style="text-align: center;"}

I ordered the following parts on Amazon, pictured above, to get myself started.

With this first stage, I’m not automating the system (no raspberry pie/Z-Wave yet!):

* 50 Gallon Rain Barrel
* 290GPH Submersible Pump
* Submersible Pump filter bag
* 100′ of 1/2″ Drip Irrigation Tubing
* 50′ of 1/4″ Drip Irrigation Tubing
* Drip Irrigation End Closure
* 2GPH Spot Watering Emitter
* 1/4″ Tubing Stakes with diffuser
* Support Stakes

All in all, it came out to around $200, most of that tied up in the barrel which you can probably get cheap if you look around (used food-grade barrels).

##The Water Source
The water source will be a rain barrel that will fill with free water from our roof. To get the water out, I’m using a cheap $20 submersible pump that will pump water through the 1/2″ distribution line.

Here’s my first test of the submersible pump:

<video class="gfyVid" autoplay="" loop="" poster="https://thumbs.gfycat.com/NaiveUglyBunting-poster.jpg" style="width: 100%; height: auto;"><source src="https://giant.gfycat.com/NaiveUglyBunting.webm" type="video/webm" class="webmsource"><source src="https://giant.gfycat.com/NaiveUglyBunting.mp4" type="video/mp4" class="mp4source"></video>

Here’s the rain barrel up against my gutter drain. I’m measuring it below so I can cut it appropriately.

![The Rain Barrel](/images/posts/my-automated-gardening-system-part-1/20150513_185250.jpg)
{: style="text-align: center; width: 200px;"}

The tubing and power will run out from the top where the bug filter/catcher is.

###HUGE TIP
I found that after turning off the pump, the water was being siphoned into the garden. This will empty your barrel real quick and flood your plants.

To fix it, just make a hole right before the tube leaves the barrel. This will spray water back into the barrel, but you should have enough pressure to get water into the garden. After the water turns off, this hole will allow air into the tube which will stop the siphoning.

Here you can see the water spraying out with the pump on. The plants are being watered just fine with this hole.

<video class="gfyVid" autoplay="" loop="" poster="https://thumbs.gfycat.com/LawfulPerfumedIchthyosaurs-poster.jpg" style="width: 100%; height: auto;"><source src="https://fat.gfycat.com/LawfulPerfumedIchthyosaurs.webm" type="video/webm" class="webmsource"><source src="https://giant.gfycat.com/LawfulPerfumedIchthyosaurs.mp4" type="video/mp4" class="mp4source"></video>

##Distribution Line and Water Emitters
Now that I have water coming out of my rain barrel, I had to work on getting water around my garden. I found that looping the tuning up and down the garden was the easiest and required no cutting.

Here’s what I came up with.

![Emitters](/images/posts/my-automated-gardening-system-part-1/20150516_154210.jpg)
{: style="text-align: center;"}

We had a basil planter and some extra space (the seedlings aren’t ready), so I put the planter under a few emitters.

Below you’ll see the emitters watering the plants with the pump on. The water is targeting the roots which will avoid wasting water.

That’s it for now! In the next post, we’ll take the automation part. I’m still awaiting my Raspberry Pi, so I’ll tackle that soon.
