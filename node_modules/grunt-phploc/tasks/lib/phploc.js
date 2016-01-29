/*
 * grunt-phploc
 * https://github.com/atouchard/grunt-phploc
 *
 * Copyright (c) 2015 Alexandre Touchard
 * Licensed under the MIT license.
 */

'use strict';

var exec = require('child_process').exec;
var path = require('path');

var typeIsArray = Array.isArray || function(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
};

exports.init = function(grunt) {

  var config = {},
      cmd = null,
      done = null,
      defaults = {
        bin: 'phploc',
        exclude: false,
        names: '*.php',
        namesExclude: undefined,
        quiet: true,
        verbose: false,
        ansi: false,
        noansi: false,
        progress: false,
        nointeraction: false,
        countTests: false,
        reportFileXML: undefined,
        reportFileCSV: undefined
      };

  var buildCommand = function(dir) {

    cmd = path.normalize(config.bin);

    if (config.reportFileXML) {
      cmd += " --log-xml " + config.reportFileXML;
    }

    if (config.reportFileCSV) {
      cmd += " --log-csv " + config.reportFileCSV;
    }

    if (typeIsArray(config.exclude)) {
      var _ref = config.exclude,
          excludeDir;

      for (var i = 0, len = _ref.length; i < len; i++) {
        excludeDir += (i === 0) ? _ref[i] : ", " + _ref[i];
      }
      cmd += " --exclude " + excludeDir;
    }
    else if (config.exclude) {
      cmd += " --exclude " + config.exclude;
    }

    if (config.names) {
      cmd += " --names \"" + config.names + "\"";
    }

    if (typeIsArray(config.namesExclude)) {
      var _namesExclude = config.namesExclude,
          _namesExcludeList;

      for (var j = 0, len = _namesExclude.length; j < len; j++) {
        _namesExcludeList += (j === 0) ? _namesExclude[j] : ", " + _namesExclude[j];
      }
      cmd += " --names-exclude " + _namesExcludeList;
    }
    else if (config.namesExclude) {
      cmd += " --names-exclude \"" + config.namesExclude + "\"";
    }

    if (config.quiet) {
      cmd += " --quiet";
    }

    if (config.verbose) {
      cmd += " --verbose";
    }

    if (config.ansi) {
      cmd += " --ansi";
    }

    if (config.noansi) {
      cmd += " --no-ansi";
    }

    if (config.progress) {
      cmd += " --progress";
    }

    if (config.nointeraction) {
      cmd += " --no-interaction";
    }

    if (config.countTests) {
      cmd += " --count-tests";
    }

    if (typeIsArray(dir)) {
      var dirList;
      for (var k = 0, len = dir.length; k < len; k++) {
        dirList += dir[k] + " ";
      }
      return cmd += " " + dirList;
    }
    else {
      return cmd += " " + dir;
    }
  };

  /**
   * Setup task before running it
   *
   * @param Object runner
   */
  exports.setup = function(runner) {
    var dir = path.normalize(runner.data.dir);

    config = runner.options(defaults);
    cmd = buildCommand(dir);
    grunt.log.writeln('Starting phploc (target: ' + runner.target.cyan + ') in ' + dir.cyan);
    grunt.verbose.writeln('Execute: ' + cmd);

    return done = runner.async();
  };


  /**
   * Runs phploc command with options
   */
  exports.run = function() {
    return exec(cmd, function(err, stdout, stderr) {
      if (stdout) {
        grunt.log.write(stdout);
      }

      if (err) {
        grunt.fatal(err);
      }

      return done();
    });
  };

  return exports;
};
