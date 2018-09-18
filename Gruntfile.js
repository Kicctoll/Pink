module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.initConfig({
        less: {
            style: {
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        watch: {
            src: {
                files: ["less/*.less", "less/blocks/*.less", "less/global/*.less"],
                tasks: ["less"]
            }
        }
    });

    grunt.registerTask('default', 'watch');
};