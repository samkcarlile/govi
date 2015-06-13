[Github](https://github.com/samkcarlile/govi)

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

*Note: You can also include a callback (ex. `Settings.remove(myFunction)` / `Settings.save(myFunction)`) as a parameter.*

Other Stuff
-----------
Govi usees `__dirname/.govi/'` to store all it's documents. So if you need to modify anything without the sort of "Govi ORM", then that's where you will find it. Anyway, maybe you will find govi convenient? :)
