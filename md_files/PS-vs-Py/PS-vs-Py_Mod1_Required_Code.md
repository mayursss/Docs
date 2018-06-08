
#  Module 1 Required Coding Activity  

Introduction to Python (Unit 2) Fundamentals  



**This Activity is intended to be completed in the jupyter notebook, Required_Code_MOD1_IntroPy.ipynb, and then pasted into the assessment page on edX.**   

This is an activity from the Jupyter Notebook **`Practice_MOD01_IntroPy.ipynb`** which you may have already completed.

| Important Assignment Requirements |  
|:-------------------------------|  
|  **NOTE:** This program **requires** **`print`** output and using code syntax used in module 1 such as keywords **`for`**/**`in`** (iteration), **`input`**, **`if`**, **`else`**, **`.isalpha()`** method, **`.lower()`** or **`.upper()`** method |  


## Program: Words after "G"/"g"
Create a program inputs a phrase (like a famous quotation) and prints all of the words that start with h-z

Sample input:  
`enter a 1 sentence quote, non-alpha separate words:` **`Wheresoever you go, go with all your heart`**  

Sample output:
```
WHERESOEVER
YOU
WITH
YOUR
HEART
```  
- split the words by building a placeholder variable: **`word`**  
  - loop each character in the input string  
  - check if character is a letter  
  - add a letter to **`word`** each loop until a non-alpha char is encountered  

- **if** character is alpha
  - add character to **`word`**    
  - non-alpha detected (space, punctuation, digit,...) defines the end of a word and goes to **`else`**    
- **`else`**  
  - check **`if`** word is greater than "g" alphabetically
      - print word
      - set word = empty string
  - or **else**
    - set word = empty string and build the next word  

Hint: use `.lower()`

Consider how you will print the last word if it doesn't end with a non-alpha character like a space or punctuation?
``` python
# [] create words after "G" following the Assignment requirements use of functions, menhods and kwyowrds
# sample quote "Wheresoever you go, go with all your heart" ~ Confucius (551 BC - 479 BC)
# [] copy and paste in edX assignment page
#phrase = input("input a phrase: ")
phrase = "Wheresoever you go, go with all your heart"
phrase = phrase+"."
word = ""
for letter in phrase:
    if letter.isalpha() == True:
        word += letter     
    else:
        if word.lower() >= "h":
            print(word.upper())
            word = ""
        else:
            word = ""
```
``` Powershell
#$phrase = Read-Host "input a phrase: "
$phrase = "Wheresoever you go, go with all your heart"
$phrase = $phrase+"."
$word = ""
foreach ($letter in $phrase.ToCharArray()){
    if ($letter -match "[a-zA-Z]"){
        $word += $letter
    }     
    else{
        if ($word.Tolower() -ge "h"){
            "$($word.Toupper())"
            $word = ""
        }
        else{
            $word = ""
        }
    }
}
```
```
WHERESOEVER
YOU
WITH
YOUR
HEART
```
