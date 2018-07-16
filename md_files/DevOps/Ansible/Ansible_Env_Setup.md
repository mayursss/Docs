# Ansible environment setup

### Introduction
Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments or zero downtime rolling updates. Ansible manages machines in an agent-less manner. There is never a question of how to upgrade remote daemons or the problem of not being able to manage systems because daemons are uninstalled. Because OpenSSH is one of the most peer-reviewed open source components, security exposure is greatly reduced. Ansible is decentralized–it relies on your existing OS credentials to control access to remote machines. This page uses the SSH Authentication mechanism to gain access to the remote machines from the controller machine.

This documentation covers the 1.5.4 version of Ansible.

### Requirements

This document deals with setting up an Ansible Controller node which will push ansible script into Ansible Managed nodes. We will be using only 1 managed node for this documentation. The assumption is that your host machine is a Windows 7 corporate machine with 64-bit OS running with at least 8 GB memory. Windows OS isn’t supported for the control machine, so setting up Ubuntu VM on Windows machine using VirtualBox is suggested for both the Ansible Controller and the Ansible Node. The configuration details for both the Ubuntu VMs are as below -

- [ ] OS – Ubuntu 14.04.2 Server (64 bit) (Python 2.7.6   is pre-installed.)
- [ ] RAM – 2048 MB (sufficient)
- [ ] Network – NAT and Host Only Adapter (so that machines can connect to internet and talk to each other)

>Windows OS isn’t supported for Ansible Controller.


### VM Connectivity with SSH
Two Ubuntu VMs are installed with NAT and Host Only Adatpter Networks. The userid and password for both are ubuntu/ubuntu.

- [ ] Ansible Controller with IP `192.168.56.103`
- [ ] Ansible Managed Node with IP `192.168.56.104`


>SSH is tested from Ansible Controller to Ansible Managed Node –

```
$ ssh ubuntu@192.168.56.104
```
So SSH is successful with Userid and Password.

### Enable SSH with Public Key Authentication

To enable SSH authentication with public key, an RSA based public-private key pair is to be generated in the Ansible Controller and the generated public key is to be appended the authorized_keys file of the Ansible Managed Node. The steps to do the same are as below -

- [ ] Generate an SSH key pair in Ansible Controller by –

```
$ ssh-keygen –t rsa
```
>This generates the keys - `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`.

- [ ] Copy the public key id_rsa.pub file to Ansible Managed Node and append it to `~/.ssh/authorized_keys` file –

```
$ ssh-copy-id ubuntu@192.168.56.104
```

Double check the file in Ansible Managed Node to see that the public key has got appended using `$ sudo vi ~/.ssh/authorized_keys`

- [ ] Now ssh from Ansible Controller into Ansible Managed Node using –

```
$ ssh 192.168.56.104
```
>You are in the Ansible Managed Node now !!!


### Installing Ansible

Apply current updates and patches -

```
$ sudo apt-get install software-properties-common
$ sudo apt-get update
```

Add the ansible ppa repository to the package-source list in ubuntu -

if using proxy
```
$ export http_proxy=http://<proxy>:<port>
$ export https_proxy=http://<proxy>:<port>
export https_proxy=<username>:<password>@<proxy>:<port>
$ sudo -E add-apt-repository ppa:ansible/ansible
```

else
```
$ sudo -E add-apt-repository ppa:ansible/ansible
```

Install Ansible in Ansible Controller using –

```
$ sudo apt-get install ansible
```

Check the ansible version that has been installed/

```
$ ansible --version
```

>This outputs - `ansible 1.5.4`


### Configuring Ansible

- Ansible has a default inventory file used to define which servers it will be managing.
- After installation, there's an example one you can reference at `/etc/ansible/hosts`.
- Create a backup of the original host file using.
``` bash
sudo mv /etc/ansible/hosts /etc/ansible/hosts.bkp
```
- Then create a new `/etc/asnible/hosts` file to contain the Ansible Node to manage -
``` bash
[managed_node]
192.168.56.104
```

Since SSH Authentication is already eabled between the Ansible Contorller and the Anisble Managed Nodes, the below command can be used to check if ping is working from ansible.
``` bash
$ ansible all -m ping --sudo --ask-sudo-pass
Provide the sudo password: <passwprd>
```
This outputs -
``` bash
192.168.56.104 | success >> {
    "changed": false,
    "ping": "pong"
}
```

### Modules

Ansible uses "modules" to accomplish most of its Tasks. Modules can do things like install software, copy files, use templates and much more. Modules are the way to use Ansible, as they can use available context ("Facts") in order to determine what actions, if any need to be done to accomplish a Task.

Without modules, we'd be left running arbitrary shell commands like this:
``` bash
$ ansible all -m shell -a 'apt-get install ng-utils' --sudo --ask-sudo-pass
```

Here, the `sudo apt-get install ng-utils` command will be run using the "`shell`" module. The `-a` flag is used to pass any arguments to the module. However this isn't particularly powerful. While it's handy to be able to run these commands on all of our servers at once, we still only accomplish what any bash script might do. If we used a more appropriate module instead, we can run commands with an assurance of the result. Ansible modules ensure `indempotence` - we can run the same Tasks over and over without affecting the final result.

For installing software on `Debian/Ubuntu` servers, the "apt" module will run the same command, but ensure `idempotence`.
``` bash
$ ansible all -s -m apt -a 'pkg=ng-utils state=installed update_cache=true'
```
The output for it would be -
``` bash
192.168.56.104 | success >> {
    "changed": false
}
```

This will use the `apt` module to update the repository cache and install `ng-utils` (if not installed). The result of running the task was `"changed" : false`. This shows that there were no changes. `ng-utils` package was already installed, so this can be run command over and over without worrying about it affecting the desired result i.e, installing the same package if already installed.


### Playbooks

Playbooks can run multiple Tasks and provide some more advanced functionality that we would miss out on using `ad-hoc` commands. Playbooks use `Yaml` format. Lets look at how to create and run an ansible playbook.

- [ ] Create myplaybook.yml

``` bash
$ vi myplaybook.yml
```

with the content below -
``` yaml
---
   - name: My First Playbook
     hosts: managed_node
     tasks:
       - name: Touch My File
         shell: touch ~/myfile.txt
```

This is a simple playbook for demonstration which creates a file called `myfile.txt` in the `home` directory if not already present, otherwise it simply updates the `last modified` `timestamp`.

- [ ] Run myplaybook.yml

``` bash
$ ansible-playbook -i /etc/ansible/hosts myplaybook.yml --sudo --ask-sudo-pass
```
sudo password : <password>
This would output -

``` bash
PLAY [My First Playbook]******************************************************
GATHERING FACTS***************************************************************
ok: [192.168.56.104]
TASK: [Touch My File]*********************************************************
changed: [192.168.56.104]
PLAY RECAP********************************************************************
192.168.56.104             : ok=2    changed=1    unreachable=0   failed=0
```
This shows that the `touch` command has been fired and the "`changed`" status tells that the file `/root/myfile.txt` has been created or the modified timestamp of the file has been changed in the Ansible Managed Node.

To check if the ansible script has run properly in the Ansible Managed Node, use the below commands.

``` Bash
$ ssh 192.168.56.104
$ sudo -i
$# ls -l
```
The output would be -
``` Bash
total 0
-rw-r--r-- 1 root root 0 Jul 17 13:38 myfile.txt
```

It shows that the first time, `/root/myfile.txt` is created and henceforth, every time the ansible playbook is run from the Ansbile Controller, the modified time stamp of the file is changed.
