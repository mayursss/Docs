# Linux commands chit sheet

- awk command to see list of file and folder sorted by size
``` bash
ls -larth | awk ' {print $5, $9}' | sort
```
```
SIZE FILE_NAME
109M stdout.LRMIID-065154.log
11M stdout.LRMIID-15498.log
129M stdout.LRMIID-150120.log
145M stdout.LRMIID-175165.log
157M stdout.LRMIID-044111.log
1.7M stdout.LRMIID-256179.log
2.0M stdout.LRMIID-339190.log
218 jnrpe.log
2.2M stdout.LRMIID-340191.log
23M stdout.LRMIID-052141.log
23M stdout.LRMIID-288181.log
```

- using `ls` command with sort switch `-S`  
``` bash
nagios@abc.com $ ls -l -S -h
```
``` bash
total 1.4G
-rw-r--r-- 1 nagios nagios 302M Jan 14  2017 stdout.LRMIID-150125.log
-rw-r--r-- 1 nagios nagios 157M May  3  2016 stdout.LRMIID-044111.log
-rw-r--r-- 1 nagios nagios 145M Sep 14  2017 stdout.LRMIID-175165.log
-rw-r--r-- 1 nagios nagios 129M Aug  3  2016 stdout.LRMIID-150120.log
-rw-r--r-- 1 nagios nagios 109M May 18  2017 stdout.LRMIID-065154.log
-rw-r--r-- 1 nagios nagios  88M Apr  7 13:50
nagios@zlpv0342 $
```

- using regex
``` bash
nagios@zlpv0342 $ du -h | grep '[0-9]\{3\}M' | sort
108M    ./pnp4nagios/var/perfdata_old
181M    ./.cpan/build
233M    ./.cpan
547M    ./JNRPE/log
565M    ./JNRPE
642M    ./pnp4nagios/var/perfdata
752M    ./pnp4nagios/var
759M    ./pnp4nagios
```
