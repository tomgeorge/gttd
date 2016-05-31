import {Todo} from './todo';

export var TODOS: Todo[] = [
   { "id": 1, "name": "set up var/lib/machine-name/docker nfs mounts", "description": "look at ansible galaxy plugin for this. \nexports file, fstab entries. \ninstall etcd/run docker image, just one master for now", "inProgress": false, "time": 123456789, estimate: 0, completed: false},
   { "id": 2, "name": "figure out why vagrant minions become unreachable", "description": "first time you set up deploy user/ssh it works.  Subsequent runs it fails", "inProgress": false, "time": 0, estimate: 0, completed: false},
   { "id": 3, "name": "Project: Security", "description": "set up openvpn container.  external load balances that proxies to kube api server for cluster access.  firewall rules.  disable password login.  read about SElinux.  read about PAM.", "inProgress": false, "time": 0, estimate: 0, completed: false},
   { "id": 4, "name": "Project: Cluster set-up", "description": "set up chat server.  figure out how to do mixed-architecture deployments so I can run a jenkins server on the beefier vagrant machines.  Create a secret.  Create a configmap.  Make a volume claim on nfs", "inProgress": true, "time": 0, estimate: 0, completed: false},
   { "id": 5, "name": "Project: to-do app", "description": "what needs to be done to be able to edit on host, [see change in browser on vagrant box | see change in browser in docker container ip].  How will this run?  using node command?  nginx serves static bundle(s)?  Generate tasks for authentication/authorization.  Set up a mongo container for this.  Set up a redux store.", "inProgress": false, "time": 0, estimate: 0, completed: false},
   { "id": 6, "name": "Folders used by docker/kubernetes", "description": "/var/lib/docker, /var/lib/kubernetes, /var/lib/kubelet, /etc/kubernetes, /var/lib/etcd, /var/lib/registry", "inProgress": false, "time": 0, estimate: 0, completed: false}
];
