# 2-3.2 Intro Python
# The Power of List Iteration (loops)
- for in: **`for`** loop using **`in`**
- ** for range: `for range(start,stop,step)`**
- more list methods: **`.extend()`, `+, .reverse(), .sort()`**      
- strings to lists, **`.split()`**, and list to strings, **`.join()`**   

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- Iterate through Lists using **`for`** with **`in`**
- **Use `for range()` in looping operations**  
- Use list methods **`.extend()`, `+, .reverse(), .sort()`**  
- convert between lists and strings using  **`.split()`** and **`.join()`**

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

##  `range(stop)`
### The range(*stop*) function creates a sequence  
>using 1 argument with range(*stop*)
- deault start: 0
- stop: stopping integer, does not process stop number
```python
for count in range(10):
  print(count)
```
>### same as
```python
for count in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]:
  print(count)
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  

### range runs from `0` through the integer before `stop`
>- review and run example

``` python
for count in range(10):
  print(count)
```
``` powershell
foreach ($count in (0..9)){ $count }
```
```
0
1
2
3
4
5
6
7
8
9
```
>- review and run example

``` python
digits = range(10)
print("digits =", list(digits), "\n")

for count in digits:
    print(count)
```
``` powershell
$digits = (0..9)
"digits = [$digits] `n"
foreach ($count in $digits){$count}
```
```
digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

0
1
2
3
4
5
6
7
8
9
```
>- review and run example

``` python
sub_total = 0
for item in range(10):
    sub_total += item
    print("sub_total:", sub_total)
print("Total =", sub_total)
```
``` powershell
$sub_total = 0
foreach ($item in (0..9)){
    $sub_total += $item
    "sub_total: $sub_total"
}
"Total = $sub_total"
```
```
sub_total: 0
sub_total: 1
sub_total: 3
sub_total: 6
sub_total: 10
sub_total: 15
sub_total: 21
sub_total: 28
sub_total: 36
sub_total: 45
Total = 45
```
>- review and run example
- print the first half of a spelling list
- find length of 1st half of list (must be int)

``` python
spell_list = ["Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice"]
half_1 = int(len(spell_list)/2)
for word in range(half_1):
    print(spell_list[word])
```
``` powershell
$spell_list = "Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice"
$half_1 = [System.Math]::Floor($spell_list.Length/2)-1
foreach ($word in (0..$half_1)){
    $spell_list[$word]
}
```
```
Tuesday
Wednesday
February
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>

## `range(stop)`
>- for x = 6, use range(x) to print the numbers 1 through 6

``` python
x = 6
for number in range(x):
    print(number)
```
``` powershell
$x = 6
foreach ($number in (0..($x-1))){$number}
```
```
0
1
2
3
4
5
```
>- using range(x) multiply the numbers 1 through 7
-  1x2x3x4x5x6x7 = 5040

``` python
x = 7
total = 1
for number in range(x):
    total += total * number
print("1x2x3x4x5x6x7 =",total)
```
``` powershell
$x = 7
$total = 1
foreach ($number in (1..($x-1))){
    $total += $total * $number}
"1x2x3x4x5x6x7 = $total"
```
```
1x2x3x4x5x6x7 = 5040
```
>- print the second half of a spelling list using a
range(stop) loop to iterate the list

``` python
spell_list = ["Wednesday", "Tuesday", "February"
              , "November", "Annual", "Calendar", "Solstice"]

for count in range(len(spell_list)):
    if count >= half_1: print(spell_list[count])
```
``` powershell
$spell_list = ("Wednesday", "Tuesday", "February",
    "November", "Annual", "Calendar", "Solstice")
$half_1 = [math]::Floor($spell_list.Length/2)
foreach ($spell in (0..($spell_list.Length-1))){
    if ($spell -ge $half_1){ $spell_list[$spell]}
}
```
```
November
Annual
Calendar
Solstice
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

##  `range(start,stop)`
### The range(*start,stop*) function creates a sequence
>using 2 arguments with range(*start,stop*)
- start: starting integer value of a range loop
- stop: stopping integer (second argument), does not process stop number

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  

### range runs from `start` integer through the integer before `stop`

```python
for count in range(5,10):
  print(count)
