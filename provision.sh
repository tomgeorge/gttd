#!/usr/bin/env bash

# update cache and install utils
sudo yum makecache fast
sudo yum install yum-utils
sudo package-cleanup --cleandupes
sudo yum install -y gcc \
		    gcc-c++ \
		    make \
		    openssl-devel \
		    wget \
		    dos2unix \
		    git \
		    python2 \
		    tmux \
		    vim \
		    zsh

# install nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

# config nvm
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install latest node, npm
nvm install v4.4.0
nvm use v4.4.0

# install global dev dependencies
npm install -g webpack 
npm install -g webpack-dev-server 
npm install -g typings
npm install -g gulp
npm install -g tsc
npm install -g mocha
npm insatll -g concurrently
npm install -g jsonlint 
npm install -g eslint

# clone
git clone https://github.com/tomgeorge/gttd || true
git clone https://github.com/mike-allison/angular2-webpack-workflow || true
