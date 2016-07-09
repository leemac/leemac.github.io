---
layout: post
title: Synology: Able to Mount NFS Share but cannot access (Permission Denied) with Ubuntu
---

Struggled these last few days with a Synology Share I've been trying to mount on my ubuntu machine.

I was able to mount the share after editing my /etc/fstab, but I was not able to access the share.

If you squash permissions to admin priveldges on the Synology device, ensure the admin user has access to the Share first. Small issue, big headache!