```
``` powershell
foreach($count in (5..9)){$count}
```
```
5
6
7
8
9
```
>- review and run example

``` python
sub_total = 0
temp = 0
for item in range(5, 11):
    temp = sub_total
    sub_total += item
    print("sub_total:", temp, "+", item, "=",sub_total)
print("Total =", sub_total)
```
``` powershell
$sub_total = 0
$temp = 0
foreach ($item in (5..10)){
    $temp = $sub_total
    $sub_total += $item
    "sub_total: $temp + $item = $sub_total"
}
"Total = $sub_total"
```
```
sub_total: 0 + 5 = 5
sub_total: 5 + 6 = 11
sub_total: 11 + 7 = 18
sub_total: 18 + 8 = 26
sub_total: 26 + 9 = 35
sub_total: 35 + 10 = 45
Total = 45
```
>- review and run example

``` python
spell_list = ["Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice"]
# find length list
spell_len = len(spell_list)
# find lenght of 1st half (aka - start of 2nd half)
half_1 = int(spell_len/2)

# print 2nd half list
for word in range(half_1,spell_len):
    print(spell_list[word])
```
``` powershell
$spell_list = ("Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice")
$spell_len = $spell_list.Length
$half_1 = [math]::Floor($spell_len/2)
foreach ($word in ($half_1..$spell_len)){
    $spell_list[$word]
}
```
```
November
Annual
Calendar
Solstice
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>

##  `range(start,stop)`
>- using range(start,stop), .append() the numbers 5 to 15 to the list: five_fifteen
- print list five_fifteen

``` python
five_fifteen = []
for num in range(5,16):
    five_fifteen.append(num)
print(five_fifteen)
```
``` powershell
[System.Collections.ArrayList]$five_fifteen = @()
foreach ($num in (5..15)){
    $five_fifteen.add($num)| Out-Null}
"$five_fifteen"
```
```
5 6 7 8 9 10 11 12 13 14 15
```
>- using range(start,stop) - print the 3rd, 4th and 5th words in spell_list
- output should include "February", "November", "Annual"

``` python
spell_list = ["Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice"]
for count in range(2,5):
    print(spell_list[count])
```
``` powershell
$spell_list = ("Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice")
foreach ($count in (2..4)){
    $spell_list[$count]}
```
```
February
November
Annual
```
>- using code find the index of "Annual" in spell_list
- using range, print the spell_list including "Annual" to end of list

``` python
spell_list = ["Tuesday", "Wednesday", "February"
, "November", "Annual", "Calendar", "Solstice"]
index = 0
for item in spell_list:
    if item.lower() == "annual":
        for count in range(index+1):
            print(spell_list[count])
    else:
        index += 1
```
``` powershell
$spell_list = ("Tuesday", "Wednesday", "February",
 "November", "Annual", "Calendar", "Solstice")
$index = 0
foreach ($item in $spell_list){
    if ($item -eq "annual"){
        foreach ($count in (0..$index)){
            $spell_list[$count]
        }
    }
    else{
        $index += 1
    }
}
```
```
Tuesday
Wednesday
February
November
Annual
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>

##  `range(start,stop,step)`
### The range(*start,stop,step*) function creates a sequence
>using 3 arguments with range(*start,stop,step*)
- start: starting integer value of a range loop
- stop: stopping integer (second argument), does not process stop number
- step: skip value for each loop
```python
for count in range(10,101,10):
  print(count)
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  

### range runs from `start` integer, skipping by `step`,
through the largest `step` integer before reaching `stop`
>- review and run example

``` python
for count in range(25,101,25):
  print(count)
```
``` powershell
foreach($count in (25..100)){
    if ($count % 25 -eq 0){
    $count
    }
}
```
```
25
50
75
100
```
>- review and run example

