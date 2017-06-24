module.exports = function (grunt) {
   grunt.initConfig({
		    jade: {
		      compile: {
		        options: {
		          pretty: true,
		        },
		        files: {
		          'build/index.html': 'jade/*.jade'
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
				  files: ['./*/*.jade','./*/*.scss'],
				  tasks: ['jade','compass','cssmin'],
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
			      'build/style.css': ['css/*.css']
			    }
			  }
			}

	});
	grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('css',['compass']);
	grunt.registerTask('html',['jade']);
};

