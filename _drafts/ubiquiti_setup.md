I recently moved into a new home, a much larger home and needed to solve my wifi deadspot problem. My last home was around 1,200 square feet, not too large, but not exactly as small as my prior apartments in Boston. The wifi setup was simple, a single Verizon Fios router. It worked well, we had fios + gigabit which was awesome, but the house had dead spots and my Google Fi bill was often higher than usual as it would drop the wifi connection. I needed something better, MUCH better.

Fast forward to my new house, complete with Fios/gigabit availability, which is much larger at 2,400 square feet with a big 1 acre yard (and a LOT of grass to mow). There's also a full unfinished basement/workshop and attic which I access frequently. The dead spots were going to be worse and I decided to look into alternatives. I looked around and eventually landed on Ubiquiti. I wanted something that was simple to operate, yet almost enterprise-class. I wanted it to work and not require hacks and constant maintenance. I wanted VPN, VLANs and a very simple UI accessible via the cloud.

# Initial setup

With Ubiquiti, you need a few components. Not all a necessarily hardware, but for me, I wanted something that just worked and a easily manageable firewall that protected my family:

- AP - You'll need an access point which is the main purpose of my move to this ecosystem.
- Cloud Key/Controller - This can be either a physical hardware key from Ubiquiti, or software running on a VM. You ONLY need this to access/manage the other components of the Ubiquiti hardware on the network. I purchased a key so I don't have to run it on a  larger, more power-hungry box and have it available 24/7 remotely.
- NSG (optional) - This is your firewall/router/DHCP server. This controls the access, ports, etc. and provides neat statistics on the network usage using DPI (Deep Packet Inspection). It also has threat detection, but with DPI, you'll likely kill the CPU. There is a beta-product on the horizon to make this better.
- Switch (optional) - I wanted to reduce the need for a bunch of POE adapters on my rack, I also wanted something that had many POE ports for future expansion, so I went with the 16 port variation.

The rest of my networking equipment I've had for a while:

- Raspberry Pi for Pi-Hole
- 24-port switch

I installed the equipment in the basement on my small rack next to my breaker box. 

# Configuring VLANs

...iot vs main vs family/guest

# Configuring VPN

...dyn/dns

# What I like

ease of use
powerful
scalable for parties
beautiful management UI, great if you like stats, keeping an eye on family, etc. VLans

# What I didn't like

cost
would not recommend if you're not technical
- Had to return cloud key, would a VM/physical machine be better? Maybe...maybe not...

# Resources