``` python
sub_total = 0
temp = 0
for item in range(25,46,5):
    temp = sub_total
    sub_total += item
    print("sub_total:", temp, "+", item, "=",sub_total)
print("Total =", sub_total)
```
``` powershell
$sub_total = 0
$temp = 0
foreach ($item in (25..45)){
    if ($item % 5 -eq 0){
        $temp = $sub_total
        $sub_total += $item
        "sub_total: $temp + $item = $sub_total"
    }
}
"Total = $sub_total"
```
```
"Total = $sub_total"
sub_total: 0 + 25 = 25
sub_total: 25 + 30 = 55
sub_total: 55 + 35 = 90
sub_total: 90 + 40 = 130
sub_total: 130 + 45 = 175
Total = 175
```
>- review and run example printing the 1st and then every other word in spell_list

``` python
spell_list = ["Tuesday", "Wednesday", "February"
, "November", "Annual", "Calendar", "Solstice"]
for index in range(0,len(spell_list),2):
    print(spell_list[index])
```
``` powershell
$spell_list = ("Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice")
foreach ($index in (0..$spell_list.Length)){
    if ($index % 2 -eq 0){
        $spell_list[$index]
    }
}
```
```
Tuesday
February
Annual
Solstice
```
>- review and run example casting range to list

``` python
odd_list = list(range(1,20,2))
print(odd_list)
```
``` powershell
$odd_list = (1..20) | ForEach-Object {if ($_ % 2 -eq 1){$_}}
"$odd_list"
```
```
1 3 5 7 9 11 13 15 17 19
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>

## `range(start,stop,step)`
>- print numbers 10 to 20 by 2's using range

``` python
list_1 = list(range(10,21,2))
print(list_1)
```
``` powershell
$list_1 = (10..20) | ForEach-Object {if ($_ % 2 -eq 0){$_}}
"$list_1"
```
```
10 12 14 16 18 20
```
>- print numbers 20 to 10 using range (need to countdown)
- Hint: start at 20

``` python
m = 21
for i in range(m):
    if i <=10:
        m += -1
        print(m)
    else:
        pass
```
``` powershell
$m = 21
 foreach ($i in (0..$m)){
     if ($i -le 10){
         $m += -1
         $m}
     else{
         }
 }
```
```
20
19
18
17
16
15
14
13
12
11
10
```
>- print first and every third word in spell_list

``` python
spell_list = ["Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice"]
range_1 = len(spell_list)
for i in range(0,range_1,3):
    print(spell_list[i])
```
``` powershell
$spell_list = ("Tuesday", "Wednesday", "February",
"November", "Annual", "Calendar", "Solstice")
$range_1 = $spell_list.Length
foreach ($i in (0..$range_1)){
    if($i % 3 -eq 0){
        $spell_list[$i]
    }
}
```
```
Tuesday
November
Solstice
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>

### Program: List of letters
>- Input a word string (**word**)
- find the string length of word
- **use range()** to iterate through each letter in word (can use to range loops)
- Save odd and even letters from the word as lists
  - **odd_letters**: starting at index 0,2,...
  - **even_letters**: starting at index 1,3,...
- print odd and even lists

``` python
word = input("input word string: ")
word_len = len(word)
odd_letters = []
even_letters = []
for letter in range(0,word_len,2):
    odd_letters.append(word[letter])
for letter in range(1,word_len,2):
    even_letters.append(word[letter])
print(odd_letters,"\n",even_letters)
```
``` powershell
$word = Read-Host "input word string"
$word_len = $word.length
[System.Collections.ArrayList]$odd_letters = @()
[System.Collections.ArrayList]$even_letters = @()
foreach ($letter in (0..$word_len)){
    if ($letter % 2 -eq 0){
        $odd_letters.Add($word[$letter]) | Out-Null
    }
    else{
        $even_letters.Add($word[$letter])| Out-Null
    }
}
"$odd_letters `n $even_letters"
```
```
input word string: complexity
['c', 'm', 'l', 'x', 't']
 ['o', 'p', 'e', 'i', 'y']
```
