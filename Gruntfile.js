module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		browserify: {
		  dist: {
		    files: {
		      'dist/app.js': ['app/app.js']
		    }
		  }
		},
    watch: {
      all: {
        options: {livereload: true},
        files: ['app/**'],
        tasks: ['jade','sass','browserify']
      }
    },
    jade :{
      compile: {
        options: {
          client: false,
          pretty : false
        },
        files: [{
          cwd: "app",
          src: "**/*.jade",
          dest: "dist",
          expand: "true",
          ext: ".html"
        }]
      }
    },
 	  sass: {
	    dist: {
	      files: {
	        'dist/app.css': 'app/style/main.scss'
	      }
	    }
	  }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['sass','browserify','watch']);
};
