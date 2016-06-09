There's a bunch of notes at the bottom.

# Table of Contents
1. [Stuff to work on](#enhancements)
2. [I don't want to read this how do I run the app](#tldr)
3. [Configure VSCode](#configurevscode)
3. [The Docker Compose setup](#dockercompose)
4. [I want to edit in windows and see the changes on the container](#magic)
5. [Configure VSCode](#configurevscode)


## Enhancements: <a name="enhancements"></a> ##

+ page needs a login componenet to hit https://api/login

+ redux to hold application state
    + [Redux website](http://reduxjs.org)
    + [Video: Live React: Hot Reloading with Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)
    + [Video Series: Getting started with redux](https://egghead.io/courses/getting-started-with-redux)
    + [Video Series: Building react applications with idiomatic redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
    + [Medium article with intro to redux](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.7ijzqhpim)
    + [Flux standard actions (standard for defining the shape of an action](https://github.com/acdlite/flux-standard-action)
    + [redux-rx library (allow use of observables with redux)](https://github.com/acdlite/redux-rx)
    + [Redux actions library (Flux standard actions for redux)](https://github.com/acdlite/redux-actions)
    + [ng2-redux (Angular 2 bindings for redux)](https://github.com/angular-redux/ng2-redux)
    + [Redux: Opinions/examples of how to do backend persistence?](http://stackoverflow.com/questions/32949859/redux-opinions-examples-of-how-to-do-backend-persistence)
    + [Redux: State persistence with a database](http://stackoverflow.com/questions/33726644/redux-state-persistence-with-a-database)
    + [Bindings to connect the angular router to redux](https://github.com/dagstuan/ng2-redux-router)
    + [Redux logger](https://github.com/evgenyrodionov/redux-logger)


+ express api server
    + [Node https API docs](https://nodejs.org/docs/v4.4.5/api/https.html)
    + [Make it listen on port 80 and 443](http://stackoverflow.com/questions/22453782/nodejs-http-and-https-over-same-port/23975955#23975955)
    + [Express over HTTPS](http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/)
    + [JWT, Express, Node, Mongoose (mongodb bindings)](https://matoski.com/article/jwt-express-node-mongoose/)
    + Redirect that bad boy if they try to connect thru HTTP
    + Allow unauthenticated access to https://api/login

+ Authentication via JSON web tokens (JWT)
    + [jwt](https://jwt.io)
    + [learn jwt](https://github.com/docdis/learn-json-web-tokens)
    + [Build your Angular 2 App: From Auth to calling an API](https://auth0.com/blog/2015/05/14/creating-your-first-real-world-angular-2-app-from-authentication-to-calling-an-api-and-everything-in-between/)
    + [How do I sign a key?](https://github.com/dwyl/hapi-auth-jwt2/issues/48)


## 2. I don't want to read this how do I run the app (docker-compose setup with dev server, test runner, code coverage, mongo, redis) and Remote sync from windows host -> vagrant -> container(s) <a name="tldr"></a> ##
If you're doing this at Paychex on the network, good luck.  Let me know how you got it to work.  Your best bet is the guest network or home.

Install [Visual Studio Code](code.visualstudio.com) and the [remote-sync](https://github.com/lukasz-wronski/vscode-ftp-sync) plugin.

OR

Install [atom](http://atom.io) and the [remote-sync](https://github.com/yongkangchen/remote-sync) plugin for it.  I used to use atom, I like VScode not.

Configure aformentioned remote-sync plugin.  It's a good idea to exlucde `node_modules` and other ephemeral directories (dist, coverage, etc.) from the sync.

`vagrant up && vagrant ssh`

`tmux -2` if you so desire for multiple panes.

`git clone https://github.com/tomgeorge/gttd && cd gttd/angular`

`docker-compose build` if you haven't built the images yet or you changed something in package.json/webpack.config.js

`docker-compose up`

Enjoy.


## 3. Configure Visual Studio Code<a name="configurevscode"></a>

I had to point Visual Studio code to a different version of `typescript` in order to get it to check for typescript type definition files that are bundled in `node_modules` and not installed with `typings`.

1. update the global `typescript` version:

    `npm install -g typescript`

2. Do an `npm install` in the project root (`gttd/angular`) so that you can use intellisense.

3. In the menu, hit `File -> Preferences -> Workspace Settings`.  This opens the user workspace JSON configuration file.  Copy all the stuff that starts with "typescript" and paste it into the empty JSON map that opens up on the right.  Replace your username in the ` "typescript.tsdk"` entry:

        "typescript.tsdk": "C:/Users/<your username>/AppData/Roaming/npm/node_modules/typescript/lib",

4. Restart VSCode and navigate to `src/main/app/store/configureStore.ts`.  If you right click the first line and hit F12:

        `import * as Redux from 'redux';`
    You should be taken to a different file.

5. Install the ftp sync plugin.  Hit `Ctrl+Shift+P` and type `ext install`, and press enter.  Wait for it to load a list of plugins and when something pops up, type `ftp-sync`. It should prompt you to restart.

6. Hit `Ctrl+Shift+P` and type sync.  Navigate to `FTP Sync: Init` and press enter.

7. Paste this in.  This is the default Vagrant configuration.  If you change the box at all, you'll need to set the appropriate values.

```
{
    "remotePath": "/home/vagrant/gttd",
    "host": "127.0.0.1",
    "username": "vagrant",
    "password": "vagrant",
    "port": 2222,
    "protocol": "sftp",
    "uploadOnSave": true,
    "passive": false,
    "debug": false,
    "privateKeyPath": null,
    "ignore": [
    "\\.vscode",
    "\\.git",
    "\\node_modules",
    "\\react",
    "\\coverage",
    "\\dist",
    "\\doc",
    "node_modules",
    "react",
    "coverage",
    "dist",
    "doc"
    ]
}
```

+ If it's your first sync, you have to do a local to remote.  Hit `Ctrl+Shift+P` again and type `ftp sync`, you should see a local to remote option.  Hit enter, then hit enter again, then choose `Safe Sync`


    


# NOTE: npm doesn't support cygwin anymore.  If you're running this on Windows, I would stick to straight git bash. #

## Update 6/3/16:  The proxy at paychex is garbage and I have been having incredible amounts of trouble getting it to cooperate with npm, even our internal artifactory seems to break.  And due to the addition of the mongo container, the ability to run this locally (e.g. running npm run dev on windwos) might be hindered.  Some of the code might break now that I have express routes that hit the mongo container.  You can probably get around this by installing mongo and redis locally and changing around the URLs in the code.  YMMV. ##

## Running the docker compose setup <a name="dockercompose"></a>##

As of right now you have to clone the repo in the vagrant VM.  The synced folder solution hangs when trying to build the docker images.  Not sure why.  It's not a big problem, though, as you will see.

The docker compose environment contains:

+ A docker volume with the source code
+ A container running the webpack dev server with hot module reloading (changes are automatically pushed to the browser with no refresh required) (serving on localhost:8080)
+ A container running tests in watch mode (runs tests in phantomjs.  You can also go open a browser to localhost:9876 and it will run the tests in that browser)
+ A mongo container
+ A redis container

## To build the setup ##

`cd <the place you cloned the repo>`

`docker-compose build` from the vagrant box.

The data container will take the longest to build, because it has to do an `npm install`.  Luckily it caches for subsequent runs, so if you don't change/add any packages, the build step will be fast.  You can also get away with `docker-compose restart` - ing the app container for most development tasks.  When you are ready to spin everything up, run

`docker-compose up`  from the vagrant box.  Because $pwd is mapped to /home/app in the container, you can now navigate to localhost:8080 and type changes IN THE VAGRANT host, and see it pushed to the container.

##  I want to edit in windows and see the changes on the container <a name="magic"></a> ##

I recommend installing  [Visual Studio Code](code.visualstudio.com) and the [remote-sync](https://github.com/lukasz-wronski/vscode-ftp-sync) plugin.

You could also do [atom](http://atom.io) and the [remote-sync](https://github.com/yongkangchen/remote-sync) plugin for it.

Or sublime.

If you right click the angular folder and hit 'remote sync' you should to be able to configre the host, port, and directories to sync.  You should then be able to make changes in Atom on windows and see the changes show up in the container on the vagrant guest.  Pretty snazzy!


## running locally ##

If you're behind cntlm:

`npm config set http-proxy <cntlm URL>`

`npm config set https-proxy <cntlm URL>`

`npm set loglevel info`

## Vagrant Box ##

`vagrant up` should set everything up.

If `npm run dev` doesn't work right out of the gate, try adding `host: "0.0.0.0"` to the devServer config in `webpack.make.js`.

## Angular ##

`cd angular`

`npm install` first.  If it fails, do it again, and it should probably work.  npm is kind of terrible that way.

`npm run dev` for live dev server with Hot Module Reloading.  No need to refresh the page.

`npm run test` for tests

`npm run build` to create minified (not yet I'm getting errors lol) version of the app.
