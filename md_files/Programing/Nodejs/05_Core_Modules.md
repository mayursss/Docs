Node.js comes with batteries included.
It means they are core modules that you can
use and you don't have to install them with npm.
They're already part of Node.js,
you don't need to put them in your project folder,
they are not in Node underscore modules,
they're just somewhere where
your platform has been installed.
And it's good because there are a lot of useful modules.
Let me give you an example.
There is an OS module which allows you to
get information about your operating system.
There's the Child Process module which allows
you to spawn other processes and
execute other programs and
binary code outside of your Node.js code.
There are two modules on which I want to
focus more in this lesson.
First module it's called FS.
FS stands for File System and that's
exactly what this module allows you to work with.
You can create a file,
you can create a folder,
you can read from a file,
you can write to a file.
So, you can perform all the
needed operations on your file system.
As you can assume,
this does not exist in the browser JavaScript
because browser JavaScript it's a different environment.
But in Node.js, we can work with the file system.
The second important core module
it's called Path, P-A-T-H.
Path, why it's important?
Because you will use it a lot.
You will use it a lot to build
cross-platform applications, cross-platform code.
You see, the reason why path is different on
different system is because
it needs different separators,
different type of slashes,
either forward slash or backward slash.
And with path dot join method,
you can easily convert
your path folders into the appropriate format.
So, those two core modules,
you would see them often in this project then another
Node.js code but there are more and more core modules.
For example, http, we will cover it
in few last lessons of this module.
It's also a core module.
So, the bottom line,
you can build a lot of things
just with core Node.js modules.
You don't even need to have to go to npm.
Of course, they might be not as
advanced but in some systems they are good enough.
So, that's it and I'll see you in the next video.

## Core Modules

Core modules come with Node.js and don't need to be installed. Core modules provide low-level functionality and helper methods. They allow Node.js to work with the filesystem, networking, binary data, streams, spawn external processes, parse query strings, file paths and URLs, and perform other helpful tasks such as creating HTTP(S) agents/clients and servers.

## Here's the list of main core modules:

- `fs:` module to work with the file system, files and folders
- `path:` module to parse file system paths across platforms
- `querystring:` module to parse query string data
- `net:` module to work with networking for various protocols
- `stream:` module to work with data streams
- `events:` module to implement event emitters (Node observer pattern)
- `child_process:` module to spawn external processes
- `os:` module to access OS-level information including platform, number of CPUs,   memory, uptime, etc.
- `url:` module to parse URLs
- `http:` module to make requests (client) and accept requests (server)
- `https:` module to do the same as http only for HTTPS
- `util:` various utilities including promosify which turns any standard Node core method into a promise-base API
- `assert:` module to perform assertion based testing
- `crypto:` module to encrypt and hash information

There is no need to install or download core modules. To include them in your application, all you need is to use the following syntax:

``` js
const http = require('http') //replace `http` with the core module you want to use
```