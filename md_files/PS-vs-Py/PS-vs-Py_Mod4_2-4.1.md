# 2-4.1 Intro Python
## Working with Files

- **File `open(`) and `.read()`**  
- File Read as a list with **`.readlines()`**  
- File Closing to free resources with **`.close()`**  
- File Read a line at a time with **`.readline()`**   
- Remove characters using **`.strip()`**  
- File **`.write()`**  with **`.seek()`**  
- File append mode

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- **`open()` and `.read()` local files in memory**   
- **`.read()` a specific number of characters**  
- Use **`.readlines()`** to read data from file as a list of lines  
- Use **`.close`** to free system resources  
- Use **`.readline()`** to read data from file a line at a time  
- Use **`.strip()`** to remove new line characters  
- **`.write()`** data to a new local file
- Use **`.seek()`** to set file read or write location  
- Use file append mode

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## Import Files to Jupyter
### curl imports files to Jupyter session from a web address
below is a code using curl to import poem1.txt, the code is in a command line interface syntax

>#### `!curl https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/poem1.txt -o poem1.txt`  

The table explains each element of the  command above  

| code | meaning |
|-----|---|
| **`!`** | runs command interface supporting **curl** |
| **`curl`** | enables **curl** that can download files |  
| **`https://raw.githubusercontent.com/...`** | is the address for data file to import |  
| **`-o`** | tells **`curl`** write data to a file |  
| ** *`poem1.txt`* ** | name **`curl`** will give the file  |

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example

```
!curl https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/poem1.txt -o poem1.txt
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## Opening a Local File in read mode
``` python
poem_file = open('poem1.txt', 'r')
```

### Read  mode &nbsp; `'r'`
| MODE    |  Description  |
|:-------:|:--------------|
| **'r'**  | **read only mode** |
| 'w'  | write - overwrites file with same name |
| 'r+' | read and write mode |
| 'a'  | opens for appending to end of file |

### `open()` creates an object that can be addressed in python code

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- Run to open the file in memory as poem_file

``` python
poem_file = open('poem1.txt', 'r')
```

>- run and review code to test if open worked
- should display name='poem1.txt' and no errors

``` python
poem_file
```
```
<_io.TextIOWrapper name='poem1.txt' mode='r' encoding='cp1252'>
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>

## import and open a local file in read mode
1. **Import a list of cities using curl**  
  a. git the list from https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/cities  
  b. name the list cities.txt  
2. **open cities.txt in read mode using a variable = cities_file**  
3. **test that cities_file opened cities.txt with a print statement**  

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  

## Read a file using `.read()`
### reading text
```python
poem_contents = poem_file.read()
```
### `.read()` loads the content of the file into memory as a string, including formatting such as new line (`\n`)

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

### examples expect that the cells that import and open of poem1.txt has been run without a read()

>- review and run example
- shows the file as a string with formatting characters such as "\n", output should be non-blank

``` python
poem_contents = poem_file.read()
print(poem_file)
```
```
<_io.TextIOWrapper name='poem1.txt' mode='r' encoding='cp1252'>

'Loops I repeat\nloops\nloops\nloops\nI repeat\nuntil I\nbreak'
```

>- review and run example
- since .read() loaded the file as a string it can be printed

``` python
print(poem_contents)
```
```
Loops I repeat
loops
loops
loops
I repeat
until I
break
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>  

## read a file
### Read the file cities.text that was imported in task 1
1. **import cities.txt and open**  
  a. ensure the code was created and run in **task 1** to import cities.txt  
  b. create and run code to re-open cities.txt as cities_file  
2. **read() cities_file into a variable called cities**
3. Test the read() by displaying the string contained in cities
4. Test the read() by printing the cities string

``` python
cities = cities_file.read()
cities
```
```
'Beijing\nCairo\nLondon\nNairobi\nNew York City\nSydney\nTokyo'
```
``` python
print(cities)
```
```
Beijing
Cairo
London
Nairobi
New York City
Sydney
Tokyo
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  


## reading a file with `.read(n)` where n = number of characters to read

### each time `poem_file.read(10)` runs, the next 10 characters are read.

> **Note:** if .read(10) result is = '' &nbsp;(or empty string with no characters), it is likely that the end of the file has been reached. Perform a fresh **.open()** to reset read() to the beginning of the file.

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

