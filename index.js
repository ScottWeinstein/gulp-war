"use strict";

var through = require('through');
var gutil = require('gulp-util');
var File = gutil.File;

function emitwebXML(stream, opts) {
    // TODO - replace w/ real template
    var mm = (opts.mimeMapping || []).map(function (mm) {
        return '<mime-mapping>' +
        '<extension>' + mm.extension + '</extension>' +
        '<mime-type>' + mm.type + '</mime-type>' +
        '</mime-mapping>';
    });

    var xml = '<web-app version="3.0"' +
    ' xmlns="http://java.sun.com/xml/ns/javaee"' +
    ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
    ' xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"' +
    '>\n' +
    '<display-name>' + opts.displayName + '</display-name>\n' +
    '<welcome-file-list>' +
    '<welcome-file>' + opts.welcome + '</welcome-file>' +
    '</welcome-file-list>\n' +
    mm.join('\n');


    (opts.webappExtras || []).forEach(function (each) {
        if (typeof each === 'function') {
            xml += each(opts);
        } else if (typeof each === 'string') {
            xml += each;
        } else {
            var err = new gutil.PluginError('war', 'invalid extras' + each);
            stream.emit('error', err);
        }
    });

    xml += '</web-app>\n';
    var f = new File({
        contents: new Buffer(xml),
        path: 'WEB-INF/web.xml'
    });
    stream.emit('data', f);
}


module.exports = function (options) {

    var passThrough = function (file) {
        return this.queue(file);
    };

    var onEnd = function () {
        emitwebXML(this, options);
        this.emit('data', new File({path: 'META-INF/', contents: new Buffer('')}));
        this.emit('end');
    };

    return through(passThrough, onEnd);
};
