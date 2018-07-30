- We can use invoke-command and give server array list in `-ComputerName` switch.
``` powershell
$servers = 'server1','server2','server3'
$cred = Get-Credential
Invoke-Command -ComputerName $servers -ScriptBlock {echo  $env:COMPUTERNAME}
```
```
server1
server2
server3
```
- To pass function we can either use external file or code below.
``` powershell
$servers = 'server1','server2','server3','server4'
$cred = Get-Credential
function a {
  echo "Function a $env:COMPUTERNAME"
}
Invoke-Command -ComputerName $servers -ScriptBlock ${function:a} -Credential $cred
```
```
Function a server1
Function a server2
Function a server3
Function a server4
```
- To pass multiple functions
``` powershell
$servers = 'server1','server2','server3','server4'
$cred = Get-Credential
$a = {
function a {
echo "Function a $env:COMPUTERNAME"
}
function b {
echo "Function b $env:COMPUTERNAME"
}
function c {
echo "Function c $env:COMPUTERNAME"
}
a
b
c
}
$a.Invoke()
Invoke-Command -ComputerName $servers -ScriptBlock $a -Credential $cred
```
```
Function a server1
Function b server1
Function c server1
Function a server2
Function b server2
Function c server2
Function a server3
Function b server3
Function c server3
Function a server4
Function b server4
Function c server4
```
- To pass script file test3.ps1
``` powershell
# test3.ps1 code
function a {
echo "Function a $env:COMPUTERNAME"
}
function b {
echo "Function b $env:COMPUTERNAME"
}
function c {
echo "Function c $env:COMPUTERNAME"
}
a
b
c
```
``` powershell
$servers = 'server1','server2','server3','server4'
$cred = Get-Credential
Invoke-Command -ComputerName $servers -FilePath .\Desktop\test3.ps1 -Credential $cred
```
