# Using ESXCLI for Host Management
- You can manage many aspects of an ESXi host by using commands from the ESXCLI command set. You can run ESXCLI commands as vCLI commands, or run them in the ESXi Shell in troubleshooting situations.
- You can also run ESXCLI commands from the PowerCLI shell by using the `Get-EsxCli` cmdlet.
- The set of ESXCLI commands that are available on a host depends on the host configuration.
```
esxcli --server <MyESXi> --help
```

# ESXCLI Syntax
Each ESXCLI command uses the same syntax.

The following is the standard syntax structure of an ESXCLI command.
```
esxcli [dispatcher options] <namespace> [<namespace> ...] <cmd> [cmd options]
```
The following examples show how you can use commands
```
esxcli --server myESXi --username user1 --password 'my_password' storage nfs list
esxcli --server myVCServer --username user1 --password 'my_pwd' --vihost myESXi.mycompany.com storage nfs list
```

# Running ESXCLI Commands Installed as Part of vCLI
- You can run an ESXCLI command, installed as part of vCLI, in the ESXi Shell for troubleshooting purposes and remotely against a specific host or against a vCenter Server system.
- Deploy the vMA appliance, which includes vCLI and ESXCLI, on an ESXi system and authenticate against a set of target servers. You can then run ESXCLI commands against any target server by specifying the --host dispatcher option. No additional authentication is required. See the vSphere Management Assistant Guide.
- Install the vCLI package on one of the supported Windows or Linux systems. The ESXCLI command set is included. Specify connection options to run commands against an ESXi host directly, or target a vCenter Server system and specify the ESXi host to run the command against. See Installing vCLI.
> Note
>
> Starting with vSphere 6.0, a trust relationship must exist between the host from which you run ESXCLI commands and the target ESXi host or vCenter Server system.
