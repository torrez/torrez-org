---
title: How To Clone Delicious In 48 Hours
date: 2010-12-17 00:00:00 -08:00
categories:
- Engineering
---

<p>You may have <a href="http://www.readwriteweb.com/archives/rip_delicious_you_were_so_beautiful_to_me.php">heard that Delicious is shutting down</a> (<a href="http://blog.delicious.com/index.htm">or not?</a>). Someone on Twitter suggested that a group of engineers should get together on a weekend and build a Delicious clone. In anticipation of this mystery group of people sitting down and doing this, I thought I'd make a quick todo list for them.</p>

<ol>
<li>Account System - You'll have to adopt all the standard patterns that are typical of a web application:
<ol>
<li>Database to hold accounts.</li>
<li>Register and install an SSL cert to appease the security minded. Also: where are you hosting this? What database? MySQL? Good. InnoDB? If you're deploying with another engineer, have the typical 30 minute conversation about deploying databases every two hours.</li>
<li>Decide on the ORM, or just write some lightweight classes that do the tedious crap. Hopefully you selected a framework that has some helpers for all the verification options otherwise…</li>
<li>Methods in the User account model to verify email, length and strength of password, a good idea of the account names you want to hold back so you can still make paths like /admin or /static later on.</li>
<li>Lost password flow. You'll want to generate a key and store it someplace for when someone requests to reset their password. So that's another email that has to go out.</li>
<li>Sign In flow.</li>
<li>Sign Out flow. (Be sure and use a POST method to sign out. <a href="http://www.delicious.com/logout">See why here</a> &lt;- signs you out of delicious)</li>
<li>Sign up, display errors.</li>
<li>Update your settings, name, password, email—Doh! You'll have to verify the email again. </li>
<li>An account verification system done through email so you can verify people have given the correct information.</li>
<li>Scheduled backups of your database being pushed to a separate location. Binlogs? Mysqldump? You'll have to write a script or configure your off-site DB slave. You might also want to test that it works.</li>
<li>Oh hey, you can delete your account on Delicious? What does this mean for the bookmarks, favorites, and friend relationship interfaces you haven't even written yet? Save that one for later I guess.</li>
</ol></li>
<li>Following and being followed flow. This includes:
<ol>
<li>A database for holding friend relationships. </li>
<li>An interface for looking at everyone you follow.</li>
<li>An interface for looking at everyone who follows you.</li>
<li>Ability on each of the above pages to follow (or unfollow), probably using AJAX because people don't want to leave the page. Also you're going to want to paginate that, some people are popular.</li>
<li>Blocking followers and the processes that recognize a follower has been blocked when displaying content.</li>
<li>The required database indexes for extracting and displaying follower counts.</li>
</ol></li>
<li>So before we get to bookmarks, what about import tools? Why would anyone move to your system without import tools? You will need:
<ol>
<li>A task queue. Hopefully distributed so you can pass importing off to your workers on other boxes when things get overloaded.</li>
<li>Some sense of the different formats you'll need to process. Delicious being the big one, but there's Google's product, Diigo, Xmarks and Pinboard. Also people are going to want to import from their browsers. I'm not even talking about actually processing these things, just understanding and researching the formats and pitfalls is going to take some time.</li>
<li>Actually doing the processing. What happens when something fails? Do you offer a report? There's a new page. Can they retry without duplicating inserts? I'm really only scratching the surface here, this is tedious shit.</li>
</ol></li>
<li>Tags. Related tags. Searching tags. Recent tags. Explore tags. You gotta use that task queue for offloading a lot of this. When does it run? What happens when it fails? Seriously, I don't even want to think about tags right now. There has to be a module out there that will do it. Go read the docs to that.</li>
<li>Three letters: A P &amp; I.</li>
<li>You are going to write unit tests for all this, right?</li>
</ol>

<p>You still haven't fully inspected all your XSS issues, implemented the searching of content, thought about design and UI, errors and documentation, the various methods for storing links like bookmarklets (tested in every browser), or, you know, <strong>actually saving</strong> bookmarks to a database for presentation to you and others. </p>

<p>Then there's pattern matching on URLs that can be an issue (http://xyz.com/ versus http://www.xyz.com versus https://xyz.com/ versus http://xyz.com/index.html ), I never really thought about that problem, I'm <strong>sure</strong> it will only take a few minutes. We can deal with it later.</p>

<p>(Thanks to <a href="http://usernameguy.livejournal.com/5902.html">usernameguy</a> and <a href="http://dashes.com/anil">Anil</a> for some inspiration.)</p>
