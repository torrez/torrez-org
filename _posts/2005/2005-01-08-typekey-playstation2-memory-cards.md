---
title: TypeKey + PlayStation2 Memory Cards
date: 2005-01-08 00:00:00 -08:00
categories:
- Web/Tech
---

<p>
<a href="http://a.wholelottanothing.org/2005/01/posted_elsewher.html">Matt's post about Internet-wide comments</a> reminds me of an idea I would like TypeKey to implement.
</p>
<p>
I like to build things on top of TypeKey, but I find myself having to always make a database to save random bits of information about the users. For example, if I've made a site where I had subscriptions I'd have to have a bit in a database to mark who has paid and who hasn't. I could rig a folder of stub files to tell me that, but that seems messy.
</p>
<p>
What I would like to see is TypeKey adopt something not unlike my PS2 memory card. Any site&nbsp; implementing TypeKey would have the ability to save data directly to someone's TypeKey account in any schema they wish. An API sitting in front of the TypeKey could be as simple as:
</p>
<p><code>
$tk-&gt;SaveData(&quot;has_paid&quot;, &quot;true&quot;);<br />
$has_paid = $tk-&gt;LoadData(&quot;has_paid&quot;);<br />
</code>
</p>

<p>
Maybe sites with larger space requirements could pay for more &quot;blocks&quot; so that more data could be saved and retreived.
</p>
