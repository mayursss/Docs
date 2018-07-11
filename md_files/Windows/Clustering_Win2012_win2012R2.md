# Previous enhancements to Failover Clustering
Some of the many ways that Failover Clustering was enhanced in `Windows Server 2012` include:
#### Improved scalability
- The number of cluster nodes supported increased from `16 in (win2k8)` to `64 in Win2k12`.
- The number of clustered `roles (Apps)` or `VMs` also increased from 1,000 to 8,000 (`1,024 per node`)
#### Cluster Shared Volumes enhancements
- In Windows Server 2008 R2, `Cluster Shared Volumes (CSV)` were introduced   to provide common storage for clustered virtual machines.
- In Windows Server 2012, CSV was enhanced and enabled to provide
storage for additional clustered roles such as the new `Scale-out File Server (SoFS`) feature, which can provide continuously available and scalable file-based (SMB 3.0) server storage for Hyper-V and applications such as SQL Server.
- CSV could also be integrated with the new Storage Spaces feature of Windows Server 2012 to enable scale-out access to data by virtualizing cluster storage on groups of inexpensive disks (`JBODs`).
- CSV in Windows Server 2012 was also integrated with new `SMB 3.0` features like `SMB Multichannel` and `SMB Direct`, which allow CSV traffic to stream across multiple networks in the cluster and leverage network adapters
that support Remote Direct Memory Access (RDMA).
-In Server 2012 CSV support for BitLocker Drive Encryption,
removal of external authentication dependencies, and improved file backup.
#### Updating failover cluster nodes
- `Cluster-Aware Updating (CAU)` was introduced in Windows Server 2012.
- It enable software updates to be applied automatically to the host operating system or other system components on the nodes while maintaining availability during the update process.
- CAU reduced maintenance time by automating what was previously a very repetitive task.
#### Quorum improvements
- In Win2k12 included simplified quorum configuration,
- Support for specifying which cluster nodes had votes in determining quorum, and `dynamic quorum`, which provides the administrator the ability to automatically manage the quorum vote assignment for a node based on the state of the node.
#### Other enhancements
- Some of the many other enhancements to Failover Clustering in Windows Server 2012 include:
  - Simplified migration of the configuration settings of clustered roles.
  - More robust integration with Active Directory Domain Services
  - Improved cluster validation tests
  - Improved Windows PowerShell support
  - Node Maintenance Mode
  - Clustered tasks
  - New clustered roles like iSCSI Target, guest clusters using virtual Fibre Channel, and more.
  - Many of the Hyper-V enhancements in Windows Server 2012 are also relevant to Failover Clustering, for example, virtual machine prioritization, pre-emption to shut down low-priority virtual machines, virtual machine health monitoring, Hyper-V Replica Broker, and so on.

# Guest clustering using shared virtual disks
