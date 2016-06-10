import { TodoBuilder } from '../todo/todo.builder';

export class InMemoryDataService {
    createDb() {
        let todos = [
            new TodoBuilder()
                .setId(7)
                .setName('api server')
                .setDescription('make an express api server')
                .setInProgress(false)
                .build(),
            new TodoBuilder()
                .setId(1)
                .setName('set up var/lib/machine-name/docker nfs mounts')
                .setDescription(`look at ansible galaxy plugin for this. exports file, fstab entries.
        install etcd/run docker image, just one master for now`)
                .build(),
            new TodoBuilder()
                .setId(2)
                .setName('figure out why vagrant minions become unreachable')
                .setDescription('first time you set up deploy user/ssh it works.  Subsequent runs it fails')
                .build(),
            new TodoBuilder()
                .setId(3)
                .setName('Project: Security')
                .setDescription(`set up openvpn container.  external load balances that proxies to kube api server for cluster access.
        firewall rules.  disable password login.  read about SElinux.  read about PAM.
    `)
                .build(),
            new TodoBuilder()
                .setId(4)
                .setName('Project: Cluster set-up')
                .setDescription(`set up chat server.  figure out how to do mixed-architecture deployments so I can run a jenkins server on 
                the beefier vagrant machines.  Create a secret.  Create a configmap.  Make a volume claim on nfs
        `)
                .build(),
            new TodoBuilder()
                .setId(5)
                .setName('Project: to-do app')
                .setDescription(` be done to be able to edit on host, [see change in browser on vagrant box | see change in browser in 
                docker container ip].  How will this run?  using node command?  nginx serves static bundle(s)?
        Generate tasks for authentication/authorization.  Set up a mongo container for this.  Set up a redux store.`)
                .build(),
            new TodoBuilder()
                .setId(6)
                .setName('Folders used by docker/kubernetes')
                .setDescription('/var/lib/docker, /var/lib/kubernetes, /var/lib/kubelet, /etc/kubernetes, /var/lib/etcd, /var/lib/registry')
                .build()
        ];
        return { todos };
    }
}
