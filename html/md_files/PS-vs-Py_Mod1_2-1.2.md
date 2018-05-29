#### Task 2
- Review and run example
- Assign string to student_name
- Addressing the 3rd, 4th and 5th characters using a slice

```py
student_name = "Colette"
print("slice student_name[2:5]:",student_name[2:5])
```
#### Powershell
```ps1
$student_name = "Colette"
"slice student_name[2:5]: $(-join $student_name[2..4])"
```
#### Python
- Review and run example
- Assign string to student_name
- Addressing the 3rd, 4th and 5th characters individually

```py
student_name = "Colette"
print("index 2, 3 & 4 of student_name:", student_name[2] + student_name[3] + student_name[4])
```
#### Powershell
```ps1
$student_name = "Colette"
"index 2, 3 & 4 of student_name: $(-join $student_name[2,3,4])"
```
#### Python
- review and run example

```py
long_word = 'Acknowledgement'
print(long_word[2:11])
print(long_word[2:11], "is the 3rd char through the 11th char")
print(long_word[2:11], "is the index 2, \"" + long_word[2] + "\",", "through index 10, \"" + long_word[10] + "\"")
```
#### Powershell
```ps1
$long_word = 'Acknowledgement'
-join $long_word[2..10]
("$(-join $long_word[2..10]) is the 3rd char through the 11th char")
("$(-join $long_word[2..10]) is the index 2, `"$($long_word[2])`" through index 10, `"$($long_word[10])`"")
```

#### Python
- Slice long_word to print "act" and to print "tic"

```py
long_word = "characteristics"
print(long_word[4:7])
print(long_word[-4:-1])
```
#### Powershell
```ps1
$long_word = "characteristics"
-join $long_word[4..6]
-join $long_word[-4..-2]
```
#### Python
- Slice long_word to print "sequence"

```py
long_word = "Consequences"
print(long_word[3:11])
print(long_word[3:-1])
```
#### Powershell
```ps1
$long_word = "Consequences"
-join $long_word[3..10]
-join $long_word[-9..-2]
```
#### Python
- Review and run example
- Addressing the 1st, 2nd & 3rd characters

```py
student_name = "Colette12345"
print(student_name[:3])
```
#### Powershell
```ps1
$student_name = "Colette12345"
-join $student_name[0..2]
```

#### Python
- review and run example
- return every other

```py
student_name = "Colette"
print(student_name[::2])
print(student_name[1::2])
print(student_name[1:7:3])
```
```
Clte
oet
ot
```
#### Powershell
```ps1
$student_name = "Colette"
$out = ""
for($i = 0; $i -lt $student_name.Length ;$i++ ){
    if ($i % 2 -eq 0 ){
        $out += $student_name[$i]
    }
}
$out
```

#### To do ####
###########################################
# not found way to do this in Powershell
###########################################
#### Powershell
```ps1
## split string into 3 digit column
$str = "123450"
$str -split '(\d{3})' -ne ""
```
