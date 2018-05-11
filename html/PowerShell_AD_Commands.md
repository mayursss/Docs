# Usefull PowerShell AD Commands with Examples

## **1.** Get-ADUser
  - To get all properties names of AD user account "`user1`"

  ```powershell
  $user = Get-ADUser -Identity user1 -Properties *
  $user.PropertyNames
  ```
  Output
  ```
  AccountExpirationDate
  accountExpires
  AccountLockoutTime
  AccountNotDelegated
  AllowReversiblePasswordEncryption
  BadLogonCount
  badPasswordTime
  badPwdCount
  c
  CannotChangePassword
  CanonicalName
  Certificates
  ciscoEcsbuDtmfId
  ciscoEcsbuListInUMDirectory
  ciscoEcsbuObjectType
  ciscoEcsbuTransferId
  ciscoEcsbuUMLocationObjectId
  ciscoEcsbuUndeletable
  ciscoEcsbuUnityAttributes
  City
  CN
  CN=INHINAC3,OU=_Assigned_Local_Admin_Rights,OU=Workstations,DC=ap,DC=att,DC=com
  co
  codePage
  Company
  Country
  countryCode
  Created
  createTimeStamp
  Deleted
  Department
  Description
  DisplayName
  DistinguishedName
  Division
  DoesNotRequirePreAuth
  dSCorePropagationData
  EmailAddress
  EmployeeID
  EmployeeNumber
  Enabled
  extensionAttribute1
  extensionAttribute11
  extensionAttribute13
  extensionAttribute15
  extensionAttribute2
  extensionAttribute5
  extensionAttribute6
  extensionAttribute7
  extensionAttribute9
  Fax
  garbageCollPeriod
  GivenName
  HomeDirectory
  HomedirRequired
  HomeDrive
  homeMDB
  homeMTA
  HomePage
  HomePhone
  Initials
  instanceType
  internetEncoding
  ipPhone
  isDeleted
  l
  LastBadPasswordAttempt
  LastKnownParent
  lastLogoff
  lastLogon
  LastLogonDate
  lastLogonTimestamp
  legacyExchangeDN
  LockedOut
  lockoutTime
  logonCount
  LogonWorkstations
  mail
  mailNickname
  managedObjects
  Manager
  mDBUseDefaults
  MemberOf
  MNSLogonAccount
  mobile
  MobilePhone
  Modified
  modifyTimeStamp
  msDS-Cached-Membership
  msDS-Cached-Membership-Time-Stamp
  msDS-Site-Affinity
  msDS-User-Account-Control-Computed
  msExchHideFromAddressLists
  msExchHomeServerName
  msExchMailboxAuditEnable
  msExchMailboxAuditLastAdminAccess
  msExchMailboxAuditLastDelegateAccess
  msExchMailboxGuid
  msExchMailboxSecurityDescriptor
  msExchMDBRulesQuota
  msExchOmaAdminWirelessEnable
  msExchPoliciesIncluded
  msExchRBACPolicyLink
  msExchRecipientDisplayType
  msExchRecipientTypeDetails
  msExchSafeSendersHash
  msExchTextMessagingState
  msExchUMDtmfMap
  msExchUserAccountControl
  msExchUserCulture
  msExchVersion
  msExchWhenMailboxCreated
  Name
  nTSecurityDescriptor
  ObjectCategory
  ObjectClass
  ObjectGUID
  objectSid
  Office
  OfficePhone
  Organization
  OtherName
  PasswordExpired
  PasswordLastSet
  PasswordNeverExpires
  PasswordNotRequired
  physicalDeliveryOfficeName
  POBox
  PostalCode
  PrimaryGroup
  primaryGroupID
  ProfilePath
  ProtectedFromAccidentalDeletion
  proxyAddresses
  pwdLastSet
  SamAccountName
  sAMAccountType
  ScriptPath
  sDRightsEffective
  ServicePrincipalNames
  showInAddressBook
  showInAdvancedViewOnly
  SID
  SIDHistory
  SmartcardLogonRequired
  sn
  st
  State
  StreetAddress
  Surname
  telephoneNumber
  textEncodedORAddress
  Title
  TrustedForDelegation
  TrustedToAuthForDelegation
  UseDESKeyOnly
  userAccountControl
  userCertificate
  UserPrincipalName
  uSNChanged
  uSNCreated
  whenChanged
  whenCreated
  ```
  - To get only specific information for user store output to variable and then access user account attributes, see below example.
  ``` powershell
  $user =  Get-ADUser -Identity ms458j -Properties *
  ## Now access the specific details as below
  "Account Expiry Date :`t$($user.AccountExpirationDate)"  ## Account Expiry date
  "User Name :`t$($user.Name)" ## Gives user name
  "Account Enabled?`t$($user.Enabled)" ## Check if account is Enabled or not , it returns True/False
  "User Name :`t$($user.HomeDrive)" ## Gives user home Drive name
  "User Home Directory path :`t$($user.HomeDirectory)" ## Gives user home Drive path
  "Password last changed :`t$($user.PasswordLastSet)" ## Gives user last password changed date & time.
  "Last Logon Date :`t$($user.LastLogonDate)" ## Gives user last logon date & time.
  "User Display Name :`t$($user.DisplayName)" ## Gives user name
  "User Email ID :`t$($user.EmailAddress)" ## Gives user email ID
  "User Full ID :`t$($user.UserPrincipalName)" ## Gives user full login ID
  "Failed Logon attempt count :`t$($user.BadLogonCount)" ## Gives failed login attempt count
  "User Login ID :`t$($user.SamAccountName)" ## Gives user login ID
  "Account Locked :`t$($user.LockedOut)" ## Check account is locked True/False
  "Account OU :`t$($user.DistinguishedName )" ## Provide OU info
  ```
  Output
  ```
  Account Expiry Date :	12/31/2021 17:00:00
  User Name :	user1
  Account Enabled?	True
  User Name :	H:
  User Home Directory path :	\\FPServer01.test.local.com\users\user1
  Password last changed :	03/26/2018 08:31:38
  Last Logon Date :	05/07/2018 17:44:11
  User Display Name :	user1
  User Email ID :	user1@test.local.com
  User Full ID :	user1@test.local.com
  Failed Logon attempt count :	0
  User Login ID :	user1
  Account Locked :	False
  Account OU :	CN=user1,OU=User Accounts,OU=Accounts,DC=ap,DC=att,DC=com
  ```

## 2. Get-ADComputer
- To get all properties names of AD computer account "`computer1`"
  ```powershell
  $AD_computer = Get-ADComputer computer1 -Properties *
  $AD_computer.PropertyNames
  ```
  Output
  ```
  AccountExpirationDate
  accountExpires
  AccountLockoutTime
  AccountNotDelegated
  AllowReversiblePasswordEncryption
  BadLogonCount
  CannotChangePassword
  CanonicalName
  Certificates
  CN
  codePage
  countryCode
  Created
  createTimeStamp
  Deleted
  Description
  DisplayName
  DistinguishedName
  DNSHostName
  DoesNotRequirePreAuth
  dSCorePropagationData
  Enabled
  HomedirRequired
  HomePage
  instanceType
  IPv4Address
  IPv6Address
  isCriticalSystemObject
  isDeleted
  LastBadPasswordAttempt
  LastKnownParent
  lastLogon
  LastLogonDate
  lastLogonTimestamp
  localPolicyFlags
  Location
  LockedOut
  logonCount
  ManagedBy
  MemberOf
  MNSLogonAccount
  Modified
  modifyTimeStamp
  msDS-SupportedEncryptionTypes
  msDS-User-Account-Control-Computed
  Name
  nTSecurityDescriptor
  ObjectCategory
  ObjectClass
  ObjectGUID
  objectSid
  OperatingSystem
  OperatingSystemHotfix
  OperatingSystemServicePack
  OperatingSystemVersion
  PasswordExpired
  PasswordLastSet
  PasswordNeverExpires
  PasswordNotRequired
  PrimaryGroup
  primaryGroupID
  ProtectedFromAccidentalDeletion
  pwdLastSet
  SamAccountName
  sAMAccountType
  sDRightsEffective
  ServiceAccount
  servicePrincipalName
  ServicePrincipalNames
  SID
  SIDHistory
  TrustedForDelegation
  TrustedToAuthForDelegation
  UseDESKeyOnly
  userAccountControl
  userCertificate
  UserPrincipalName
  uSNChanged
  uSNCreated
  whenChanged
  whenCreated
  ```
- To get only specific information for computer account, store output to variable and then access account attributes, see below example.
```powershell
"Account Enabled?`t$($AD_computer.Enabled)" ## Check if account is Enabled or not , it returns True/False
"Computer Name :`t$($AD_computer.Name)" ## Gives computer name
"Password last changed :`t$($AD_computer.PasswordLastSet)" ## Gives last password changed date & time.
"Last Logon Date :`t$($AD_computer.LastLogonDate)" ## Gives last logon date & time.
"Computer FQDN :`t$($AD_computer.DNSHostName)" ## Gives computer FQDN
"User Login ID :`t$($AD_computer.SamAccountName)" ## Gives SAM ID
"Account Locked :`t$($AD_computer.LockedOut)" ## Check account is locked True/False
"Account OU :`t$($AD_computer.DistinguishedName )" ## Provide OU info
"Computer IP4 Address :`t$($AD_computer.IPv4Address )" ## Provide IP4 info
"Operating System :`t$($AD_computer.OperatingSystem )" ## Provide Operating System info
```
```
Account Enabled?	True
Computer Name :	COMPUTER1
Password last changed :	05/08/2018 19:27:08
Last Logon Date :	05/05/2018 17:53:12
Computer FQDN :	COMPUTER1.test.local.com
User Login ID :	COMPUTER1$
Account Locked :	False
Account OU :	CN=COMPUTER1,OU=Workstations,DC=test,
DC=local,DC=com
Computer IP4 Address :	192.168.1.10
Operating System :	Windows 7 Professional
```

## 3. Get-ADOrganizationalUnit
- To get Organization Unit details
``` powershell
Get-ADOrganizationalUnit -Filter "Name -like `"Accounts`"" | select DistinguishedName
Get-ADOrganizationalUnit -Filter "Name -like `"User Accounts`"" | select DistinguishedName
Get-ADOrganizationalUnit -Filter "Name -like `"Workstations`"" | select DistinguishedName
Get-ADOrganizationalUnit -Filter "Name -like `"Servers`"" | select DistinguishedName
```
Output

  ```
  DistinguishedName                                                       
  -----------------       
  OU=Accounts,DC=test,DC=local,DC=com                                         
  OU=User Accounts,OU=Accounts,DC=test,DC=local,DC=com                               
  OU=Workstations,DC=test,DC=local,DC=com                                     
  OU=Servers,DC=test,DC=local,DC=com  
  ```

## 4. Get-ADDomain
- To get Domain details

  ``` powershell
  Get-ADDomain
  ```
  Output

  ```
  AllowedDNSSuffixes                 : {}
  ChildDomains                       : {}
  ComputersContainer                 : OU=_New_Domain_Computers,OU=Workstations,DC=test,DC=local,DC=com
  DeletedObjectsContainer            : CN=Deleted Objects,DC=test,DC=local,DC=com
  DistinguishedName                  : DC=test,DC=local,DC=com
  DNSRoot                            : test.local.com
  DomainControllersContainer         : OU=Domain Controllers,DC=test,DC=local,DC=com
  DomainMode                         : Windows2008R2Domain
  DomainSID                          : S-1-5-21-1039142878-192558930-806110124
  ForeignSecurityPrincipalsContainer : CN=ForeignSecurityPrincipals,DC=test,DC=local,DC=com
  Forest                             : test.local.com
  InfrastructureMaster               : DC03.test.local.com
  LastLogonReplicationInterval       :
  LinkedGroupPolicyObjects           :
  LostAndFoundContainer              : CN=LostAndFound,DC=test,DC=local,DC=com
  ManagedBy                          :
  Name                               : TEST
  NetBIOSName                        : TEST.LOCAL
  ObjectClass                        : domainDNS
  ObjectGUID                         : c443014f-6c7a-4711-ac91-b6930305667d
  ParentDomain                       :
  PDCEmulator                        : DC03.test.local.com
  QuotasContainer                    : CN=NTDS Quotas,DC=test,DC=local,DC=com
  ReadOnlyReplicaDirectoryServers    : {DC01.test.local.com}
  ReplicaDirectoryServers            : {DC02.test.local.com,DC03.test.local.com}
  RIDMaster                          : DC03.test.local.com
  SubordinateReferences              : {DC=DomainDnsZones,DC=test,DC=local,DC=com}
  SystemsContainer                   : CN=System,DC=test,DC=local,DC=com
  UsersContainer                     : CN=Users,DC=test,DC=local,DC=com  
  ```
- Some mostly used Domain properties
```powershell
Get-ADDomain | select DistinguishedName,DNSRoot,DomainMode,InfrastructureMaster,PDCEmulator,RIDMaster,NetBIOSName,ReplicaDirectoryServers  | fl
```
Output
```
DistinguishedName       : DC=test,DC=local,DC=com
DNSRoot                 : test.local.com
DomainMode              : Windows2008R2Domain
InfrastructureMaster    : DC03.test.local.com
PDCEmulator             : DC03.test.local.com
RIDMaster               : DC03.test.local.com
NetBIOSName             : TEST.LOCAL
ReplicaDirectoryServers : {DC02.test.local.com,DC03.test.local.com}
```

## 5. Get-ADDomainController
- This Command will give details for domain Controller, you can pass DC name or it will take default DC it finds.
``` powershell
Get-ADDomainController
```
Output
```
ComputerObjectDN           : CN=DC03,OU=Domain Controllers,DC=test,DC=local,DC=com
DefaultPartition           : DC=test,DC=local,DC=com
Domain                     : test.local.com
Enabled                    : True
Forest                     : test.local.com
HostName                   : DC03.test.local.com
InvocationId               : df3d38de-1420-45b5-b241-78498c82db3e
IPv4Address                : 135.75.88.19
IPv6Address                :
IsGlobalCatalog            : True
IsReadOnly                 : False
LdapPort                   : 389
Name                       : DC03
NTDSSettingsObjectDN       : CN=NTDS Settings,CN=DC03,CN=Servers,CN=Sites,CN=Configuration,DC=intl,DC=att,DC=com
OperatingSystem            : Windows Server 2012 R2 Standard
OperatingSystemHotfix      :
OperatingSystemServicePack :
OperatingSystemVersion     : 6.3 (9600)
OperationMasterRoles       : {}
Partitions                 : {DC=DomainDnsZones,DC=test,DC=local,DC=com,
                             DC=test,DC=local,DC=com,
                             DC=ForestDnsZones,DC=test,DC=local,DC=com, CN=Schema
                             ,CN=Configuration,DC=test,DC=local,DC=com...}
