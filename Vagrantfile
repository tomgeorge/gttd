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
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"
  config.vm.provision "shell", path: "provision.sh", privileged: false

  # install docker
  config.vm.provision "docker"
  # allow vagrant access to docker socket
  config.vm.provision "shell", inline: "groupadd docker || true"
  config.vm.provision "shell", inline: "usermod -a -G docker vagrant || true"
  # restart docker
  # config.vm.provision "shell", inline: "systemctl restart docker"
  config.vm.provision "shell", inline: "apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D"
  config.vm.provision "shell", inline: "echo deb https://apt.dockerproject.org/repo ubuntu-trusty main > /etc/apt/sources.list.d/docker.list"
  config.vm.provision "shell", inline: "apt-get update"
  config.vm.provision "shell", inline: "apt-get purge lxc-docker"
  config.vm.provision "shell", inline: "apt-get update"
  config.vm.provision "shell", inline: "apt-get install docker-engine"
  config.vm.provision "shell", inline: "service docker restart"

  # forward port 8080
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 9876, host: 9876
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 3001, host: 3001

  # create private network if you want to add a route to docker bridge and do DNS
  # resolution and whatnot
  config.vm.network "private_network", ip: "192.168.0.123", netmask: "255.255.0.0"
  # a public network if you want to ssh into the box or hit the app from your phone.
  # make sure the ip is on your subnet (10.0.1.0/24, 192.168.0.0/24, whatever your
  # host IP/gateway looks like )
  # config.vm.network "public_network", ip: "10.0.1.211"
  config.vm.provider :virtualbox do |vb|
  	vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
	  vb.memory = 2048
    #vb.gui = true
  end
end
