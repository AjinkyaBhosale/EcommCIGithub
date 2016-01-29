# grunt-phploc [![Build Status](https://travis-ci.org/atouchard/grunt-phploc.svg?branch=master)](https://travis-ci.org/atouchard/grunt-phploc)

> Grunt plugin for running phploc.

## Getting Started

This plugin requires Grunt `0.4.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

1. Install this grunt plugin with the following command:

  ```shell
  npm install grunt-phploc --save-dev
  ```


2. [Install phploc](https://github.com/sebastianbergmann/phploc#installation) (preferably with [composer](https://github.com/composer/composer))

  ```shell
  composer install
  ```


3. Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

  ```js
  grunt.loadNpmTasks('grunt-phloc');
  ```


## The "phploc" task

### Overview
In your project's Gruntfile, add a section named `phploc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  phploc: {
    default: {
      dir: 'src'
    }
    options: {
      // Options go here.
    },
  },
});
```

### Target Properties
#### dir
Type: `String` or `Array`

The directory where phploc should be run.

### Options
#### options.bin
Type: `String`  Default: `'phploc'`

The executable binary.

#### options.names
Type: `String`  Default: `*.php`

A comma-separated list of file names to check.

#### options.namesExclude
Type: `Array`  Default: `undefined`

A comma-separated list of file names to exclude.

#### options.countTests
Type: `Boolean`  Default: `false`

Count PHPUnit test case classes and test methods.

#### options.exclude
Type: `String`  Default: `false`

Exclude a directory from code analysis.

#### options.logCSV
Type: `String`  Default: `undefined`

Write result in CSV format to file.

#### options.logXML
Type: `String`  Default: `undefined`

Write result in XML format to file.

#### options.progress
Type: `Boolean`  Default: `false`

Show progress bar.

#### options.quiet
Type: `Boolean`  Default: `false`

Do not output any message.

#### options.verbose
Type: `Boolean`  Default: `false`

Increase the verbosity of messages.

#### options.ansi
Type: `Boolean`  Default: `false`

Force ANSI output.

#### options.noansi
Type: `Boolean`  Default: `false`

Disable ANSI output.

#### options.nointeraction
Type: `Boolean`  Default: `false`

Do not ask any interactive question.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
