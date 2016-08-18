module.exports = function(grunt) {

  grunt.initConfig({
		browserify: {
      '../dist/app.js': ['../js/quiz.js']
 		},

    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
 				globals: {"CarLot": true},
        browserify: true
      },
      files: ['../js/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['browserify','jshint']
      }
    },
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['browserify','jshint', 'watch']);
}
