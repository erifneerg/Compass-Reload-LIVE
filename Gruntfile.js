module.exports = function(grunt) {

	grunt.initConfig({
		//make sure all the packages are install …I beliave
		pkg: grunt.file.readJSON('package.json')
		watch: {
			//run livereload server
			options: {
				livereload: true,
			},
			//watch the folder and tell which task to run
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['compass']
			}
		},
		//tell Compass to use config.rb
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//setup default task
	grunt.registerTask('default', ['watch']);
};
