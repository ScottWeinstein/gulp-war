# gulp-war 

[![Greenkeeper badge](https://badges.greenkeeper.io/ScottWeinstein/gulp-war.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

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

#### options.version
Type: `String`

Defines the version of web-app xml specification to use. By default "3.0".

#### options.schemaLocation
Type: `String`

Defines the URI of web-app xml specification to use. By default http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd

#### options.webappExtras
Type: `Array`

Allows you to pass a list of strings that will be added to the end of resulting XML file. Instead of strings you can pass a list of functions, in this case the results of functions will be added to the template.

By default webappExtras is an empty array;

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-war
[npm-image]: https://badge.fury.io/js/gulp-war.png

[travis-url]: http://travis-ci.org/ScottWeinstein/gulp-war
[travis-image]: https://secure.travis-ci.org/ScottWeinstein/gulp-war.png?branch=master

[depstat-url]: https://david-dm.org/ScottWeinstein/gulp-war
[depstat-image]: https://david-dm.org/ScottWeinstein/gulp-war.png
