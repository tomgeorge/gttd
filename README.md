Open the index.html file in your browser.  That's all I got right now.

Compile: 

`npm install -g tsc`

`tsc`

Or you can just run: 

`webpack`

and It'll create a file in resources/public/js


testing:

`npm run pretest`

`mocha`



## TODO ##

+ Upgrade git to 1.9 (looks like the default for `yum` is 1.8.something
+ See if the following sequence goes off without a hitch after `vagrant up && vagrant ssh`
    + `cd gttd`
    + `npm install`
    + `npm run compile && npm run pretest`
	+ `mocha`
+ Build tool choice.  I read about webpack and haven't looked at grunt or gulp bc it seems like you can do everything and offers a lot of cool features
	+ Turns all your stuff (html, css, images) into javascript modules. So you can do something like this:
```
import stylesheet from 'styles/my-styles.scss';
console.log(stylesheet) 
=> "body{font-size:12px}"
```

+ Provides loaders/plugins to build all these modules:

```
{
  // When you import a .ts file, parse it with Typescript
  test: /\.ts/,
  loader: 'typescript',
},
{
  // When you encounter images, compress them with image-webpack (wrapper around imagemin)
  // and then inline them as data64 URLs
  test: /\.(png|jpg|svg)/,
  loaders: ['url', 'image-webpack'],
},
{
  // When you encounter SCSS files, parse them with node-sass, then pass autoprefixer on them
  // then return the results as a string of CSS
  test: /\.scss/,
  loaders: ['css', 'autoprefixer', 'sass'],
}

```

+ Lets you split the code up: code you dont need wont be brought over from server until you hit it with a page load or ajax or something.

+ Use Google Closure compiler for dead code elimination *(This might not even be worth it)*

http://www.npmjs.com/package/webpack-closure-compiler

http://swannodette.github.io/2015/02/23/hello-google-closure-modules/

http://blog.madewithlove.be/post/webpack-your-bags/

https://mochajs.org/#assertions

https://github.com/petehunt/webpack-howto

https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.hm6yeff31

http://www.jbrantly.com/typescript-and-webpack/	

http://jonnyreeves.co.uk/2015/hello-typescript-and-mocha/
