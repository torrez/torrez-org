---
title: Plus Addressing In GMail
date: 2004-04-21 00:00:00 -07:00
categories:
- Web/Tech
---

<p>
One of my favorite <a href="http://www.gmail.com/">GMail</a> features is plus addressing [<a title="how plus addressing works" href="http://www.fastmail.fm/docs/faqparts/AliasesAndVirtualDomains.htm#SubDomain">?</a>]. I already, with my torrez.org domain, hand out tons of aliases when signing up for things, and so being able to continue that method of tracking where an email address was harvested from is very useful.
</p>
<!--
<div style="border-bottom: 1px solid #000; border-top: 1px solid #000;width:200px; font-size:10px;">
What is plus addressing? It's a way to turn a single email address such as you@example.dom into an infinite number of addresses by adding a + sign to your mailbox and then a tag you make up. So you@example.dom becomes you+something@example.dom. Mail sent to this address will still make it to your inbox, but you now have the ability to filter on the "+something".
</div>-->
<p>
Today I received five pieces of spam, all of them were sent to my gmail address without the trailing + part. Meaning, I believe, that spam harvesting spiders are smart enough to clip that little tag off before committing the address to their database. I don't believe I have ever placed my address on a spiderable page without some sort of + addressing tag.
</p>
<p>
Also, two web forms I have filled out in the past week have filtered the + in my gmail address as a space (which is understandable, it's a method of urlencoding spaces), rendering the account I was creating unusable.
</p>
<p>
I like the idea of plus addressing, but I am afraid it's not going to be as useful as I had hoped if spam harvesters are clever enough to know when they're being tricked, and web developers are filtering out the plus character in registration pages.
</p>
