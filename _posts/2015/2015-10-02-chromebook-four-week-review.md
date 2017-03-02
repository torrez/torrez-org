---
title:    "My New Chromebook Pixel Has Replaced My Macbook Pro"
date:     2015-10-02T08:49:47-07:00
category: Computers
---

Four weeks into using my [Chromebook Pixel](https://www.google.com/chromebook/pixel/) and it is very likely I will never use a Macbook Pro as a full-time laptop again. While I won&apos;t say I&apos;ll never use _OS X_ again, I can&apos;t see myself choosing it over Chrome OS for nearly every thing I need to do.

#### The Apple Macintosh
I switched to the Macintosh from Windows ME in 2001 after seeing what was coming in OS X. As a (10 year!?) user of Unix and Unix-like operating systems at the time, I jumped at the chance to work on an OS whose foundation was the operating system I spent my college years working with. (I actually jumped a little too early and had to use OS 9 for a few months on a [TiBook](https://en.wikipedia.org/wiki/PowerBook_G4) until OS X finally shipped.)

The first few weeks were tough. I missed certain key combinations for selecting text and moving the cursor in documents. I missed the window-container style of Windows apps, where one window is the container for all sub-windows. I missed all the applications I had grown used to using. I especially missed the speed of my Windows computers. Those early Macs always seemed so much slower to me unless you filled them with RAM, and I didn&apos;t have the money to max my computer out back then.

But very quickly the minor annoyances disappeared and I grew comfortable with it. Apple kept making OS X better and many in the open source community migrated over and began compiling their projects on and for Macs. MacPorts was replaced by Fink which was replaced by Homebrew. It&apos;s almost trivial now to install almost any package from Postgres to ImageMagick to RabbitMQ. For the last ten years if you developed for Linux servers you _probably_ developed on OS X.

There are a few Apple OS X related announcements a year to look forward to and each year it seems like there is less and less for me to care about. It&apos;s unsurprising the focus is on the GUI since that&apos;s what most people think of when they think about an operating system, but I find that these days all I care most about what happens in browser and terminal windows.

My day is: Slack, Twitter, Rdio, news sites, email (Gmail), vim, random shell tasks, calendar (Google), and maybe a spreadsheet (Google) or document (Google) to look at. Other than Tweetbot there is no task that I would prefer to do on a native, Desktop GUI app. There are very few features being added to OS X that affect any of those tasks.

My computer life is either in a browser or terminal window; and really almost nothing in between.

Which brings me to this peculiar computer: the [Chromebook Pixel](https://www.google.com/chromebook/pixel/).

I first learned about the Pixel from Darius Kazemi&apos;s interview on [The Setup](https://usesthis.com/interviews/darius.kazemi/). The first time I read it I thought it was the most impractical setup I had ever heard of. Operating systems in browser tabs? There is no way that could work!

Half a year later a co-worker demonstrated his Chromebook Pixel and the chroots and shells running in browsers and everything made perfect sense. In addition it all ran in the nicest, cleanest, most light-weight _Linux_ window manager I have ever seen.

I was sold.

So now that I have been using this laptop for a few weeks here&apos; what I think of it.

### The hardware

The screen is one of the sharpest I&apos;ve seen. I cannot say enough good things about this display. I don&apos;t know enough about color temperatures and brightness and contrast to speak about these things, but this screen is fantastic and I love it.

The keyboard on the Pixel is better than my Macbook Pro. The Macbook Pro probably beats the Chromebook on every hardware feature but the one that the Pixel definitely wins is the keyboard. I had to do some typing on my rMBP at work and the keys felt like mush. The Pixel&apos;s keys are snappy and travel just a bit more, which makes pressing them a few thousand times a day a bit more enjoyable.

Everything else is fine. The trackpad works like a trackpad. No stray palm brushing causing the the cursor to click in weird places. The case is solid. No weird flexing or soft spots. It&apos;s pretty much the second best built laptop I have ever used. The recurring theme here is nothing sticks out to bother you, which, given the array of cheap Chromebooks and non-Apple laptops at Best Buy, this is some kind of miracle.

#### Chrome OS
I talked a bit about the windows manager, but I&apos;ll say it again: the UI is frighteningly good for what it does. And what it mainly does is run the Chrome browser. Need a shell window? Open a new tab. Need to edit some settings? Click on system settings and a suspiciously HTML-like window opens for you to change your keyboard, sound, or time-zone. My co-worker showed me a trick on the keyboard settings page where you can right-click, inspect, and remove the hidden CSS property of an element, giving people like me access to some esoteric settings (turning more keys into control keys).

And that&apos;s kind of it on the desktop. Imagine if your Macbook only ran copies of Safari or apps with _only_ webviews (Safari) powering the UI. It&apos;d be weird, yeah? But it&apos;d also be fast. Really fast. And yeah, you would have to give up some pretty nifty native OS X apps, but I have come to realize I don&apos;t really need them&#8212;not for more than 99% of what I do in a day.

Sure, I miss Tweetbot, but my phone is where I already read Twitter the most, so now it&apos;s just a bit more often when I need a break. Fantastical is a must-have OS X app, but again my phone (and now watch) cover me for meetings and appointments.

My non-work computer life has changed slightly in some ways, but many of the things I did on my Macbook I can still do just fine on my Pixel.

For work it&apos;s only gotten better. I read a bit about the [restrictions on the OS X root account in El Capitan](https://www.quora.com/Can-someone-elaborate-on-the-OS-X-10-11-feature-called-Rootless). They haven&apos;t fully taken away what made the Mac so desireable to us geeks in the first place, but they&apos;ve severely limited it. It feels like the end of that particular use of the Macintosh and so moving to an actual Linux (what I write code for) computer seems like the obvious next step.

Most people don&apos;t need that kind of access. Some amount of those people just need a Chrome browser that gives them access to whichever 20 or so sites and web apps they use on a weekly basis.

And so I feel like the Pixel is for people on two ends of a spectrum: first, people with very few OS needs and very many browser needs, second, people like myself with many browser needs, but also access to a particular part of computing that my work requires.

If you are in either of these groups I think the Pixel is worth considering.

#### Linux
Finally a little bit about Linux. I&apos;ve mentioned it above a bit, but I think I need to clarify what I am doing so you understand that the Pixel is not, out of the box, a recognizable Linux computer. You get a hint if you open a Chrome shell window but poking around it&apos;s&hellip;well it&apos;s weird.

You have to put your Pixel in [developer mode](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel-2015#TOC-Developer-Mode). Then you have to grab a script called [crouton](https://github.com/dnschneid/crouton) to create [chroots](https://wiki.archlinux.org/index.php/Change_root) to host the Linux distribution you want to actually use.

After trying a variety of options (warning: you can spend hours doing this) I ended up not running any version of X on a chroot. I had wanted to run [i3](https://i3wm.org/) so I could run a few applications like our new [Linux Slack client](https://tinyspeck.slack.com/apps) and Sublime Text, but every window manager I installed paled to how nice the Chrome OS worked with this laptop and screen. I was resizing text to work with the Pixel&apos;s high density display by tweaking config files in XFCE and tweaking trackpad config files so my palms wouldn&apos;t cause mis-clicks when I realized I was falling into the same trap I had over the past twenty something years: Linux on the desktop sucks.

So here is what I do now: I open Chrome&apos;s shell to enter a chroot of Ubuntu 14.04 without X. I run byobu to flip through screens in that chroot and for editing text I just use nearly vanilla vim. (Seriously: my .vimrc is about 15 lines plus ctrl-p)

If I didn&apos;t want to only use byobu I could just SSH from Chrome OS _into_ the instance of Ubuntu.

Once I&apos;m in Linux I can do all the things I normally do on remote servers.

#### Should You Get A Chromebook Pixel?

The Chromebook Pixel is terribly expensive. If you get the highend i7 with 64 gigs of RAM that&apos;s $1,300. You could get a very decent, bottom of the line, 13&quot; Macbook Pro for that price. I fiddled with some of the lower end Chromebooks at the store and although the OS is just as nice as this Pixel, the screens and cases were too cheap for daily use.

Another option are the Chromeboxes that are meant to run on your desktop and hook up to an external monitor. I think this is a very inexpensive way to play around with the OS before making the leap. I believe [the best Chromebox to buy](http://www.amazon.com/gp/product/B00NG0VU6O/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00NG0VU6O&linkCode=as2&tag=andretorrez-20&linkId=YXD4RMWY6GTQHWON) is made by ASUS.

So for now unless your needs are at either end of the spectrum I mentioned earlier I don&apos;t think the Chromebook Pixel is for you. But it sure does feel like it could be soon.
