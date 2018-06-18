# 2-4.3 Intro Python
## Working with Files
- File **`open()`** and **`.read()`**  
- File Read as a list with **`.readlines()`**  
- File Closing to free resources with **`.close`**  
- **File Read, a line at a time with `.readline()`**  
- **Remove characters using `.strip()`**  
- File **`.write()`**  with **`.seek()`**  
- File append mode


><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>    
- **`open()`** and **`.read()`** local files in memory   
- **`.read()`** a specific number of characters  
- Use **`.readlines()`** to read data from file as a **list** of lines   
- Use **`.close`** to free system resources  
- **Use `.readline()` to read data from file, one line at a time**  
- **Use `.strip()` to remove new line characters and other whitespaces**  
- **`.write()`** data to a new local file
- Use **`.seek()`** to set file read or write location  
- Use file append mode


<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## .readline(): read files a line at a time
### use .readline() to read a line in a file as a string
>- each .readline() moves to the next available line in the file

```python
poem1 = open('poem1.txt', 'r')
poem_line1 = poem1.readline()
poem_line2 = poem1.readline()
poem_line3 = poem1.readline()
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- open address to file
- readline 1, 2, 3
- print the first 3 .readline() values

``` python
poem1 = open('poem1.txt', 'r')
poem_line1 = poem1.readline()
poem_line2 = poem1.readline()
poem_line3 = poem1.readline()
print(poem_line1 + poem_line2 + poem_line3)
```
```
Loops I repeat
loops
loops
```

>- review and run example printing return value & re-run several times

``` python
poem1 = open('poem1.txt', 'r')
print("1st Line:",poem1.readline())
print("2nd Line:",poem1.readline())
print("3rd Line:",poem1.readline())
print("4th Line:",poem1.readline())
print("5th Line:",poem1.readline())
print("6th Line:",poem1.readline())
print("7th Line:",poem1.readline())
print("8th Line:",poem1.readline())
print("9th Line:",poem1.readline())
poem1.close()
```
```
1st Line: Loops I repeat

2nd Line: loops

3rd Line: loops

4th Line: loops

5th Line: I repeat

6th Line: until I

7th Line: break

8th Line:
9th Line:
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>

## use readline to get rainbow colors
- import https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/rainbow as rainbow.txt  
- open rainbow.txt as rainbow_file as read-only  
- read the first 3 lines into variables: color1, color2, color3  
- close rainbow_file
- print the first 3 colors

``` python
rainbow_text = open("rainbow.txt","r")
color1 = rainbow_text.readline()
color2 = rainbow_text.readline()
color3 = rainbow_text.readline()
rainbow_text.close()
print(color1 + color2 + color3)
```
```
red
orange
yellow
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## `.readline()` in a `while` loop
```python
poem_line = poem1.readline()
while poem_line:
    print(poem_line.capitalized())
    poem_line = poem1.readline()
```  
### `while .readline()`
- while loop continues while the readline() value in poem_line returns text  
  - a string value evaluates as True in the while loop  
  - an empty string, '', evaluates **not True** in the while loop
- when readline() reaches the end of the file, an empty string is returned  

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- open address to file
- use a while loop to read each line of a file
- remove last character ('\n') and print as upper case

``` python
poem1 = open('poem1.txt', 'r')
poem_line = poem1.readline()
while poem_line:
    print(poem_line[:-1].upper())
    poem_line = poem1.readline()
poem1.close()
```
```
LOOPS I REPEAT
LOOPS
LOOPS
LOOPS
I REPEAT
UNTIL I
BREAK
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>

## while .readline()  rainbow colors
assumes rainbow.txt has been imported in task 1  
- open rainbow.txt as rainbow_file as read-only  
- read a color from each line of rainbow_file in a while loop  
- print each color capitalized  
- close rainbow_file

``` python
rainbow_text = open("rainbow.txt","r")
rainbow_colors = rainbow_text.readline()
while rainbow_colors:
    print(rainbow_colors[:-1].upper())
    rainbow_colors = rainbow_text.readline()
rainbow_text.close()
```
```
RED
ORANGE
YELLOW
GREEN
BLUE
INDIGO
VIOLET
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  

## `.readline()`  with `.strip()`
### .strip() whitespace
```python
poem_line = poem1.readline().strip()
```
**.strip()** removes leading and trailing whitespace, including the '\n' formatting character

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- open address to file
- readline with .strip() to remove '\n'

``` python
poem1 = open('poem1.txt', 'r')
poem_line = poem1.readline().strip()
while poem_line:
    print(poem_line)
    poem_line = poem1.readline().strip()    
poem1.close()
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

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>

## `.readline()`  with `.strip()` rainbow colors
assumes rainbow.tx has been imported in task 1  
- open rainbow.txt as rainbow_file as read-only  
- read a color from each line of rainbow_file in a while loop  
  - use .strip to remove the whitespace  
  - print each color upper case  
- close rainbow_file

``` python
rainbow_text = open("rainbow.txt","r")
rainbow_colors = rainbow_text.readline().strip()
while rainbow_colors:
    print(rainbow_colors)
    rainbow_colors = rainbow_text.readline().strip()
rainbow_text.close()
```
```
RED
ORANGE
YELLOW
GREEN
BLUE
INDIGO
VIOLET
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  

## `.strip()` with arguments
### .strip() arguments
```python
color = rainbow_messy.readline().strip('*\n*')
```
**`.strip('*\n')`** removes leading and trailing **`*`** and **\n**

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- open file read only
- .readline() with strip "\*" and newline ('\n')

``` python
rainbow_messy = open('rainbow_messy.txt', 'r')
color = rainbow_messy.readline().strip('*\n')
while color:
    print(color)
    color = rainbow_messy.readline().strip('*\n')
rainbow_messy.close()
```
```
red
orange
yellow
green
blue
indigo
violet
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>

## `.strip()` with arguments
- run import of cities_messy.txt below at least once.
- run open cities_messy.txt below before each test of the while loop cell
- edit while loop to strip the colon ':' , newline and spaces
- close cities_messy

``` python
cities_messy = open('cities_messy.txt', 'r')
line = cities_messy.readline().strip(" :\n")
while line:
    print(line)
    line = cities_messy.readline().strip(" :\n")
cities_messy.close()
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

<font size="6" color="#B24C00"  face="verdana"> <B>Task 5</B></font>  

## `.strip()` parentheses from poem2_messy
- open poem2_messy.txt as poem2_messy in read mode  
- edit while loop to strip the leading and trailing parentheses & print the poem without blank lines  
- close poem2_messy

``` python
poem2_messy = open("poem2_messy.txt","r")
line = poem2_messy.readline().strip("()\n")
while line:
    print(line)
    line = poem2_messy.readline().strip("()\n")
poem2_messy.close()
```
```
while True
I loop
True
loop
True
loop
not True
False
end
```
