- **Question1. What Is Active Directory?**
 -**Answer** Active Directory (AD) is a directory service developed by Microsoft and used to store objects like User,     Computer, printer, Network information, It facilitate to manage your network effectively with multiple Domain Controllers in different location with AD database, able to manage/change AD from any Domain Controllers and this will be replicated to all other DC’s, centralized Administration with multiple geographical location and authenticates users and computers in a Windows domain.

* Question2. What Is Tree?
Answer :
    Tree is a hierarchical arrangement of windows Domain that share a contiguous name space.
* Question3. What Is Domain?
Answer :
    Active Directory Domain Services is Microsoft’s Directory Server. It provides authentication and authorization mechanisms as                                            well as a framework within which other related services can be deployed.
Question4. What Is Active Directory Domain Controller (dc)?

    Answer :

    Domain Controller is the server which holds the AD database, All AD changes get replicated to other DC and vise vase.

    Question5. What Is Forest?

    Answer :

    Forest consists of multiple Domains trees. The Domain trees in a forest do not form a contiguous name space however share a common schema and global catalog (GC)

     

    Question6. What Is Schema?

    Answer :

    Active directory schema is the set of definitions that define the kinds of object and the type of information about those objects that can be stored in Active Directory

    Active directory schema is Collection of object class and there attributes

    Object Class = User

    Attributes = first name, last name, email, and others

    Question7. Can We Restore A Schema Partition?

    Answer :

    http://www.windowstricks.in/2014/01/can-i-restore-schema-partition.html

    Question8. Tel Me About The Fsmo Roles?

    Answer :
        Schema Master
        Domain Naming Master
        Infrastructure Master
        RID Master
        PDC
            Schema Master and Domain Naming Master are forest wide role and only available one on each Forest, Other roles are Domain wide and one for each Domain.
            AD replication is multi master replication and change can be done in any Domain Controller and will get replicated to others Domain Controllers, except above file roles, this will be flexible single master operations (FSMO), these changes only be done on dedicated Domain Controller so it’s single master replication.

    Question9. How To Check Which Server Holds Which Role?

    Answer :

    Netdom query FSMO.

    Question10. Tel Me About Active Directory Database And List The Active Directory Database Files?

    Answer :
        NTDS.DIT
        EDB.Log
        EDB.Che
        Res1.log and Res2.log

    All AD changes didn’t write directly to NTDS.DIT database file, first write to EDB.Log and from log file to database, EDB.Che used to track the database update from log file, to know what changes are copied to database file.

    NTDS.DIT: NTDS.DIT is the AD database and store all AD objects, Default location is the %system root%nrdsnrds.dit, Active Directory database engine is the extensible storage engine which us based on the Jet database

    EDB.Log: EDB.Log is the transaction log file when EDB.Log is full, it is renamed to EDB Num.log where num is the increasing number starting from 1, like EDB1.Log

    EDB.Che: EDB.Che is the checkpoint file used to trace the data not yet written to database file this indicate the starting point from which data is to be recovered from the log file in case if failure

    Res1.log and Res2.log:  Res is reserved transaction log file which provide the transaction log file enough time to shutdown if the disk didn’t have enough space.

    Question11. What Is Active Directory Partitions?

    Answer :

    Active Directory partition is how and where the AD information logically stored.

    Question12. What Are All The Active Directory Partitions?

    Answer :
        Schema
        Configuration
        Domain
        Application partition

    Question13. What Is Use Active Directory Partitions? And How To Find The Active Directory Partitions And There Location?

    Answer :

    Schema Partition – It store details about objects and attributes. Replicates to all domain controllers in the Forest

    DN location is CN=Schema,CN=Configuration,DC=Domainname, DC=com

    Configuration Partition – It store details about the AD configuration information like, Site, site-link, subnet and other replication topology information. Replicates to all domain controllers in the Forest

    DN Location is CN=Configuration,DC=Domainname,DC=com

    Domain Partitions – object information for a domain like user, computer, group, printer and other Domain specific information. Replicates to all domain controllers within a domain

    DN Location is DC=Domainname,DC=com

    Application Partition – information about applications in Active Directory. Like AD integrated DNS is used there are two application partitions for DNS zones – ForestDNSZones and DomainDNSZones, see more

    Question14. How To Configure Active Directory Partitions?

    Answer :

    You can only configure the Application partition manually to use with AD integrated applications.

    Question15. How To Take Active Directory Backup?

    Answer :

    System state backup will backup the Active Directory, NTbackup can be used to backup active directory.

    Question16. Active Directory Restores Types?

    Answer :
        Authoritative restore
        Non-authoritative restore

    Question17. Non-authoritative Restore Of Active Directory?

    Answer :

    Non-authoritative restore is restore the domain controller to its state at the time of backup, and allows normal replication to overwrite restored domain controller with any changes that have occurred after the backup.

    After system state restore, domain controller queries its replication partners and get the changes after backup date, to ensure that the domain controller has an accurate and updated copy of the Active Directory database.

    Non-authoritative restore is the default method for restoring Active Directory, just a restore of system state is non-authoritative restore and mostly we use this for Active Directory data loss or corruption.

    Question18. How Perform A Non-authoritative Restore?

    Answer :

    Just start the domain controller in Directory Services Restore Mode and perform system state restore from backup

    Question19. Authoritative Restore Of Active Directory?

    Answer :

    An authoritative restore is next step of the non-authoritative restore process. We have do non-authoritative restore before you can perform an authoritative restore. The main difference is that an authoritative restore has the ability to increment the version number of the attributes of all objects or an individual object in an entire directory, this will make it authoritative restore an object in the directory. This can be used to restore a single deleted user/group and event an entire OU.

    In a non-authoritative restore, after a domain controller is back online, it will contact its replication partners to determine any changes since the time of the last backup. However the version number of the object attributes that you want to be authoritative will be higher than the existing version numbers of the attribute, the object on the restored domain controller will appear to be more recent and therefore, restored object will be replicated to other domain controllers in the Domain.

    Question20. What Are Active Directory Partitions Can Be Restored?

    Answer :

    You can authoritatively restore only objects from configuration and domain partition. Authoritative restores of schema-naming contexts are not supported.

    Question21. How Many Domain Controllers Need To Back Up? Or Which Domain Controllers To Back Up?
    Answer :

    Minimum requirement is to back up two domain controllers in each domain, one should be an operations master role holder DC, no need to backup RID Master (relative ID) because RID master should not be restored.
    Question22. Can We Restore Backup Of Domain Controller To Other/different Domain Controller?
    Answer :

    Backup of one domain controller can’t be restoring to other domain controller, should be restored to same domain controller.
    Question23. What Are Group Policies?
    Answer :

    Group policies specify how programs, network resources, and the operating system work for users and computers in an organization. They are collections of user and computer configuration settings that are applied on the users and computers (not on groups). For better administration of group policies in the Windows environment, the group policy objects (GPOs) are used.
    Question24. What Is Gpo?
    Answer :

    Group policy object (GPO) is a collection of group policy settings. It can be created using a Windows utility known as the Group Policy snap-in. GPO affects the user and computer accounts located in sites, domains, and organizational units (OUs). The Windows 2000/2003 operating systems support two types of GPOs, local and non-local (Active Directory-based) GPOs.
    Question25. What Is Local Gpos/policy?
    Answer :

    Local GPOs are used to control policies on a local server running Windows 2000/2003 Server. On each Windows 2000/2003 server, a local GPO is stored. The local GPO affects only the computer on which it is stored.

    By default, only Security Settings nodes are configured. The rest of the settings are either disabled or not enabled. The local GPO is stored in the %systemroot%SYSTEM32GROUPPOLICY folder.
    Question26. What Is Non-local Policy?
    Answer :

    Non-local GPOs are used to control policies on an Active Directory-based network. A Windows 2000/2003 server needs to be configured as a domain controller on the network to use a non-local GPO. The non-local GPOs must be linked to a site, domain, or organizational unit (OU) to apply group policies to the user or computer objects.

    The non-local GPOs are stored in %systemroot%SYSVOLPOLICIESADM, where is the GPO’s globally unique identifier. Two non-local GPOs are created by default when the Active Directory is installed:

    1. Default Domain Policy: This GPO is linked to the domain and it affects all users and computers in the domain.

    2. Default Domain Controllers Policy: This GPO is linked to the Domain Controllers OU and it affects all domain controllers placed in this OU. Multiple GPOs.
    Question27. Gpo Apply Order When Multiple Group Policy Objects Are Assigned, The Group Policies Are Applied In The Following Order:?
    Answer :
        The local group policy object is applied first
        Then, the group policy objects linked to sites are applied
        If multiple GPOs exist for a site, they are applied in the order specified by an administrator
        GPOs linked to the domains are applied in the specified order
        Finally, GPOs linked to OUs are applied

    The OU group policy objects are set from the largest to the smallest organizational unit, i.e., first the parent OU and then the child OU.

    By default, a policy applied later overwrites a policy that was applied earlier. Hence, the settings in a child OU can override the settings in the parent OU

    Group policy settings are cumulative if they are compatible with each other. In case they conflict with each other, the GPO processed later takes precedence.
    Question28. What Is No Override? Block Policy Inheritance?
    Answer :

    The following are the exceptions with regard to the above-mentioned settings:

     No Override:

    Any GPO can be set to No Override. If the No Override configuration is set to a GPO, no policy configured in the GPO can be overridden. If more than one GPO has been set to No Override, then the one that is the highest in the Active Directory hierarchy takes precedence

    Block Policy Inheritance: 

    The Block Policy Inheritance option can be applied to the site, domain, or OU. It deflects all group policy settings that reach the site, domain, or OU from the object higher in the hierarchy. However, the GPOs configured with the No Override option are always applied.
    Question29. Is Group Policy From Parent Domain Can Be Inherited To Child Domain?
    Answer :

    Group Policy Inheritance:

    The group policies are inherited from parent to child within a domain. They are not inherited from parent domain to child domain.
    Question30. Following Are The Rules Regarding Group Policy Inheritance:
    Answer :
        A policy setting is configured (Enabled or Disabled) for a parent OU, and the same policy setting is not configured for its child OUs. The child OUs inherit the parent’s policy
        A policy setting is configured (Enabled or Disabled) for a parent OU, and the same policy setting is configured for its child OUs. The child OUs settings override the settings inherited from the parent’s OU
        If any policy is not configured, no inheritance takes place
        Compatible policy settings configured at the parent and child OUs are accumulated.
        Incompatible policy settings from the parent OU are not inherited.
    Question31. What Is Security Filtering? Filtering Scope Of Gpos?
    Answer :

    Although GPOs are linked to the site, domain, or OUs, and they cannot be linked to the security groups directly, applying permissions to the GPO can filter its scope. The policies in a non-local GPO apply only to users who have the Read and Apply Group Policy permissions set to Allow By specifying appropriate permissions to the security groups, the administrators can filter a GPO’s scope for the computers and users.
    Question32. What Is Netlogon Folder?
    Answer :

    Netlogon folder contain logon/logoff/startup/shutdown scripts which is inside the Sysvol folder.
    Question33. Any Sysvol Issues Which You Have Faced In Your Environment?
    Answer :
        USN journal wrap Error on sysvol
        Morphed folder on Sysvol
        FRS replication issues
        Sysvol share not sharing on.
    Question34. Tel Me About Non-authoritative Restore Of Sysvol Or D2 Restore?
    Answer :

    D2 is the default method for restoring SYSVOL and occurs automatically when you do a non-authoritative restore of the Active Directory

    When you non-authoritatively restore the SYSVOL, the local copy of SYSVOL on the restored domain controller is compared with that of its replication partners. After the domain controller restarts, it replicates the any necessary changes, bringing it up-to-date with the other domain controllers within the domain.
    Question35. Tel Me About Authoritative Restore Of Sysvol Or D4 Restore?
    Answer :

    IN D4 restore a copy of SYSVOL that is restored from backup is authoritative for the domain. After the necessary configurations have been made, Active Directory marks the local SYSVOL as authoritative and it is replicated to the other domain controllers within the domain.
    Question36. How To D2 And D4 Restore?
    Answer :

    Enable BurFlags registry to D2 or D4

    HKEY_LOCAL_MACHINESYSTEMCurrentControlSetServicesNtFrsParametersBackup/RestoreProcess at Startup

    BurFlags
        D2, for nonauthoritative mode restore
        D4, for an authoritative mode restore
    Question37. What Is Dns Scavenging?
    Answer :

    DNS Scavenging is to cleanup and removal of stale DNS records, like housekeeping activity to delete unwanted or unused DNS entries in DNS server/zone, it only cleanup the dynamic DNS record not the record created manually.
    Question38. What Is Dynamic Dns Record?
    Answer :

    The record created dynamically by client/server on DNS zone, automatically added to zones when computers start on the network.
    Question39. How To Force The Dns Dynamic Update?
    Answer :

    Simple way is restart the system which trigger the DNS Dynamic Update, we can user the below command to force DNS Dynamic Update

    Ipconfig /registerdns

    You can also restart the netlogon service on service.msc
    Question40. If Dns Dynamic Updates Not Working What Are The Checks Needs To Do?
    Answer :
        Check the primary DNS configuration on the system, Primary DNS server should be reachable from client in order to register DNS record.
        Register this connections addresses in DNS should be selected on network card properties (advance options where you configure the IP Address).
        Also Check the DHCP configuration if the managed through DHCP.
    Question41. What Are Prerequisites To Do The Dns Scavenging?
    Answer :

    Scavenging must be enabled on DNS server and on the zone you want to scavenging.
    DNS records must be dynamically added to zones or you can manually modified the timestamp configuration.
    Question42. What Is Scavenging Period?
    Answer :

    Default value for Scavenging is seven days (the minimum allowed value for this is one hour)
    scavenging time on DNS zone is the server to determine when a zone becomes available for scavenging
    So 7 + 7, every 14 days
    Question43. When The Record Refreshes Happen? (dynamic Updates Of Record)?
    Answer :

    Every DNS record time stamp been updated While the time of computer restart
    A periodic refresh is sent by the computer every 24 hours.
    Network services make refresh attempts, like DHCP servers, which renew client address, cluster servers, which register and update records for a cluster, and the Net Logon service, which can register and update resource records that are used by AD domain controllers So that the record not taken as a stale DNS record.
    Question44. What Is Scavenging Servers? Is Dns Scavenging Configured In All Domain Controllers?
    Answer :

    Not all DNS servers are Scavenging servers, you can configure/promote DNS server to Scavenging servers.
    Zone parameter on advanced settings that enables you to specify a restricted list of IP addresses for DNS servers that are enabled to perform scavenging.