ServerObjectDN             : CN=DC03,CN=Servers,CN=Sites,CN=Configuration,DC=test,DC=local,DC=com
ServerObjectGuid           : 750daf39-8ca4-4e22-b951-8cdb1c62ccca
Site                       :
SslPort                    : 636
```

## 5. New-ADUser
- Using cmdlets
``` powershell
New-ADUser -Name "User2" `
-SamAccountName "user2" `
-GivenName "user2" `
-Surname "" `
-Path 'ou=users,dc=test,local,dc=com' `
-DisplayName "user2" `
-AccountPassword $null `
-CannotChangePassword $false `
-ChangePasswordAtLogon $true `
-UserPrincipalName "user2@test.local.com"
```
Creating users in bulk with Microsoft cmdlets
``` powershell
Import-Csv -Path users2.csv | foreach {
New-ADUser -Name "$($_.Given) $($_.Surname)" `
-SamAccountName $_.Id `
-GivenName $_.Given `
-Surname $_.Surname `
-Path 'ou=users,dc=test,local,dc=com' `
-DisplayName "$($_.Given) $($_.Surname)" `
-AccountPassword $null `
-CannotChangePassword $false `
-ChangePasswordAtLogon $true `
-UserPrincipalName "$($_.Id)@test.local.com"
}
```
Modifying user attributes.
```powershell
Get-ADUser -Identity user1 | Set-ADUser -Department Geology
```
Searching for a user account.
```powershell
Get-ADUser -Identity user1
```
List Disabled user accounts
```powershell
Search-ADAccount -AccountDisabled -UsersOnly |
select Name, distinguishedName
```
Locked user accounts
```powershell
Search-ADAccount -LockedOut | select Name,SamAccountName |ft
```
Enabling and disabling accounts
``` powershell
Disable-ADAccount -Identity HSorby
Enable-ADAccount -Identity HSorby
```
Moving accounts
``` powershell
Move-ADObject
-Identity "CN=HUXLEY Thomas,ou=starking,dc=manticore,dc=org"
-TargetPath "ou=england,dc=manticore,dc=org"
```
Last logon times on each DC
``` powershell
$servers = Get-ADDomainController -Filter * | select Name
foreach ($server in $servers){
$user = Get-ADUser `
    -Identity ms458j `
    -Properties SamAccountName, lastlogon, lastlogondate, lastlogontimestamp `
    -Server $($server.Name)
    if ($user.lastLogon -eq $null){

        }
    else{
        $t1 = [Int64]::Parse($($user.lastLogon))
        $d1 = [DateTime]::FromFileTime($t1)
        $t2 = [Int64]::Parse($($user.lastLogontimestamp))
        $d2 = [DateTime]::FromFileTime($t2)
    }
Add-Member -InputObject $($user) -MemberType Noteproperty -Name "DCName" -Value $($server.Name) -PassThru -Force |
Format-Table `
    SamAccountName,
    DCName,
    @{Name="LastLogonTime"; Expression={$($d1)}},
    lastlogondate,
    @{Name="LastLogonTimeStamp"; Expression={$d2}
}}
```
Get Last logon details for user1
``` powershell
Get-ADUser user1 -Properties * | select `
@{Name="ID"; Expression={$($_.samAccountName)}},
@{Name="lastlogon"; Expression={$([DateTime]::FromFileTime($_.lastlogon))}},
lastlogondate,
@{Name="lastlogontimestamp"; Expression={$([DateTime]::FromFileTime($_.lastlogontimestamp))}}
```
Password expiration check
``` powershell
Get-ADUser -Filter {PasswordLastSet -le $expired_date}  -Properties PasswordLastSet |
    select SamAccountName,PasswordLastSet |
    Sort-Object -Property PasswordLastSet
```
New-ADGroup
``` powershell
New-ADGroup -Name "English Scientists" -SamAccountName EngSci `
-GroupCategory Security -GroupScope Global `
-DisplayName "English Scientists" `
-Path "OU=England,dc=manticore,dc=org" `
```
Changing Active Directory group membership
``` powershell
Get-ADUser -Filter {Title -eq "Scientist"} `
-SearchBase "OU=England,dc=manticore,dc=org" |
foreach {Add-ADGroupMember -Identity EngSci -Members $($_.DistinguishedName) }
```
Changing Active Directory group scope
``` powershell
Get-ADGroup -Identity testgrp ## get scope
Set-ADGroup -Identity testgrp -GroupScope Universal ## change scope
Get-ADGroup -Identity testgrp ## check scope again
```
Finding group members
``` powershell
Get-ADGroupMember -Identity testgrp | select Name, distinguishedname
```
Get nested group membership
``` powershell
Get-ADGroupMember -Identity testgrp -Recursive | select Name, distinguishedname
```
Finding a user’s group membership
``` powershell
$user = Get-ADUser user1 -Properties *
foreach ($group in $user.memberof){
    Get-ADGroup $group | select Name
    }
```
