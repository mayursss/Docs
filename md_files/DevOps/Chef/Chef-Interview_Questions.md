# What is Chef?
- Chef is IT Automation Software and Configuration Management tool used by System Admin and Infra support teams.
- Chef automates how infrastructure is configured, deployed, and managed across your network, no matter its size.
- Chef is a thin DSL (domain-specific language) built on top of Ruby.

# What are the major components in Chef?
- Chef Workstation
- Chef Node
- Chef Server
- Chef Client
- Chef Cookbook
- Chef Supermarket
- Ruby

# What is workstation?
- A workstation is a computer running the Chef Development Kit (Chef DK) that is used to author cookbooks, interact with the Chef server, and interact with nodes.

# What is Cookbook?
- Cookbooks contain recipes, attributes, custom resources, libraries, files, templates, tests, and meta-data.

# What is use of ruby in Chef?
- Ruby is the programming language that is the authoring syntax for cookbooks.
- The chef-client uses Ruby as its reference language for creating cookbooks and defining recipes, with an extended DSL for specific resources.
- A reasonable set of resources are available to the chef-client, enough to support many of the most common infrastructure automation scenarios; however, this DSL can also be extended when additional resources and capabilities are required.

# What is Chef node?

# What is Chef client?
- A chef-client is an agent that runs locally on every node that is under management by Chef. When a chef-client is run, it will perform all of the steps that are required to bring the node into the expected state

# What is Chef server?

# What is Chef Supermarket?

# What are the command-line tools included in Chef?
- ChefDK includes two important command-line tools `Chef` & `Knife`.

# What is Chef-Repo?
- The chef-repo is the repository structure in which cookbooks are authored, tested, and maintained.
- The chef-repo should be synchronized with a version control system (such as git), and then managed as if it were source code.

# What is Test kitchen in Chef?
- Test Kitchen is testing tool used to automatically test cookbook.
- Supports cookbook testing across many cloud providers and virtualization technologies
- Defined in a .kitchen.yml file.

# What is ChefSpec
- ChefSpec is used to simulate the convergence of resources on a node.
- Is the fastest way to test resources and recipes.

# What is Node Bootstrapping?
- We call the process that installs Chef-Client on a node and the initial check-in to the Chef server Bootstrapping the node.
- `knife bootstrap` is the command you use to bootstrap a node.-
- As part of the `knife bootstrap` command, you specify arguments depending on how you would normally connect to your node over SSH.

# Knife bootstrap example
``` bash
knife bootstrap 192.168.0.1 --ssh-password 'xxxx' --sudo --use-sudo-password --node-name node1 --run-list 'recipe[starter]'
```
