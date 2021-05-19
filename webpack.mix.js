/*
 * Require Laravel Mix so you don't have to fight with Webpack.
 */
const mix = require('laravel-mix');

/*
 *  General Configuration Settings
 */
mix
    .setPublicPath('dist/assets')
    .disableNotifications()
    .options({
        processCssUrls: false
    });

/*
 *  Compile SASS
 */
mix.sass('src/scss/app.scss', 'css/style.css');

/*
*  Compile JS
*/
mix.js('src/js/app.js', 'js/app.js');