const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/app.js').browserSync('game.test');

mix.browserSync({
	proxy: '',
	server: 'dist/',
	files: '[dist/**/**]'
})
