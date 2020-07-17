'use strict';
var path = require('path');
var common_resource_path = "../html";
function absolutePath(file) {
  return path.join(__dirname, file);
}
module.exports = function(grunt) {

    grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {
        
            options: {
              paths: ['html'],
              globalVars: 'html/less/variable.less'
            },
            // target name
             src: {
                 // no need for files, the config below should work
                 expand: true,
                 cwd:    "html/less",
                 src:    ['*.less', '!{boot,var,mix}*.less'],
                 dest: 'html/css',
                 ext:    ".css"
             }
            
          


        // Compile all targeted LESS files individually
    
    },

    fonts: {
        files: ['html/fonts/*'],
        tasks: ['sync:syncfonts'],
    },

    jsbeautifier : {
        files : ['html/css/*.css'
                ],
            options : {
                indent: '  ',
                openbrace: 'end-of-line',
                autosemicolon: false
        }
    },

    cssmin: {
        options: {
            style: 'compressed',
        },
        absolute: {
            files: [{
                src: ['html/css/*.css'
                ].map(absolutePath),
                dest: 'html/css/litc_stylesheet.css'
                
            }]
        },
    },

  
   



 


    });

    //require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
   // grunt.loadNpmTasks("grunt-contrib-jshint");
    //grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-jsbeautifier");
   grunt.loadNpmTasks("grunt-contrib-cssmin");
   // grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('default', ['less']);
};
