var x = require('./util.js');
var Index = require('./index.js');

module.exports = function (name) {
    x.setup();
    Index.add(name);
    this.id = Index.find(name);
    this.doc = Index.get(name);
    this.save = function (callback) {
        x.save(this.id, this.doc, callback);
    }
    this.remove = function () {
        Index.remove(name);
    }
}