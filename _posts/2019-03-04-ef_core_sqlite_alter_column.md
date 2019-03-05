---
layout: post
title:  "Using EF Core Migrations and SQLite: Alter Column"
date:   2019-03-04 21:30:59 -0500
categories: ef-core sqlite
---

I've been utilizing [EF Core](https://docs.microsoft.com/en-us/ef/core/) on a side-project ([Arkive](https://arkive.io/)) with a [SQLite](https://www.sqlite.org/index.html) backend. So far, everything has been running smoothly. 

I am able to create an initial EF Core-based migration schema and the database is created automatically with `context.Database.Migrate()` which is fantastic for my project. I ran into an issue recently however where I noticed a property on one of my EF Model need to be nullable. No problem! So I thought...

![Bad Migration code](/img/posts/2019-03-04/before.png "This won't work")

Turns out, SQLite has a few limitations and EF Core isn't going to complain when you generate a migration to update the table. When you go to apply the migration however, you'll get a fun error.

![Migration Error](/img/posts/2019-03-04/error.png "Not something I expected")

What to do?

The easiest thing you can do is simply modify the migration and execute hand-written SQL directly. The trick with SQLite, it turns out, is to rename the table to something temporary (ex. MyTableTemp), recreate the table (MyTable), copy the data over, then delete the temporary table (MyTableTemp) which has the old schema.

It's not the prettiest in the world, but it'll allow you to keep moving along.

To obtain the CREATE Table SQL, I'd run the following command in order to obtain the exactly SQL EF Core is generating for the table. This will output the script to create the migration, just find the target table and copy/paste/modify. Alter to your needs.

`dotnet ef migrations script 0 MIGRATION_NAME`

The bigger question may arise later however if EF Core + EF Migrations + SQLite are even worth it. Time will tell for me, I'm a bit hesistent though, but we'll see. The above example is simple, should you have Foreign keys, you'll likely have to drop/recreate several tables to reach the desired result.
