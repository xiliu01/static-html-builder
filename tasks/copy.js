module.exports = function (grunt) {

  grunt.config('copy', {

    app: {
      expand: true,
      cwd: "<%= config.app %>",
      src: [
        '**/*.html',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif'
      ],
      dest: "<%= config.dist %>/"
    },

    framework: {
      src: "<%= config.generated %>/index-framework.html",
      dest: "<%= config.dist %>/index.html"
    },

    prepareHtml: {
      src: '<%= config.framework %>/index-framework.html',
      dest: '<%= config.generated %>/index-framework.html'
    }

  });
};
