---
layout: post
title: Garden Planner - Project Update Part 1
---

**Update Jan 29, 2016:** My plans have shifted slightly since this post. The project has a new name and website, **Gardenrr** that is now at [http://gardenrr.com/](http://gardenrr.com/) . It's still a big work-in-progress, but I have high hopes to ship something in the coming months before Spring 2016.

***
{: style="border: 1px solid #CCC; margin-bottom: 15px;"}

My little project, ‘Garden Planner’ (better name coming) is crawling along. I haven’t had much time lately to devote to it, but I accomplished a few things.

* **Integrated Python Social Auth** – This allows users to use Twitter, Google and Facebook to login. I also include an option to use an actual account, if the user doesn’t want to use a social account. This is something I’ve never done before, but it’s relatively straightforward.
Integrated Django Rest Framework – The defacto Django API framework I need to connect the UI to the database.
* **Implemented a base data schema** – This is pretty early to finalize, but a basic schema is now in place to track Plants and the properties (Soil PH, Sun Type, Hardiness, etc).
* **Added initial set of Django Fixtures** – This will allow me to run a few scripts to get an intial set of data into the system.
* **Replace mock dataset with API data** – The plant data now comes from the API directly through a basic Backbone Collection.

Here's what I have so far - probably 2-3 days worth of work, mostly learning Django and the Django REST framework.

### Basic Landing Page

![The Parts](/images/posts/garden-planner-project-update-1/Screenshot-from-2015-05-14-202324.png)
{: style="text-align: center;"}

### Login

![The Parts](/images/posts/garden-planner-project-update-1/Screenshot-from-2015-05-14-202331.png)
{: style="text-align: center;"}

### A basic feature list

I’ll be happy if I can implement just a few of these!

![The Parts](/images/posts/garden-planner-project-update-1/Screenshot-from-2015-05-14-202501.png)
{: style="text-align: center;"}

### Designer

![The Parts](/images/posts/garden-planner-project-update-1/Screenshot-from-2015-05-14-201321.png)
{: style="text-align: center;"}

That’s all for now. Summer is coming real quick so I’ll be hopefully too busy (aka outside) to work on this, but we’ll see. Lots of work ahead of me.
