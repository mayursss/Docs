# What is dynamic disk?
# How you will add and partition 4TB size disk?
- we need to use GUID partition table (GPT) disks

# What is GPT disks?
- GPT disks provide increased disk size and robustness.  Specifically, GPT disks can have partitions larger than two terabytes (that’s a lot) and have built-in redundancy in the way partition information is stored, unlike master boot record (MBR) disks.

# What is Resilient File System (ReFS)
- The Resilient File System (ReFS) is Microsoft's newest file system, designed to maximize data availability, scale efficiently to large data sets across diverse workloads, and provide data integrity by means of resiliency to corruption.


# How to map NFS share to windows server
- Install `Client for NFS`
- Use mount command to mount share
```
mount -user:Sam -p:MyPassword \\LNXSRV01\exports\dept Z:
```
``` powershell
New-PSDrive Z -PsProvider FileSystem -Root \\10.40.1.1\export\isos -Persist
```
> **Note:** <br>
> Persistent Mounts
There is no method of creating a persistent mount of an NFS share on a Windows server. The only option to mount an NFS share at system boot or logon is to use a batch script.
