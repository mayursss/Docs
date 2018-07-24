## Where to find product id of the installed packages?
``` powershell
Get-ChildItem HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\
Get-ChildItem HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall
```
> Better to use wmi win32_prodcut  class

## To get Application GUID use below Powershell code
``` powershell
$path = "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\"
Get-ChildItem -Path $path | ForEach-Object -Process { "$($_.GetValue('DisplayName')) $($_.GetValue('ModifyPath'))"
}
```

## Uninstall Apps
Removing other applications is not quite so simple, even when done locally. We can find the command line uninstallation strings for these applications by extracting the `UninstallString` property.
``` powershell
$path = "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\"
Get-ChildItem -Path $path | ForEach-Object -Process { $_.GetValue('UninstallString') }
```
