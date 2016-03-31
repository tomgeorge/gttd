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
npm install -g webpack \
	       webpack-dev-server\
	       typings \ 
	       gulp \
	       tsc \
	       mocha \
	       concurrently \
	       jsonlint \
	       eslint

# clone
git clone https://github.com/tomgeorge/gttd || true
