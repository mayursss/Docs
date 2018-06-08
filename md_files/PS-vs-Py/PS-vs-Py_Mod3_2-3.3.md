# 2-3.3 Intro Python
# The Power of List Iteration
- for in: **`for`** loop using **`in`**
- for range: **`for range(start,stop,step)`**
- **more list methods: `.extend()`, `+, .reverse(), .sort()`**   
- strings to lists, **`.split()`**, and list to strings, **`.join()`**     

><font size="5" color="#00A0B2"  face="verdana"> <B>Student will be able to</B></font>  
- Iterate through Lists using **`for`** with **`in`**
- Use **`for range()`** in looping operations
- **Use list methods `.extend()`, `+, .reverse(), .sort()`**  
- convert between lists and strings using  **`.split()`** and **`.join()`**

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Combine Lists
## `+`  list addition
##  `.extend()` list method   

### combine lists with `+` and `.extend()`
```python
visited_cities = ["New York", "Shanghai", "Munich", "Toyko",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
wish_cities = ["Reykjavík", "Moscow", "Beijing", "Lamu"]
# combine in a new list
all_cities = visited_cities + wish_cities

# add a list to an existing list
visitied_cities.extend(wish_cities)
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- Review and run example
- .extend()
- extending visited_cities list (IN PLACE) by concatenating wish_cities

``` python
visited_cities = ["New York", "Shanghai", "Munich", "Toyko",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
wish_cities = ["Reykjavík", "Moscow", "Beijing", "Lamu"]
visited_cities.extend(wish_cities)
print("ALL CITIES",visited_cities)
```
``` powershell
[System.Collections.ArrayList]$visited_cities = ("New York", "Shanghai",
"Munich", "Toyko", "Dubai", "Mexico City",
"São Paulo", "Hyderabad")
$wish_cities = ("Reykjavík", "Moscow", "Beijing", "Lamu")
$visited_cities.AddRange($wish_cities)
"ALL CITIES $visited_cities"
```
```
ALL CITIES ['New York', 'Shanghai', 'Munich', 'Toyko', 'Dubai', 'Mexico City', 'São Paulo', 'Hyderabad', 'Reykjavík', 'Moscow', 'Beijing', 'Lamu']
```

>- Review and run example
- (+) Addition operator for lists creates a (NEW) combined List

``` python
visited_cities = ["New York", "Shanghai", "Munich", "Toyko",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
wish_cities = ["Reykjavík", "Moscow", "Beijing", "Lamu"]
all_cities = visited_cities + wish_cities
print("ALL CITIES")
for city in all_cities:
    print(city)
```
``` powershell
[System.Collections.ArrayList]$visited_cities = ("New York", "Shanghai",
"Munich", "Toyko", "Dubai", "Mexico City",
"São Paulo", "Hyderabad")
$wish_cities = ("Reykjavík", "Moscow", "Beijing", "Lamu")
$all_cities = $visited_cities + $wish_cities
"ALL CITIES"
foreach($city in $all_cities){
    $city
}
```
```
ALL CITIES
New York
Shanghai
Munich
Toyko
Dubai
Mexico City
São Paulo
Hyderabad
Reykjavík
Moscow
Beijing
Lamu
```

>- Review and run example
- (+) Addition operator

``` python
team_a = [0,2,2,2,4,4,4,5,6,6,6]
team_b = [0,0,0,1,1,2,3,3,3,6,8]
print("Team A:", team_a, "\nTeam B:",team_b)
team_totals = team_a + team_b
print("Team Totals", team_totals)
```
``` powershell
[System.Collections.ArrayList]$team_a = 0,2,2,2,4,4,4,5,6,6,6
[System.Collections.ArrayList]$team_b = 0,0,0,1,1,2,3,3,3,6,8
"Team A: $team_a`nTeam B: $team_b"
$team_totals = $team_a + $team_b
"Team Totals $team_totals"
```
```
Team A: [0, 2, 2, 2, 4, 4, 4, 5, 6, 6, 6]
Team B: [0, 0, 0, 1, 1, 2, 3, 3, 3, 6, 8]
Team Totals [0, 2, 2, 2, 4, 4, 4, 5, 6, 6, 6, 0, 0, 0, 1, 1, 2, 3, 3, 3, 6, 8]
```

>- Review and run example after running above
- .extend()
- notice, what happens if you keep running this code?

``` python
team_a.extend(team_b)
print("Team_a extended", team_a)
```
``` powershell
$team_a.AddRange($team_b)
"Team_a extended $team_a"
```
```
Team_a extended [0, 2, 2, 2, 4, 4, 4, 5, 6, 6, 6, 0, 0, 0, 1, 1, 2, 3, 3, 3, 6, 8]
```
> note
>
> If we keep running this code it will keep adding team_b to team_a and array will grow.

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>
### combine lists

> - extend the list common_birds with list birds_seen which you must create

``` python
common_birds = ["chicken", "blue jay", "crow", "pigeon"]
birds_seen = ["parrot","peacock","eagle","owl"]
common_birds.extend(birds_seen)
print(common_birds)
```
``` powershell
[System.Collections.ArrayList]$common_birds = ("chicken", "blue jay", "crow", "pigeon")
[System.Collections.ArrayList]$birds_seen = ("parrot","peacock","eagle","owl")
$common_birds.AddRange($birds_seen)
"$common_birds"
```
```
['chicken', 'blue jay', 'crow', 'pigeon', 'parrot', 'peacock', 'eagle', 'owl']
```

>- Create 2 lists zero_nine and ten_onehundred that contain 1-9, and 10 - 100 by 10's.
- use list addition to concatenate the lists into all_num and print

``` python
zero_nine = [1,2,3,4,5,6,7,8,9]
ten_onehundred = [10,20,30,40,50,60,70,80,90,100]
all_num = zero_nine +  ten_onehundred
print(all_num)
```
``` powershell
[System.Collections.ArrayList]$zero_nine = 1,2,3,4,5,6,7,8,9
[System.Collections.ArrayList]$ten_onehundred = 10,20,30,40,50,60,70,80,90,100
$all_num = $zero_nine +  $ten_onehundred
"$all_num"
```
```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## .reverse() : reverse a list in place

```python
cities_1 = ["Dubai", "Mexico City", "São Paulo", "Hyderabad"]
print("regular", cities_1)
cities_1.reverse()
print("reversed", cities_1)
```

> Review and run example

``` python
cities_1 = ["Dubai", "Mexico City", "São Paulo", "Hyderabad"]
print("regular", cities_1)
cities_1.reverse()
print("reversed", cities_1)
```
``` powershell
[System.Collections.ArrayList]$cities_1 = "Dubai", "Mexico City", "São Paulo", "Hyderabad"
"regular $cities_1"
$cities_1.reverse()
"reversed $cities_1"
```
```
regular ['Dubai', 'Mexico City', 'São Paulo', 'Hyderabad']
reversed ['Hyderabad', 'São Paulo', 'Mexico City', 'Dubai']
```

>- Review and run example

``` python
all_num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
print("regular list",all_num, "\n")
all_num.reverse()
print("reverse list",all_num, "\n")
print("Three Multiple")
for num in all_num:
    if num/3 == int(num/3):
        print(num)
    else:
        pass
```
``` powershell
[System.Collections.ArrayList]$all_num = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
20, 30, 40, 50, 60, 70, 80, 90, 100
"regular list $all_num`n"
$all_num.reverse()
"reverse list $all_num`n"
"Three Multiple"
foreach($num in $all_num){
    if ($num % 3 -eq 0){
        $num
    }
    else{
    }
}
```
```
regular list [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

reverse list [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

Three Multiple
90
60
30
9
6
3
0
```

>- Review and run example
- create a list of  numbers by casting a range
- print list
- print reverse list

``` python
count_list = list(range(21))
print("before list", count_list)
count_list.reverse()
print("after list", count_list)
```
``` powershell
[System.Collections.ArrayList]$count_list = (0..20)
"before list $count_list"
$count_list.reverse()
"after list $count_list"
```
```
before list [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
after list [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>
## .reverse()

- create and  print a list of multiples of 5 from 5 to 100
- reverse the list and print

``` python
five_multiples = list(range(5,101,5))
five_multiples.reverse()
print(five_multiples)
```
``` powershell
[System.Collections.ArrayList]$five_multiples = (5..101).Where({$_% 5 -eq 0})
$five_multiples.reverse()
"$five_multiples"
```
```
[100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
```

>- Create two lists: fours & more_fours containing multiples of four from 4 to 44
- combine and print so that the output is mirrored [44, 40,...8, 4, 4, 8, ...40, 44]

``` python
fours = list(range(4,45,4))
more_fours = list(range(4,45,4))
fours.reverse()
fours.extend(more_fours)
print(fours)
```
``` powershell
[System.Collections.ArrayList]$fours = (4..44).Where({$_ % 4 -eq 0})
[System.Collections.ArrayList]$more_fours = (4..44).Where({$_ % 4 -eq 0})
$more_fours
$fours.reverse()
$fours.AddRange($more_fours)
"$fours"
```
```
[44, 40, 36, 32, 28, 24, 20, 16, 12, 8, 4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44]
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## .sort() and sorted()
### .sort() in place  
**.sort()** - orders a list in place
```python
quiz_scores = [20, 19, 20, 15, 20, 20, 20, 18, 18, 18, 19]
quiz_scores.sort()
```  

### sorted() copy
**sorted()** - creates an ordered list copy
```python
game_points = [3, 14, 0, 8, 21, 1, 3, 8]
sorted_points = sorted(game_points)
```

>- review and run example
- use .sort()

``` python
quiz_scores = [20, 19, 20, 15, 20, 20, 20, 18, 18, 18, 19]
quiz_scores.sort()
print("quiz_scores:", quiz_scores)
```
``` powershell
[System.Collections.ArrayList]$quiz_scores = 20, 19, 20, 15, 20, 20, 20, 18, 18, 18, 19
$quiz_scores.sort()
"quiz_scores: $quiz_scores"
```
```
quiz_scores: [15, 18, 18, 18, 19, 19, 20, 20, 20, 20, 20]
```

>- review and run example
- use sorted()

``` python
game_points = [3, 14, 0, 8, 21, 1, 3, 8]
sorted_points = sorted(game_points)
print("game_points:", game_points)
print("sorted_points:", sorted_points)
```
``` powershell
[System.Collections.ArrayList]$game_points = 3, 14, 0, 8, 21, 1, 3, 8
[System.Collections.ArrayList]$sorted_points = $game_points | Sort-Object
"game_points: $game_points"
"sorted_points: $sorted_points"
```
```
game_points: [3, 14, 0, 8, 21, 1, 3, 8]
sorted_points: [0, 1, 3, 3, 8, 8, 14, 21]
```

>- review and run example

``` python
cities_1 = ["Dubai", "Mexico City", "São Paulo", "Hyderabad"]
print("Unsorted", cities_1)
cities_1.sort()
print("Sorted", cities_1)
```
``` powershell
[System.Collections.ArrayList]$cities_1 = "Dubai", "Mexico City", "São Paulo", "Hyderabad"
"Unsorted $cities_1"
$cities_1.sort()
"Sorted $cities_1"
```
```
Unsorted ['Dubai', 'Mexico City', 'São Paulo', 'Hyderabad']
Sorted ['Dubai', 'Hyderabad', 'Mexico City', 'São Paulo']
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>  
## .sort() & sorted()
>- print cites from visited_cities list in alphbetical order using .sort()
- only print cities that names start "Q" or earlier

``` python
visited_cities = ["New York", "Shanghai", "Munich", "Toyko",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"]
visited_cities.sort()
for i in visited_cities:
    if i < "Q":
        print(i)
```
``` powershell
[System.Collections.ArrayList]$visited_cities = "New York", "Shanghai",
"Munich", "Toyko", "Dubai", "Mexico City", "São Paulo", "Hyderabad"
$visited_cities.sort()
foreach($i in $visited_cities){
    if ($i -lt "Q"){
        $i
    }
}
```
```
Dubai
Hyderabad
Mexico City
Munich
New York
```

>- make a sorted copy (sorted_cities) of visited_cities list
- remove city names 5 characters or less from sorted_cities
- print visitied cites and sorted cities

``` python
visited_cities = ["New York", "Shanghai", "Munich", "Toyko", "Dubai", "Mexico City", "São Paulo", "Hyderabad"]
sorted_cities = sorted(visited_cities)
for i in sorted_cities:
    if len(i) <= 5:
        sorted_cities.remove(i)
    else:
        pass
print(visited_cities,"\n",sorted_cities)
```
``` powershell
[System.Collections.ArrayList]$visited_cities = "New York", "Shanghai", "Munich", "Toyko",
"Dubai", "Mexico City", "São Paulo", "Hyderabad"
[System.Collections.ArrayList]$sorted_cities = $visited_cities | Sort-Object
foreach ($i in (0..($sorted_cities.Count-1))){
    if ($sorted_cities[$i].length -le 5){
        $sorted_cities.Remove($sorted_cities[$i])
    }
    else{}
}
"$visited_cities`n$sorted_cities"
```
```
['New York', 'Shanghai', 'Munich', 'Toyko', 'Dubai', 'Mexico City', 'São Paulo', 'Hyderabad']
 ['Hyderabad', 'Mexico City', 'Munich', 'New York', 'Shanghai', 'São Paulo']
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>  
## Program: Merge & Sort Animals
> Create a program that
- build a list (add_animals) using a while loop, stop adding when an empty string is entered
- extend the lists into animals, then sort
- get input if list should be viewed alpha or reverse alpha and display list

``` python
add_animals = []
while True:
    animal = input("Enter animal name: ")
    if animal != "":
        add_animals.append(animal)
    else:
        break
print("New added animanls",add_animals)
animals = ["Chimpanzee", "Panther", "Wolf", "Armadillo"]
animals.extend(add_animals)
print("Extended animals",animals)
alpha_revalpha = input("Please enter order type Alpha or Reverse Aplha: ")
if alpha_revalpha.lower() == "alpha":
    animals.sort()
    print(animals)
elif alpha_revalpha.lower() == "reverse alpha":
    animals.sort()
    animals.reverse()
    print(animals)
else:
    print("Invalid selection")
```
``` powershell
[System.Collections.ArrayList]$add_animals = @()
while ($True){
    $animal = Read-host "Enter animal name: "
    if ($animal.Length -ne 0){
        $add_animals.Add($animal)| Out-Null
    }
    else{
        break
    }
}
"New added animanls $add_animals"
[System.Collections.ArrayList]$animals = "Chimpanzee", "Panther", "Wolf", "Armadillo"
$animals.AddRange($add_animals)
"Extended animals $animals"
$alpha_revalpha = Read-host "Please enter order type Alpha or Reverse Aplha:"
if ($alpha_revalpha -eq "alpha"){
    $animals.sort()
    "$animals"
}
elseif ($alpha_revalpha -eq "reverse alpha"){
    $animals.sort()
    $animals.reverse()
    "$animals"
}
else{
    "Invalid selection"
}
```
```
Enter animal name: Cat
Enter animal name: Dog
Enter animal name: Rat
Enter animal name: Tiger
Enter animal name: Lion
Enter animal name:
New added animanls ['Cat', 'Dog', 'Rat', 'Tiger', 'Lion']
Extended animals ['Chimpanzee', 'Panther', 'Wolf', 'Armadillo', 'Cat', 'Dog', 'Rat', 'Tiger', 'Lion']
Please enter order type Alpha or Reverse Aplha: alpha
['Armadillo', 'Cat', 'Chimpanzee', 'Dog', 'Lion', 'Panther', 'Rat', 'Tiger', 'Wolf']
```
