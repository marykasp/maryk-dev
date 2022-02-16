---
title: Ruby Data Types
author: Mary
date: 2022-02-16 12:00
---

## Introduction

Ruby is a object-oriented language, which means that everything in Ruby is an object. The four basic data types of Ruby: numbers (integers and floats), strings (sequence of characters), symbols, and Booleans (`true`, `false`, and `nil` )

## #Numbers

Ruby has all the typical math operators

```ruby
# Addition
1 + 1 #=> 2

# Subtraction
2 - 1 #=> 1

# Multiplication
2 * 2 #=> 4

# Division
10 / 5 #=> 2

# Exponent
2 ** 2 #=> 4
3 ** 4 #=> 81

# Modulus (find the remainder)
8 % 2 #=> 0, no remainder ( 8 / 2 #=> 4)
10 % 4 #=> 2
```

**Integers and Floats.**
There are two main types of numbers in Ruby. **Integers** are whole numbers such as 10. Floats are numbers that contain one decimal point, such as 10.5 or 0.45.

Need to keep in mind that when doing calculations with two integers in Ruby, _the result will always be an integer_

```ruby
17 / 5 #=> 3 not 3.4
```

To obtain a more accurate answer just replace one of the integers in the expression with a float

```ruby
17 / 5.0 # => 3.4
```

#### Converting Number Types

Ruby makes it easy to convert floats to integers and vice versa

```ruby
# convert an integer to a float
20.to_f #=> 20.0

# convert float to integer: removes decimal places
15.9.to_i #=> 15
15.0.to_i #=> 15
```

When ruby converts a float to an integer, the decimal places are simply cut off. Ruby doesn't do any rounding during this conversion.

### Number Methods

They are many built in Ruby methods to use on numbers:

`even? odd?` - instance methods called on numbers, returns a boolean value

```ruby
6.even? #=> true
7.even? #=> false

10.odd? #=> false
13.odd? #=> true
```

## #Strings

Strings are a sequence of characters wrapped in quotation marks, single or double. They represent text in data.

Strings can be formed with eithere double `""` or single `''` quotation marks, also known as _string literal_. This all becomes important when dealing with string interpolation and the escape characters. If need to use on type of quatotion mark inside the string itself can either use an escape character `\` or use the other quatation marks to wrap the entire string.

```ruby
"hello there 'bob'" # used single quotations inside double
'hello there \'bob\'' # used escape character
```

Escape characters allow you to type in representations of whitespace characters and to include quotation marks inside your string without accidently throwing an arrow - prematurely ending your string.

```
\\ # Ass a backslash in your string
\b # Backspace
\r # Carriage return
\n # Newline
\s # Space
\t # Tab
\" # Double quotation mark
\' # Single quotation mark
```

### Concatenation

They are many ways to join strings together in Ruby - plus or shovel operator and the `concat` method

```ruby
# plus operator
"Welcome " + "to " + "Ruby" #=> Welcome to the RUby Tutorial!

# shovel operator
"Welcome " << "to " << "Ruby"

# concat method
"Welcome ".concat("to ").concat("Ruby!")
```

### Substrings

You can access the characters inside the string by using `String#[index]` method. This uses the index position of a character to retrieve that character from the string. Also can use the `String#slice[]` method to remove a substring from a string.

- `[0..1]` - slice a string between the index positions listed, inclusive
- `[0, 4]` - the first value indicates the index position, second value equals number of characters to remove
- `[-1]` - removes last character in the string

```ruby
"hello"[0] #=> "h"
"hello"[0..1] #=> he
"hello"[0, 4] #=> "hell"
"hello"[-1] #=> "o"
```

### Interpolation

String interpolations allow you to evaluate a string that contains placeholder variables or Ruby expressions. The evaluated value of the Ruby expression or variable is then converted into a string.

```ruby
name = "Maisy"

# need to use double quotes for it to work
puts "Hello, #{name}!" #=> "Hello, Maisy!"
```

### String Methods

There are many useful string methods in Ruby. You can easily capitalize a word, reverse a string, and match patterns using regex. You can find all String methods on the [Ruby docs](https://ruby-doc.org/core-3.0.3/String.html). Always good to check the documentation first to see if there is a method that does something for you rather than implementing your own method.

- add `!` to end of method call to mutate the caller for most of these methods

> `#capitalize` - capitalizes the first character in the string, does not modify the original, returns a copy

```ruby
"hello".capitalize
#=> "Hello"
```

> `#include?` - takes a substring as an argument, returns a boolean if the substring is in the string it is called on

```ruby
"hello".include?("lo")
#=> true
```

> `#upcase`- converts all characters in a string to uppercase, does not modify the original, returns a copy

```ruby
"hello".upcase
#=> "HELLO"

name = "Mary"
name.upcase!
puts name #=> "MARY"
```

> `#downcase` - converts all characters to lowercase, does not modify the original

```ruby
"HEllo".downcase #=> "hello"
```

> `#empty?` - returns true if the string that is called on is an empty string

```ruby
"hello".empty? #=> false
"".empty? #=> true
```

> `#length` - returns the number of characters in a string, also can use `size`

```ruby
"hello".length
#=> 5
```

> `#reverse` - returns a reverse copy of the string

```ruby
name = "mary"
name.reverse #=> "yram"
puts name #=> "mary"

name.reverse!
```

> `#split` - divides a string into substrings based on a delimeter, returning an array of these substrings

```ruby
"hello world".split # no delimiter given - splits at whitespace
#=> ['hello', 'world']

"hello".split("") # returns an array of characters
#=> ["h", "e", "l", "l", "o"]
```

> `#char` - returns an array of characters in a string

```ruby
"hello".chars
#=>
```

> `#strip` - returns a copy of the receiveer with leading and trailing whitespace removed

```ruby
" hello, world ".strip
#=> "hello, world"
```

> `#index` - returns the integer index of the first occurence of a given substring or `nil` if not found

```ruby
'hello'.index('h') #=> 0
'hello'.index('lo') #=> 3
'hello'.index('oo') #=> nil
```

#### Converting other objects to strings

Use `to_s` method to convert pretty much anything to a string

```ruby
5.to_s #=> "5"
nil.to_s #=> ""
:symbol.to_s #=> "symbol"
```

## Symbols

Strings can be mutated/changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.

Symbols are preferred over strings as keys in **hashes**

### Create a Symbol

To create a symbol, simply put a `:` colon at the beginning of some text:

```ruby
:my_symbol
```

`#object_id` method returns an integer identifier for an object.

- strings of the same value will have different integer indetifiers because they are stored in different locations in memory. every time an instance of a string is made, Ruby will store the string object in memory. Variables holding the string objects will point to this location in memory
- :symbols are only stored once in memory so all symbols of the same name will have the same object identifier

```ruby
"string" == "string" #=> true
"string".object_id == "string".object_id #=> false

:symbol.object_id == :symbol.object_id #=> true
```

## Booleans

Booleans are important to help build conditional logic in programming. Booleans just represent yes or no, on or off with `true` or `false`

`nil` - represents nothing. Everything in Ruby has a return value. When an expressions or block of code doesn't have anything to return, it will use nil.

```ruby
puts "hello there"
'hello there'
#=> nil

'hello'.nil? #=> false
nil.nil? #=> true
```
