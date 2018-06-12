# 2-3.4 Intro Python
# The Power of List Iteration
- for in: **`for`** loop using **`in`**
- for range: **`for range(start,stop,step)`**
- more list methods: **`.extend()`, `+, .reverse(), .sort()`**     
- **strings to lists,`.split()`, and list to strings, `.join()`**
- **list cast & `print("hello", end='')`**

><font size="5" color="#00A0B2"  face="verdana"><B>Student will be able to</B></font>  
- Iterate through Lists using **`for`** with **`in`**
- Use **`for range()`** in looping operations  
- Use list methods **`.extend()`, `+, .reverse(), .sort()`**  
- **convert between lists and strings using  `.split()` and `.join()`**
- **cast strings to lists / direct multiple print outputs to a single line**

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## Converting a string to a list with `.split()`
### `.split()`  by default, splits a string at spaces (" ") to create a list
```python
tip = "Notebooks can be exported as .pdf"
tip_words = tip.split()

for word in tip_words:
    print(word)
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- Review and run example

``` python
tip = "Notebooks can be exported as .pdf"
tip_words = tip.split()
print("STRING:", tip)
print("LIST:", tip_words, "\n")
for word in tip_words:
    print(word)
```
``` powershell
$tip = "Notebooks can be exported as .pdf"
$tip_words = $tip.split()
"STRING: $tip"
"LIST: $tip_words`n"
foreach ($word in $tip_words){
    $word
}
```
```
STRING: Notebooks can be exported as .pdf
LIST: ['Notebooks', 'can', 'be', 'exported', 'as', '.pdf']

Notebooks
can
be
exported
as
.pdf
```
>- Review and run example

``` python
rhyme = "London bridge is falling down"
rhyme_words = rhyme.split()
rhyme_words.reverse()
for word in rhyme_words:
    print(word)
```
``` powershell
$rhyme = "London bridge is falling down"
[System.Collections.ArrayList]$rhyme_words = $rhyme.split()
$rhyme_words.Reverse()
foreach ($word in $rhyme_words){
    "$word"
}
```
```
down
falling
is
bridge
London
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 1</B></font>
### using `.split()`
>- split the string(rhyme) into a list of words (rhyme_words)
- print each word on it's own line

``` python
rhyme = 'Jack and Jill went up the hill To fetch a pail of water'
rhyme_words = rhyme.split()
for word in rhyme_words:
    print(word)
```
``` powershell
$rhyme = 'Jack and Jill went up the hill To fetch a pail of water'
$rhyme.split().ForEach({$_})
```
```
Jack
and
Jill
went
up
the
hill
To
fetch
a
pail
of
water
```

>- split code_tip into a list and print the first and every other word

``` python
code_tip = "Python uses spaces for indentation"
code_tip_list = code_tip.split()
print("List",code_tip_list,"\n")
for word in code_tip_list[0::2]:
    print(word)
```
``` powershell
$code_tip = "Python uses spaces for indentation"
[System.Collections.ArrayList]$code_tip_list = $code_tip.split()
"List: $code_tip_list`n"
$code_tip_list.foreach({
    if ($code_tip_list.IndexOf($_) % 2 -eq 0){
    $_
}})
```
```
List ['Python', 'uses', 'spaces', 'for', 'indentation']

Python
spaces
indentation
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>
## `.split('-')`
### to split on characters other than " " (space), provide `.split()` a string argument to use as break points
```python
code_tip = "Python-uses-spaces-for-indentation"
tip_words = code_tip.split('-')
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  
### `.split('-')` : split with an argument

``` python
code_tip = "Python-uses-spaces-for-indentation"
tip_words = code_tip.split('-')
print(tip_words)
```
``` powershell
$code_tip = "Python-uses-spaces-for-indentation"
[System.Collections.ArrayList]$tip_words = $code_tip.split('-')
"$tip_words"
```
```
['Python', 'uses', 'spaces', 'for', 'indentation']
```

>- review and run example - study the list print output
- split on "a"

``` python
code_tip = "Python uses spaces for indentation"
tip_words = code_tip.split('a')
print(code_tip)
print(tip_words)
```
``` powershell
$code_tip = "Python uses spaces for indentation"
$tip_words = $code_tip.split('a')
"$code_tip"
"$tip_words"
```
```
Python uses spaces for indentation
['Python uses sp', 'ces for indent', 'tion']
```

>- review and run example
- triple quotes ''' ''' preserve formatting such as spaces and line breaks
- split on line breaks (\n)
- print the list in reverse with index slicing

``` python
big_quote = """Jack and Jill went up the hill
To fetch a pail of water
Jack fell down and broke his crown
And Jill came tumbling after"""
quote_lines = big_quote.split('\n')
print(quote_lines, '\n')
for line in quote_lines[::-1]:
    print(line)
