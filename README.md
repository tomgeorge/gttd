There's a bunch of notes at the bottom.

# Table of Contents
1. [Stuff to work on/Links](#enhancements)
2. [I don't want to read this how do I run the app](#tldr)
3. [Start the vagrant box](#vagrant)
4. [Configure VSCode](#configurevscode)
5. [The Docker Compose setup](#dockercompose)
6. [Installing a node module in the container without rebuilding the data volume](#install_module_in_container)
7. [Debug a running node app by attaching a container to it](#debug)


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

+ Observables
    + [The Introduction to Reactive Programming You've Been Missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
    + [Angular HTTP tutorial (uses promises)](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html)
    + [Angular HTTP Client in Developer Guide](https://angular.io/docs/ts/latest/guide/server-communication.html)
    + [Auth0 blog - using http](https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/)
    + [Reactive Extensions (rxjs) github](https://github.com/Reactive-Extensions/RxJS)



## tl;dr (docker-compose setup with dev server, test runner, code coverage, mongo, redis) and Remote sync from windows host -> vagrant -> container(s) <a name="tldr"></a> ##
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

## 3. Start the Vagrant Box<a name="vagrant"></a>

Run `vagrant up` in the root of the repo.  Go in and add your username and user email to the git config.  You should be all set.


## 4. Configure Visual Studio Code<a name="configurevscode"></a>

I had to point Visual Studio code to a different version of `typescript` in order to get it to check for typescript type definition files that are bundled in `node_modules` and not installed with `typings`.

1. update the global `typescript` version:

    `npm install -g typescript`

2. Do an `npm install` in the project root (`gttd/angular`) so that you can use intellisense.  This is also for parity with the containers.  If e.g. you attach to the container and `npm install` something, and you try to reference it in VSCode, on Windows, the compiler will complain.  You will need to keep the dependencies in sync on the containers/windows.  

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

+ If it's your first sync, you have to do a local to remote.  Hit `Ctrl+Shift+P` again and type `ftp sync`, you should see a local to remote option.  Hit enter, then hit enter again, then choose `Safe Sync`.  Review the changes and hit `Ctrl+Shift+P`, then `FTP-Sync: Commit` to sync.  In the future, the code should sync every time you save a file.

###NOTE: For this step you kind of need to be careful, because it will sync stuff that differs in line endings.  It doesn't seem to matter to the running app that they have the line endings, but you'll have a bunch of extra folders and files that really don't need to go over.  I think I got most of them but if you find anything that isn't required to run the node app, add it to the ignore part of the JSON map.###

## 5. Running the docker compose setup <a name="dockercompose"></a>##

As of right now you have to clone the repo in the vagrant VM, outside of the synced folder.  The provisioner already does this, so there's no manual step.  The synced folder solution hangs when trying to build the docker images.  Not sure why.  It's not a big problem, though, as you will see.

The docker compose environment contains:

+ A docker volume with the source code
+ A container running the webpack dev server with hot module reloading (changes are automatically pushed to the browser with no refresh required) (serving on localhost:8080)
+ A container running a linter and unit tests in watch mode (runs tests in phantomjs.  You can also go open a browser to localhost:9876 and it will run the tests in that browser.  It also spits out a code coverage metric to stdout.
+ A mongo container
+ A redis container

## To build the setup ##

From inside the vagrant box:

`cd <the place you cloned the repo>`.  Default is `/home/vagrant/gttd`

`docker-compose build`

The data container will take the longest to build, because it has to do an `npm install`.  Luckily it caches for subsequent runs, so if you don't change/add any packages, the build step will be fast.  You can also get away with `docker-compose restart` - ing the app container for most development tasks.  When you are ready to spin everything up, run

`docker-compose up`  


## 6. Installing a node module in the container without rebuilding the data volume<a name="install_module_in_container"></a>


`docker ps`

You should see something like this:

    CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                      NAMES
    95d7592a81e7        angular_app          "npm run dev"            4 hours ago         Up About a minute   0.0.0.0:8080->8080/tcp     angular_app_1
    7e7af2c2ed17        angular_test         "npm run test"           4 hours ago         Up About a minute   0.0.0.0:9876->9876/tcp     angular_test_1
    90f9dbbf76ba        mongo:3.2.6          "/entrypoint.sh --sma"   18 hours ago        Up 2 hours          0.0.0.0:27017->27017/tcp   angular_mongo_1
    5d167589a5c8        redis:3.2.0-alpine   "docker-entrypoint.sh"   18 hours ago        Up 2 hours          6379/tcp                   angular_redis_1

You can attach to the dev or test container, because they both use the `node_modules` volume defined in the data volume.

`docker exec -it angular_app_1 /bin/bash`

This will execute the command `/bin/bash` in the container and keep you in interactive mode with a TTY attached (the `-it` flags).  You should see a prompt with the container id:

`app@95d7592a81e7:~$`

Then you can 

`app@95d7592a81e7:~$ npm install <module>`

If you restart the containers you should see the module now.  

`docker-compose restart app`

`docker-compose restart test`

If you want intellisense et al. then you need to install the module on your Windows host.


## 7. Debug a running node app by attaching a container to it<a name="debug"></a>

I ran into an issue where I wanted to add some logging to a 3rd party node application.  I ran a container that had vi and some other convenience utilities on it, and linked the data volume.

    vagrant@vagrant-ubuntu-trusty-64:~/gttd/angular/node_modules$ docker ps -a | grep data
    2cf1c1ec1efa        tomgeorge/devbox     "--link=data:angular_"   9 hours ago         Created                                                 happy_babbage
    f052a83b82bc        tomgeorge/devbox     "--link data:angular_"   9 hours ago         Created                                                 pensive_bohr
    ad1598efbdef        angular_data         "echo 'Created node d"   13 hours ago        Exited (0) 13 hours ago                                 angular_data_1
    b1eb4fcacf3a        angular_mongodata    "echo 'Created mongod"   13 hours ago        Exited (0) 13 hours ago                                 angular_mongodata_1


You have to add the -a flag because a volume container exists immiediately after creating the volume.  You can see I already have the `tomgeorge/devbox` container linked to the data container.  You can make one of these easy by creating a Dockerfile that installs vim or emacs.  To get that working, run 

`docker run --volumes-from <container id of volume> -it tomgeorge/devbox /bin/bash`

Then you can cd to `/home/vagrant/app/node_modules` and edit the javascript files in `node_modules`.

## <span class="strong">OUTDATED:</span> running locally ##

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

`npm run test` for tests.
