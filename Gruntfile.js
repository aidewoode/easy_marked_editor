module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      makeDir: {
        command: "mkdir vendor"
      },
      getJasmine: {
        command: [
          "git clone https://github.com/jasmine/jasmine.git",
          "mv jasmine/dist/jasmine-standalone-2.2.0.zip .",
          "unzip -d vendor/jasmine jasmine-standalone-2.2.0.zip",
          "rm -r jasmine",
          "rm jasmine-standalone-2.2.0.zip"
        ].join("&&")

      },

      copyFileToVendor: {
        command: [
          "cp -r node_modules/marked vendor/marked",
          "cp -r node_modules/font-awesome vendor/font-awesome"
        ].join("&&")

      
      }
    
    }
  
  });

  grunt.loadNpmTasks("grunt-shell");
  grunt.registerTask("default", ["shell"]);
};