```
``` powershell
$big_quote = "Jack and Jill went up the hill
To fetch a pail of water
Jack fell down and broke his crown
And Jill came tumbling after"
[System.Collections.ArrayList]$quote_lines = $big_quote.split("`n").Trim()
"$quote_lines `n"
$quote_lines[-1..-$quote_lines.Count]
```
```
['Jack and Jill went up the hill', 'To fetch a pail of water', 'Jack fell down and broke his crown', 'And Jill came tumbling after']

And Jill came tumbling after
Jack fell down and broke his crown
To fetch a pail of water
Jack and Jill went up the hill
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 2</B></font>
## `.split()`
>- split poem into a list of phrases by splitting on a `*`
- print each phrase on a new line in title case

``` python
poem = "Write code frequently*Save code frequently*Comment code frequently*Study code frequently*"
split_poem = poem.split("*")
for phrase in split_poem:
    print(str(phrase).title())
```
``` powershell
$poem = "Write code frequently*Save code frequently*Comment code frequently*Study code frequently*"
$split_poem = $poem.split("*")
$split_poem.ForEach({(Get-Culture).TextInfo.ToTitleCase($_)})
```
```
Write Code Frequently
Save Code Frequently
Comment Code Frequently
Study Code Frequently
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concepts</B></font>  
## `.join()` &nbsp; build a string from a list
### `.join()` is a method applied to a separator string and iterates through its argument
```python
tip_words = ['Notebooks', 'can', 'be', 'exported', 'as', '.pdf']

" ".join(tip_words)
```
>- a space (" ") is the separator that gets injected between the objects in the argument (the list "tip_words")

<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>  
## `.join()`

>- Review and run example
- join tip_words objects with spaces

``` python
tip_words = ['Notebooks', 'can', 'be', 'exported', 'as', '.pdf']
print(" ".join(tip_words))
```
``` powershell
$tip_words = 'Notebooks', 'can', 'be', 'exported', 'as', '.pdf'
"$tip_words" # by default space are added
```
```
Notebooks can be exported as .pdf
```
>- review and run example

``` python
no_space = ""
letters = ["P", "y", "t", "h", "o", "n"]
print(no_space.join(letters))
```
``` powershell
$letters = "P", "y", "t", "h", "o", "n"
# -join $letters # -join will remove space
[string]::Join("", $letters)
```
```
Python
```

>- review and run example - .join() iterates through sequences

``` python
dash = "-"
space = " "
word = "Iteration"
ellipises = "..."
dash_join = dash.join(word)
print(dash_join)
print(space.join(word))
print(ellipises.join(word))
```
``` powershell
$dash = "-"
$space = " "
$word = "Iteration"
$ellipises = "..."
$dash_join = [string]::Join($dash,$word.ToCharArray())
$dash_join
[string]::join($space,$word.ToCharArray())
[string]::join($ellipises,$word.ToCharArray())
```
```
I-t-e-r-a-t-i-o-n
I t e r a t i o n
I...t...e...r...a...t...i...o...n
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 3</B></font>  
## `.join()`

>- .join() letters list objects with an Asterisk: "\*"

