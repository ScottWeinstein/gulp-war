/*global describe, it*/
"use strict";

var should = require("should");
require("mocha");
var war = require("../");

describe("gulp-war", function () {

    it("must produce WEB-INF/web.xml and META-INF/", function (done) {

        var count = 0;
        var stream = war("World");

        stream.on("error", function (err) {
            should.exist(err);
            done(err);
        });

        stream.on("data", function (newFile) {

            should.exist(newFile);

            switch (count) {
            case 0:
                newFile.path.should.equal('WEB-INF/web.xml');
                should.exist(newFile.contents);
                String(newFile.contents).should.startWith('<web-app version="3.0"');
                break;
            case 1:
                newFile.path.should.equal('META-INF/');
                newFile.stat.isDirectory().should.equal(true);
                break;
            default:
                done(new Error());
            }

            count += 1;

            if (count === 1) {
                done();
            }
        });

        stream.end();
    });

});
