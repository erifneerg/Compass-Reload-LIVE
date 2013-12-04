module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    watch:{
      options: {
        livereload: true,
      },
        css: {
          files: ['sass/**/*.scss'],
          tasks: ['compass']
        }
    },
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

  grunt.registerTask('default', ['watch']);

};
