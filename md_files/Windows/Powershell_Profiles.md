# About Profiles

## SHORT DESCRIPTION

Describes how to create and use a PowerShell profile.

# What is PowerShell profile?
You can create a PowerShell profile to customize your environment and to add
session-specific elements to every PowerShell session that you start.
  - You can add
commands, aliases, functions, variables, snap-ins, modules, and PowerShell
drives.

# What are the different profile files?
PowerShell supports several profile files. Also, PowerShell host programs can
support their own host-specific profiles.
The profiles are listed in precedence order. The first
profile has the highest precedence.

|Description               | Path                                     |
|--------------------------|------------------------------------------|
|Current user, Current Host|$Home\\[My]Documents\\WindowsPowerShell\\Profile.ps1|
|Current User, All Hosts   |$Home\\[My]Documents\\Profile.ps1         |
|All Users, Current Host   |$PsHome\Microsoft.PowerShell_profile.ps1  |
|All Users, All Hosts      |$PsHome\Profile.ps1                       |

>The profile paths include the following variables:
- The `$PsHome` variable, which stores the installation directory for
PowerShell
- The `$Home` variable, which stores the current user's home directory

In addition, other programs that host PowerShell can support their own
profiles. For example, PowerShell Integrated Scripting Environment (ISE)
supports the following host-specific profiles.

|Description               | Path                                      |
|--------------------------|-------------------------------------------|
|Current user, Current Host|$Home\\[My]Documents\\WindowsPowerShell\\Microsoft.PowerShellISE_profile.ps1|
|All users, Current Host   |$PsHome\Microsoft.PowerShellISE_profile.ps1|

  - In PowerShell Help, the "CurrentUser, Current Host" profile is the profile
  - most often referred to as "your PowerShell profile".

# What is the profile variable

The `$Profile` automatic variable stores the paths to the PowerShell profiles
that are available in the current session.

To view a profile path, display the value of the `$Profile` variable. You can
also use the `$Profile` variable in a command to represent a path.

The `$Profile` variable stores the path to the "Current User, Current Host"
profile. The other profiles are saved in note properties of the `$Profile`
variable.

For example, the `$Profile` variable has the following values in the Windows
PowerShell console.

|Name                            |Description                |
|--------------------------------|---------------------------|
|$Profile                        |Current User, Current Host |
|$Profile.CurrentUserCurrentHost |Current User, Current Host |
|$Profile.CurrentUserAllHosts    |Current User, All Hosts    |
|$Profile.AllUsersCurrentHost    |All Users, Current Host    |
|$Profile.AllUsersAllHosts       |All Users, All Hosts       |

Because the values of the `$Profile` variable change for each user and in each
host application, ensure that you display the values of the profile variables
in each PowerShell host application that you use.
