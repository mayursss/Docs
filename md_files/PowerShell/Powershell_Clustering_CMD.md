# You can configure and manage failover clusters using PowerShell. Some of the cmdlets include the following:
- Adds a cryptographic or registry checkpoint for a resource.
``` powershell
Add-ClusterCheckpoint
```
- Makes a new disk available for use in a failover cluster.
``` powershell
Add-ClusterDisk
```
- Creates a clustered file server resource group that includes one or more disks, on which shared folders can be created for users.
``` powershell
Add-ClusterFileServerRole
```
- Configures high availability for an application that was not originally designed to run in a failover cluster.
``` powershell
Add-ClusterGenericApplicationRole
```
- Add-ClusterGenericScriptRole : Configures an application controlled by a script that runs in
Windows Script Host, within a failover cluster.
- Add-ClusterGenericServiceRole : Configures high availability for a service that was not
originally designed to run in a failover cluster.
- Add-ClusterGroup : Adds an empty resource group to the failover cluster configuration, in
preparation for adding clustered resources to the group.
- Add-ClusteriSCSITargetServerRole : Creates a highly available iSCSI Target server.
- Add-ClusterNode : Adds a node, or server, to a failover cluster.
- Add-ClusterPrintServerRole : Creates a clustered print server, a resource group that includes a
printer, and a disk for storing print job information and printer drivers.
- Add-ClusterResource : Adds a resource to a clustered role, resource group, in a failover cluster.
(continued)
32 | Lesson 2
- A dd-ClusterResourceDependency : Adds a resource to the list of resources on which a particular
resource depends, using AND as the connector, within a failover cluster.
- Add-ClusterResourceType : Adds a resource type to a failover cluster and specifies information
such as the dynamic-link library (DLL) to be used with that resource type.
- A dd-ClusterScaleOutFileServerRole : Creates a clustered file server for scale-out application data.
- Add-ClusterServerRole : Creates a highly available basic server.
- Add-ClusterSharedVolume : Makes a volume available in CCSVs in a failover cluster.
- A dd-ClusterVirtualMachineRole : Creates a clustered virtual machine, that is, a virtual machine
that can be failed over if necessary to a different server in the failover cluster.
- Add-ClusterVMMonitoredItem : Configures monitoring for a service or Event Tracing for Windows
(ETW) event in a virtual machine.
- Block-ClusterAccess : Prevents the specified user or users from accessing a failover cluster.
- Clear-ClusterDiskReservation : Clears the persistent reservation on a disk in a failover cluster.
- Clear-ClusterNode : Clears the cluster configuration from a node that was evicted from a
failover cluster.
- Get-Cluster : Gets information about one or more failover clusters in a given domain.
- G et-ClusterAccess : Gets information about permissions that control access to a failover cluster.
- Get-ClusterAvailableDisk : Gets information about the disks that can support failover clustering
and are visible to all nodes, but are not yet part of the set of clustered disks.
- Get-ClusterCheckpoint : Retrieves a cryptographic or registry checkpoint for a resource in a
failover cluster.
- G et-ClusterGroup : Gets information about one or more clustered roles, or resource groups, in a
failover cluster.
- Get-ClusterLog : Creates a log file for all nodes, or a specific node in a failover cluster.
- Get-ClusterNetwork : Gets information about one or more networks in a failover cluster.
- Get-ClusterNetworkInterface : Gets information about one or more network adapters in a
failover cluster.
- Get-ClusterNode : Gets information about one or more nodes, or servers, in a failover cluster.
- Get-ClusterOwnerNode : Gets information about which nodes can own a resource in a failover
cluster or information about the order of preference among owner nodes for a clustered role.
- G et-ClusterParameter : Gets detailed information about an object in a failover cluster, such as a
cluster resource.
- Get-ClusterQuorum : Gets information about the quorum configuration of a failover cluster.
- Get-ClusterResource : Gets information about one or more resources in a failover cluster.
- G et-ClusterResourceDependency : Gets information about the dependencies that have been
configured between clustered resources in a failover cluster.
- Get-ClusterResourceDependencyReport : Generates a report that lists the dependencies
between resources in a failover cluster.
- Get-ClusterResourceType : Gets information about one or more resource types in a failover cluster.
- Get-ClusterSharedVolume : Gets information about CSVs in a failover cluster.
- Get-ClusterVMMonitoredItem : Retrieves the list of services and events currently being monitored
in the virtual machine.
- Grant-ClusterAccess : Grants access to a failover cluster, either full access or read-only access.
- Move-ClusterGroup : Moves a clustered role, a resource group, from one node to another in a
failover cluster.
- Move-ClusterResource : Moves a clustered resource from one clustered role to another within a
failover cluster.
- M ove-ClusterSharedVolume : Moves a CSV to ownership by a different node in a failover cluster.
- M ove-ClusterVirtualMachineRole : Moves the ownership of a clustered virtual machine to a
different node.
Configuring Failover Clustering | 33
- New-Cluster : Creates a new failover cluster.
- Remove-Cluster : Destroys an existing failover cluster.
- Remove-ClusterAccess : Removes a user from the access list on the cluster.
- R emove-ClusterCheckpoint : Removes a cryptographic or registry checkpoint for a resource in a
failover cluster.
- Remove-ClusterGroup : Removes a clustered role, also called a resource group , from a failover cluster.
- Remove-ClusterNode : Removes a node from a failover cluster.
- Remove-ClusterResource : Removes a clustered resource from the failover cluster.
- R emove-ClusterResourceDependency : Removes a dependency between two resources in a
clustered role within a failover cluster.
- Remove-ClusterResourceType : Removes a resource type from a failover cluster.
- Remove-ClusterSharedVolume : Removes a volume from the CSVs in a failover cluster and places
it in Available Storage in the cluster.
- Remove-ClusterVMMonitoredItem : Removes monitoring of a service or custom event that is
currently being monitored.
- Repair-ClusterSharedVolume : Runs repair tools on a CSV locally on a cluster node.
- Reset-ClusterVMMonitoredState : Resets the Application Critical state of a virtual machine, so
that the virtual machine is no longer marked as being in a critical state in the cluster.
- Resume-ClusterNode : Resumes activity on a failover cluster node after it has suspended it,
or paused.
- R esume-ClusterResource: Turns off maintenance for a disk resource or CSV within a failover cluster.
- Set-ClusterLog : Sets the size and level of detail for the cluster log.
- S et-ClusterOwnerNode : Specifies which nodes can own a resource in a failover cluster or specifies
the order of preference among owner nodes for a clustered role, or a resource group.
- S et-ClusterParameter : Controls specific properties of an object in a failover cluster, such as a
resource, a group, or a network.
- Set-ClusterQuorum : Configures quorum options for a failover cluster.
- Set -ClusterResourceDependency : Specifies the resources that a particular resource depends on
within a failover cluster.
- Start-Cluster : Starts the Cluster service on all nodes of the cluster on which it is not yet started.
- Start-ClusterGroup : Brings one or more clustered services and applications, also known as
resource groups , online on a failover cluster.
- Start-ClusterNode : Starts the Cluster service on a node in a failover cluster.
- Start-ClusterResource : Brings a resource online in a failover cluster.
- S top-Cluster : Stops the Cluster service on all nodes in a failover cluster, which will stop all services
and applications configured in the cluster.
- Stop-ClusterGroup : Takes one or more clustered services and applications, also known as resource
groups , offline on a failover cluster.
- Stop-ClusterNode : Stops the Cluster service on a node in a failover cluster.
- Stop-ClusterResource : Takes a resource offline in a failover cluster.
- Suspend-ClusterNode : Suspends activity on a failover cluster node, that is, pause the node.
- S uspend-ClusterResource : Turns on maintenance for a disk resource or CSV so that you can run
a disk maintenance tool without triggering failover.
- Test-Cluster : Runs validation tests for failover cluster hardware and settings.
- Test-ClusterResourceFailure : Simulates a failure of a cluster resource.
- Update-ClusterIPResource : Renews or releases the DHCP lease for an IP address resource in a
failover cluster.
- Update-ClusterNetworkNameResource : Registers existing Network Name resources with a DNS
server in a way that does not interrupt cluster availability.
