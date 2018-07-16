# YAML Basics
- For Ansible, nearly every YAML file starts with a list.
- Each item in the list is a list of key/value pairs, commonly called a “hash” or a “dictionary”.
- All YAML files can optionally begin with `---` and end with `...` indicates the start and end of a document
- All members of a list are lines beginning at the same indentation level starting with a "- " (a dash and a space):

### YAML List
``` yaml
---
# A list of tasty fruits
fruits:
    - Apple
    - Orange
    - Strawberry
    - Mango
...
```

### YAML Dictionary (hash table)
A dictionary is represented in a simple key: value form (the colon must be followed by a space):
``` yaml
# An employee record
martin:
    name: Martin D'vloper
    job: Developer
    skill: Elite
```

### Lists & Dictionaries
``` yaml
# Employee records
-  martin:
    name: Martin D'vloper
    job: Developer
    skills:
      - python
      - perl
      - pascal
-  tabitha:
    name: Tabitha Bitumen
    job: Developer
    skills:
      - lisp
      - fortran
      - erlang
```

#### Dictionaries and lists in abbreviated form:
``` yaml
---
mayur: {name: Mayur, job: System Admin, skill: windows}
fruits: ['Apple', 'Orange', 'Strawberry', 'Mango']
```
### Boolean value (true/false) in several forms:
``` yaml
create_key: yes
needs_agent: no
knows_oop: True
likes_emacs: TRUE
uses_cvs: false
```
### Line continuation
- ##### Literal Block Scalar `|`
This will print as it is.
``` yaml
include_newlines: |
            exactly as you see
            will appear these three
            lines of poetry
```
- ##### Folded Block Scalar `>`
This will print in single line.
``` yaml
fold_newlines: >
            this is really a
            single line of text
            despite appearances
```

### Gotchas `:` & `#`
- `:<space>` followed by space is an indicator for a mapping.
``` yaml
# here:<space> will cause syntax error:
foo: somebody said I should put a colon here: so I did
# c:<space> with space will cause syntax error:
windows_drive: c:
# This will work
windows_path: c:\windows
```
- `#<space>` followed by space, starts a comment.
- put `:<space>` in quotes to avoid syntax error
``` yaml
# will work
windows_drive: 'c:'
windows_drive: "c:"
```
- Using double quote we can also escape characters.
``` yaml
foo: "a \t TAB and a \n NEWLINE"
```
- Ansible uses `"{{ var }}"` for variables.
- If a value after a colon starts with a `"{"`, YAML will think it is a dictionary, so you must quote it.
- If your value starts with a quote the entire value must be quoted, not just part of it
``` yaml
foo: "{{ variable }}"
foo1: "{{ variable }}/additional/string/literal"
foo2: "{{ variable }}\\backslashes\\are\\also\\special\\characters"
foo3: "even if it's just a string literal it must all be quoted"
```
