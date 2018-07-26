- Azure has its own `No SQL` that is `Cosmos DB`.
- You can create any size VM from any size resource pool in Azure.
- Azure offers per minute billing.
- Availability Set
  - Fault Domains
  - Update Domains
- can have extensions (softwares/tools) installed while provisioning VM.
- can resize VM any time quickly (will reboot VM)
- `Azure Active Directory` is not Active Directory Domain services nor Azure Active Directory Domain services.
   - its Managed service identity.
   - used to manage identity in Azure.
- we can automate creating VM from PowerShell and also from console and uploading script.
- we can migrate VMs from VMWare to Azure
  - we will need to setup replication first from on premises to cloud.
  - need to setup SAN policy using diskpart command (will keep drive letter unchanged).
  - need to prepare infrastructure in site recovery option for on-premises VMWare VMs.
  - need to setup configuration server (middle server which will help migrate VM to Azure).
  - need to install agent on VM and connect it with configuration server.
  - to take complete control of VM and migrate it to cloud we need to failover it to Azure.