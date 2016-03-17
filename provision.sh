#!/usr/bin/env bash

# update cache and install utils
sudo yum makecache fast
sudo yum install yum-utils
sudo package-cleanup --cleandupes
sudo yum install -y gcc gcc-c++ make openssl-devel wget dos2unix git python2

# install nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

# config nvm
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install latest node, npm
nvm install node
nvm use node

# install dev dependencies
npm install --save-dev babel-cli
npm install -g webpack
npm install -g mocha