### examples expect that the cells that import and open of poem1.txt has been run without a read()
Run the cell at the top of the notebook to ** import poem1.txt**  
each line is a different approach to reading and displaying 10 characters of the poem

>- review and run example to read poem1.txt 10 characters at a time

``` python
poem_file = open('poem1.txt', 'r')
poem_10char = poem_file.read(10)
print(poem_10char)
poem_10char
```
```
Loops I re

'Loops I re'
```

>- review and run example, + 10 more characters
- reads and displays without storing in a variable

``` python
poem_file.read(10)
```
```
'peat\nloops'
```

>- review and run example, + 10 more characters
- reads and stores in variable poem_parts

``` python
poem_parts = poem_file.read(10)
print(poem_parts)
```
```
loops
loo
```

>- REPEATEDLY RUN this cell,  + 5 more characters each time run are appended using string addition
- consider why no additional text displays after multiple runs

``` python
poem_parts += poem_file.read(5)
print(poem_parts)
```
```
loops
loops
I repeat
until I
break
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>  

## digits of pi  
### read a set number of digits with .read(n)
### import, open, read, print
1. import digits_of_pi.txt located at https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/digits_of_pi  
2. open as **digits_of_pi_text**
3. read()the first 4 characters of digits_of_pi_text into a variable called pi_digits  
4. print pi_digits  
5. add to pi_digits string with string addition  
  a. add next 4 characters from digits_of_pi obtained from read()  
  b. run the cell multiple times to get more digits of *pi*

``` python
# 1. open as digits_of_pi_text
# 2. read() 4 char of digits_of_pi_text to pi_digits variable
# 3. print pi_digits  
digits_of_pi_text = open("digits_of_pi.txt","r")
pi_digits = digits_of_pi_text.read(4)
print(pi_digits)
```
```
3.14
```
``` python
# 4. add to pi_digits string with string addition  
#   a. add next 4 characters from digits_of_pi obtained from read()  
#   b. run the cell multiple times to get more digits of *pi*
pi_digits += digits_of_pi_text.read(4)
print(pi_digits)
```
```
3.141592653589793238462643383279
```
>- **Note:** If run multiple time it will keep adding 4 chars from `.read()` like below
```
3.14
3.141592
3.1415926535
3.141592653589
```
and so on..

<font size="6" color="#00A0B2"  face="verdana"> <B>Concept</B></font>

## .read() returns a string
### These strings can be manipulated just like any other string

### Boolean tests such as:
- .upper()  
- .title()
- string slices, e.g.- `cities[3:9]`  
- etc..  

### and string methods can be performed such as:
- .isdigit()  
- .isalpha()  
- etc...

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  

### examples expect that the cells that import  has been run  
it may be necessary to run the cell to **import poem1.txt** at top of notebook

# [ ] review and run example
poem_file = open('poem1.txt', 'r')
poem_part = poem_file.read(15).upper()
print(poem_part)

```
LOOPS I REPEAT
```

>- review and run example

``` python
poem_part = poem_file.read(6).title()
print(poem_part)
```
```
Loops
```

>- review and run example

``` python
poem_part = poem_file.read(6)
print(poem_part)
print(poem_part.isalpha(), "isalpha() because of `\\n`")
poem_part
```
```
loops

False isalpha() because of `\n`

'loops\n'
```

>- review and run example

``` python
poem_file = open('poem1.txt', 'r')
poem_text = poem_file.read()
print(poem_text[8:26])
```
```
repeat
loops
loops
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>
## City Initials
### Read the file cities.text that was imported in task 1
1. ensure the code was created and run in **task 1** to import cities.txt  
2. create and run code to re-open cities.txt as cities_file  
3. **`read()`** cities_file into a variable called cities  
4. iterate through the characters in cities
  a. test if .isupper(), if True append the character to a string variable: initials
  c. else if (elif) character is "\n", if True append the "\n" to initials  
5. print initials

>- `cities.txt` file content
```
Beijing
Cairo
London
Nairobi
New York City
Sydney
Tokyo
```

``` python
cities_file = open('cities.txt','r')
cities = cities_file.read()
initials = ""
for i in cities:
    if i.isupper():
        initials += i
    elif i == "\n":
        initials += i
    else:
        pass
print(initials)
```
```
B
C
L
N
NYC
S
T
```
