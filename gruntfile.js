/* grunt boilerplate author: https://github.com/Integralist/Grunt-Boilerplate*/

module.exports = function (grunt) {

	// Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({

		jshint: {
			files: ['Gruntfile.js', 'javascripts/**/*.js'],
			options: {
				curly:   true,
				eqeqeq:  true,
				immed:   true,
				latedef: true,
				newcap:  true,
				noarg:   true,
				sub:     true,
				undef:   true,
				boss:    true,
				eqnull:  true,
				browser: true,

				globals: {
					// AMD
          module:     true,
          require:    true,
          requirejs:  true,
          define:     true,

					// Environments
					console:    true,

					// General Purpose Libraries
					$:          true,
					jQuery:     true

				}
			}
		},

		uglify: {
			my_target: {
				files: {
					'public/javascripts/script.min.js': ['javascripts/script.js']
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
					require: ['./stylesheets/sass/helpers/url64.rb']
				},
				expand: true,
				cwd: './stylesheets/sass/',
				src: ['*.scss'],
				dest: './public/stylesheets/',
				ext: '.css'
			},
			dev: {
				options: {
					style: 'expanded',
					debugInfo: true,
					lineNumbers: true,
					require: ['./stylesheets/sass/helpers/url64.rb']
				},
				expand: true,
				cwd: './stylesheets/sass/',
				src: ['*.scss'],
				dest: './public/stylesheets/',
				ext: '.css'
			}
		},

		// Run: `grunt watch` from command line for this section to take effect
		watch: {
			files: ['<%= jshint.files %>', '<%= sass.dev.src %>'],
			tasks: 'default'
		}

	});

	// Default Task
	grunt.registerTask('default', ['jshint', 'sass:dev', 'uglify']);

	// Release Task
	grunt.registerTask('release', ['jshint', 'sass:dist', 'uglify']);


};