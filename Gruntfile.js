module.exports = function(grunt) {

  grunt.initConfig({
  
    uglify: {
    my_target: {
      files: {
        'dest/output.min.js': ['./*.js', 'html/*.js']
      }
    }
  },
	
	clean: ['*.html','./dest/*'],
  
    jshint: {
      files: ['./*.js','./html/*','./test/*'],
      options: {
	    
		"laxcomma": true,
		//jshintrc: ".jshintrc.json",
		reporter: require('jshint-html-reporter'),
        reporterOutput: 'jshint-report.html',
		
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	
	zip: {
      './code.zip': ['./**/*']
    },
	
	unzip: {
	'./codeunzip': ['code.zip']
	},
	
	mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.html', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false) 
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors) 
        },
        src: ['test/*.js']
      },
	  
	  coverage: {
        options: {
          reporter: 'html-cov',
          // use the quiet flag to suppress the mocha console output 
          quiet: true,
          // specify a destination file to capture the mocha 
          // output (the quiet option does not suppress this) 
          captureFile: 'coverage.html'
        },
        src: ['test/*.js']
      }
	  
    },
	
	copy: {
  main: {
    expand: true,
    src: 'html/**/*',
    dest: 'destination/',
  },
}
	
		
});
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-zip');
  

  grunt.registerTask('default', ['uglify','jshint','zip']);

};