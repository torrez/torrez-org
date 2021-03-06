---
title: Put A Burger In Your Shell
date: 2013-04-02 00:00:00 -07:00
categories:
- Hacking
---

<p>I posted this to Flickr earlier this evening, but some people wanted to know how I did it so here you go:</p>

<p><a href="http://www.flickr.com/photos/torrez/8613382541/" title="Burger by torrez, on Flickr"><img src="http://farm9.staticflickr.com/8125/8613382541_48fa08aaea_b.jpg" width="500" height="348" alt="Burger"></a></p>

<p>If you are on a Mac the command you want to run to put a burger in your Bash shell prompt like mine is:</p>

<blockquote>
export PS1="\w 🍔&nbsp;&nbsp;"
</blockquote>

<p>(which will eventually end up looking like<br>
export PS1="\w &lt;U+1F354&gt;&nbsp;&nbsp;")</p>

<p>That string is \w for “current working directory”, a space, an emoji burger, and two more spaces for padding.</p>

<p>If you want it to be permanent put that line in your .profile or .bash_profile.</p>

<p>For my prompt I removed my system user name and host. People use those to know which computer they’re on and which user they are, but I know I am me and I am on the burger computer so I removed them. Here are some other options.</p>

<ul>
<li>\d – Current date</li>
<li>\t – Current time</li>
<li>\h – Host name</li>
<li># – Command number</li>
<li>\u – User name</li>
<li>\W – Current working directory (ie: Desktop/)</li>
<li>\w – Current working directory, full path (ie: /Users/Admin/Desktop)</li>
</ul>

<p>You can <a href="http://osxdaily.com/2006/12/11/how-to-customize-your-terminal-prompt/">learn more here</a> and there are even <a href="http://beckism.com/2009/02/better_bash_prompt/">more examples here</a>.</p>
