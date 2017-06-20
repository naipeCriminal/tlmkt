module.exports = function (grunt) {
   grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		    jade: {
		      compile: {
		        options: {
		          pretty: true,
		        },
		        files: {
		          'index.html': 'layout.jade'
		        }
		      }
		    },		
			compass: {                  // Task
				dist: {                   // Target
				  options: {              // Target options
				    sassDir: 'sass/',
				    environment: 'production'
				  } 
				},
				dev: {                    // Another target
				  options: {
				    sassDir: 'sass',
				    cssDir: 'css'
				  }
				}
			},
			watch: { 
				scripts: { 
				  files: ['*.jade','*.scss'],
				  tasks: ['jade','compass'],
				  options: {
				    spawn: false,
				  }
				}
			},
			cssmin: {
			  options: {
			    mergeIntoShorthands: false,
			    roundingPrecision: -1
			  },
			  target: {
			    files: {
			      'output.css': ['css/*.css']
			    }
			  }
			}

	});
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['watch']);
};

