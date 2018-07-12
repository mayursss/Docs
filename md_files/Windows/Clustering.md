# What is Clustering?
- A cluster is a group of independent computer systems (nodes) working together as a unified computing resource.
- cluster provides `high availability` and s`calability` to many types of server workloads including Hyper-V hosts, file servers, and different server applications such as Microsoft SQL Server and Microsoft Exchange Server that can run on both physical servers and virtual machines.

# What are the types of clusters
There are two types of clusters as below:
- **Network load balancing (NLB)** cluster filters and distributes TCP/IP traffic across a range of nodes, regulating connection load according to administrator-defined port rules.
- **Failover cluster (server cluster)**  provides high availability for services, applications, and other resources through an architecture that maintains a consistent image of the cluster on all nodes and that allows nodes to transfer resource ownership on demand.

# What is Validation wizard?
- It will run tests to determine whether your `system`, `storage`, and `network configuration` is suitable for a cluster.  
- These tests include specific simulations of cluster actions, and fall into the following categories:
- System Configuration tests
- Network tests and Storage tests.

# How cluster quorum works
# What is Scale-out File Server (SoFS)
# What is SMB 3.0
# What is SMB Multichannel
# What is SMB Direct
# What is Cluster-Aware Updating (CAU)
# What are the requirements for clustering?
- Need a minimum of two servers (physical or virtual) that meet the minimum requirements of Windows Server 2012.
- Should have identical hardware components.
- Servers must run the same Windows Server 2012 Standard or Windows Server 2012 Datacenter including the same hardware version, 64-bit.
- should have the same software updates and service packs.
- The servers must also be part of the same domain.
- Cluster virtual server network name, and IP address assigned to it.

# What are the failover cluster components?
- `Nodes` : Node are the servers that make up the cluster and that run the Cluster service and host the resources and applications associated to cluster.
- `Network` : A common network that connects the cluster nodes. Three types of networks can be used in a cluster:
  - public
  - private
  - public-and-private.
- `Cluster storage` : A storage system that is shared between cluster nodes and usually connects
using fiber channel or iSCSI.
- `Cluster service` : The service that runs on Windows servers that manages and coordinates cluster resources to provide high availability

# What is Cluster heartbeats?
- Cluster nodes are kept aware of the status of the other nodes and services through the use of heartbeats.
- Heartbeats transmit and receive using UDP `port 3343` unicast (legacy clusters used UDP broadcast).

# what happens if cluster private network fails?
The Windows Server 2012 Failover Cluster uses a virtual network adapter called `Microsoft Failover Cluster Virtual Adapter` to communicate between nodes in the cluster.
- It is assigned an APIPA address (169.254.0.0/16) and an fe80::/10 prefix.
- The `Microsoft Failover Cluster Virtual Adapter` is used as an alternative network if the private network or connection fails.

# What are the possible quorum configurations
- there are `four` possible quorum configurations
- `Node Majority` : Recommended for clusters with an odd number of nodes. It can sustain failures of half the nodes (rounding up) minus one.
- `Node and Disk Majority` : Recommended for clusters with an even number of nodes. It can sustain failures of half the nodes (rounding up) if the disk witness remains online.
- `Node and File Share Majority` : Used for clusters with special configurations. Instead of using a disk witness, it uses a file share witness.
- `No Majority (Disk Only)` : Allows the cluster to function as long as one node is available and the disks are online. However, this configuration is not recommended because the disk might be a single point of failure.
>If you use a witness disk, the disk must be at least 512 MB. It must be dedicated for cluster
use and not assigned to a clustered role. It cannot be a volume that is a CSV.

# Cluster storage guidelines
- For the disk type, use basic disks, not dynamic disks.
- For the file system type, format the disk as `New Technology File System (NFTS)`.
- For the partition style of the disk, you can use either master boot record (MBR) or globally unique identifier (GUID) partition table (GPT).
- The storage device must follow the `SCSI Primary Commands-3 (SPC-3)` standard including supporting Persistent Reservations.
- The miniport driver used for the storage must work with the Storport storage driver.
- A storage device can be assigned to only one cluster. This is usually accomplished with logical unit number (LUN) masking or zoning.

