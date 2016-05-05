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
  config.vm.box = "ubuntu/trusty64"

  # install node et al
  config.vm.provision "shell", path: "provision.sh", privileged: false

  # install docker
  config.vm.provision "docker"
  # allow vagrant access to docker socket
  config.vm.provision "shell", inline: "sudo groupadd docker || true"
  config.vm.provision "shell", inline: "usermod -a -G docker vagrant || true"
  # restart docker
  config.vm.provision "shell", inline: "systemctl restart docker"

  # forward port 8080
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 3001, host: 3001

  # create private network
  config.vm.network "private_network", ip: "192.168.0.123", netmask: "255.255.0.0"
  config.vm.provider :virtualbox do |vb|
  	vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
	vb.memory = 2048
  end
  config.vm.synced_folder "~/git/gttd", "/home/vagrant/app", type: "rsync"
end
