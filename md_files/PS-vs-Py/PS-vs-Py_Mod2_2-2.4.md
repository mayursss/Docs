# 2-2.4 Intro Python
## Lists
- List Creation
- List Access
- List Append
- List Insert
- **List Delete (`del`, `.pop()` & `.remove()`)**

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- Create Lists
- Access items in a list
- Add Items to the end of a list
- Insert items into a list
- **Delete items from a list with `del`, `.pop()` & `.remove()`**

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
>## Delete a specific List index
- ### `del ` statement  
```python
  del party_list[2]
```

``` python
# the list before delete
sample_list = [11, 21, 13, 14, 51, 161, 117, 181]
print("sample_list before: ", sample_list)
del sample_list[1]
# the list after delete
print("sample_list after:  ", sample_list)
```
``` powershell
# the list before delete
[System.Collections.ArrayList]$sample_list = (11, 21, 13, 14, 51, 161, 117, 181)
"sample_list before: $sample_list"

$sample_list.RemoveAt(1)
# the list after delete
"sample_list after:  $sample_list"
```
```
sample_list before:  [11, 21, 13, 14, 51, 161, 117, 181]
sample_list after:   [11, 13, 14, 51, 161, 117, 181]
```
``` python
# [ ] review and run example
mixed_types = [1, "cat"]
# append number
mixed_types.append(3)
print("mixed_types list: ", mixed_types)

# append string
mixed_types.append("turtle")
print("mixed_types list: ", mixed_types)
```
``` powershell
# [ ] review and run example
[System.Collections.ArrayList]$mixed_types = (1, "cat")
# append number
$mixed_types.add(3)
"mixed_types list: $mixed_types"
# append string
$mixed_types.add("turtle")
"mixed_types list: $mixed_types"
```
```
mixed_types list:  [1, 'cat', 3]
mixed_types list:  [1, 'cat', 3, 'turtle']
```
>- print ft_bones list
- delete "cuboid" from ft_bones
- delete "navicular" from list
- reprint list

``` python
ft_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
            "intermediate cuneiform", "medial cuneiform"]
print(ft_bones)
del ft_bones[2]
del ft_bones[3]
print(ft_bones)
```
``` powershell
[System.Collections.ArrayList]$ft_bones = ("calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform", "intermediate cuneiform", "medial cuneiform")
"$ft_bones"
$ft_bones.RemoveAt(2)
$ft_bones.RemoveAt(3)
"$ft_bones"
```
```
['calcaneus', 'talus', 'cuboid', 'navicular', 'lateral cuneiform', 'intermediate cuneiform', 'medial cuneiform']
['calcaneus', 'talus', 'navicular', 'intermediate cuneiform', 'medial cuneiform']
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## .pop() gets and deletes item in list
>### `.pop()`  method default is last item in a list
```python
last_item = party_list.pop()
first_item = party_list.pop(0)
```

``` python
# pop() gets the last item by default
party_list = ["Joana", "Alton", "Tobias"]
print(party_list)
print("Hello,", party_list.pop())
print("\n", party_list)
print("Hello,", party_list.pop())
print("\n", party_list)
print("Hello,", party_list.pop())
print("\n", party_list)
```
``` powershell
[System.Collections.ArrayList]$party_list = ("Joana", "Alton", "Tobias")
$party_list
"Hello, " + $party_list[-1]; $party_list.RemoveAt($party_list.Count - 1) ## There is nothing like .pop() in powershell, so we need to try alternate.
"$party_list"
"Hello, " + $party_list[-1]; $party_list.RemoveAt($party_list.Count - 1)
"$party_list"
"Hello, " + $party_list[-1]; $party_list.RemoveAt($party_list.Count - 1)
"$party_list"
```
```
['Joana', 'Alton', 'Tobias']
Hello, Tobias
 ['Joana', 'Alton']
Hello, Alton
 ['Joana']
Hello, Joana
 []
```
``` python
# can pop specific index like pop(3)
number_list = [11, 21, 13, 14, 51, 161, 117, 181]
print("before:", number_list)
number_list.pop(3)
print("after :", number_list)
```
``` powershell
# can pop specific index like pop(3)
[System.Collections.ArrayList]$number_list = (11, 21, 13, 14, 51, 161, 117, 181)
"before: $number_list"
$number_list.RemoveAt(3)  ## same as number_list.pop(3)
"after : $number_list"
```
```
before: [11, 21, 13, 14, 51, 161, 117, 181]
after : [11, 21, 13, 51, 161, 117, 181]
```
``` python
# set a variable to a poped value
number_list = [11, 21, 13, 14, 51, 161, 117, 181]
print("list before:", number_list)
num_1 = number_list.pop()
num_2 = number_list.pop()
print("list after :", number_list)
print("add the popped values:", num_1, "+", num_2, "=", num_1 + num_2)
```
``` powershell
# set a variable to a poped value
[System.Collections.ArrayList]$number_list = (11, 21, 13, 14, 51, 161, 117, 181)
"list before: $number_list"
$num_1 = $number_list[-1] | ForEach-Object {$_;$number_list.Remove($_)}
$num_2 = $number_list[-1] | ForEach-Object {$_;$number_list.Remove($_)}
"list after : $number_list"
"add the popped values: $num_1 + $num_2 = $($num_1 + $num_2)"
```
```
list before: [11, 21, 13, 14, 51, 161, 117, 181]
list after : [11, 21, 13, 14, 51, 161]
add the popped values: 181 + 117 = 298
```
``` python
# [ ] pop() and print the first and last items from the ft_bones list
ft_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
            "intermediate cuneiform", "medial cuneiform"]
