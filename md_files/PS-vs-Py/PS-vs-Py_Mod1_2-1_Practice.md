####  Task 4
###### Program: Mystery Name

>-    get user input for `first_name`
-    create an empty string variable: `new_name`
-    iterate through letters in `first_name` Backwards
-        add each letter to `new_name` as you iterate
-        Replace the letter if "`e`", "`t`" or "`a`" with "`?`"
  - *(hint: if, elif, elif, else)*
-    print new_name
-    example: "Alton" = "no?l?"

``` python
    first_name = input("first name: ")
    new_name = ""
    for l in first_name[::-1]:
        if l.lower() == "e":
            new_name += "t"
        elif l.lower() == "a":
            new_name += "?"
        else:
            new_name += l

    print(new_name)
```
    first name: Hemant
    tn?mtH

``` powershell
$first_name = read-host "first name: "
$new_name = ""
foreach($l in $first_name[$first_name.Length..0]){
    if($l -eq "e"){
        $new_name += "t"
    }
    elseif($l -eq "a"){
        $new_name += "?"
    }
    else{
        $new_name += $l
    }
}
$new_name
```
```
first name: Hemant
tn?mtH
```
>- find and display the length of the string: topic

``` python
topic = "len() returns the length of a string"
len(topic)
```
``` powershell
$topic = "len() returns the length of a string"
$topic.Length
```
```
36
```
>- find and display the mid_pt (middle) index of the string
- note: index values are whole numbers

``` Python
topic = "len() can take a sequence, like a string, as an argument"
mid_pt = int(len(topic)/2)
print(mid_pt)
```
``` Powershell
$topic = "len() can take a sequence, like a string, as an argument"
$mid_pt = $topic.Length/2
$mid_pt
```
```
28
```
>- print index where first instance of the word  "code" starts using .find()

``` python
work_tip = "Good code is commented code"
print(work_tip.find("code"))
```
``` Powershell
$work_tip = "Good code is commented code"
$work_tip.IndexOf("code")
```
```
5
```

> - search for "code" in code_tip using .find()
- search substring with substring index start= 13,end = last char
- save result in variable: code_index
- display index of where "code" is found,
- or print "not found" if code_index == -1

``` python
code_tip = "Good code is commented code"
print(code_tip.find("code"))
code_index = code_tip[13:].find("code")
if code_index == -1:
    print("Not found")
else:
    print(code_index)
```
``` Powershell
$code_tip = "Good code is commented code"
$code_tip.IndexOf("code")
$code_index = (-join $code_tip[13..$code_tip.Length]).IndexOf("code")
if ($code_index -eq -1){
    "Not Found"
}
else{
    $code_index
}
```
```
5
10
```
>- find and report (print) number of w's, o's + use of word "code"

``` python
work_tip = "Good code is commented code"
print("Number of w's",work_tip.count("w"))
print("Number of o's",work_tip.count("o"))
print("Number of \"code\"",work_tip.count("code"))
```
``` powershell
$work_tip = "Good code is commented code"
"Number of w's $($($work_tip.ToCharArray() | Where-Object {$_ -match "w"}).count)"
"Number of o's $($($work_tip.ToCharArray() | Where-Object {$_ -match "o"}).count)"
"Number of `"code`" $($($work_tip.Split() | Where-Object {$_ -match "code"}).count)"
```
```
Number of w's 0
Number of o's 5
Number of "code" 2
```
>- count times letter "i" appears in `code_tip` string
- find and display the index of all the letter `i's` in `code_tip`
- Remember: if `.find("i")` has No Match, -1 is returned

``` python
code_tip = "code a conditional decision like you would say it"
print ("code_tip:" , code_tip)
print("letter \"i\"",code_tip.count("i"))
i_index = code_tip.find("i")
while i_index != -1:
    print(i_index)    
    i_index = code_tip.find("i",i_index + 1)
```
``` powershell
$code_tip = "code a conditional decision like you would say it"
"code_tip: $code_tip"
"letter `"i`" $($($code_tip.ToCharArray() | Where-Object {$_ -Match "i"}).count)"
$i_index = $code_tip.IndexOf("i")
while ($i_index -ne -1){
    "$i_index"
    $i_index = $code_tip.IndexOf("i",$i_index+1)
}
```
```
11
13
22
24
29
47
```
