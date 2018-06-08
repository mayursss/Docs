1. # What is virtual Machine
Software Defined Computer that runs inside of another computer.we can provision CPU, Memory, HDD for VM

- # What is HyperVisor
  - Platform for running VM
  - Manage memory and CPU
  - **Example** ESXi, Citrix Zenserver
  - **2 Types :**
    - `Bare Metal HyperVisor`
    - `Hosted HyperVisor`

- # What are the different Command-Line Interfaces to Manage vSphere.
  - vSphere supports several command-line interfaces for managing virtual infrastructure listed as below.
    - ESXi Shell commands
    - PowerCLI commands
    - DCLI (Datacenter CLI) commands for management of vCenter services.

  >**Note**
  >
  >You can run commands locally, from an administration server, or from scripts.
You can choose the CLI best suited for your needs, and write scripts to automate your management tasks.

- # What is the difference between Type 1 and Type 2 Hypervisor?
  - Type 1 Hypervisor
    - This is also known as **Bare Metal or Embedded or Native Hypervisor**.
    - It works directly on the hardware of the host.
    - It is completely independent from the Operating System.
    - The hypervisor is small as its main task is sharing and managing hardware resources between different operating systems.
    - Problems in one virtual machine or guest operating system do not affect the other.
    - Examples: `VMware ESXi Server`,`Microsoft Hyper-V`,`Citrix/Xen Server`
  - Type 2 Hypervisor
    - This is also known as **Hosted Hypervisor**.
    - Installed on an operating system.
    - completely dependent on host Operating System.
    - Problems in the base operating system affects the entire system as well even if the hypervisor running above the base OS is secure.
    - Examples: `VMware Workstation`, `Microsoft Virtual PC`, `Oracle Virtual Box`

- # What is the difference between the vSphere ESX and ESXi architectures?
  - Both  are bare metal hypervisor architectures that install directly on the server hardware.
  - vSphere ESX architecture relied on a Linux operating system, called the Console OS (COS) or service console, to perform two management functions: executing scripts and installing third-party agents for hardware monitoring, backup or systems management.
  - vSphere ESXi architecture, the service console has been removed. The smaller code base of vSphere ESXi represents a smaller “attack surface” and less code to patch, improving reliability and security.

- # What is a .vmdk file?
  - `vmdk` files – These are the disk files that are created for each virtual hard drive in your VM.
  - There are 3 different types of files that use the vmdk extension, they are:
    - `*–flat.vmdk`
    - `*.vmdk file`
    - `*–delta.vmdk`
  - This isn't the file containing the raw data. Instead it is the disk descriptor file which describes the size and geometry of the virtual disk file.
  - This file is in text format and contains the name of the `–flat.vmdk` file for which it is associated with and also the hard drive adapter type, drive sectors, heads and cylinders, etc.
  - One of these files will exist for each virtual hard drive that is assigned to your virtual machine.
  - You can tell which `–flat.vmdk` file it is associated with by opening the file and looking at the Extent Description field.
  ![vmdk-files](/html/img/vmdk-files.png)

- # what is .nvram file
  - `.nvram` file – This file contains the CMOS/BIOS for the VM.
  - The BIOS is based on the PhoenixBIOS 4.0 Release 6 and is one of the most successful and widely used.
  - If the NVRAM file is deleted or missing it will automatically be re-created when the VM is powered on.
  - Any changes made to the BIOS via the Setup program (F2 at boot) will be saved in this file.
  - This file is usually less then 10K in size and is __not__ in a text format (binary).
  >- Binary file
   - Has CMOS/BIOS info
   - can be deleted and it will get recreated
   - BIOS changes will be saved to this file

- # What are the different types of virtualization?
  - Server Virtualization (VM)
  - Application Virtualization (VMware ThinApp, Citrix XenApp, MS App-V)
  - Presentation Virtualization (Citrix & RDP)
  - Network Virtualization (vSwitch,vFirewall)
  - Storage Virtualization (vSAN)

- # What is VMware vMotion and what are its requirements?
  - VMware VMotion enables the live migration of running virtual machines from one physical server to another with zero downtime.
  - ###### Requirements for vMotion
   - Each host must be correctly licensed for vMotion
   - Each host must meet shared storage requirements ( SAN , NAS etc.)
   - Each host must meet the networking requirements
      - Configure a VMkernel port on each host.
      - Dedicate at least one GigE adapter for vMotion.
      - 10 GigE adapter is recommended in case having heavy workload to migrate VM.  (many memory operations.)
      - Use jumbo frames for best vMotion performance on all NICs, Switch, VSwitch
