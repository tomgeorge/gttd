#!/usr/bin/env bash

# update cache and install utils
sudo apt-get update
sudo apt-get install -y gcc \
		    make \
		    openssl \
		    wget \
		    dos2unix \
		    git \
		    python \
		    tmux \
		    vim \
		    zsh \
		    net-tools


sudo chsh -s zsh

# install nvm
echo "***************************************"
echo "Installing nvm"
echo "**************************************"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

# config nvm
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install latest node, npm
echo "***************************************"
echo "Installing node"
echo "**************************************"
nvm install node

# install global dev dependencies
echo "***************************************"
echo "Installing global node dependencies"
echo "**************************************"

# clone
# git clone https://github.com/tomgeorge/gttd || true
# cd gttd/angular && rm -rf node_modules && npm install

# docker compose
sudo curl -L https://github.com/docker/compose/releases/download/1.6.0/docker-compose-`uname -s`-`uname -m` > docker-compose
sudo mv docker-compose /usr/local/bin/
sudo chmod +x /usr/local/bin/docker-compose
# mkdir -p ~/.zsh/completion
# sudo curl -L https://raw.githubusercontent.com/docker/compose/$(docker-compose version --short)/contrib/completion/zsh/_docker-compose > ~/.zsh/completion/_docker-compose
