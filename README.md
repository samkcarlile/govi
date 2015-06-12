What it is
==========
It has the ability to save JSON documents, and load them into your 
JavaScript. It's really simple, but I needed something to do this so I 
thought why not just publish it here. 

How to use it!
--------------
First, require it with something like: 
`var Govi = require('govi')`

To load an existing/create a new use: 

`var Settings = new Govi("settings");`

After that, to make changes to the JSON, you must reference the `doc` 
property of the govi object. Like this: 

`Settings.doc.passcode = 12345`

And I hope you read to this point, because nothing is persisted back to 
the document until you tell govi to: 

`Settings.save();`

To delete a govi object, do this: 

`Settings.remove();`

Other Stuff
-----------
Right now, I'm pretty sure you have to run the node app from the 
directory that it is in for govi to work...But I'm not entirely sure.
It usees the `__dirname + '/.govi/'` to store everything. Anyway, maybe 
you will find govi convenient? :)
