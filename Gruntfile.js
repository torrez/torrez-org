"use strict";

module.exports = function(grunt) {

  // Load all Grunt tasks.
  require('jit-grunt')(grunt);

  // Time Grunt tasks.
  require('time-grunt')(grunt);

  // Configure Grunt tasks.
  grunt.initConfig({

    // Remove the /.tmp directory so we can start fresh.
    clean: {
      assets: [
        '.tmp',
        'assets'
      ]
    },

    // Compile SASS to CSS and Autoprefix it.
    sass: {
      build: {
        files: {
          '.tmp/style.css': '_src/css/style.scss'
        },
        options: {
          outputStyle: 'compressed'
        }
      }
    },

    autoprefixer: {
      build: {
        src: '.tmp/style.css',
        dest: 'assets/css/style.css'
      }
    },

    // Optimize images.
    imagemin: {
      options: {
        progressive: true
      },

      build: {
        files: [{
          expand: true,
          cwd: '_src/img',
          src: ['**/*.{png,jpg,gif,ico}'],
          dest: 'assets/img'
        }]
      },

      postImages: {
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.{png,jpg,gif}'],
          dest: '_site/images'
        }]
      }
    },

    // SVG icons.
    svgmin: {
      build: {
        files: [{
          expand: true,
          cwd: '_src/svg/kameleon',
          src: ['**/*.svg'],
          dest: '_includes/svg'
        }]
      }
    },

    // Copy.
    // When developing, we need copy the files that have been generated into
    // /assets into /_site/assets too so that live injection will work.
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['**/*'],
          dest: '_site/assets'
        }]
      }
    },

    // BrowserSync.
    browserSync: {
      files: {
        src: ['_site/**/*']
      },
      options: {
        watchTask: true,
        server: {
          baseDir: '_site'
        }
      }
    },

    // Live compilation.
    watch: {

      // Recompile CSS when SASS files change.
      sass: {
        files: ['_src/css/**/*.scss'],
        tasks: ['sass']
      },

      // Re-autoprefix CSS when the stylesheet is recompiled.
      autoprefixer: {
        files: ['.tmp/style.css'],
        tasks: ['autoprefixer', 'copy']
      },

      // Re-imagemin when images change. The `newer:` prefix only runs imagemin
      // on files that have modified since this task was last run.
      imagemin: {
        files: ['_src/img/**/*', 'images/**/*'],
        tasks: ['newer:imagemin', 'copy']
      },

      // Regenerate SVG sprite from individual SVG files when they change.
      svgmin: {
        files: ['_src/svg/**/*'],
        tasks: ['svgmin']
      },

      // Re-build Jekyll site and assets when HTML and text files change.
      shell: {
        files: [
          './_drafts/**/*',
          './_includes/*.{html,svg}',
          './_layouts/*.html',
          './_posts/**/*.{md,markdown,html,txt}',
          './*.html'
        ],
        tasks: ['shell:jekyllBuildLimited']
      }
    },

    // Shell commands. Used for Jekyll.
    shell: {
      jekyllBuildLimited: {
        command: 'jekyll build --incremental --limit_posts 25 --profile'
      },
      jekyllBuild: {
        command: 'jekyll build --incremental --profile'
      },
      jekyllServe: {
        command: 'jekyll serve --incremental --watch --port 3000'
      }
    },

  });


  // Register Grunt tasks.

  // `grunt buildAssets`
  //
  // This command is never run by the user, only by other Grunt tasks.
  //
  // 1. Erase the /.tmp/ directory.
  // 2. Minify SVG files.
  // 3. Combine SVG files into a sprite sheet.
  // 4. Compile SASS into a CSS stylesheet.
  // 5. Autoprefix CSS file.
  // 6. Minify images.
  grunt.registerTask(
    'buildAssets',
    [
      'clean:assets',
      'svgmin',
      'sass',
      'autoprefixer',
      'imagemin',
    ]
  );

  // `grunt` or `grunt dev`
  //
  // Developing the site.
  //
  // 1. Run the `buildAssets` task.
  // 2. Run `jekyll build` (limiting the build to 50 posts to increase build speed).
  // 3. Run BrowserSync.
  // 4. Watch files and re-build.
  grunt.registerTask(
    'default',
    [
      'buildAssets',
      'shell:jekyllBuildLimited',
      'browserSync',
      'watch'
    ]
  );

  // `grunt dev` is the same as `grunt` or `grunt default`
  grunt.registerTask(
    'dev',
    [
      'default'
    ]
  );

  // `grunt serve`
  //
  // Build the site for looking at locally.
  //
  // 1. Run the `buildAssets` task.
  // 2. Build the Jekyll site.
  grunt.registerTask(
    'serve',
    [
      'buildAssets',
      'shell:jekyllServe'
    ]
  );

  // `grunt build`
  //
  // Building the site.
  //
  // 1. Run the `buildAssets` task.
  // 2. Build the Jekyll site.
  grunt.registerTask(
    'build',
    [
      'buildAssets',
      'shell:jekyllBuild'
    ]
  );

}
