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
notepad $profile
function prompt {
  $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
  $principal = [Security.Principal.WindowsPrincipal] $identity

  $(if (test-path variable:/PSDebugContext) {"[DBG]: "}
    elseif($principal.IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")){"[ADMIN]:"}
    else { "" }
  ) +
  $(
  "[$((get-date).ToString("MM/dd/yyyy hh:mm:ss tt zzz"))] PS $(Get-Location)$(if ($nestedpromptlevel -ge 1) { ">>" })>"
  )
}
```
```
[ADMIN]:[06/25/2018 12:57] PS C:\Windows\system32>
```
# How to add color in prompt
To add color we need to add escape sequence along with code before text.

### Example to change foreground / background color.
`ESC[<SGR code>;5;<color code>m`

- `ESC` this is escape character (in powershell we can get this ASCII character using `[char]27` option)
- `[` Control Sequence Introducer
- `SGR code` (Select Graphic Rendition) this sets the display attributes like color , text style etc.
Example:
`38` foreground color
`48` Set background color
- `5;` Not sure what it does
- `<color code>` ths is actual color code, see WIKIpedia page for all color code options

below code will set foreground color to black (color code 16).
``` ps1
"$([char]27)[38;5;16mOur Text"
```
> Please note: do not add any space after color code and `m` character it will not display color as we need it.

### Rest console color back to normal after we display `Our Text`
To rest console back to what it was , just use SRS code 0 in escape sequence as below.
- SRS code `0` set all attributes to off and rest it back to normal. 

``` ps1
"$([char]27)[0m"
```

### Make it simple
Now to make it easy we can add this codes in variables and use them in powershell.

Example
``` ps1
# add escape code to variable
$e = [char]27
# add SRS code to variable 
$foregroundColor = 38 
# add color code to variable 
$color = 16

# add reset code to variable 
$reset = "$([char]27)[0m"

# now use it
"$e[$foregroundColor;5;$color$("m")Our Text$reset"

```
