# 2-3.1 Intro Python
# The Power of List Iteration
- **for in: `for` loop using `in`**
- for range: **`for range(start,stop,step)`**
- more list methods: **`.extend()`, `+, .reverse(), .sort()`**   
- strings to lists, **`.split()`**, and list to strings, **`.join()`**   


><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- **Iterate through Lists** using **`for`** with **`in`**
- Use **`for range()`** in looping operations  
- Use list methods **`.extend()`, `+, .reverse(), .sort()`**  
- convert between lists and strings using  **`.split()`** and **`.join()`**  

<font size="4" color="#00A0B2"  face="verdana"> <B>Examples</B></font>

``` python
cities = ["New York", "Shanghai", "Munich", "Tokyo",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
for city in cities:
    print(city)
```
``` powershell
[System.Collections.ArrayList]$cities = ("New York", "Shanghai", "Munich",
"Tokyo", "Dubai", "Mexico City", "São Paulo", "Hyderabad")
foreach ($city in $cities){
    "$city"
}
```
```
New York
Shanghai
Munich
Tokyo
Dubai
Mexico City
São Paulo
Hyderabad
```
``` python
sales = [6, 8, 9, 11, 12, 17, 19, 20, 22]
total = 0
for sale in sales:
    total += sale
print("total sales:", total)
```
``` powershell
[System.Collections.ArrayList]$sales = (6, 8, 9, 11, 12, 17, 19, 20, 22)
$total = 0
foreach ($sale in $sales){
    $total += $sale
}
"total sales: $total"
```
```
total sales: 124
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>
### Iterate through Lists using `in`
>- create a list of 4 to 6 strings: birds
- print each bird in the list

``` python
birds = ["crow","parrot","pigeon","duck","peacock"]
for bird in birds:
    print(bird)
```
``` powershell
[System.Collections.ArrayList]$birds = ("crow","parrot",
"pigeon","duck","peacock")
foreach ($bird in $birds){
    "$bird"
}
```
```
crow
parrot
pigeon
duck
peacock
```
>- create a list of 7 integers: player_points
- print double the points for each point value

``` python
player_points = [1,5,16,18,25,30,35]
for points in player_points:
    print(points * 2)
```
``` powershell
$player_points = (1,5,16,18,25,30,35)
foreach ($points in $player_points){
    "$($points * 2)"
}
```
```
2
10
32
36
50
60
70
```
>- create long_string by concatenating the items in the "birds" list previously created
- print long_string - make sure to put a space between the bird names

``` python
birds = ["crow","parrot","pigeon","duck","peacock"]
long_string = ""
for bird in birds:
    long_string += bird+" "
print(long_string)
```
``` powershell
$birds = ("crow","parrot","pigeon","duck","peacock")
$long_string = ""
foreach ($bird in $birds){
    $long_string += $bird+" "
}
"$long_string"
```
```
crow parrot pigeon duck peacock
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Sort and Filter
### use comparison operators while iterating lists

<font size="4" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- Review and run example of sorting into strings to display

``` python
foot_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
            "intermediate cuneiform", "medial cuneiform"]
longer_names = ""
shorter_names = ""
for bone_name in foot_bones:
    if len(bone_name) < 10:
        shorter_names += "\n" + bone_name
    else:
        longer_names += "\n" + bone_name
print(shorter_names)
print(longer_names)
```
``` powershell
[System.Collections.ArrayList]$foot_bones = ("calcaneus", "talus", "cuboid", "navicular",
"lateral cuneiform", "intermediate cuneiform", "medial cuneiform")
$longer_names = ""
$shorter_names = ""
foreach ($bone_name in $foot_bones){
    if ($bone_name.Length -lt 10){
        $shorter_names += "`n" + $bone_name
    }
    else{
        $longer_names += "`n" + $bone_name
    }
}
$shorter_names
$longer_names
```
```
calcaneus
talus
cuboid
navicular

