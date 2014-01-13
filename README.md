# gulp-war [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Java WAR plugin for [gulp](https://github.com/gulpjs/gulp). Adapted from [grunt-war](https://github.com/MorrisLLC/grunt-war)

## Usage

First, install `gulp-war` as a development dependency

```shell
npm install --save-dev gulp-war
npm install --save-dev gulp-zip
```

Then, add it to your `gulpfile.js`:

```javascript
gulp.task('war', function () {
    gulp.src(["*.js", "*.md", "test/*.js"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('myApp.zip'))
        .pipe(gulp.dest("./dist"));

});
```

## API

### war(options)

#### options.welcome
Type: `String`

#### options.displayName
Type: `String`



## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-war
[npm-image]: https://badge.fury.io/js/gulp-war.png

[travis-url]: http://travis-ci.org/ScottWeinstein/gulp-war
[travis-image]: https://secure.travis-ci.org/ScottWeinstein/gulp-war.png?branch=master

[depstat-url]: https://david-dm.org/ScottWeinstein/gulp-war
[depstat-image]: https://david-dm.org/ScottWeinstein/gulp-war.png
