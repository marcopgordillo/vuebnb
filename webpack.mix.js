const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/global.scss', 'public/css')
  .options({
    extractVueStyles: 'public/css/vue-style.css',
    postCss: [require('autoprefixer')],
    processCssUrls: false,
    globalVueStyles: 'resources/sass/_utils.scss'
  })
  .styles([
    'node_modules/@fortawesome/fontawesome-svg-core/styles.css',
    'public/css/global.css',
    'public/css/vue-style.css'
  ], 'public/css/app.css')
  .copy('resources/assets/images', 'public/images')
  .browserSync({
        proxy: process.env.APP_URL,
        open: false
    });
