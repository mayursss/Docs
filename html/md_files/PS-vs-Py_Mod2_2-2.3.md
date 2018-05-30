# Python List modify and Insert

``` Python
# [ ] review and run example
# the list before Insert
party_list = ["Joana", "Alton", "Tobias"]
print("party_list before: ", party_list)

# the list after Insert
party_list[1] = "Colette"
print("party_list after:  ", party_list)
```
**Output**

    party_list before:  ['Joana', 'Alton', 'Tobias']
    party_list after:   ['Joana', 'Colette', 'Tobias']

``` ps1
# insert in list
$party_list = ("Joana", "Alton", "Tobias")
"party_list before: $($party_list)"

# the list after Insert
$party_list[1] = "Colette"
"party_list before: $($party_list)"
```
``` Py
# [ ]  create challenge function
def str_replace(int_list,index):
    if int_list[index] < 5:
        int_list[index] = "small"
    else:
        int_list[index] = "large"
    return int_list

three_num = [10,2,30]
str_replace(three_num,2)
```
``` ps1
# [ ]  create challenge function
function str_replace($int_list,[int]$index){
    if ($int_list[$index] -lt 5){
        $int_list[$index] = "small"
    }
    else{
        $int_list[$index] = "large"
    }
    return $int_list
}

$three_num = (10,2,30)
str_replace $three_num 2
```
# modify items in a list
-    create a list, three_words, containing 3 different capitalized word stings
-    print three_words
-    modify the first item in three_words to uppercase
-    modify the third item to swapcase
-    print three_words

``` py
# [ ] complete coding task described above
three_words = ["Mayur","Suraj","Vamshi"]
print(three_words)
three_words[0] = three_words[0].upper()
three_words[2] = three_words[2].swapcase()
print(three_words) #>
```
``` Powershell
# [ ] complete coding task described above
  $three_words = ("Mayur","Suraj","Vamshi")
  $three_words[0] = $three_words[0].ToString().ToUpper()
  # There is no easy way to Swapcase in powershell.
  $newword = ""
    foreach ($i in $three_words[2].ToCharArray()){
        if ($i -cmatch "[A-Z]"){
            $i = $i.tostring().ToLower()
            }
        elseif($i -cmatch "[a-z]"){
            $i = $i.tostring().ToUpper()
        }
        else{}
        $newword += $i
    }
    $three_words[2] = $(-join $newword)
    $three_words
```

# use `.insert()` to define an index to insert an item
- Inserts, doesn't overwrite
- Increases index by 1, at and above the insertion point
- Can use to Append a new index to the end of the list

``` Python
    # review and run example
    # the list before Insert
    party_list = ["Joana", "Alton", "Tobias"]
    print("party_list before: ", party_list)
    print("index 1 is", party_list[1], "\nindex 2 is", party_list[2], "\n")
```
Output
``` 
    party_list before:  ['Joana', 'Alton', 'Tobias']
    index 1 is Alton 
    index 2 is Tobias 
```
``` Powershell
    $party_list = ("Joana", "Alton", "Tobias")
    "party_list before: $($party_list)"
    "index 1 is $($party_list[1]) `nindex 2 is $($party_list[2]) `n"
```
the list after Insert
``` Python 
    party_list.insert(1,"Colette")
    print("party_list after:  ", party_list)
    print("index 1 is", party_list[1], "\nindex 2 is", party_list[2], "\nindex 3 is", party_list[3])
```
 Output

```
    party_list after:   ['Joana', 'Colette', 'Alton', 'Tobias']
    index 1 is Colette 
    index 2 is Alton 
    index 3 is Tobias
```
``` Powershell
    [System.Collections.ArrayList]$party_list = ("Joana", "Alton", "Tobias")
    $party_list.insert(1,"Colette")
    "party_list after:  $party_list"
    "index 1 is $($party_list[1]) `nindex 2 is $($party_list[2]) `nindex 3 is $($party_list[3])"
```
Insert a name from user input into the party_list in the second position (index 1) and print updated list
``` Python
    # [ ] insert a name from user input into the party_list in the second position (index 1)
    party_list = ["Joana", "Alton", "Tobias"]
    name = "Mayur"
    party_list.insert(1,name)
    # [ ] print the updated list
    print(party_list)
```
Output
```
['Joana', 'Mayur', 'Alton', 'Tobias']
```
``` Powershell
    [System.Collections.ArrayList]$party_list = ("Joana", "Alton", "Tobias")
    $name = "Mayur"
    $party_list.insert(1,$name)
    $party_list
```
