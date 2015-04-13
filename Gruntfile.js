'use strict';
module.exports = function (grunt) {
  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-includes');

  grunt.initConfig({
    watch: {
      // if any .less file changes in directory "build/less/" run the "less"-task.
      files: ["build/sass/*.scss", "build/sass/skins/*.scss", "dist/js/app.js"],
      tasks: ["sass", "uglify"]
    },
    // "less"-task configuration
    //this task will compile all less files upon saving to create both AdminLTE.css and AdminLTE.min.css
    sass: {
      //Development not compressed
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          // compilation.css  :  source.scss
          "dist/css/AdminLTE.css": "build/sass/AdminLTE.scss",
          //Non minified skin files
          "dist/css/skins/skin-blue.css": "build/sass/skins/skin-blue.scss",
          "dist/css/skins/skin-black.css": "build/sass/skins/skin-black.scs",
          "dist/css/skins/skin-yellow.css": "build/sass/skins/skin-yellow.scss",
          "dist/css/skins/skin-green.css": "build/sass/skins/skin-green.scss",
          "dist/css/skins/skin-red.css": "build/sass/skins/skin-red.scss",
          "dist/css/skins/skin-purple.css": "build/sass/skins/skin-purple.scss",
          "dist/css/skins/skin-blue-light.css": "build/sass/skins/skin-blue-light.scss",
          "dist/css/skins/skin-black-light.css": "build/sass/skins/skin-black-light.scss",
          "dist/css/skins/skin-yellow-light.css": "build/sass/skins/skin-yellow-light.scss",
          "dist/css/skins/skin-green-light.css": "build/sass/skins/skin-green-light.scss",
          "dist/css/skins/skin-red-light.css": "build/sass/skins/skin-red-light.scss",
          "dist/css/skins/skin-purple-light.css": "build/sass/skins/skin-purple-light.scss",
          "dist/css/skins/_all-skins.css": "build/sass/skins/_all-skins.scss"
        }
      },
      //production compresses version
      production: {
        options: {
          style: 'compressed'
        },
        files: {
          // compilation.css  :  source.scss
          "dist/css/AdminLTE.min.css": "build/sass/AdminLTE.scss",
          //Skins minified
          "dist/css/skins/skin-blue.min.css": "build/sass/skins/skin-blue.scss",
          "dist/css/skins/skin-black.min.css": "build/sass/skins/skin-black.scss",
          "dist/css/skins/skin-yellow.min.css": "build/sass/skins/skin-yellow.scss",
          "dist/css/skins/skin-green.min.css": "build/sass/skins/skin-green.scss",
          "dist/css/skins/skin-red.min.css": "build/sass/skins/skin-red.scss",
          "dist/css/skins/skin-purple.min.css": "build/sass/skins/skin-purple.scss",
          "dist/css/skins/skin-blue-light.min.css": "build/sass/skins/skin-blue-light.scss",
          "dist/css/skins/skin-black-light.min.css": "build/sass/skins/skin-black-light.scss",
          "dist/css/skins/skin-yellow-light.min.css": "build/sass/skins/skin-yellow-light.scss",
          "dist/css/skins/skin-green-light.min.css": "build/sass/skins/skin-green-light.scss",
          "dist/css/skins/skin-red-light.min.css": "build/sass/skins/skin-red-light.scss",
          "dist/css/skins/skin-purple-light.min.css": "build/sass/skins/skin-purple-light.scss",
          "dist/css/skins/_all-skins.min.css": "build/sass/skins/_all-skins.scss"
        }
      }
    },
    //Uglify task info. Compress the js files.
    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },
    //Build the documentation files
    includes: {
      build: {
        src: ['*.html'], // Source files
        dest: 'documentation/', // Destination directory
        flatten: true,
        cwd: 'documentation/build',
        options: {
          silent: true,
          includePath: 'documentation/build/include'
          //banner: '<!-- I am a banner <% includes.files.dest %> -->'
        }
      }
    }
  });
  // the default task (running "grunt" in console) is "watch"
  grunt.registerTask('default', ['watch']);
};
