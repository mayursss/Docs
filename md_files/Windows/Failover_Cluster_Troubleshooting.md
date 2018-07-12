# Troubleshooting problems with Failover Clusters
-  Always check Failover Cluster Manager to see which resources are online and which resources are offline.
- You can even run the Validate a Configuration Wizard and look at the results.
- If resources are offline, try to make the resources online.
- If you cannot access shared disks, make sure that the disks are available on the network cables are connected.
- If you use storage from a SAN, check the masking or security settings for storage.
- Check Cluster Events , use the Event Viewer and Performance and Reliability Monitor snap-in to review cluster and cluster-related events and performance metrics.
- When a specific disk or role fails, you can right-click the failed disk or role, click More Actions , and click Show Dependency Report to identify dependent resources that allow the disk or role to function.

# Backing Up Failover Cluster Configuration
- You can back up the cluster configuration and restore using Windows Server Backup or a non-Microsoft Backup tool.
- Before you perform a backup, the cluster needs to be running and it must have quorum.
- be sure to back up the `System State`, `Cluster folders`, and the `witness disk`.
- Also need to backup individual applications files and the associated data such as SQL databases, Exchange databases, or shared files
- To back up application data, you can install backup software on the cluster node that owns the disk resource, or you can run the backup against the clustered resource over the network.
- If you use CSV volumes, you can run backup from any node that is attached to the CSV volume.

# Resotre Failover Cluster Configuration
- To restore the cluster, you can perform one of the two types of restores:
- `Non-authoritative restore` : A type of restore that restores the information that was performed
when originally backed up but is overwritten by current information stored on other cluster nodes.
- `Authoritative restore` : A type of restore that restores the information that was performed
when originally backed up but is marked as the current and authoritative configuration, which will then overwrite the configuration on the other nodes.
- If a single cluster node has failed, you can perform the non-authoritative restore. After fixing or replacing the failed node, perform a non-authoritative restore including the system state. When you restart the node, the restored node will join the cluster and automatically receive the latest cluster configuration from the other nodes or the witness disk.
- Alternatively, you can remove a node and add a new node to the cluster.
- The new node will automatically receive the cluster information.
- If an administrator accidentally removed clustered resources or modified other cluster settings and
you need to restore the cluster back to a specific point in time before the changes were made,
you will perform an authoritative restore.
- To perform an authoritative restore, you will need to stop the cluster restores on all nodes.
- You then perform a system state recovery on a single node. After the restore, restart the cluster service so that the cluster service will mark the current configuration as the most recent configuration.
- As you bring the remaining cluster nodes online and start the cluster service, the other nodes will receive the restored configuration.
