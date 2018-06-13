#  Module 3 Required Coding Activity  
Introduction to Python (Unit 2) Fundamentals  

|  Assignment Requirements |  
|:-------------------------------|  
| **NOTE:** This program requires **`print`** output and using code syntax used in module 3: **`if`**, **`input`**, **`def`**, **`return`**, **`for`**/**`in`** keywords, **`.lower()`** and **`.upper()`** method, **`.append`**, **`.pop`**, **`.split`** methods, **`range`** and **`len`** functions  |  

## Program: poem mixer  
This program takes string input and then prints out a mixed order version of the string    

**Program Parts**  
- **program flow** gathers the word list, modifies the case and order, and prints      
  - get string input, input like a poem, verse or saying
  - split the string into a list of individual words  
  - determine the length of the list
  - Loop the length of the list by index number and for each list index:  
    - if a word is short (3 letters or less) make the word in the list lowercase
    - if a word is long (7 letters or more) make the word in the list uppercase   
  - **call the word_mixer** function with the modified list  
  - print the return value from the word_mixer function  

- **word_mixer** Function has 1 argument: an original list of string words, containing greater than 5 words and the function returns a new list.   
  - sort the original list  
  - create a new list  
  - Loop while the list is longer than 5 words:  
    *in each loop pop a word from the sorted original list and append to the new list*  
    - pop the word 5th from the end of the list and append to the new list  
    - pop the first word in the list and append to the new list  
    - pop the last word in the list and append to the new list  
  - **return** the new list on exiting the loop

**input example**  *(beginning of William Blake poem, "The Fly")*

 >enter a saying or poem: `Little fly, Thy summer’s play My thoughtless hand Has brushed away. Am not I A fly like thee? Or art not thou A man like me?`  


**output example**   
```
or BRUSHED thy not Little thou me? SUMMER’S thee? like THOUGHTLESS play i a not hand a my fly am man
```


**alternative output** in each loop in the function that creates the new list add a "\\n" to the list   
```
 or BRUSHED thy
 not Little thou
 me? SUMMER’S thee?
 like THOUGHTLESS play
 i a not
 hand a my
 fly am man
```

``` python
input_word = input("Enter poem, verse or saying: ")
word_list = input_word.split()
word_list_length = len(word_list)

def word_mixer(word_list):
    word_list.sort()
    new_list = ["\n"]
    while len(word_list) > 5:
        new_list.append(word_list.pop(-5))
        new_list.append(word_list.pop(0))
        new_list.append(word_list.pop(-1))
        new_list.append("\n")
    return new_list

for index in range(word_list_length):
    word = word_list[index]
    if len(word) <= 3:
        word_list[index] = word.lower()
    elif len(word) >= 7:
        word_list[index] = word.upper()

# alternative output
print(" ".join(word_mixer(word_list)))
```
``` powershell
$input_word = Read-Host "Enter poem, verse or saying:"
[System.Collections.ArrayList]$word_list = $input_word.split()
$word_list_length = $word_list.Count

function word_mixer($word_list){

    # In powershell sort() method will sort lowercase first and then upper case
    # Hence, we will need to use below code to sort as per python code.
    [System.Collections.ArrayList]$upper_sort = @()
    [System.Collections.ArrayList]$lower_sort = @()

    For($i=0;$i -lt $word_list_length;$i++){
        if ($word_list[$i] -cmatch "[A-Z]"){
            $upper_sort.add($word_list[$i]) | Out-Null
        }
        else{
            $lower_sort.add($word_list[$i]) | Out-Null
        }
    }
    $word_list.Clear()
    $upper_sort = $upper_sort | Sort-Object
    $lower_sort = $lower_sort | Sort-Object
    $word_list.AddRange($upper_sort)
    $word_list.AddRange($lower_sort)
    ## sort end.

    # $word_list
    [System.Collections.ArrayList]$new_list = @("`n")
    while ($word_list.Count -gt 5){
        $new_list.Add($word_list[-5]) | Out-Null
        $word_list.Remove($word_list[-5])
        $new_list.Add($word_list[0]) | Out-Null
        $word_list.Remove($word_list[0])
        $new_list.Add($word_list[-1]) | Out-Null
        $word_list.Remove($word_list[-1])
        $new_list.Add("`n") | Out-Null
    }
    return $new_list
}

foreach ($index in (0..$($word_list_length-1))){
    $word = $word_list[$index]
    if ($word.Length -le 3){
        $word_list[$index] = $word.ToLower()}
    elseif ($word.Length -ge 7){
        $word_list[$index] = $word.ToUpper()}
}
# alternative output
Write-Host $(word_mixer -word_list $word_list)
```
```
 or BRUSHED thy
 not Little thou
 me? SUMMER’S thee?
 like THOUGHTLESS play
 i a not
 hand a my
 fly am man
```
