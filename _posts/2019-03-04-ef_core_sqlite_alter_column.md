---
layout: post
title:  "Using EF Core Migrations and SQLite: Alter Column"
date:   2018-03-04 21:30:59 -0500
categories: ef-core sqlite
---

I'm utilizing EF Core on a side-project with a SQLite backend. So far, everything has been running smoothly. I can create an initial migration schema, the database is created automatically with `context.Database.Migrate()` which is fantastic for my project. I ran into an issue recently however where I noticed a property on one of my EF Model need to be nullable. No problem! So I thought...

Turns out, SQLite has a few limitations and EF Core isn't going to complain when you try to run that migration. EF Core will in fact create the migration for you, but it will fail when you apply the migrations.

What to do?

The easiest thing you can do is simply modify the migration and execute hand-written SQL directly. The trick with SQLite, it turns out, is to rename the table to something temporary (ex. MyTableTemp), recreate the table (MyTable), copy the data over, then delete the temporary table (MyTableTemp) which has the old schema.

It's not the prettiest in the world, but it'll allow you to keep moving along.

The bigger question may arise later however if EF Core + EF Migrations + SQLite are even worth it. Time will tell for me, I'm a bit hesistent though, but we'll see.