# What is Cluster-Aware Updating
- Starting with `Windows Server 2012`, `Cluster-Aware Updating (CAU)` lets administrators update cluster nodes automatically, with little or no downtime, particularly if you use Hyper-V with live migration.
- You can use `CAU` in one of the following two modes:
  - `Remote-updating` mode
  - `Self-updating` mode
- In `self-updating` mode you can check progress via powershell command as below:
``` powershell
Get-CauRun
```

# What are the most common maintenance tasks performed on cluster.
- To drain the roles (change roles to other nodes gracefully).
> right-click a node, click Pause , and click Drain Roles
- To resume a node
 > right-click the node, click Resume , and choose either Fail Roles Back or Do Not Fail Roles Back .
- To stop the Cluster service.
 > right-click the node, click More Actions , and then click Stop
Cluster Service .
- To take a shared storage device offline used by a cluster.
> right-click the disk and click Take Offline . When it asks if you are sure, click Yes .
- To bring a shared storage device that has been taken offline.
> right-click the drive and click Bring Online.
- To manually change a shared disk or role.
> right-click the shared disk or role, click Move , select
Best Possible Node , or Select Node . When you choose Select Node, you will then be
prompted for the node to change the disk or resource to.
- To add a new node to the cluster.
> right-click Node and click Add Node to run the Add
Node Wizard.
- To permanently remove a node from the cluster.
> right-click the server that you want to
remove, click More Actions and click Evict .
- To delete a cluster.
> right-click the cluster, click More Actions , and click Destroy Cluster .

# What are the types of clustered role?
- Clustered roles are divided into the following two types:
  - Cluster-aware
  - Generic
- A `cluster-aware` clustered role is designed to work with Windows Server 2012 fail-over clusters.
  - Examples include the File Server clustered role and the Virtual Machine clustered role.
- A `generic` clustered role provides high availability for a service, application, or script that is not originally designed to run in a cluster. As a result, the cluster cannot detect the state of the generic application, script, or service as it can with a cluster-aware role.
  - `Generic application` : The cluster software starts the generic application, and then periodically queries the operating system to see whether the application still runs.
  - `Generic script` : You create a script that runs in Windows Script Host, which monitors and controls an application. The state of the application is determined by the script.
  - `Generic service` : The cluster software starts the service. Similar to generic applications, the cluster services periodically

# What are the roles available to Configure in cluster
In the High Availability Wizard, you can choose from the following services and applications
- `DFS Namespace Server` : Provides a virtual view of shared folders in an organization,
which allows users to access shared folders that are distributed among multiple folders.
- `DHCP Server` : Automatically provides TCP/IP hosts with valid IP addresses.
- `Distributed Transaction Coordinator (DTC)` : Supports distributed applications that
perform transactions. A transaction is a set of related tasks, such as updates to databases
that either succeed or fail as a unit.
- `File Server` : Provides a central location on your network where you can store and share
files with users.
- `Generic Application`: Allows you to run an application that is not specifically designed
to run on a cluster.
- `Generic Script` : Allows you to run scripts that are used to start and monitor applications.
- `Generic Service` : Allows you to run services that are not specifically designed to run on
a cluster.
- `iSCSI Target Server` : Allows you to provide iSCSI storage devices to iSCSI clients
known as iSCSI initiators .
- `Internet Storage Name Service (iSNS) Server` : Provides a directory of iSCSI targets.
- `Message Queuing` : Enables distributed applications that are running at different
times to communicate across heterogeneous networks and with computers that might
be offline.
- `Other Server` : Provides a client access point and storage only. Add an application after
completing the wizard.
- `Virtual Machine (VM)` : Runs on a physical computer as a virtualized computer system.
Multiple virtual machines can run on one computer.
