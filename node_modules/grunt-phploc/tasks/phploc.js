/*
 * grunt-phploc
 * https://github.com/atouchard/grunt-phploc
 *
 * Copyright (c) 2015 Alexandre Touchard
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var phploc = require('./lib/phploc').init(grunt);

  grunt.registerMultiTask('phploc', 'Run phploc', function() {
    phploc.setup(this);
    phploc.run();
  });

};
