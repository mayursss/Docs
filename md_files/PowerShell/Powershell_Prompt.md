# Powershell Prompt
# What is Powershell Prompt ?
The PowerShell command prompt indicates that PowerShell is ready to run a command
```
PS C:\>
```
# How to get current prompt script details?
To get the script that sets the value of the current prompt, get the `ScriptBlock` property of the `Prompt` function.
``` powershell
(Get-Command prompt).ScriptBlock
```
> Note:Like all functions, the Prompt function is stored in the `Function:` drive. To display the script that creates the current Prompt function, type:
``` powershell
(Get-Item function:prompt).ScriptBlock
```
# How to change PowerShell prompt ?
Powershell prompt can be modified using 'prompt' function.
``` powershell
function prompt {
"PS $((get-date).ToString("dd-MM-yyyy HH:mm")) $(get-location)>"
}
```
```
PS 25-06-2018 12:02 H:\>
```
>Note: The maximum recommended length is 80 characters.

# How to get `[ADMIN]` added to Prompt?
The following code adds "[ADMIN]:" to the built-in PowerShell prompt when PowerShell is opened by using the "Run as administrator" option:
``` powershell
function prompt {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = [Security.Principal.WindowsPrincipal] $identity

  $(if (test-path variable:/PSDebugContext) { '[DBG]: ' }
    elseif($principal.IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")){"[ADMIN]: "}
    else { '' }
  ) + 'PS ' + $(Get-Location) + $(if ($nestedpromptlevel -ge 1) { '>>' }) + '> '
}
```
```
[ADMIN]: PS C:\Windows\system32>
```
# How to save prompt for all session?
The Prompt function exists only in the current session. To save the Prompt function for future sessions, add it to your PowerShell profiles.
``` powershell
## open profile file in notepad and copy & paste below code
notepad $prompt
function prompt {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = [Security.Principal.WindowsPrincipal] $identity

  $(if (test-path variable:/PSDebugContext) {"[DBG]: "}
    elseif($principal.IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")){"[ADMIN]:"}
    else { "" }
  ) +
  $(
  "[$((get-date).ToString("MM/dd/yyyy HH:mm"))] PS $(Get-Location)$(if ($nestedpromptlevel -ge 1) { ">>" })>"
  )
}
```
```
[ADMIN]:[06/25/2018 12:57] PS C:\Windows\system32>
```
