# Get-CIUser / Get-PIUser
- This cmdlet retrieves cloud users.
``` powershell
# Gets a list of the users in the specified organization.
Get-CIUser -Org Org
# Gets a list of the organization users that have the "Catalog Author"
Get-CIUser -Org Organization -Role "Catalog Author"  role.
```

# Export-VApp / Export-VM
- This cmdlet exports a vApp or a single virtual machine (VM) to the specified destination.
``` powershell
<# Exports a virtual machine to the same path twice.
 The second time forces an override of the previously exported files.
#>
Export-VM -Destination "C:\MyVMs\" -VM $myVM
Export-VApp -Destination "C:\MyVMs\" -VM $myVM -Force
```

Get-VM
Remove-VM
Set-VM
Get-Task
Remove-VM $vmList -RunAsync
``` powershell
Connect-VIServer #connect to a vCenter Server
```
``` powershell
Connect-CIServer #connect to a vCloud Director
```
# Using ESXCLI with PowerCLI
- PowerCLI provides you the capability to use ESXCLI through its console.
- PowerCLI provides two approaches for working with ESXCLI:
  - Through the `Get-ESXCli` cmdlet, which provides direct access to the ESXCLI namespaces, applications, and commands.
  - Through .NET methods, which you use to create managed objects that correspond to specific ESXCLI applications. To access the ESXCLI, you can call methods on these managed objects.
  > **Note**
  > To call a method of an ESXCLI object, you must provide values for all parameters. If you want to omit a given parameter, pass `$null` as its argument.

# PowerCLI Inventory Provider
The Inventory Provider is designed to expose an unfiltered inventory view of the inventory items from a server.
It enables navigation and file-style management of the VMware vSphere inventory. By creating a PowerShell drive based on a managed object (such as a data center), you can obtain a view of its contents and the relationships between the items. In addition, you can move, rename, or delete objects by running commands from the PowerShell console.
When you connect to a server with Connect-VIServer, the cmdlet builds two default inventory drives: vi and vis. The vi inventory drive shows the inventory on the last connected server. The vis drive contains the inventory of all vSphere servers connected within the current PowerCLI session.
You can use the default inventory drives or create custom drives based on the default ones.
