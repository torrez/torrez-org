---
title: Transparent Business
date: 2012-01-02 00:00:00 -08:00
categories:
- Work
---

<p>Occasionally I will be writing this year about progress on Simpleform’s <a href="http://notes.torrez.org/2011/12/the-object-of-the-game.html">transparent books</a>.</p>

<p>Last week I learned how to retrieve and parse my bank account’s transactions. They’re in a format called <a href="http://www.ofx.net/">OFX</a> which sounds awful but is actually pretty straightforward. If you ignore 95% of it, in the end it is a list of transactions identified by GUIDs which I am stuffing in a MySQL database.</p>

<p>My goal is first to collect it, then clean it up locally by adding better descriptions and categories, and then push reports to a server that we can all see.</p>

<p>I will share this code.</p>