lateral cuneiform
intermediate cuneiform
medial cuneiform
```
>- review and run example of sorting into lists

``` python
foot_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
            "intermediate cuneiform", "medial cuneiform"]
longer_names = []
shorter_names = []
for bone_name in foot_bones:
    if len(bone_name) < 10:
        shorter_names.append(bone_name)
    else:
        longer_names.append(bone_name)
print(shorter_names)
print(longer_names)
```
``` powershell
$foot_bones = ("calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
            "intermediate cuneiform", "medial cuneiform")
[System.Collections.ArrayList]$longer_names = @()
[System.Collections.ArrayList]$shorter_names = @()
foreach ($bone_name in $foot_bones){
    if ($bone_name.Length -lt 10){
        $shorter_names.add($bone_name) | Out-Null
    }
    else{
        $longer_names.add($bone_name) | Out-Null
    }
}
"$shorter_names"
"$longer_names"
```
```
calcaneus talus cuboid navicular
lateral cuneiform intermediate cuneiform medial cuneiform
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>
>- Using cities from the example above iterate through the list using "for"/"in"
- Print only cities starting with "m"

``` python
cities = ["New York", "Shanghai", "Munich", "Tokyo",
          "Dubai", "Mexico City", "São Paulo", "Hyderabad"]
for city in cities:
    if city.lower().startswith("m"):
        print(city)
    else:
        pass
```
``` powershell
[System.Collections.ArrayList]$cities = ("New York", "Shanghai",
"Munich", "Tokyo", "Dubai", "Mexico City", "São Paulo", "Hyderabad")
foreach ($city in $cities){
    if ($city[0]  -ceq "M"){
        $city
    }
    else{
    }
}
```
```
Munich
Mexico City
```
>- sort into lists with "A" in the city name and without "A"
in the name: `a_city` & `no_a_city`

``` python
cities = ["New York", "Shanghai", "Munich", "Tokyo",
          "Dubai", "Mexico City", "São Paulo", "Hyderabad"]
a_city = []
no_a_city = []
for city in cities:
#     if city.lower().count("a") > 0:
    if "a" in city.lower():
        a_city.append(city)
    else:
        no_a_city.append(city)
print(a_city)
print(no_a_city)
```
``` powershell
[System.Collections.ArrayList]$cities = ("New York", "Shanghai", "Munich",
"Tokyo", "Dubai", "Mexico City", "São Paulo", "Hyderabad")
[System.Collections.ArrayList]$a_city = @()
[System.Collections.ArrayList]$no_a_city = @()
foreach ($city in $cities){
    if ("a" -in $city.ToCharArray()){
        $a_city.add($city) | Out-Null
    }
    else{
        $no_a_city.add($city)| Out-Null
    }
}
"$a_city"
"$no_a_city"
```
```
Shanghai Dubai São Paulo Hyderabad
New York Munich Tokyo Mexico City
```
## More iteration of lists
>use string methods while iterating lists
- Counting
- Searching
- iterates the "cities" list, count & sum letter "a" in each city name

``` python
cities = ["New York", "Shanghai", "Munich", "Tokyo",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
search_letter = "a"
total = 0
for city_name in cities:
    total += city_name.lower().count(search_letter)
print("The total # of \"" + search_letter + "\" found in the list is", total)
```
``` powershell
[System.Collections.ArrayList]$cities = "New York", "Shanghai", "Munich",
"Tokyo", "Dubai", "Mexico City", "São Paulo", "Hyderabad"
$search_letter = "a"
$total = 0
foreach ($city_name in $cities){
    $total += $($city_name.ToCharArray() -match "a").count
}
"The total # of `"$search_letter`" found in the list is $total"
```
```
The total # of "a" found in the list is 6
```

>- city_search function has a default list of cities to search

``` python
def city_search(search_item, cities = ["New York", "Shanghai", "Munich", "Tokyo"] ):
    for city in cities:
        if city.lower() == search_item.lower():
            return True
        else:
            # go to the next item
            pass
    # no more items in list
    return False
