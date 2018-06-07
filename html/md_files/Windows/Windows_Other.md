# Netlogon error after patching
- In Windows XP, type the following command, and then press ENTER:
```
secedit /configure /cfg %windir%\repair\secsetup.inf /db secsetup.sdb /verbose
```
- In Windows Vista, type the following command, and then press ENTER:
```
secedit /configure /cfg %windir%\inf\defltbase.inf /db defltbase.sdb /verbose
```

# HP PSP Installation
1.   Obtain server name that requires the PSP update from the spreadsheet provided in the Vantive Request Management.
2.   Go to the WITT Server Database and enter the server name in the Server name or ID simple search field.
3.   Note the Server Model and Operating System. This information is needed to determine which PSP version that will be applied to the server.
4.   Go to the Model & PSP Version tab in the spreadsheet. Cross reference the server model and operating system in spreadsheet. Column B is the SERVER_MODEL type and columns C, D and E are the operating systems. The matrix will list the PSP version to apply.
5.   For the PSP 7.6 update, map to Integration server
        `\\ILHOES1ENGCPQ01\INCOMING\MR2009\WSH Customized PSP7.6\Setup.exe`
6.   For the PSP 8.0 update, map to any Integration server:   
         `\Srvr Software\HP\_Qtr_Release\08R3\WITT_PSP\Setup.exe`
7.   Execute the Setup.exe file: 	
   	For PSP 7.6, the HP Remote Deployment Utility will list the software to be installed and only install those components that are not at the current level. Click the Install button to begin the installation.
   	For PSP 8.0, the HP Smart Update Manager will be used to update the server. You need to determine if the operating system is 32 bit or 64 bit. Click start, right click My Computer and select
             Properties. The General tab in the System section will list Enterprise x64 Edition or Standard Edition.
 	1 - The HP Smart Update Manager Select Installation Host(s) will default to Local Host (server name) option. Click Next to continue.
 	2  The Select Bundle Filter will list 3 options to choose from. For Windows Server 2003 32-bit, select the first option Proliant Support Pack for Microsoft Windows Server 2003. For Windows Server
                             2003 64-bit, select the second option Proliant Support Pack for Microsoft Windows Server 2003 x64 Editions.
 	3  For the Set Options for Bundle Filter, select ALLOW NON-BUNDLE VERSIONS and ALLOW NON-BUNDLE PRODUCTS, then click OK
 	4  Click the Install button to proceed with the installation.
  	5  The Installation Results will be displayed and viewable in the View Installation Log.
 	6  Reboot server.      
8.   The complete results of the PSP installation are located in `C:\CPQSYSTEM\log\cpqsetup.log`. Review the log for any failures.
9.   If you cannot resolve the failure, please refer the problem to WSH Tier 3.

>Path
- PSP7.6: (2000 Server)
`\\144.158.35.16\cpqis1\INCOMING\MR2009\WSH Customized PSP7.6`
- PSP 8.0 : (2003 server)
`\\144.158.35.16\cpqis1\Srvr Software\HP\_Qtr_Release\08R3\WITT_PSP`

# Array Diagnostic Utility
### DELL SERVERS
Download link to Online Diagnostics. This Diagnostic is used to test the Server and in this case, the RAID Chain with hard drives:

Dell Online Diagnostics
http://ftp.us.dell.com/diags/dell-onlinediags-win32-2.12.0.71.exe

Dell Online Diagnostics Descriptive Text File
http://ftp.us.dell.com/diags/dell-onlinediags-win32-readme-2.12.0.71.txt

The basic steps to run the Diagnostics on the RAID Chain, which includes the PERC4e\DI controller, their SCSI cables, the SCSI Backplane and the SCSI drives are as follows:

1.       Download the onlindiags from the link above to the server to be tested
2.       Double-click on the downloaded file
3.       Install the diagnostics to the Server [Note: NO restart is required]
4.       Go to Start \ All Programs \ Online Diagnostics  \ Online Diagnostics GUI
5.       The program will enumerate the hardware components and will open with the components list in about 30 seconds.
6.       On the Left hand side of the screen, drill down in the various "PCI Bus" listings, until you find the PERC4 controller
7.       Left click on the square box to the left of the PERC controller, and notice that all the components below the PERC will be checked also.
8.       Leave every item checked.
9.       Go to the bottom of the Right side of the screen, and Left Click the square box to the left of "Quick Test"
10.       Move your cursor to the left and click the box that says "Run Test"
11.       The test will take from two to four minutes [in most cases] for each drive [some of the test run concurrently]
12.       When the test has completed, select the Results tab at the top of the Right side of the page: the test results will be listed.

