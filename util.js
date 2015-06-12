var fs = require('fs');

module.exports = {
    setup: function () {
        if (! fs.existsSync(__dirname + '/.govi')) {
            fs.mkdirSync(__dirname + '/.govi');
        }
        if (! fs.existsSync(__dirname + '/.govi/index.json')) {
            fs.writeFileSync(__dirname + '/.govi/index.json', '{}');
        }
    },
    saveSync: function (file, obj) {
        fs.writeFileSync(__dirname + '/.govi/' + file, JSON.stringify(obj));
    },
    loadSync: function (file) {
        return JSON.parse(fs.readFileSync(__dirname + '/.govi/' + file, 'utf-8'));
    },
    save: function (file, obj, callback) {
        fs.writeFile(__dirname + '/.govi/' + file, JSON.stringify(obj), callback);
    },
    load: function (file, callback) {
        fs.readFile(__dirname + '/.govi/' + file, 'utf-8', callback);
    }
}