# a list of cities
visited_cities = ["New York", "Shanghai", "Munich", "Tokyo", "Dubai", "Mexico City", "São Paulo", "Hyderabad"]
search = input("enter a city visited: ")
# Search the default city list
print(search, "in default cities is", city_search(search))
# search the list visited_cities using 2nd argument
print(search, "in visited_cites list is", city_search(search,visited_cities))
```
``` powershell
$visited_cities = ("New York", "Shanghai", "Munich", "Tokyo",
"Dubai", "Mexico City", "São Paulo", "Hyderabad")
$search = read-host "enter a city visited"
# Search the default city list
"$search, in default cities is $(city_search($search))"
# search the list visited_cities using 2nd argument
"$search, in visited_cites list is $(city_search -search_item `
$search -cities $visited_cities)"
```
```
enter a city visited: Dubai
Dubai in default cities is False
Dubai in visited_cites list is True
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>  
## Program: Paint Stock  
>check a list for a paint color request and print status of color "found"/"not found"
- create list, paint_colors, with 5+ colors
- get user input of string:color_request
- iterate through each color in paint_colors to check for a match with color_request

``` python
paint_colors = ["red","white","green","yellow","pink"]
color_request = input("enter color: ")
result = []
for color in paint_colors:
    if color.lower() == color_request.lower():
        result.append("found")
    else:
        result.append("not found")
if result.count("found") > 0:
    print(color_request,"found")
else:
    print(color_request,"Not found")
```
``` powershell
$paint_colors = ("red","white","green","yellow","pink")
$color_request = read-host "enter color"
if ($color_request -in $paint_colors){
    "$color_request found"
}
else{
    "$color_request Not found"
}
```
```
enter color: black
black Not found
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>  
>## Program: Foot Bones Quiz
**Create a function** that will iterate through foot_bones looking for a match of a string argument
- Call the function 2 times with the name of a footbone
- print immediate feedback for each answer (correct - incorrect)
- print the total # of foot_bones identified
- The program will use the foot_bones list:
```python
foot_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
             "intermediate cuneiform", "medial cuneiform"]
```
Bonus: remove correct response item from list if correct so user cannot answer same item twice

``` python
foot_bones = ["calcaneus", "talus", "cuboid", "navicular", "lateral cuneiform",
             "intermediate cuneiform", "medial cuneiform"]
def bones_quiz(input_bone,foot_bones):
    result = []
    for bone in foot_bones:
            if input_bone.lower() == bone.lower():
                result.append("correct")
                foot_bones.remove(bone)
            else:
                result.append("incorrect")
    if result.count("correct") > 0:
        return print("correct,","Total # of foot bones identified",result.count("correct"))
    else:
        return print("incorrect")
bones_quiz("talus",foot_bones)
bones_quiz("cuboid",foot_bones)
bones_quiz("cuboide",foot_bones)
```
``` powershell
[System.Collections.ArrayList]$foot_bones = ("calcaneus", "talus", "cuboid",
"navicular", "lateral cuneiform", "intermediate cuneiform", "medial cuneiform")
function bones_quiz($input_bone,$foot_bones){
    [System.Collections.ArrayList]$result = @()
    try{
        foreach ($bone in $foot_bones){
            if ($input_bone -eq $bone){
                $result.add("correct") | Out-Null
                $foot_bones.remove($bone)
            }
            else{
                $result.add("incorrect") | Out-Null
            }
        }
    }
    catch {}
    if ("correct" -in $result){
      return "correct, Total # of foot bones identified $($($result |
      Where-Object {$_ -eq "correct"}).count)"
    }
    else{
        return "incorrect"
    }
}
bones_quiz -foot_bones $foot_bones -input_bone "talus"
bones_quiz -foot_bones $foot_bones -input_bone "cuboid"
bones_quiz -foot_bones $foot_bones -input_bone "cuboide"
```
```
correct, Total # of foot bones identified 1
correct, Total # of foot bones identified 1
incorrect
```