``` python
letters = ["A", "s", "t", "e", "r", "i", "s", "k"]
print("*".join(letters))
```
``` powershell
$letters = "A", "s", "t", "e", "r", "i", "s", "k"
[string]::join("*",$letters)
```
```
A*s*t*e*r*i*s*k
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 4</B></font>  
## Program: Choose the separator
>- get user input on what to use to join words (" ", \*, -, etc...) - store in variable: separator
- join pharse_words with the separator and print

``` python
phrase_words = ['Jack', 'and', 'Jill', 'went', 'up', 'the', 'hill', 'To', 'fetch', 'a', 'pail', 'of', 'water']
separator = input("what to use to join words (" ", *, -, etc...)?: ")
print(separator.join(phrase_words))
```
``` powershell
$phrase_words = 'Jack', 'and', 'Jill', 'went', 'up', 'the',
'hill', 'To', 'fetch', 'a', 'pail', 'of', 'water'
$separator = Read-Host "what to use to join words (" ", *, -, etc...)?"
[string]::join($separator,$phrase_words)
```
```
what to use to join words (, *, -, etc...)?: ***
Jack***and***Jill***went***up***the***hill***To***fetch***a***pail***of***water
```

<font size="6" color="#00A0B2"  face="verdana"> <B>Concept</B></font>
## More Python string tools (tricks?)
### Cast a string to a list of characters  
```python
hello_letters = list("Hello")
```
### print to the same line with multiple print statements (`end=`)
or insert any character as an end in print("String", end="+")
```python
print('Hello', end = '')
print('world')
```
<font size="6" color="#00A0B2"  face="verdana"> <B>Examples</B></font>
>- review and run example

``` python
hello_letters = list("Hello")
print(hello_letters)
```
``` powershell
$hello_letters = "Hello".ToCharArray()
"$hello_letters"
```
```
['H', 'e', 'l', 'l', 'o']
```

>- review and run example
- cast sting to list
- .join() concatenates the list
- print on same line setting the end character

``` python
word_letters = list("concatenates")
print('~'.join(word_letters))
```
``` powershell
$word_letters = "concatenates".ToCharArray()
""::join('~',$word_letters)
```
```
c~o~n~c~a~t~e~n~a~t~e~s
```
>-review and run example

``` python
print("Hello ", end = '')
print("world")
```
``` powershell
$end = " "
"Hello$($end)World"
```
```
Hello world
```
>- review and run example
- This  is the default print end

``` python
print("Hello World!", end="\n")
print('still something to learn about print()')
```
``` powershell
$end="`n"
"Hello World!$($end)still something to learn about print()"
```
```
Hello World!
still something to learn about print()
```

>- review and run example
- end inserts any valid str character: A-z, 0-9,!,@,\*,\n,\t or ''(empty string)...

``` python
for letter in "Concatenation":
    print(letter, end='+++')
```
``` powershell
$end="+++"
-join "Concatenation".ToCharArray().ForEach({"$_$end"})
```
```
C+++o+++n+++c+++a+++t+++e+++n+++a+++t+++i+++o+++n+++
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 5</B></font>
## `end=" " ` configuration in printing
`print('The String', end='')`

>- use 3 print() statements to output text to one line
- separate the lines by using "- " (dash space)

``` python
print("This world",end=" ")
print("is not good place",end=" ")
print("for poor people",end=" ")
```
``` powershell
$end=" "
"This world$($end)is not good place$($end)for poor people"
```
```
This world is not good place for poor people
```
<font size="6" color="#B24C00"  face="verdana"> <B>Task 6</B></font>
## cast: str to list
`Msg_characters = list("Always test your code")`

>- create a string (fact) of 20 or more characters and cast to a list (fact_letters)
- iterate fact, printing each char on one line, except for spaces print a new line

``` python
fact = "This is a fact that world has changed a lot and poor people are suffering"
fact_letters = list(fact)
for i in fact_letters:
    if i != " ":
        print(i,end="")
    else:
        print(i)
```
``` powershell
$fact = "This is a fact that world has changed a lot and poor people are suffering"
$fact_letters = $fact.ToCharArray()
$fact_letters.ForEach({
    if ($_ -ne " "){
        Write-Host $_ -NoNewline
    }
    else{
        Write-Host $_
    }
})
```
```
This
is
a
fact
that
world
has
changed
a
lot
and
poor
people
are
suffering
```

<font size="6" color="#B24C00"  face="verdana"> <B>Task 7</B></font>  
## Program: add the digits
>- create a 20 digit string, and cast to a list
- then add all the digits as integers
- print the equation and answer  

``` python
digit = "01234567890123456789"
digit_list = list(digit)
m= 0
for i in digit_list:
    m += int(i)

print("+".join(digit_list),"=",m)
```
``` powershell
$digit = "01234567890123456789"
$digit_list = $digit.ToCharArray()
$m = 0
# $digit_list
ForEach($i in $digit_list){

     $m += [int]::Parse($i)
}
Write-Host $([string]::Join("+",$digit_list)),"=",$m
```
```
0+1+2+3+4+5+6+7+8+9+0+1+2+3+4+5+6+7+8+9 = 90
```
