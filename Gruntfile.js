module.exports = function(grunt) {











 grunt.initConfig({
          concurrent: {
            target: {
                tasks: ['exec:server', 'exec:ngserve'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        exec: {
            ngserve: "ng serve -o",
            server: "node ./server",
            build: "ng build --prod"
        }
  });

  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask("default", ['concurrent']);
  grunt.registerTask("prod", ["exec:build"]);

};
