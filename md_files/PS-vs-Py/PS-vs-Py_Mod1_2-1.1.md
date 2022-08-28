# 2-1.1 Intro Python
## Sequence: String
- **Accessing String Characters with index**
- Accessing sub-strings with index slicing
- Iterating through Characters of a String
- More String Methods

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- **Work with String Characters by index**
- Slice strings into substrings
- Iterate through String Characters
- Use String Methods

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

## Accessing a single String Character
### addressing a string index
Strings are sequences of characters.  Another common sequence type used in this course is a **list**.  Sequences index items counting from 0 for the first item.

![string with index for each letter](https://iajupyterprodblobs.blob.core.windows.net/imagecontainer/string_indexes.PNG)  

``` python
# assign string to student_name
student_name = "Alton"
# first character is at index 0
student_name[0]
```
<font size="5" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
``` python
# [ ] review and run example - note the first element is always index = 0
student_name = "Alton"
print(student_name[0], "<-- first character at index 0")
print(student_name[1])
print(student_name[2])
print(student_name[3])
print(student_name[4])
```
```powershell
﻿$student_name = "Alton"
"$($student_name[0]) <-- first character at index 0"
$student_name[1]
$student_name[2]
$student_name[3]
$student_name[4]
```
```bash
#!/bin/bash
name="Alton"
echo "${name:0:1} <-- first character at index 0"
echo ${name:1:1}
echo ${name:2:1}
echo ${name:3:1}
echo ${name:4:1}
```
```
A <-- first character at index 0
l
t
o
n
```
>- review and run example

``` python
student_name = "Jin"
if student_name[0].lower() == "a":
    print('Winner! Name starts with A:', student_name)
elif student_name[0].lower() == "j":
    print('Winner! Name starts with J:', student_name)
else:
    print('Not a match, try again tomorrow:', student_name)
```
``` powershell
$student_name = "Jin"
if ($student_name.tolower()[0] -eq "a"){
    "Winner! Name starts with A: $student_name"
}
elseif($student_name.tolower()[0] -eq "j"){
    "Winner! Name starts with J: $student_name"
}
else{
    "Not a match, try again tomorrow: $student_name"
}
```
```bash
#!/bin/bash
student_name="Jin"
first_char=${student_name:0:1} # get first char
first_char=`echo ${first_char,,}` # make first char lowercase

if [ $first_char == "a" ]; then
     echo "Winner! Name starts with A: $student_name"
elif [ $first_char == "j" ]; then
     echo "Winner! Name starts with J: $student_name"
else echo "Not a match, try again tomorrow: $student_name"
fi
```
```
Winner! Name starts with J: Jin
```

#### Task 1
>- Assign a string 5 or more letters long to the variable: `street_name`
- Print the 1st, 3rd and 5th characters

``` python
street_name = "longstreet"
print(street_name[0],street_name[2],street_name[4])
```
``` powershell
$street_name = "longstreet"
"$($street_name[0]) $($street_name[2]) $($street_name[4])"
```
``` bash
street_name="longstreet"
echo "${street_name:0:1} ${street_name:2:1} ${street_name:4:1}"
```
```
l n s
```

>- there are multiple ways to print this in Powershell, try below ps code
``` powershell
"$($street_name[0], $street_name[2], $street_name[4])"
($street_name[0] + " " + $street_name[2] + " " + $street_name[4])
($street_name[0] + $street_name[2] + $street_name[4])
-join ($street_name[0],$street_name[2],$street_name[4])
-join $street_name[0,2,4]
($street_name[0],$street_name[2],$street_name[4])
$street_name[0,2,4]
```


>- create and input team_name and ask for team name with second character in `i`, `o`, or `u`
- test if name second character has `i`, `o`, or `u`
- print message if team_name has `i`, `o`, or `u`.

``` python
team_name = input("Please enter team name with second letter 'i', 'o' , or 'u': ")
if len(team_name) >= 2:
    if team_name[1].lower() in "i o u":
        print("team name has",team_name[1].lower())
    else:
        print("team name does not have",team_name[1].lower())
else:
    print("Enter at least 2 char name")
```
``` powershell
$team_name = Read-Host "Please enter team name with second letter 'i', 'o' , or 'u': "
if ($team_name.Length -ge 2){
    if ($team_name.tolower()[1] -in "i","o","u"){
        "team name has $($team_name.tolower()[1])"
    }
    else{
        "team name does not have $($team_name.tolower()[1])"
    }
}
else{
    "Enter at least 2 char name"
}
```
``` bash
echo "Please enter team name with second letter 'i', 'o' , or 'u': "
read team_name
if [ ${#team_name} -ge 2 ]; then
    second_char=${team_name:1:1}
    second_char=`echo ${second_char,,}`

    if [[ "$second_char" == [iou] ]]; then
        echo "team name has $second_char"
    else echo "team name does not have $second_char"
    fi
else echo "Enter at least 2 char name"
fi
```
```
Please enter team name with second letter 'i', 'o' , or 'u': timber
team name has i
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Using a negative index
### Access the end of a string using -1
Strings assign an **index** number address to each string character

- first character in a string is index 0
- last character in a string is index **-1**

![negative string index counts from the end](https://iajupyterprodblobs.blob.core.windows.net/imagecontainer/string_neg_index.PNG)

To access the last character in a string
```python
student_name[-1]
```
# review and run example
``` python
student_name = "Joana"
# get last letter
end_letter = student_name[-1]
print(student_name,"ends with", "'" + end_letter + "'")
```
``` powershell
$student_name = "Joana"
$end_letter = $student_name[-1]
"$student_name ends with '$end_letter'"
```
``` bash
## negative index
student_name="Joana"
end_letter=${student_name:${#student_name}-1:1} # get name length and -1 to get last index
echo "$student_name ends with '$end_letter'" # print last char
```
```
Joana ends with 'a'
```
``` python
# get second to last letter
second_last_letter = student_name[-2]
print(student_name,"has 2nd to last letter of", "'" + second_last_letter + "'")
```
``` powershell
$second_last_letter = $student_name[-2]
"$student_name has 2nd to last letter of '$second_last_letter'"
```
```bash
# second last letter
second_last_letter=${student_name:${#student_name}-2:1} # get the name length and -2 to get second last index
echo "$student_name has 2nd to last letter of '$second_last_letter'" # print second last char
```
```
Joana has 2nd to last letter of 'n'
```
>- you can get to the same letter with index counting + or -

``` python
print("for", student_name)
print("index 3 =", "'" + student_name[3] + "'")
print("index -2 =","'" + student_name[-2] + "'")
```
``` powershell
"for $student_name"
"index 3 =  $($student_name[3])"
"index -2 = $($student_name[-2])"
```
```bash
# 3rd and -2 index
echo "for $student_name"
echo "index 3 = ${student_name:3:1}"
echo "index -2 = ${student_name:${#student_name}-2:1}"
```
```
for Joana
index 3 = 'n'
index -2 = 'n'
```

>- print the last 3 characters of street_name

``` python
street_name = "longstreet"
print(street_name[-1],street_name[-2],street_name[-3])
```
``` powershell
$street_name = "longstreet"
-join $street_name[-1,-2,-3]
```
```bash
# print the last 3 characters of street_name
street_name="longstreet"
echo "${street_name:${#street_name}-1:1} ${street_name:${#street_name}-2:1} ${street_name:${#street_name}-3:1}"
```
```
t e e
```
>- Create and assign string variable: first_name
- print the first and last letters of name

``` python
first_name = "mayur"
print(first_name[0],first_name[-1])
```
``` powershell
$first_name = "mayur"
-join $first_name[0,-1]
```
```bash
first_name="mayur"
echo "${first_name:0:1} ${first_name:${#first_name}-1:1}"
```
```
m r
```
