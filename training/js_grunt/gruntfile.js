module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //src: ['lib/**/*.js'],
        src: ['src/lib/*.js'],
        //dest: 'dist/<%= pkg.name %>.js'
        dest: 'js/script.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/script.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/imgs/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['<%= concat.dist.src %>'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['src/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      }      
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/styles.css': ['src/global.scss']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['imagemin','concat', 'uglify']);
  grunt.registerTask('dev', ['sass']);
  grunt.registerTask('w', ['watch']);


};