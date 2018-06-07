# 2-2 Intro Python Practice
## Lists
<font size="5" color="#00A0B2" face="verdana"><B>
Student will be able to</B></font>  
- Create Lists
- Access items in a list
- Add Items to the end of a list
- Insert items into a list
- Delete items from a list

## Create Lists
``` python
# create and populate list called days_of_week then print it
days_of_week = ["Monday","Tuesday","Wednesday"
                ,"Thursday","Friday","Saturday","Sunday"]
# after days_of_week is run above, print the days in
# the list at odd indexes 1,3,5
print(days_of_week[1::2])
```
``` powershell
[System.Collections.ArrayList]$days_of_week = "Monday","Tuesday",
"Wednesday","Thursday","Friday","Saturday","Sunday"
#after days_of_week is run above, print the days
#in the list at odd indexes 1,3,5
foreach ($day in $days_of_week){
    if ($days_of_week.IndexOf($day) % 2 -eq 1){
        $days += "$day "
    }
}
$days
```
```
['Tuesday', 'Thursday', 'Saturday']
```
## Phone letters
![phone keys: number and letters](https://iajupyterprodblobs.blob.core.windows.net/imagecontainer/phone_letters.JPG)

Create a list, **`phone_letters`**, where the index 0 - 9 contains the letters for keys 0 - 9.  

- 0 = ' ' (a space)
- 1 = '' (empty)
- 2 = 'ABC'
- 3 = 'DEF'
- etc...

``` python
# create and populate list called phone_letters then print it
phone_letters = [" ","","ABC","DEF","GHI","JKL"
                 ,"MNO","PQRS","TUV","WXYZ"]
print(phone_letters)
```
``` powershell
# create and populate list called phone_letters then print it
[System.Collections.ArrayList]$phone_letters = " ","","ABC","DEF","GHI","JKL",
                 "MNO","PQRS","TUV","WXYZ"
"$phone_letters"
```
```
[' ', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
```

## Access Lists
### for the 2 cells below
- Use days_of_week list created above
- Run the cell above to make the list available

``` python
# create a variable: day
# assign day to "Tuesday" using days_of_week[]
# print day variable
day = days_of_week[1]
print(day)
# assign day to days_of_week index = 5
# print day variable
day = days_of_week[5]
print(day)
```
``` powershell
# create a variable: day
# assign day to "Tuesday" using days_of_week[]
# print day variable
$day = $days_of_week[1]
"$day"
# assign day to days_of_week index = 5
# print day variable
$day = $days_of_week[5]
"$day"
```
```
Tuesday
Saturday
```
## Append and Insert items into a list

### Endsday, Midsday, Resterday
#### for the exercises below
- Use days_of_week list created above
- Run the script defining days_of_week above to make the list available

``` python
# Make up a new day! - append an 8th day of the week to days_of_week
days_of_week.append("Endsday")
# print days_of_week
print(days_of_week)
# insert a new day into the middle of days_of_week between Wed - Thurs
days_of_week.insert(3,"MidsDay")
# print days_of_week
print(days_of_week)
# Extend the weekend - insert a day between Fri & Sat in the days_of_week list
days_of_week.insert(6,"Ext-weekend")
# print days_of_week
print(days_of_week)
```
``` powershell
# Make up a new day! - append an 8th day of the week to days_of_week
$days_of_week.Add("Endsday")
# print days_of_week
"$days_of_week"
# insert a new day into the middle of days_of_week between Wed - Thurs
$days_of_week.insert(3,"MidsDay")
# print days_of_week
"$days_of_week"
# Extend the weekend - insert a day between Fri & Sat in the days_of_week list
$days_of_week.insert(6,"Ext-weekend")
# print days_of_week
"$days_of_week"
```
```
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Endsday']
['Monday', 'Tuesday', 'Wednesday', 'MidsDay', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Endsday']
['Monday', 'Tuesday', 'Wednesday', 'MidsDay', 'Thursday', 'Friday', 'Ext-weekend', 'Saturday', 'Sunday', 'Endsday']
```
## Delete from a list
### `del` & `.pop()` some bad ideas
#### exercises below assume days_of_week appended/inserted 3 extra days in previous exercises

``` python
# print days_of_week
print(days_of_week)
# modified week is too long - pop() the last index of days_of_week & print .pop() value
days_of_week.pop()
# print days_of_week
print(days_of_week)
# delete (del) the new day added to the middle of the week
del(days_of_week[3])
# print days_of_week
print(days_of_week)
```
``` powershell
# print days_of_week
"$days_of_week"
# modified week is too long - pop() the last index of days_of_week & print .pop() value
$days_of_week[-1] | ForEach-Object {$_ ; $days_of_week.RemoveAt($days_of_week.Count-1)}
# print days_of_week
"$days_of_week"
# delete (del) the new day added to the middle of the week
$days_of_week.RemoveAt(3)
# print days_of_week
"$days_of_week"
```
```
['Monday', 'Tuesday', 'Wednesday', 'MidsDay', 'Thursday', 'Friday', 'Ext-weekend', 'Saturday', 'Sunday', 'Endsday']
['Monday', 'Tuesday', 'Wednesday', 'MidsDay', 'Thursday', 'Friday', 'Ext-weekend', 'Saturday', 'Sunday']
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Ext-weekend', 'Saturday', 'Sunday']
```

## Program:  Letter to Number Function
# TODO: insert video
### for the exercise below
- Use phone_letters list created above
- Run the cell above to make the list available

#### recall unit 1 using **`in`** to search for a string in a string
```python
if "e" in "open":
    print("e found")
else:
   print("e not found")
```

![phone keys: number and letters](https://iajupyterprodblobs.blob.core.windows.net/imagecontainer/phone_letters.JPG)

### create funtion let_to_num()
- let_to_num() takes input of a single letter, space or empty string stored in an argument variable: letter
  - use `while key < 10:` to try numbers 0 - 9 as index for `phone_letters` ("key" = phone dial pad key)
  - check if `letter` variable is in the index of `phone_letters[key]`

```python
key = 0
while key < 10:
    if # Create Code:
      # determine if letter is **`in`** any of the
      # phone_letters[key] where key is the index 0 -9:
        return key
    else:
        key = key + 1
return "Not Found"
```
- return the number or "Not Found"
- **call** let_to_num() to test the function so it prints the argument and return value with:
  - space
  - lowercase letter
  - different letter, uppercase
  - a number

**Bonus**: create a special case to check if empty string (`""`) was submitted   
the problem is that an empty string will be found in all strings as  
```python
if "" in "ABC":
```  
is True, and is true for any phone_letters, but should `return 1`

``` python
# [ ] create let_to_num()
def let_to_num():
    letter = input("Please enter letter :") # user input
    key = 0
    while key < 10:
        if letter != "": # check for empty string
            if letter.upper() in phone_letters[key]:
                return key
            else:
                key = key + 1
        else:
            return 1
    return print("Not Found")
let_to_num()
```
``` powershell
# [ ] create let_to_num()
function let_to_num(){
    $letter = Read-Host "Please enter letter" # user input
    $key = 0
    while ($key -lt 10){
        # $key
        if ($letter -ne $null){ # check for empty string
            if ($letter.ToUpper() -in $phone_letters[$key].ToCharArray()){
                return $key
            }
            else{
                $key = $key + 1
            }
        }
        else{
            return 1
        }
    }
    return "Not Found"
}
let_to_num
```
## Challenge: reverse a string
### using
- while
- .pop()
- insert()  

**`pop()`** the **first item** in the list and
``` python
# [ ] Challenge: write the code for "reverse a string"
string = list("this is string")
key = 0
while key < len(string):
    toinsert = string.pop()
    string.insert(key,toinsert)
    key = key + 1
print(string)
```
``` Powershell
[System.Collections.ArrayList]$string = "this is string".ToCharArray()
$key = 0
while ($key -lt $string.Count) {
    $toinsert = $string[-1]
    $string.RemoveAt($string.Count-1)
    $string.insert($key, $toinsert)
    $key = $key + 1
}
"$string"
```
