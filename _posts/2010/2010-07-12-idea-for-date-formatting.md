---
title: Idea For Date Formatting
date: 2010-07-12 00:00:00 -07:00
categories:
- Engineering
---

<p>Geeking out with this, but here's an idea on how templates and the template languages should do date formatting. Instead of requiring me to type (and remember) something cryptic like:</p>

<p>"%A %d %B %Y %I:%M%p"</p>

<p>I should be able to type something like this:</p>

<p>"Monday 12 July 2010 02:30PM"</p>

<p>And the formatter be smart enough to figure out that the first word is obviously a day name, the next number a day of the month since you wouldn't put a bare year after a day name, the month, the full year, and then following that is obviously a time.</p>

<p>So tired of looking up date formatting strings for every framework and language.</p>
