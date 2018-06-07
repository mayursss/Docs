# Introduction to VMware DRS and VMware HA Clusters
# VMware DRS
- A VMware DRS cluster is a collection of ESX/ESXi hosts and associated virtual machines with shared resources and a shared management interface.
- Before you can obtain the benefits of cluster-level resource management you must create a DRS cluster.
- When you add a host to a DRS cluster, the host’s resources become part of the cluster’s resources.
- DRS cluster supports cluster-wide resource pools and enforces cluster-level resource allocation policies.

The following cluster-level resource management capabilities are available.
#### Load Balancing.
- The vCenter Server system monitors distribution and usage of CPU and memory resources for all hosts and virtual machines in the cluster.
- DRS compares these metrics to an ideal resource utilization given the attributes of the cluster’s resource pools and virtual machines, the current demand, and the imbalance target.
- DRS then performs (or recommends) virtual machine migrations.
- When you first power on a virtual machine in the cluster, DRS attempts to maintain proper load balancing either by placing the virtual machine on an appropriate host or by making a recommendation.

#### Distributed Power Management (DTM).
- When the VMware DTM feature is enabled, DRS compares cluster and host-level capacity to the demands of the cluster’s virtual machines, including recent historical demand.
- DTM places (or recommends placing) hosts in standby power mode if sufficient excess capacity is found.
- DTM powers on (or recommends powering on) hosts if capacity is needed.
- Depending on the resulting host power state recommendations, virtual machines might need to be migrated to and from the hosts.

#### Virtual Machine Placement.
- You can control the placement of virtual machines on hosts within a cluster, by assigning DRS affinity or antiaffinity rules.

> **DRS IMP Notes**
>- **Resource pools** can be subdivided by creating child resource pools. Only virtual machines associated with a resource pool can be powered on.
- 2 Modes **Automatic** or **Manual**
- In **Manual** mode, DRS provides a recommendation and leaves it to the system administrator to decide whether to make the change.

# VMware HA
- VMware HA supports high availability for virtual machines by pooling them and the hosts they reside on into a cluster.
- VMware HA monitors the hosts. In the event of host failure, VMware HA migrates virtual machines to hosts with capacity.
- When you add new virtual machines to a VMware HA cluster, VMware HA checks whether other hosts in cluster has capacity to power on new virtual machine in case of any host failure in cluster.
