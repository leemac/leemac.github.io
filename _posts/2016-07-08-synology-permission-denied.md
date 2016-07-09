---
layout: post
title: Synology - Able to Mount NFS Share but cannot access (Permission Denied) with Ubuntu
---

Struggled these last few days with a Synology Share I've been trying to mount on my ubuntu machine.

I was able to mount the share after editing my /etc/fstab, but I was not able to access the share.

## Setting up NFS for Synology access via Ubuntu (Mount Synology Volume)

Here is the guide I used to share the folder:

[https://www.synology.com/en-us/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS](https://www.synology.com/en-us/knowledgebase/DSM/tutorial/File_Sharing/How_to_access_files_on_Synology_NAS_within_the_local_network_NFS)

Here is what I ended up with. 

![Synology UI](/images/synology_permission.png)

**Please note**: I'm the only user on this Synology as it's my home device. Permissions are squashed here to allow anyone to access this share.

And here is the line I added to my /etc/fstab:

```
192.168.1.11:/volume1/Screenshots /home/lee/screenshots nfs nouser,rsize=8192,wsize=8192,atime,auto,rw,dev,exec,suid 0 0
```

Create the folder

```
mkdir ~/Screenshots
```

Mounting is easy via

```
sudo mount -a
```

Un-mounting is easy as well if needed

```
sudo umount Screenshots
```

## Here was my problem

Accessing the directory via 

```
cd ~/Screenshots
```

would output 

```
bash: cd: Screenshots: Permission Denied
```

How is this so? I squashed permissions for the share on the Synology device to map everyone to admin (I'm the only user that accesses the device at home). What gives?

Well, if you squash permissions to admin priveldges on the Synology device, you need to give the admin user has access to the Share first. Small issue, big headache!

![Synology UI](/images/permission-denied.png)
