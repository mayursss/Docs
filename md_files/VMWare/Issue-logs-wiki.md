# Network connectivity to a RedHat 6.x virtual machine that uses a VMXNET3 network adapter is lost after a vMotion migration.
- You are unable to connect to a RedHat 6.x virtual machine that was migrated using vMotion.

#### Cause
- This issue occurs when there is a TX and RX buffer overrun for the VMXNET3 adapter in a RedHat 6.x virtual machine.

#### Resolution

- To resolve this issue, increase the TX and RX buffer size to their maximum values.
- To increase the TX and RX buffer sizes in RedHat 6.x:
  - Open this file using a text editor:<br>
  `/etc/sysconfig/network-scripts/ifcfg-ethX`
  > Where X is the numeric identifier of the adapter using VMXNET3.<br>
  - Add this line to the file:<br>
  `ETHTOOL_OPTS="-G ethX rx 4096 tx 4096"`
  - Save and close the file.
