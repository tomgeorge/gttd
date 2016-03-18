Open the index.html file in your browser.  That's all I got right now.

running some stuff

`npm run compile`

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
+ Build tool choice(would like to use webpack, seems like you can do everything and offers a lot of really nice features 
	+ Turns all your stuff (html, css, images) into javascript modules. So you can do something like this:
```
import stylesheet from 'styles/my-styles.scss';
console.log(stylesheet) // "body{font-size:12px}"
```

+ Use loaders to build all this stuff: 

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

+ Lets you split the code up, code you dont need wont be brought over from server until you hit it with a page load or ajax or something.	
+ Definitely a steep learning curve
		


http://blog.madewithlove.be/post/webpack-your-bags/
https://mochajs.org/#assertions
https://github.com/petehunt/webpack-howto
https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4#.hm6yeff31

