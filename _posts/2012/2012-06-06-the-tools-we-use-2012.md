---
title: The Tools We Use 2012
date: 2012-06-06 00:00:00 -07:00
categories:
- Web/Tech
---

<p>Someone asked me today about the CI stack we have at Simpleform. Then someone else asked about our logging. Then I got into a conversation with someone about Backbone. So here is nearly everything we use and build stuff with.</p>

<p>First I spend most of my time in <a href="http://tornadoweb.org/">Tornado</a>. Right now we’re working on an API that sits in front of <a href="http://www.mongodb.org/">Mongo</a> so we are using Tornado and Bitly’s <a href="https://github.com/bitly/asyncmongo">asyncpymongo</a>. As long as I’m listing libraries I’ll also mention we are using <a href="http://pypi.python.org/pypi/mock">Mock</a> for testing and <a href="http://code.google.com/p/boto/">Boto</a> to interact with Amazon’s AWS.</p>

<p>We make extensive use of <a href="http://aws.amazon.com/">Amazon’s Web Services</a>. That is EC2 servers, RDS, S3, Elastic IPs, CloudFront, whew… It’s scripted with custom scripts that fire up <a href="http://puppetlabs.com/">Puppet</a> clients and servers that build out and configure the environment.</p>

<p>We also built a site for a client in <a href="http://djangoproject.com/">Django</a> this year and it went very well. I like Django. I’d use it more if it fit into the types of sites we build, but too often it feels forced so we go with Tornado.</p>

<p>Late last year I worked on a project that used <a href="http://coffeescript.org/">CoffeeScript</a>, <a href="http://backbonejs.org/">Backbone</a>, and <a href="http://sass-lang.com/">Sass</a> on the front-end. I had never used any of these tools and wasn’t particularly a strong JavaScript developer, so it was fun to see these tools from a different perspective. Since then I released <a href="http://laterspam.org/">Laterspam.org</a> which used all three. I have another app I will release someday that also uses them.</p>

<p>I use <a href="http://incident57.com/codekit/">Codekit</a> to manage compilation, syntax checking, and minifying. If you’re on a Mac it’s a must have. </p>

<p>We also use <a href="http://rundeck.org/">Rundeck</a> for deployments and <a href="http://jenkins-ci.org/">Jenkins</a> for automated testing. Logging is sent to <a href="https://papertrailapp.com/">Papertrail</a>. And of course everything lives on <a href="http://github.com/">Github</a>.</p>
