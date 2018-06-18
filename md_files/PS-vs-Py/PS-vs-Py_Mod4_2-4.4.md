# 2-4.4 Intro Python
## Working with Files
- File import in Jupyter Notebooks  
- File **`open()`** and **`.read()`**  
- File Read as a list with **`.readlines()`**  
- File Closing to free resources with **`.close()`**  
- File Read a line at a time with **`.readline()`**  
- Remove characters using **`.strip()`**   
- **`.write()` data to a new local file**  
- **File `.write()`**  with **`.seek()`**  
- **File append**   

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- Import files in Jupyter Notebooks  
- Open and **`.read()`** local files in memory   
- **`.read()`** a specific number of characters  
- Use **`.readlines()`** to read data from file as a **list** of lines  
- Use **`.readlines()`** to read data from file as a **list** of lines   
- Use **`.readline()`** to read data from file a line at a time   
- Use **`.strip()`** to remove new line characters  
- **`.write()` data to a new local file**  
- **Use `.seek()` to set file read or write location**  
- **Use file append mode**

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## writing to a file opened in write mode `'w' or 'w+'`
```python
poem_file = open('poem.txt', 'w')
poem_file.write("Hello World!\n")
```
### write mode:  `'w' `  
### write mode plus read: `'w+'`  
#### **`'w'`** and **`'w+'`** modes will create a new file or overwrite existing files  
**All previous data will be lost**

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- creates a new local file or overwrites the local file (makes it blank)
- run example to write some text to the file
- close file to apply changes and re-open in read mode
- head pointer is at start of file
- see what was written to the file

``` python
new_file = open('new_file.txt', 'w')
new_file.write("This is line #1 with 'w'\nThis is line #2 with 'w'\nThis is line #3 withn 'w'!\n")
new_file.close()
new_file = open('new_file.txt', 'r')
new_text = new_file.read()
print(new_text)
new_file.close()
```
```
This is line #1 with 'w'
This is line #2 with 'w'
This is line #3 withn 'w'!
```

#### `'w+'` means the file is in write plus read mode  
- after any write, the pointer is at the end of text that has been written
- to read the entire file, the pointer needs to be at the beginning of the file - see **.seek()** below to set the file pointer

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>

## create a local file  
### open in 'w' mode  
- open planets.txt in write mode **'w'** to create a local file
- write the first four planets from the sun in earth's solar system (Mercury, Venus, Earth, Mars) on separate lines
- close the file and re-open in read mode **'r'**
- use .read() to read the entire file contents
- print the entire file contents

``` python
planets_file = open("planets.txt","w")
planets_file.write("Mercury\nVenus\nEarth\nMars")
planets_file.close()
planets_file = open("planets.txt","r")
planets_file_contents = planets_file.read()
print(planets_file_contents)
```
```
Mercury
Venus
Earth
Mars
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## using .seek(0)
### setting the pointer to beginning of file  
```python
new_file.seek(0)
new_contents = new_file.read()
print(new_contents)
```
### using .seek() to set the read/write pointer to beginning of file  
**`new_file.seek(0)`** moves the file read\write pointer to the start of the file

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
### seek() with `'w+'`

>- review and run example
>- write plus read **`'w+'`**  
**`'w+'`** overwrites existing files of the same name **rendering the file blank**
the file is writeable and readable
- creates a new local file or overwrites the local file (makes it blank)
- write to the blank file
- Read and print (Note: the pointer is at the end of the file - result = empty string)



``` python
new_file = open('new_file.txt', 'w+')
new_text = new_file.read()
print(new_text) # file is ***BLANK***
new_file.write("This is line #1 with 'w+'\nThis is line #2 with 'w+'\n")
```
```

```

## Expected: prints empty string above  
pointer was at end of file where there is nothing to read
### seek(0)  
sets the pointer to the beginning of the file, enabling read() to input the entire file contents

>- review and run example - sets pointer to beginning of file
- review and run example - now read starts from beginning of file
- review and run example - clean up and close file

``` python
new_file = open('new_file.txt', 'w+')
new_text = new_file.read()
print(new_text)
new_file.write("This is line #1 with 'w+'\nThis is line #2 with 'w+'\n")
new_text = new_file.read()
print(new_text)
new_file.seek(0)
new_text = new_file.read()
print(new_text)
new_file.close()
```
```
This is line #1 with 'w+'
This is line #2 with 'w+'
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>

## using `.seek(0)` on a local file in write plus read mode `'w+'`
### open outer_planets.txt in 'w+' mode (write plus read)
- open **outer_planets.txt** in write plus read mode **'w+'**
- write four outer planets in earth's solar system (Jupiter, Saturn, Uranus, Neptune) on separate lines  
- use .seek() to move the pointer to the start of the file
- use .read() to read the entire file contents
- print the entire file contents and close the file

