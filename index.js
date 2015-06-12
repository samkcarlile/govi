var uuid = require('uuid');
var fs = require('fs');
var x = require('./util.js');

module.exports = Index = {
    add: function (name) {
        var index = Index.load();
        if (Index.exists(name)) {
            return false;
        } else {
            var id = uuid.v1();
            x.saveSync(id, {});
            index[name] = id;
            Index.save(index);
            return true;
        }
    },
    remove: function (name) {
        var index = Index.load();
        if (Index.exists(name)) {
            fs.unlinkSync(__dirname + '/.govi/' + index[name]);
            index[name] = undefined;
            Index.save(index);
            return true;
        } else {
            return false;
        }
    },
    load: function() {
        return x.loadSync('index.json');
    },
    save: function(index) {
        x.saveSync('index.json', index);
    },
    exists: function (name) {
        var index = Index.load();
        return index[name] !== undefined;
    },
    find: function (name) {
        var index = Index.load();
        return index[name] || false;
    },
    get: function (name) {
        var index = Index.load();
        if (Index.exists(name)) {
            return x.loadSync(index[name]);
        }
    }
}