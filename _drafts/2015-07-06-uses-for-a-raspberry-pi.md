---
layout: post
title: Uses for a Raspberry Pi
---

![My Raspberry Pi](/images/posts/uses-for-a-raspberry-pi/Raspberry_Pi_Logo.png)
{: style="text-align: center;"}

The Raspberry Pi 2 [was released earlier this year](https://www.raspberrypi.org/blog/raspberry-pi-2-on-sale/) which features a more powerful 900MHz quad-core ARMv7 CPU and 1GB of LPDDR2 SDRAM compared to its predecessor. It’s very popular right now in the tech industry and has a [fairly active Reddit community](https://www.reddit.com/r/raspberry_pi) which is great for learning and other resources and even [a StackExchange site](http://raspberrypi.stackexchange.com/) which is in Beta for asking questions. The new components make the Raspberry Pi 2 powerful enough to run Windows 10 which is due out later this month; however, I’m sticking with the pre-loaded OS called Raspbian which is a flavor of BSD. I’m relatively comfortable in the terminal, so this is perfect for my needs.

There are numerous uses for these small cheap devices, from [game emulators](http://www.techradar.com/us/news/gaming/how-to-turn-your-raspberry-pi-2-into-a-retro-games-console-1289146) to [cat feeders](https://www.youtube.com/watch?v=KexCIS8uCzU), you’re bound to find a use for it.

## My Pi
I’ve had my [Raspberry Pi 2](http://www.amazon.com/gp/product/B008XVAVAW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B008XVAVAW&linkCode=as2&tag=leemck-20&linkId=WKAPU47NXRK6B7JA) (below) for a few months now and I’ve found some very cool uses for it. Although it’s not the most powerful device, it’s decent enough to accomplish a few useful tasks on a very low power platform as [it consumes around 3.5 to 4 Watts](http://raspberrypi.stackexchange.com/questions/5033/how-much-energy-does-the-raspberry-pi-consume-in-a-day). I have a Z-Stick, wireless USB adapter and an older external hard drive attached to it. It’s also wired directly into my switch.

![My Raspberry Pi](/images/posts/uses-for-a-raspberry-pi/raspberry_pi.jpg)

My Raspberry Pi (left) attached to my small networking rack in my utility closet at home.

The following are some of the major applications for my Raspberry Pi. I haven’t had many issues, but be aware that at some point some of these may require more power and should be moved to a standalone server of sorts. Your performance will vary depending on your usage.

## Z-Wave Controller Hub
I’ve been using [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave) here and there lately and I utilized a over-powered server to control the devices. Z-Wave allows me to control lights, plugs and other electronics in my home, but in order to do so, you need a Z-Wave hub to control everything.

You can spend a bit more and use devices such as the [Vera controller](http://www.amazon.com/gp/product/B00PFGJZM8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00PFGJZM8&linkCode=as2&tag=leemck-20&linkId=7XTHXYGZEN2HXVUS) or you can roll up your sleeves and build your own, which is what I did using the Raspberry Pi. The only hardware you need is a USB stick such as the [Aeon Labs Z-Stick](http://www.amazon.com/gp/product/B003MWQ30E/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B003MWQ30E&linkCode=as2&tag=leemck-20&linkId=4DXVTGWH26HIUC5U) (what I use) and you’re good to go.

With the Z-stick in one of the available 4 USB ports, I then had to find software to run the hub. I chose to use [OpenHab](http://www.openhab.org/) instead of rolling my own software because the Z-Wave protocol is closed source and a bit of a pain to work with directly. I tried the C++/C# wrapper called [OpenZWave](https://github.com/OpenZWave/open-zwave), but OpenHab takes care of this and much more when it comes to scheduling.

## VPN Server
Running a VPN server on your Raspberry Pi is another useful way to get the most out of the device.

[I found this guide on how to get started](http://readwrite.com/2014/04/10/raspberry-pi-vpn-tutorial-server-secure-web-browsing). It’s very easy to follow and once you’re finished, you can VPN to your home network to access computers, resources and web cameras if you have them.

To connect, I use [OpenVPN](https://openvpn.net/) on my computers and carry the certificates needed to connect. All the information to connect is part of the guide above [in Part II](http://readwrite.com/2014/04/11/building-a-raspberry-pi-vpn-part-two-creating-an-encrypted-client-side).

## rsnapshot server
[rsnapshot](http://rsnapshot.org/) is a very useful little utility that lets you backup remote servers to a local destination. This website, along with a few others, are hosted on a VPS that I backup using rsnapshot.

I connected an external hard drive to my Raspberry Pi and set it as the backup target. Every week and month, my website get’s backed up to the destination.

To get started with rsnapshot, check out this [nifty guide at Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-install-rsnapshot-on-ubuntu-12-04) which covers everything you need to do to get started.

##Wake on LAN
I have a few computers in my home that I turn off when not in use for an extended period of time, such as when I go to work during the week. Many times however, I need a file while traveling and I cannot access the computers because they’re turned off.

Wake on LAN is a typical feature found in just about every computer today that allows you to turn the computer on from the network. The only catch is you need a computer on the network that is on 24/7 in order to turn other machines on.

The Raspberry Pi 2 is perfect for this application as it’s low power won’t add much to your power bill.

[Check out this guide on how to setup Wake on LAN](http://www.jeremyblum.com/2013/07/14/rpi-wol-server/) on your Raspberry Pi 2.
