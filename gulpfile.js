"use strict";

var gulp = require('gulp');
var war = require("./index");
var zip = require('gulp-zip');
//var zip = require('../gulp-zip'); // till the pull request is approved

gulp.task('war', function () {
    gulp.src(["*.js", "*.md", "test/*.js"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.zip'))
        .pipe(gulp.dest("./dist"));

});

gulp.task('default', ['war']);
