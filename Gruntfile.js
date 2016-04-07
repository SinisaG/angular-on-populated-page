module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
          dist: {
                src: [
                    "bower_components/angular/angular.js",
                    "bower_components/angular-route/angular-route.js",
                    "scripts/src/**/*.js"
                ],
                dest: 'scripts/dist/all.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'scripts/dist/all.js': 'scripts/dist/all.js'
                }
            }
        },
        connect: {
            app: {
                options: {
                    port: 9000,
                    base: {
                        path: '.'
                    },
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.registerTask('build', [
      'concat:dist',
      'uglify:dist'
    ]);

    grunt.registerTask('start', [
      'build',
      'connect:app'
    ]);
};
