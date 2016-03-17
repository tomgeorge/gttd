# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "centos/7"

  # install node et al
  config.vm.provision "shell", path: "provision.sh", privileged: false

  # install docker
  config.vm.provision "docker"
  # allow vagrant access to docker socket
  config.vm.provision "shell", inline: "sudo groupadd docker"
  config.vm.provision "shell", inline: "usermod -a -G docker vagrant"
  # restart docker
  config.vm.provision "shell", inline: "systemctl restart docker"

  # forward port 8080
  config.vm.network "forwarded_port", guest: 8080, host: 12345

  # create private network
  config.vm.network "private_network", ip: "192.168.0.123", netmask: "255.255.0.0"
  config.vm.provider :virtualbox do |vb|
  	vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
  end

  # synced folders, need the disabled: true thing because of some CentOS rsync garbage.
  # see https://github.com/mitchellh/vagrant/issues/6154
  # config.vm.synced_folder ".", "/home/vagrant/sync", disabled: true
  # config.vm.synced_folder "~/git", "/usr/src/git", disabled: true
  config.vm.synced_folder ".", "/home/vagrant/sync", type: "virtualbox"
  config.vm.synced_folder "~/git", "/usr/src/git", type: "virtualbox"
end
