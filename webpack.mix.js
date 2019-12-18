let mix = require("laravel-mix");

mix
  .setPublicPath("/")
  .js("assets/src/js/app.js", "assets/dist/")
  .sass("assets/src/sass/pool.scss", "assets/dist/");