print(ft_bones.pop(0))
print(ft_bones.pop(-1))
# [ ] print the remaining list
print(ft_bones)
```
``` powershell
# pop() and print the first and last items from the ft_bones list
[System.Collections.ArrayList]$ft_bones = ("calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
    "intermediate cuneiform", "medial cuneiform")
$ft_bones[0] | ForEach-Object {$_; $ft_bones.Remove($_)}
$ft_bones[-1] | ForEach-Object {$_; $ft_bones.Remove($_)}
# print the remaining list
"$ft_bones"
```
```
calcaneus
medial cuneiform
['talus', 'cuboid', 'navicular', 'lateral cuneiform', 'intermediate cuneiform']
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## an empty list is False
>### in a conditional an empty list will evaluate `False`
This allows creating a while loop that runs until a list is empty
```python
while dog_types:
```
``` python
dog_types = ["Lab", "Pug", "Poodle"]
while dog_types:
    print(dog_types.pop())
```
``` powershell
[System.Collections.ArrayList]$dog_types = ("Lab", "Pug", "Poodle")
while ($dog_types){
    $dog_types[-1] | ForEach-Object {$_; $dog_types.Remove($_)}
}
```
```
Poodle
Pug
Lab
```
# Cash Register Input
>- create a empty list `purchase_amounts`
- populate the list with user input for the price of items
- continue adding to list with `while` until "done" is entered
  - can use `while True:` with `break`
- print `purchase_amounts`
- create a **`subtotal`** variable = 0
create a while loop that runs **`while`** purchase_amount (is not empty)
- inside the loop
  - **`pop()`** the last list value cast as a float type
  - add the float value to a **`subtotal`** variable
- after exiting the loop print **`subtotal`**  

  *be sure to populate purchase_amounts by running pt 1 above*
``` python
purchase_amounts = []
subtotal = 0
while True:
    price = input("enter price of items ")
    if price.isdigit() == False:
        if price.lower() == "done":
            break
    else:
        purchase_amounts.append(price)
print("final price list",purchase_amounts)
while purchase_amounts:
    subtotal += float(purchase_amounts.pop())
print(subtotal)
```
``` powershell
$purchase_amounts = New-Object System.Collections.ArrayList
$subtotal = 0
while ($True){
    $price = Read-Host "enter price of items "
    if ($price -match "[a-zA-Z]"){
        if ($price.ToLower() -eq "done"){
            break
        }
    }
    else{
        $purchase_amounts.add($price) | Out-Null
    }
}
"final price list $purchase_amounts"
while ($purchase_amounts){
   [float]$subtotal += ($purchase_amounts[-1] | ForEach-Object {$_ ; $purchase_amounts.Remove($_)})
}
"Total $subtotal"
```
```
final price list ['10', '20', '30', '40', '50']
Total 150.0
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Delete a specific object from a list with `.remove()`
>### `.remove(object)` removes the 1st item that matches
```python
dog_types.remove("Pug")
```
>**`ValueError`** occurs if the object is not available to be removed

``` python
# [ ] review and run example
dog_types = ["Lab", "Pug", "Poodle"]
if "Pug" in dog_types:
    dog_types.remove("Pug")
else:
    print("no Pug found")
print(dog_types)
```
``` powershell
[System.Collections.ArrayList]$dog_types = "Lab", "Pug", "Poodle"
if ("Pug" -in $dog_types){
    $dog_types.remove("Pug")
}
else{
    print("no Pug found")
}
"$dog_types"
```
```
 ['Lab', 'Poodle']
```
``` python
# [ ] review and run example
dogs = ["Lab", "Pug", "Poodle", "Poodle", "Pug", "Poodle"]
print(dogs)
while "Poodle" in dogs:
    dogs.remove("Poodle")
    print(dogs)
```
``` powershell
[System.Collections.ArrayList]$dogs = "Lab", "Pug", "Poodle", "Poodle", "Pug", "Poodle"
"$dogs"
while ("Poodle" -in $dogs){
    $dogs.remove("Poodle")
    "$dogs"
}
```
```
['Lab', 'Pug', 'Poodle', 'Poodle', 'Pug', 'Poodle']
['Lab', 'Pug', 'Poodle', 'Pug', 'Poodle']
['Lab', 'Pug', 'Pug', 'Poodle']
['Lab', 'Pug', 'Pug']
```
>- remove one "Poodle" from the list: dogs , or print "no Poodle found"
- print list before and after

``` python
dogs = ["Lab", "Pug", "Poodle", "Poodle", "Pug", "Poodle"]
print("Before: ",dogs)
if "Poodle" in dogs:
    dogs.remove("Poodle")
else:
    "no Poodle found"

print("After: ",dogs)
```
``` powershell
[System.Collections.ArrayList]$dogs = ("Lab", "Pug", "Poodle",
"Poodle", "Pug", "Poodle")
"Before: $dogs"
if("Poodle" -in $dogs){
    $dogs.remove("Poodle")
}
else{
    "no Poodle found"
}    
"After: $dogs"
```
```
Before: Lab Pug Poodle Poodle Pug Poodle
After: Lab Pug Poodle Pug Poodle
```
