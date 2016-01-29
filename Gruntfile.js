
// Grunt file which includes php targets by Ajinkya Bhosale

var configurationFile = require('./config');

module.exports = function(grunt) {
  
grunt.initConfig({
    
pkg: grunt.file.readJSON('package.json'),

config: configurationFile,

clean: ['<%= config.report %>','<%= config.allcode %>'],

mkdir: {
	all: {
  	      options: {
        	      mode: 0777,
                      create: ['<%= config.report %>']
                       }
             }
        },

copy: {
	main: {
		files: [
      				// includes files within path 
				{
				expand: true,
				src: ['<%= config.src %>/**' , '<%= config.testCase %>/**' ],
				dest: '<%= config.allcode %>'
				}
			]
		}
	},

composer : {
	options : {
		//tells to execute php
		usePhp: true, 
		// loc where composer.json is located
		cwd: '.',
		//location for composer exe
                composerLocation: '<%= config.composerLocation %>'
    		}
	},

phploc: {
	default: {
		//directory where phploc should be run.	
      		dir: '<%= config.allcode %>'
    		},
	options: {
		//exe binary path for phploc
		bin: '<%= config.phplocPharLocation %>',
		//Write result in XML format to file.
		logXML: '<%= config.phplocReportLocation %>',
		// show progress bar
		progress: true,
		verbose: true
		}
	},

phpcpd: {
	default: {
		//directory where phploc should be run.	
      		dir: '<%= config.allcode %>'
    		},
	options: {
		//exe binary path for phploc
       		bin: '<%= config.phpcpdPharLocation %>',
		//path and filename to write to a file
		reportFile: '<%= config.phpcpdReportLocation %>',
		//Write report in PMD-CPD XML format
		resultFile: true,
		//Print duplicated code.
		verbose: true
    		}
	},

phpmd: {
	default: {
        	dir: '<%= config.allcode %>'
   		 },
    	options: {
		//exe binary path for phploc
       		bin: '<%= config.phpmdPharLocation %>',
		//path and filename to write to a file
		reportFile: '<%= config.phpmdReportLocation %>',
		//The type of report to generate. PHPMD supports xml, text and html.
		reportFormat:'<%= config.phpmdReportFormat %>',
      		rulesets: '<%= config.phpmdRulesets %>'
    		}
	},

phpcs: {
    	default: {
       		src: ['ecomm_project/*.php' , 'tests/*.php']
   		 },
   	options: {
		//exe binary path for phploc
        	bin: '<%= config.phpcsPharLocation %>',
		//path and filename to write to a file
		reportFile: '<%= config.phpcsReportLocation %>',
		report: '<%= config.phpcsReportFormat %>',
		//Define the standard to use.
        	standard: '<%= config.phpcsStandard %>',
		//Output more verbose information.
		verbose: true,
		//Show sniff codes in all reports.
		showSniffCodes: true,
		severity: 5,
		warningSeverity: 100,
		errorSeverity: 100
    		}
	},

pdepend: {
	dir: '<%= config.allcode %>',
	options: {
		//exe binary path for phploc
        	bin: '<%= config.pdependPharLocation %>',
		//path where you want to write the summary xml file
		summeryFile: '<%= config.pdependReportLocation %>'
		},
	},

phpunit: {
	classes: {
	dir: 'tests'
		},
	options: {
		//exe binary path for phploc
	        bin: '<%= config.punitPharLocation %>',
		//Generate code coverage report in Clover XML format.
		coverageClover: '<%= config.punitCoverageClover %>',
		//Generate code coverage report in HTML format.
		coverageHtml: '<%= config.punitCoverageHtml %>',
		//Serialize PHP_CodeCoverage object to file.
		coveragePhp: '<%= config.punitCoveragePhp %>',
		//Generate code coverage report in text format
		coverage: true
		}
	},

zip: {
	default: {
		src: '<%= config.zipSource %>',
		dest: '<%= config.zipDest %>'
		}
	},

unzip: {
	default: {
		src: '<%= config.unzipSource %>',
		dest: '<%= config.unzipDest %>'
		}
	},

phpdocumentor: {
        dist: {
            options: {
		//bin is optional here
                directory : '<%= config.docsSource %>',
                target : '<%= config.phpdocsReportLocation %>'
            }
        }
    }


});

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-mkdir');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-composer');
grunt.loadNpmTasks('grunt-phploc');
grunt.loadNpmTasks('grunt-phpcpd');
grunt.loadNpmTasks('grunt-phpmd');
grunt.loadNpmTasks('grunt-phpcs');
//grunt.loadNpmTasks('grunt-pdepend');
grunt.loadNpmTasks('grunt-phpunit');
grunt.loadNpmTasks('grunt-zip');
grunt.loadNpmTasks('grunt-phpdocumentor');


grunt.registerTask('default', [ 'clean' , 'mkdir' , 'copy' , 'composer' , 'phploc' , 'phpcpd' ,'phpmd' ,'phpcs' , 'phpunit' , 'zip'  , 'unzip' , 'phpdocumentor']);

};