If the Drive in question has a Green check mark, it has passed the test, and can be rebuilt into the Array.

If the drive has passed, I would check the RAID controller firmware to make sure it is current. The most current firmware and drivers will most likely prevent further good drives from dropping out of the Array.

Let me know the test results!

Email may be the most efficient way to contact me as I may be on another line at the time you need assistance. Please use this email to request assistance or notify me if the issue has been resolved.

### HP SERVERS
HP SIM me Array digonistic Utlity click ..then run the report and save.
then save the report in share drive.\\01al10015008003.ad.bls.com\relmgt$
All Programs>HP System Tools> HP Array Diagonostic Utility> click on HP Array Diagonostic Utility
it will run and will give one report save that on desktop.. Also Copy the report and save that in ur local desktop in text file. and attach that in AOTS case.
To attach in AOTS case go to attachment tab and right click.Click on ADD and browse the C$ there go to desktop and attach the report
_____________________________________________________________
Instructions for running ADU

Log into server with Problem
Map a drive to \\D072007\rcta
cd \Public\HP\ADU

Run batch file
RUNADU.bat


# NIC Teaming
TEAMING

If not present, there is a good possibility that the NIC teaming is corrupted.

4. Is the &#8220;TEAM&#8221; or HP Network Team #1 is listed in the Network Connections properties? If not, go to 4e.
If so,
a. right click the name &#8220;TEAM&#8221; and select properties
b. Go to the General tab, scroll down to HP Network Configuration Utility and click the Properties option.
c. If the &#8220;HP Network Configuration Utility&#8221; Properties appear, then go to step 9 and execute the NCU update.
d. If it does not appear, attempt to uncheck the HP Network Configuration Utility. Click OK
e. Now open the Computer Management MMC. Select the Device Manager, and then Network adapters. If &#8220;HP Network Team&#8221; is listed, select it. Right click and choose Uninstall.
5. Configure a single NIC to get the server back onto the network. (Don&#8217;t forget to perform the following from a command prompt type: ipconfig /registerdns)
6. Map to the closes Integration server.
7. Update the individual NIC drivers using the following script: &#8220;NIC drivers.cmd&#8221; located in
x:\Srvr Software\HP\_Qtr_Release\Current_Qtr\WITT_PSP\
The following drivers are executed in the &#8220;NIC drivers.cmd&#8221; script:
HP NC31xx Fast Ethernet NIC Driver for Windows Server 2003
HP NC-Series Intel Driver for Windows Server 2003
HP NC-Series Broadcom Driver for Windows Server 2003
HP NC-Series Multifunction Driver for Windows Server 2003
HP NC-Series Intel N1E Driver for Windows Server 2003
8. Reboot the server
9. Update the Network Configuration Utility (NCU) with CP007625.EXE located in &#8220;x:\Srvr Software\HP\_Qtr_Release\Current_Qtr\WITT_PSP\&#8221; (HP Network Configuration Utility for Windows Server 2003).
10. Team the NICS and configure the IP information. For servers that have multiple IP addresses, add them through the advance options.
11. From a command prompt type: ipconfig /registerdns
12. Also don&#8217;t forget to uncheck the heartbeat settings when you redo the teams.


If this process fails, configure one of the network cards to get the server back onto the network. Refer the ticket to WITT Problem Management

# SAN Path Validation
For a quick refresh..
We have mainly three types SANs. Hitachi, EMC and VEA.

Command to validate the paths:

Hitachi
```
dlnkmgr view path
dlnkmgr online path
dlnkmgr online path --- to bring the drives online --
```

EMC Powerpath software
The dead column should be 0 which indicates zero dead paths)
```
powermt display paths
powermt display dev=all
```

VEA
```
vxdmpadm dsminfo
vxdmpadm pathinfo diskname
```

Vertias Volume manager
```
#this command will show dynamic disk group list
vxdg list
# this will rescan disk
vxassist refresh
#this will import dynamic disk group.
#vxdg -g(Diskgroup_name) import -f
#E.G
vxdg -gDynamicDiskGrp_JL iimport -f
```

# run ping command for multiple hosts
```
cmd /k for /f %i in (d:\uptime.txt) do @echo %i: && ping.exe "%i">>"d:\results.csv"
cmd /k for /f %i in (d:\uptime.txt) do @echo %i: && uptime.exe "%i">>"d:\results.csv"
```
