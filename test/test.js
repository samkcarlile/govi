var Govi = require('../main.js');
var x = require('../util.js');

describe('Govi Test', function () {
    var Settings;
    
    it('Should create new govi object without errors.', function (done) {
        Settings = new Govi("settings");
        done();
    });
    it('Should write to the govi obj w/o errors.', function (done) { 
        Settings.doc.enabled = true;
        Settings.doc.code = 19587738;
        done();
    });
    it('Should save the govi object w/o errors.', function (done) {
        Settings.save(done);
    });
    it('Should read the saved doc w/o errors.', function (done) {
        var moreSettings = new Govi("settings");
        if (moreSettings.doc.enabled) {
            done();
        }
    });
    it('Should delete the govi obj w/o errors', function (done) {
        Settings.remove();
        done();
    })
});