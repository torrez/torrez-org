---
title: iOS App Idea Redux - Community Camera.app
date: 2012-01-07 00:00:00 -08:00
categories:
- Apple
---

<p>Last night at about midnight this idea popped into my head. It was so good (to me) that I decided to write it on my iPhone, while half-asleep, because it was keeping me from going to sleep. <a href="http://notes.torrez.org/2012/01/ios-application-needed.html">I posted it</a>.</p>

<p>Now that I woke up and read it I realize there are a lot of gaps there. Also I don’t even explain the problem very well. </p>

<p>So here is a repost of the idea with URLs explaining what I meant.</p>

<p>As a web developer one thing that is very easy to do is file uploads. There are so many ways to get a file from your computer to my site that people will argue about the best way to do it (it’s Nginx Upload Module, btw).</p>

<p>The problem is when someone using an iOS device hits the “browse” button on their iOS device. There is no file system available and so the button does nothing. Here is where Apple could solve all of this by making the “browse” button open your camera roll and allow you to select an image from it. (Surprise: this is what Android does.)</p>

<p>Since Apple doesn’t allow this many people end up making iOS apps that do everything a mobile site could do plus image upload. If there were just a way to fire up the camera or camera roll from a web page and choose an image to upload, many web developers I know would be very happy (me).</p>

<p>It turns out there is a way to launch an iOS app from a web page. It’s called a protocol handler. Here is an example of it <a href="http://blog.agiletortoise.com/2010/protocol-handlers-and-2-way-app-integration-for-ios/">being used in the application Terminology</a>.</p>

<p>The URL terminology://q=word (yes, that’s a valid URL) only works if you have the Terminology application installed, or some other iOS app has registered to handle that URL. So if someone puts it on a web page only people with the app can click the link.</p>

<p>Here is my idea: make an application called Community Camera.app. Community Camera.app registers to handle any URL like camera://url=[…] where […] is a URL that accepts an image upload.</p>

<p>Someone clicks the camera:// link and it opens the Community Camera app with a location to post an image file. The user then either takes a picture or selects an image using the standard controls and then Community Camera.app POSTs that image data to the URL that was passed in.</p>

<p>This way <em>anyone</em> who wants to make a web site that accepts image uploads from iOS devices simply needs to provide a <a href="camera://url=http%3A%2F%2Ftheirsite.com%2Fupload%2Ftoken%2Fasdf1234">camera://url=http://theirsite.com/upload/token/asdf1234</a> link on their page. The script at /upload/token/asdf1234 should do three things:</p>

<ol>
<li>Accept a file upload and return an OK or FAIL message.</li>
<li>Accept the image arriving using the token value. Each token should be a disposable key used for the transaction.</li>
<li>Return a URL for returning back to the web site. </li>
</ol>

<p>After uploading, the Community Camera.app tells the user if the image was accepted and a button to continue goes to item #3.</p>

<p>Sometimes I get these ideas and I forget them. I really want someone to do this and so I got a bit excited and posted that cryptic post last night. Thanks for reading!</p>
