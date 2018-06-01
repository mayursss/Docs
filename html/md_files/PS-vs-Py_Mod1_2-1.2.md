# 2-1.2 Intro Python
## Sequence: String
- Accessing String Character with index
- **Accessing sub-strings with index slicing**
- Iterating through Characters of a String
- More String Methods

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- Work with String Characters
- **Slice strings into substrings**
- Iterate through String Characters
- Use String Methods

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Accessing sub-strings
### Index Slicing [start:stop]
>- String slicing returns a string section by addressing the start and stop indexes
- In below example. The slice starts at index 2 and ends at index 5 (but does not include index 5)

```python
# assign string to student_name
student_name = "Colette"
# addressing the 3rd, 4th and 5th characters
student_name[2:5]
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- Review and run example
- assign string to student_name

``` python
student_name = "Colette"
# addressing the 3rd, 4th and 5th characters using a slice
print("slice student_name[2:5]:",student_name[2:5])
```
``` powershell
$student_name = "Colette"
"slice student_name[2:5]: $(-join $student_name[2..4])"
```
```
slice student_name[2:5]: let
```
>- Review and run example
- assign string to student_name
- Addressing the 3rd, 4th and 5th characters individually

``` python
student_name = "Colette"
print("index 2, 3 & 4 of student_name:", student_name[2] + student_name[3] + student_name[4])
```
``` powershell
$student_name = "Colette"
"index 2, 3 & 4 of student_name: $(-join $student_name[2,3,4])"
```
```
index 2, 3 & 4 of student_name: let
```

>- review and run example

``` python
long_word = 'Acknowledgement'
print(long_word[2:11])
print(long_word[2:11], "is the 3rd char through the 11th char")
print(long_word[2:11], "is the index 2, \"" + long_word[2] + "\",", "through index 10, \"" + long_word[10] + "\"")
```
``` powershell
$long_word = 'Acknowledgement'
-join $long_word[2..10]
("$(-join $long_word[2..10]) is the 3rd char through the 11th char")
("$(-join $long_word[2..10]) is the index 2, `"$($long_word[2])`" through index 10, `"$($long_word[10])`"")
```
```
knowledge
knowledge is the 3rd char through the 11th char
knowledge is the index 2, "k", through index 10, "e"
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>
## slice a string
>### start & stop index
- Slice long_word to print "act" and to print "tic"

```python
long_word = "characteristics"
print(long_word[4:7])
print(long_word[-4:-1])
```
```powershell
$long_word = "characteristics"
-join $long_word[4..6]
-join $long_word[-4..-2]
```
```
act
tic
```

>- Slice long_word to print "sequence"

```python
long_word = "Consequences"
print(long_word[3:11])
print(long_word[3:-1])
```
```powershell
$long_word = "Consequences"
-join $long_word[3..10]
-join $long_word[-9..-2]
```
```
sequence
sequence
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Accessing beginning of sub-strings
### Index Slicing [:stop]
>- String slicing returns a string section from index 0 by addressing only the stop index
- **default start for a slice is index 0**

<font size="6" color="#00A0B2"  face="verdana"> <B>Example</B></font>
>- review and run example
- addressing the 1st, 2nd & 3rd characters

```python
student_name = "Colette"
print(student_name[:3])
```
```powershell
$student_name = "Colette12345"
-join $student_name[0..2]
```
```
Col
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>
>- print the first half of the long_word

``` python
long_word = "Consequences"
print(long_word[:6])
```
``` powershell
$long_word = "Consequences"
-join $long_word[0..6]
```
```
Consequ
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Accessing ending of sub-strings
### Index Slicing [start:]
>- String slicing returns a string section including by addressing only the start index
- **default end index returns up to and including the last string character**


<font size="6" color="#00A0B2"  face="verdana"> <B>Example</B></font>
>- review and run example
- #  4th, 5th, 6th and 7th characters

```python
student_name = "Colette"
print(student_name[3:])
```
``` powershell
$student_name = "Colette"
-join $student_name[3..$student_name.Length]
```
```
ette
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>
>- print the second half of the long_word

``` python
long_word = "Consequences"
print(long_word[5:])
```
``` powershell
$long_word = "Consequences"
-join $long_word[5..$long_word.Length]
```
```
quences
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## accessing sub-strings by step size
### Index Slicing [:], [::2]
>- **[:]** returns the entire string
- **[::2]** returns the first char and then steps to every other char in the string
- **[1::3]** returns the second char and then steps to every third char in the string  
- the number **2**, in the print statement below, represents the **step**

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- review and run example
- return all

``` python
student_name = "Colette"
print(student_name[:])
```
``` powershell
$student_name = "Colette"
-join $student_name[0..$student_name.Length]
```
```
Colette
```

>- return every other

```python
long_word = "Consequences"
print(long_word[::2])
```
``` powershell
$long_word = "Consequences"
-join ($long_word -split '(.{2})').ForEach({$_[0..0]})
```
```
Cneune
```
>- return every third, starting at 2nd character

``` python
student_name = "Colette"
print(student_name[1:7:3])
```
``` powershell
$student_name= "Colette"
-join (($student_name.Substring(1) -split '(.{3})').ForEach({$_[0..0]}))
```
```
ot
```
>- review and run example
- starting at 2nd char (index 1) to 9th character, return every other character

``` python
long_word = "Consequences"
print(long_word[1:9:3])
```
``` powershell
$long_word = "Consequences"
-join ($long_word.Substring(1,9) -split '(.{3})').ForEach({$_[0..0]})
```
```
oee
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>
>- print the 1st and every 3rd letter of long_word
- long_word = "Acknowledgement"

``` python
long_word = "Acknowledgement"
print(long_word [0::3])
```
``` powershell
$long_word = "Acknowledgement"
-join ($long_word -split '(.{3})').ForEach({$_[0..0]})
```
```
Anlge
```
>- print every other character of long_word starting at the 3rd character

``` python
long_word = "Acknowledgement"
print(long_word[2::2])
```
``` powershell
$long_word = "Acknowledgement"
-join ($long_word.Substring(2) -split '(.{2})').ForEach({$_[0..0]})
```
```
koldeet
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  
## Accessing sub-strings  continued
### stepping backwards
```python
print(long_word[::-1])
```
use **[::-1]** to reverse a string

<font size="6" color="#00A0B2"  face="verdana"> <B>Example</B></font>
>- review and run example of stepping backwards using [::-1]
- make the step increment -1 to step backwards

``` python
long_word = "characteristics"
print(long_word[::-1])
```
``` powershell
$long_word = "characteristics"
-join $long_word[$long_word.Length..0]
```
```
scitsiretcarahc
```
>- review and run example of stepping backwards using [6::-1]
- start at the 7th letter backwards to start

``` python
long_word = "characteristics"
print(long_word[6::-1])
```
``` powershell
$long_word = "characteristics"
-join $long_word.Substring(0,7)[$long_word.Length..0]
```
```
tcarahc
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 5</B></font>  
## use slicing

>- reverse long_word

``` python
long_word = "stressed"
print(long_word[::-1])
```
``` powershell
$long_word = "stressed"
-join $long_word[$long_word.Length..0]
```
```
desserts
```
>-print the first 5 letters of long_word in reverse

``` python
long_word = "characteristics"
print(long_word[4::-1])
```
``` powershell
$long_word = "characteristics"
-join $long_word.Substring(0,5)[$long_word.Length..0]
```
```
arahc
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 6</B></font>  
## use slicing

>- print the first 4 letters of long_word
- print the first 4 letters of long_word in reverse
- print the last 4 letters of long_word in reverse
- print the letters spanning indexes 3 to 6 of long_word in Reverse

``` python
long_word = "timeline"
print(long_word[:4])
print(long_word[3::-1])
print(long_word[-1:-5:-1])
print(long_word[-2:-6:-1])
```
``` powershell
$long_word = "timeline"
$long_word.Substring(0,4)
-join $long_word.Substring(0,4)[-1..-4]
-join $long_word[-1..-4]
-join $long_word.Substring(3,4)[-1..-4]
```
```
time
emit
enil
nile
```
