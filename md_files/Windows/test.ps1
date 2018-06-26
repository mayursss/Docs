Install-ADDSDomainController `
       -NoGlobalCatalog:$false `
       -CreateDnsDelegation:$false `
       -CriticalReplicationOnly:$false `
       -DatabasePath "C:\Windows\NTDS" `
       -DomainName "CohoVineyard.com" `
       -InstallDns:$true `
       -LogPath "C:\Windows\NTDS" `
       -NoRebootOnCompletion:$true `
       -ReplicationSourceDC "CVDC1.CohoVineyard.com" `
       -SiteName "Ohio" `
       -SysvolPath "C:\Windows\SYSVOL" `
       -Force:$true `
       -Credential $using:cred `
       -Confirm:$false `
       -SafeModeAdministratorPassword `
           (ConvertTo-SecureString 'P@ssw0rd' -AsPlainText -Force)
