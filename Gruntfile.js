module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/application.scss'
        }
      },
      options: {
        includePaths: [
          './bower_components/normalize.css',
          './bower_components/button'
        ]
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.s*ss', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
