---
title: My New Chromebook
date: 2015-09-07 14:50:08 -07:00
categories:
- Computers
---

First thoughts using this Chromebook Pixel: I like it. I like it a lot.

So far I&rsquo;ve dropped into [Developer Mode](http://www.howtogeek.com/210817/how-to-enable-developer-mode-on-your-chromebook/) and installed [Crouton](https://github.com/dnschneid/crouton) which lets me run relatively new Ubuntu or Debian distributions. These are pretty much the complete installs at large (with a windows manager) or small (barely anything!) configurations. Since I only have 64 gigs of SSD space I went with the `core` option and have been adding all the usual command-line apps as I need them.

In case you don&rsquo;t know about Crouton it lets you run a Linux installation DIRECTLY in a Chrome window. And it&rsquo;s not a VM, it actually creates chroots (with an option to fully encrypt each) and jails a user inside. You get a fully functional version of Linux that runs natively in a browser window. I know it sounds weird, but it works!

The first app I install on any new computer is [Notational Velocity](http://notational.net/). Since that wouldn&rsquo;t work here, I found something I think is just as good: [Terminal Velocity](http://seanh.github.io/terminal_velocity/), the same user interaction written for a CLI.

The second app I install is usually [1Password](https://agilebits.com/onepassword)&#8212;but there isn&rsquo;t a version that runs on the ChromeOS; which is not great. Still looking for a solution there. There is a hack that lets you run a windowed version of the HTML output file&#8212;but that doesn&rsquo;t feel right. For now I keep my iOS 1Password nearby.

So far I&rsquo;ve been able to install any Linux tool I&rsquo;ve needed. This weblog is published with Jekyll and built and deployed with Grunt, so no problems with Ruby or Node. If you&rsquo;re a developer who works on remote Linux machines this is _Linux on a Desktop_ done right.

Things I love: the screen is VERY nice. Nicer in some ways than my Macbook Retinas, but also a bit colder and lacks a [F.lux](https://justgetflux.com/) app which could be a deal breaker for some. I love F.lux but I don&rsquo;t work at night as much as I used to.

The keyboard is snappy and clicky. More like an Apple USB keyboard&rsquo;s keys than a Macbook. The rest of the hardware is the best I&rsquo;ve seen outside of an Apple product.

Things that bug me: [tmux](https://tmux.github.io/) or [Fish shell](http://fishshell.com/) don&rsquo;t seem to play well inside a Crouton window. I am not sure who is at fault but one of these three is inserting a new line for every shell prompt. I feel like the fix is just a configuration change away, but I&rsquo;m not sure where to start looking. I will try `screen` or `byobu` next, even though they aren&rsquo;t as nice. (edit: using byobu now, works fine.)

I always try to type the correct &lsquo; or &rsquo; when single-quoting or using apostrophes. I can&rsquo;t figure out how to type them on this keyboard and so to write this post I have to actually type &amp;rsquo when I want a proper apostrophe. I know I can write a plugin for Jekyll to do this, or find someone who already has, but it&rsquo;s annoying not to have a non-HTML option for other documents.

If you have questions feel free to ask me on [Twitter](http://twitter.com/torrez). I might post about the Google services next. They&rsquo;re flawless so far and you get a terabyte of Google Drive space for three years when you register your Pixel. I almost think anyone who lives in Google apps all day should just throw their current laptop in the lake and get one of these. They&rsquo;re that good.
