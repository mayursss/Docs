# 2-4.2 Intro Python
## Working with Files

- File **`open()`** and **`.read()`**  
- **File Read as a list with `.readlines()`**  
- **File Closing to free resources with `.close()`**  
- Remove characters using **`.strip()`**  
- File Read a line at a time with **`.readline()`**   
- File **`.write()`**  with **`.seek()`**  
- File append mode

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- **`open()`** and **`.read()`** local files in memory   
- **`.read(`)** a specific number of characters  
- **Use `.readlines()` to read text from files as a list of lines**  
- **Use `.close` to free system resources**  
- Use **`.readline()`** to read data from file a line at a time  
- Use **`.strip()`** to remove new line characters  
- **`.write()`** data to a new local file
- Use **`.seek()`** to set file read or write location  
- Use file append mode

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## `.readlines()`
### File read as a list with .readlines()
converts the lines of a file into a **list** of strings

```python
poem_lines = poem1.readlines()
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example
- open address to file
- readlines and print as a list

``` python
poem1 = open('poem1.txt', 'r')
poem_lines = poem1.readlines()
poem_lines
```
```
['Loops I repeat\n',
 'loops\n',
 'loops\n',
 'loops\n',
 'I repeat\n',
 'until I\n',
 'break']
```
>- review and run example

``` python
for line in poem_lines:
    print(line)
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


<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>

## `.readlines()`
### open the cities file as a list
1. **Open cities.txt in read mode using a variable: cities_file**  
2. **Read cities_file as a list variable: cities_lines using `.readlines()`**
3. **Print each line of cities_lines by iterating the list**

``` python
cities_file = open("cities.txt","r")
cities_lines = cities_file.readlines()
for line in cities_lines:
    print(line)
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

## working with lists from .readlines()
###  remove newline characters from lists created using .readlines()
```python
for line in poem_lines:
    poem_lines[count] = line[:-1]
    count += 1
```
**`line[:-1]`** sets the end point at the last character of the string, the result is the **`'\n'`** (newline) character is omitted

| list item | list item contents |
|-----|-----|
| poem_lines[0] | 'Loops I repeat\n' |  
| poem_lines[1] | 'loops\n' |  
| poem_lines[2] | 'loops\n' |
| poem_lines[3] | 'I repeat\n' |
|... | ... |


>- review and run examples
- re-open file and read file as a list of strings
- print each list item
- remove the last character of each list item, which is "\n"

``` python
# re-open file and read file as a list of strings
poem1 = open('poem1.txt', 'r')
poem_lines = poem1.readlines()
print(poem_lines)
print("====================")
# print each list item
for line in poem_lines:
    print(line)
# remove the last character of each list item, which is "\n"
count = 0
for line in poem_lines:
    poem_lines[count] = line[:-1]
    count += 1
print("====================")
print(poem_lines)
# print each list item
for line in poem_lines:
    print(line)
```
```
['Loops I repeat\n', 'loops\n', 'loops\n', 'loops\n', 'I repeat\n', 'until I\n', 'break\n']
====================
Loops I repeat

loops

loops

loops

I repeat

until I

break

====================
['Loops I repeat', 'loops', 'loops', 'loops', 'I repeat', 'until I', 'break']
Loops I repeat
loops
loops
loops
I repeat
until I
break
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>

## remove newline characters from cities lists created using .readlines()
- This task assumes that cites.txt has been imported in Task 1 above
- In task 1, the cities were printed with a blank line between each city - this task removes the blank lines

>- re-open file and read file as a list of strings
- open cities.txt as cities_file and read the file as a list: cities_lines
- remove the last character, "\n", of each cities_lines list item

``` python
cities_file = open("cities.txt","r")
cities_lines = cities_file.readlines()
print(cities_lines)
count = 0
for line in cities_lines:
    cities_lines[count] = line[0:-1]
    count += 1
print(cities_lines)
for line in cities_lines:
    print(line)
```
```
['Beijing\n', 'Cairo\n', 'London\n', 'Nairobi\n', 'New York City\n', 'Sydney\n', 'Tokyo\n']
['Beijing', 'Cairo', 'London', 'Nairobi', 'New York City', 'Sydney', 'Tokyo']
Beijing
Cairo
London
Nairobi
New York City
Sydney
Tokyo
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  

## `.close()`
### File .close() method frees resources
flie.close() method removes the reference created from file open() function

```python  
poem1.close()
```  

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

>- review and run example: open and readlines of poem1.txt
- review and run example: readlines breaks if file is no longer open

``` python
poem1 = open('poem1.txt', 'r')
poem_lines = poem1.readlines()
print(poem_lines)
poem1.close()
poem1.readlines() # this will give error
```
```
['Loops I repeat\n', 'loops\n', 'loops\n', 'loops\n', 'I repeat\n', 'until I\n', 'break\n']

---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-36-ae7ae8d4103d> in <module>()
      4 print(poem_lines)
      5 poem1.close()
----> 6 poem1.readlines() # this will give error

ValueError: I/O operation on closed file.
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>  

## File .close()
write each item in it's own cell  
- open cities.txt as cities_file  
- read the lines as cities_lines
- print the cities that **start with the letter "D" or greater**
- close cities_file
- test that file is closed

``` python
cities_file = open("cities.txt","r")
cities_lines = cities_file.readlines()
for city in cities_lines:
    if city[0] >= "D":
        print(city)
    else:
        pass
cities_file.close()
print(cities_file.readlines()) # will give error
```
```
London

Nairobi

New York City

Sydney

Tokyo

---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-27-8efe8b067109> in <module>()
      7         pass
      8 cities_file.close()
--->  9 print(cities_file.readlines())

ValueError: I/O operation on closed file.
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>  

## readlines() poem2
write each item in its own cell  
- import https://raw.githubusercontent.com/MicrosoftLearning/intropython/master/poem2.txt as poem2.txt
- open poem2.txt as poem2_file in read mode
- create a list of strings, called poem2_lines, from each line of poem2_text (use **.readlines()**)  
- remove the newline character for each list item in poem2_lines  
- print the poem2 lines in reverse order  

``` python
# [ ] open poem2.txt as poem2_text in read mode
# [ ] create a list of strings, called poem2_lines, from each line of poem2_text
# [ ] remove the newline character for each list item in poem2_lines
# [ ] print the poem2 lines in reverse order
poem2_text = open("poem2.txt","r")
poem2_lines = poem2_text.readlines()
count = 0
for line in poem2_lines:
    poem2_lines[count] = line[0:-1]
    count += 1
" ".join(poem2_lines[::-1])
```
```
'end False not True loop True loop True I loop while True'
```