``` python
outer_planets_file = open("outer_planets.txt","w+")
outer_planets_file.write("Jupiter\nSaturn\nUranus\nNeptune")
outer_planets_file.seek(0)
file_contents = outer_planets_file.read()
print(file_contents)
outer_planets_file.close()
```
```
Jupiter
Saturn
Uranus
Neptune
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## using .seek() *offset* and *whence*
### setting the pointer in a file with positive *offset* values and *whence* location

```python
new_file.seek(13)
new_contents = new_file.read()
print(new_contents)
```  
```python
new_file.seek(0,2)
```
### using .seek() to set the read/write pointer in a file   
#### *offset* values and *whence* arguments
.seek() can set the pointer to a desired index from the beginning of the file  
the example below moves to the character to offset 10 (the 11th character)  
```python
new_file.seek(10)
```  

which is also written with an optional second argument, know as *whence* ("from where")  
```python
new_file.seek(10,0)
```  
using 0 for *whence* starts the *offset* from the beginning of the file

>**Note:** the offset must be a positive integer in Python 3, so we cannot offset backwards from the end of the file  

## `file.seek(offset, whence)`
| whence mode | description               |  
|:-----------:|---------------------------|
| 0 | points to the beginning of the file |   
| 1 | points to the current location |  
| 2 | points to the end of the file & offset is always 0|  

using ** *whence* ** the index can be offset from either the beginning, current location or to the end of the file (where there is no offset applied)  

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

### seek to a specific location

>- review and run - create, write, read and print a file
- setting a specific seek() index
- now read starts from 14th character of file
- review and run example - string slicing on a read of an entire file
- read from the start

``` python
tips_file = open('code_tips.txt', 'w+')
tips_file.write('-use simple function and variable names\n-comment code\n-organize code into functions\n')
tips_file.seek(0)
tips_text = tips_file.read()
print(tips_text)
tips_file.seek(13)
tips_text = tips_file.read()
print(tips_text)
tips_file.seek(0)
tips_text = tips_file.read()
print(tips_text)
print(tips_text[13:])
```
```
-use simple function and variable names
-comment code
-organize code into functions

unction and variable names
-comment code
-organize code into functions

-use simple function and variable names
-comment code
-organize code into functions

unction and variable names
-comment code
-organize code into functions
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

### seek() with optional *whence* argument
>- review and run example - setting pointer to end of file with whence value = 2
- read from beginning of file - .seek(0,0) is same as .seek(0)
- point to file beginning and overwrite 1st line
- show new file contents

``` python
# [ ] review and run example - setting pointer to end of file with whence value = 2
tips_file.seek(0,2)
tips_file.write("-use seek(0,2) to set read/write at end of file\n")
# [ ]  read from beginning of file - .seek(0,0) is same as .seek(0)
tips_file.seek(0,0)
tips_text = tips_file.read()
print(tips_text)
# [ ] review and run example - point to file beginning and overwrite 1st line
tips_file.seek(0)
tips_file.write('-use simple function and variable names\n'.upper())
# [ ] review and run example - show new file contents
tips_file.seek(0,0)
tips_text = tips_file.read()
print(tips_text)
```
```
-use simple function and variable names
-comment code
-organize code into functions
-use seek(0,2) to set read/write at end of file

-USE SIMPLE FUNCTION AND VARIABLE NAMES
-comment code
-organize code into functions
-use seek(0,2) to set read/write at end of file
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>

## seek() with optional whence argument
>- open a new file **days.txt** in write plus read mode **'w+'**
- write week days (Monday - Friday) on separate lines to the file
- use .seek() to move the pointer to the start of the file
- use .read() to read the entire file contents
- use .seek() to move the pointer to the end of the file
- write week ends (Saturday & Sunday) on separate lines to the file
- use .seek() to move the pointer to the start of the file
- use .read() to read the entire file contents
- print the entire file contents and close the file

``` python
days_file = open("days.txt","w+")
days_file.write("Monday\nTuesday\nWednesday\nThursday\nFriday")
days_file.seek(0)
file_contents = days_file.read()
print("Week Days:\n=========\n"+file_contents)
print()
days_file.seek(0,2)
days_file.write("\nSaturday\nSunday")
days_file.seek(0)
file_contents = days_file.read()
print("With Weekends:\n=========\n"+file_contents)
```
```
Week Days:
=========
Monday
Tuesday
Wednesday
Thursday
Friday

With Weekends:
=========
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## open a file in a writeable mode
### open a file in a writing mode, with: `'w', 'w+', 'r+', 'a', 'a+'`
| MODE    |  Description  |  
|:-------:|:--------------|  
| 'r'  | read only mode |  
| **'w'** | write - **overwrites** file with same name |  
| **'w+'** | write and read mode - **overwrites** file with same name|  
| **'r+'** | read and write mode (**no** overwrite) |  
| **'a'**  | opens for appending to end of file (**no** overwrite) |  
| **'a+'** | opens for appending to end of file (**no** overwrite) plus read |  

**warning: `'w'`** and **`'w+'`** modes will create a new file or **overwrite** existing files (deleting all file contents)

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## writing to a file opened in additional write modes:  `'r+', 'a', 'a+'`
Writing is the same - pointers are different
```python
poem_file = open('poem.txt', 'r+')
poem_file.write("Hello World!\n")
```  
```python
poem_file = open('poem.txt', 'a+')
poem_file.write("Goodbye, this is the end of the file\n")
```  
### read mode plus write `'r+'` and append modes `'a', 'a+'`
#### read plus mode `'r+'` differs from write modes `'w', 'w+'`  
- read plus doesn't blank out the file contents with an overwrite  
#### append modes `'a', 'a+'` differ from write modes `'w', 'w+'`   
- append doesn't blank out the file contents with an overwrite  
- append pointer is set to the end of the file for every write
- append plus (a+) is append mode, **plus** read mode

|   `'r+', 'a', 'a+'`                        |  
|:------------------------------------------|  
|will **not overwrite** existing file content creating a blank file|   

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

#### append plus mode `a+`
