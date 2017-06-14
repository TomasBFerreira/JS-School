Vagrant.configure("2") do |config|  
  config.vm.box = "ubuntu/trusty64"
  #config.memory = 1024
  #config.cpus = 2
  config.vm.network "private_network", ip: "192.168.10.10"
  config.vm.provision :shell, path: "bootstrap.sh"
end
