const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/app.js');

mix.browserSync({
	proxy: '',
	server: 'dist/',
	files: '[dist/**/**]'
})
