# Powershell IMP Points

# How to map a network drive in PowerShell?
To map a network drive in PowerShell you have to use the command like
``` powershell
$Net = $(New-Object –ComObject Wscript.Network)
$Net.MapNetworkDrive('S:','\\Server\testshare')
```
# What are the three ways that PowerShell uses to ‘Select’?

- The most common way is in a WMI Query Language (WQL) statement. In this technique Wmiobject uses `-query` to introduce a classic `Select * from` a phrase
- The second context for `Select` in PowerShell is `Select-String`. This cmdlet checks for a word, phrase or any pattern match
- Another way is `Select-Object`

# How to rename variable
``` powershell
$var1 = "test"
Rename-Item -Path Variable:\var1 –NewName MyRenamedVar
```
