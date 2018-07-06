# nodejs imp points

# How to check node version
- to check node version
``` bash
node --version
```
# How to run command via node directly (inline)
- to run command via node directly (inline)
``` js
node -e "console.log(process.versions)"
node -e 'console.log(`My node version is ${process.versions.node}`)'
```
``` bash
{ http_parser: '2.8.0',
  node: '9.11.1',
  v8: '6.2.414.46-node.23',
  uv: '1.19.2',
  zlib: '1.2.11',
  ares: '1.13.0',
  modules: '59',
  nghttp2: '1.29.0',
  napi: '3',
  openssl: '1.0.2o',
  icu: '61.1',
  unicode: '10.0',
  cldr: '33.0',
  tz: '2018c' }
```
# What is REPL
- Read-Evaluate-Print Loop 

# how to run javascript using Node
- Just run node with script name
``` bash
node test.js
```

# Exiting a Process
Exiting a Process
``` js
// To exit a process, use the exit function:
process.exit()
```
- When your application encounters an error, you want to exit with errors. Exit codes can also be specified

``` javascript
// this process failed
process.exit(1)
// this process failed with a different code
process.exit(129)
// this process exits successfully
process.exit(0)
```
# `require` and `module.exports`
- Node.js provides a building mechanism for modules.
The way they are implemented,
- There is the require method which will allow you
to import functionality from other modules or files,
and there is also module.exports,
which allows you to create modules by exporting
functionality to other programs or other files.
- Module.exports, it's a global property
and it's available across your entire file.
You can export things for other files and programs and modules to use.

# how can you import your module or someone else's module?
- You would invoke require, require with parentheses and then you
provide either a path to a file.
- It could be an absolute path,
  or it could be a relative path,
  or it could provide a name.
- In both cases it's a string.
- When it's a name, it could be two things.
  It could be a core module,
  or it could be an NPM module.
- In the case of a file,
  it starts with either a dot or
  two dots because that's how we identify the path.
- we can also import not just
  **JavaScript** and **Node.js** files,
  but also **JSON** files.
- In the case of the JSON files,
  they just become objects.
- So once you import your object,
  you can assign it to a variable and then you can
  continue to use that variable in your main program.
- So, the main thing to remember
  whatever you are exporting is exactly the same thing
  that you will be importing.
- So if you export a function, expect to use a function in
  your main application way you consume that module.
- If you export an object, you will get an object similarly.
