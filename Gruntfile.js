module.exports = function(grunt) {

    grunt.initConfig({
      pug: {
        compile: {
          options: {
            data: {
              debug: false
            },
            pretty: true
          },
          files: {
            'index.html': 'index.pug'
          }
        }
      },
      watch: {
        jade: {
          files: ['index.pug'],
          tasks: ['pug']
        },
        js: {
          files: ['*.js'],
          options: {
            livereload: true
          }
        },
        css: {
          files: ['*.css'],
          options: {
            livereload: true
          }
        },
        options: {
          livereload: true
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
