<style>.prePS1 {
  white-space: pre;
  word-wrap: normal;
  display: block;
  overflow: auto;
  background-color: rgb(0,128,128);
  color:yellow;
  padding:1em;
  font-family: monospace;
  line-height: 1.15;
  font-size: 0.85em;
  border-radius: 4px;}</style>
# Write-progress Examples
#### Below code will count 1 to 10001 and show progress bar
``` powershell
for ($I = 1; $I -lt 10001; $I++ )
{Write-Progress -Activity "Search in Progress" -Status "$([math]::Floor($($I/10001*100))) % Complete:" -PercentComplete $($I/10001*100);}
```

<div class="prePS1">Search in Progress
47 % Complete:
[ooooooooooooooooooooo                                                          ]
</div>

#### Below Code will show two progress bar
``` powershell
for($I = 1; $I -lt 101; $I++ )
{Write-Progress -Activity Updating -Status 'Progress->' -PercentComplete $I -CurrentOperation OuterLoop; `
for($j = 1; $j -lt 101; $j++ )
{Write-Progress -Id 1 -Activity Updating -Status 'Progress' -PercentComplete $j -CurrentOperation InnerLoop} }
```
<div class="prePS1">Updating
    Progress->
    [oooooooooooooooooooooooooooooooooo                                                                          ]
  <br>
  OuterLoop
Updating
    Progress
    [oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo                                                ]
    InnerLoop
</div>

#### Below code will show progress bar while searching for error message in logs
``` powershell
$Events = Get-EventLog -logname system
$Events | foreach-object -begin {
    clear-host;
    $I=0;
    $out=""
} -process {
    if($_.message -like "*bios*"){
    $out=$out + $_.Message
    };
    $I = $I+1;
    Write-Progress -Activity "Searching Events" -Status "Progress:" -PercentComplete ($I/$Events.count*100)
   } -end {
$out
}

Write-Verbose -Message "Searching the Application Event Log." -Verbose
```
<div class="prePS1">Searching Events
    Progress:
    [oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo                                            ]
</div>
