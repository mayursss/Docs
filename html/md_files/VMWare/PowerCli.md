### Connect to a vCenter Server System
- Run Connect-VIServer with the server name and valid credentials.
``` powershell
Connect-VIServer -Server vc3.example.com -User 'MyAdministratorUser' -Password 'MyPassword'
```

### Create Patch Baselines
1. Retrieve all host patches released after 1 Jan 2015 for ESXi products, and create a fixed baseline named Static Baseline, containing the retrieved patches.
``` powershell
$patches = Get-Patch -After "1 Jan 2015" -Product "ESXi"
$staticBaseline = New-PatchBaseline -Static -Name "Static Baseline" -IncludePatch $patches
```
2. Create a critical dynamic baseline named Dynamic Baseline by using a fetch-all query.
``` powershell
$criticalPatchBaseline = New-PatchBaseline -Dynamic -Name "Dynamic Baseline" -SearchPatchSeverity Critical
```
3. Create an extension baseline that contains all available extensions.
``` powershell
$extensions = Get-Patch -BundleType Extension
New-PatchBaseline -Static -Name "Extension Baseline" -Extension -IncludePatch $extensions
```

### Attach and Detach Baselines
1. Attach the host patch baselines stored in the provided variables to the host named Host.
``` powershell
Add-EntityBaseline -Baseline $staticBaseline, $criticalPatchBaseline -Entity Host
```
2. Detach the two baselines from the host.
``` powershell
Remove-EntityBaseline -Baseline $dynamicBaseline, $staticBaseline -Entity Host
```

### Scan a Virtual Machine
1. Initialize scanning on a virtual machine that is named VM against baselines containing virtual machine hardware upgrades and VMware Tools upgrades.
``` powershell
$task = Test-Compliance -Entity VM -UpdateType VmHardwareUpgrade, VmToolsUpgrade -RunAsync
```
The command initializes a task on the server, returns a snapshot object of the initial state of the task, and saves it in the `$task` variable.

2. View the initial status of the scanning task.
$task
>**Note**
>
>The task object is not updated with the actual state of the task process running on the server. Even after the task is completed, the $task variable value is running. To view the actual status of the tasks running on the server, use the `Get-Task` cmdlet.

3. (Optional) Run the `Wait-Task` cmdlet to monitor the process progress and wait for the task to complete before running other commands.
``` powershell
Wait-Task -Task $task
```
