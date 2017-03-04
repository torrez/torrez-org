---
title: Why We Test
date: 2011-09-13 00:00:00 -07:00
categories:
- Engineering
---

<p>This past <a href="http://whyday.org/">_why day</a> an email <a href="http://aberant.tumblr.com/post/167375099/a-letter-from-why">made the rounds</a> that <a href="http://en.wikipedia.org/wiki/Why_the_lucky_stiff">_why</a> had sent two years prior to someone asking how they could become a better programmer.</p>

<p>The crux of the email was: if you follow the rules you are not going to maximize your risk and your creativity will suffer. Programming, for him, was about experimentation and discovery versus adhering to rules to produce objectively good code. He didn’t write tests. He didn’t follow any particular style or convention. He did some pretty amazing things. (And then he disappeared.)</p>

<p>The entity/story/folk hero that was _why is one of my favorite subjects to talk about when I’m drunk and talking about Ruby or Rails. If you haven’t read about _why you really should start with <a href="http://en.wikipedia.org/wiki/Why_the_lucky_stiff">his Wikipedia page</a> and definitely his book: <a href="http://mislav.uniqpath.com/poignant-guide/">Why’s (Poignant) Guide to Ruby</a>. (I’m a fan of _why, can you tell?)</p>

<p>BUT…here at <a href="http://simpleform.com/">Simpleform</a> one of our (and I will use this word even though my Catholic mother would give me a dirty look for using it that way) religions is testing. The other is shipping. We love shipping. Shipping is what makes your day worth it and if I leave my office having not shipped anything I mope. </p>

<p>The shipping is the fun part, the work is the testing. Testing builds trust amongst our team and with our clients. Without testing we’re potentially handing our clients a time-bomb, and worse, we’re charging for it. I hate this feeling.</p>

<p>So we test because we want to ship. And we ship because we want to make our clients happy. And if we can’t ship then nobody is happy. So we adhere to a set of standards and styles guides on how to test and how to organize our code.</p>

<p>There’s this line religious people use when they encounter atheists: “Without religion, where do you get your morals from?” Which is hilarious because I responded the other day to someone, “Without tests, where do you get your confidence in the code from?” and then realized what I was sounding like and laughed and laughed&#8212;but really I don’t get where the confidence comes from.</p>

<p>I used to think I was good enough to write code without tests. And to be honest, I never experienced a problem so major that data was lost or leaked. At FM every engineer was responsible for their own code and that plan mostly worked. Nothing catastrophic ever happened. But in the back of my mind there was always a worry that it might. It would only be a matter of time before something bad happened and I always felt a little nervous when I’d hear something wasn’t working correctly.</p>

<p>Even worse, changing a critical part of the application was always an arduous task of user testing and re-testing. It wasted time. It created a lot of worry and even when it was done I’d never feel great about it. Automated testing means you can make those changes and feel great when you ship.</p>

<p>And we love to ship.</p>

<p>When you’re done reading <a href="http://aberant.tumblr.com/post/167375099/a-letter-from-why">_why’s email</a>, you’ll notice <a href="http://aberant.tumblr.com/post/167375099/a-letter-from-why#disqus_thread">the top comment</a> that was voted up is:</p>

<p><em>“As someone who maintains _why's code these days, please, write some tests.”</em></p>
