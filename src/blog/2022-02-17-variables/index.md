---
title: Ruby Variables
author: Mary
date: 2022-02-17 10:20
---

**Variables** are used to store information to be referenced and manipulated in a computer program. They act as a container that stores data and provides a way of labeling/naming data with a descriptive name.

- **Containers that hold information**
- label and store data in memory
- Reference/point to the location of the object in memory
- First declare a variable and use the assignment operator to initialize it with a value

## Declaring a Variable

```ruby:title=variable.rb
age = 30
age = 30 + 5 # reassign value

age = 45
# => 45
```

Variable names are reusable so you can assign a new value to a variable at any point. It will override the original value.

There will be times where you want to perform an operation on the original value of a variable and then reassign the result of the operation to the same variable.

```ruby:title=variable.rb
age = 18
age = age + 4
age #=> 22
```

There is a nice shorthand assignment operator to accomplish this `+=`. There are similar assignment operators for all the common math operators.

```ruby:title=assignment.rb
age = 18
age += 4

payment = 100
payment *= 2 # => 200

temperature = 40
temperature /= 10
```

## Variable Scope

A variables scope determines where in a program a variable is available for use. The scope is defined by where the variable is initialized or created. In Ruby, variable scope is defined by a **method definition** or by a **block**

Methods are pieces of reusable code that you can name and use that name to execute the method. A method definition looks like this:

```ruby:title=scope.rb
name = "Larry David"

# define the method
def display_name(first_name, last_name)
  name = first_name + ' ' + last_name
  puts name
end

# call the method
display_name("John", "Smith")
```

Methods have **self-contained scope** - variables initialized within the method's body can be referenced or modified from within the method body. The variables initialized in a method's body are not available outside the method's body. Therefore names initialized outside the method body cannot be accessed inside the method. Inside `display_name` method a different `name` variable is created that is locally scoped to the method. You can pass data into a method from outside using arguments. If inside the method a destructive method is used on the argument then the object that was passed in can be modified and the changes appear outside the method.

A block is a piece of code that follows a method's invocation, delimited by `{}` or `do/end`

```ruby:title=scope.rb
total = 0
[1, 2, 3].each do { |num| total += num }
```

Blocks can access and modify variables that are defined outside the block. So the block following`Array#each` method is able to access and modify the total variable. In this case `total` is reassigned to a new object upon each iteration.

Not all `do/end` pairs imply a block - those following a `loop` or a `for` loop is not considered a block in Ruby. They do not create their own inner scope instead they have the same scope as the outer.

> Inner scope can access variables initalized in an outer scope, but not vice versa

```ruby:title=scope.rb
a = 5 # variable initalized in outer scope

3.times do |n| # method invocation followed by a code block
  a = 3 # reassign to a new object
end

5.times do |n|
  a = 3
  b = 5
end

puts a # => 3
puts b # => Error - undefined local variable
```

- the **block** does have access to variable `a` outside its inner scope and therefore is able to modify it
- in this case `a` is reassigned to a new object - points to a new location in memory
- variable `b` is initialized in the inner scope of the block and therefore cannot be accessed outside the block

## Variable Types

There are **five** types of variables - constants, global variables, class variables, instance variables, and local variables.

```ruby:title=types.rb
MAX_SCORE = 5 # available throughout the program, even in method definitions
$var = "available throughout the program"
@@instances = 0
@var = "available throughout the current instance of the class"
```

**Constants**- declared by capitalizing every letter in the variable name

- used to store data that never needs to be changed. Ruby will allow you to change it but it does throw out a warning

**Global Variables**: declared by starting the variable name with the `$`

- available throughout the entire app override all scope boundaries (don't use them)

**Class Variables**: declared by starting name with two `@` signs

- accessible by instances of the class as well as the class itself. Used when you need to declare a variable for a class but each instance of the class does not need its own value for the vairable. Must be initialized at class level

**Instance Variables**: declared by starting the variable name with one `@` sign.

- Available thorughout the current instance of the parent class.

**Local Variables**: most common, obey all scope boundaries
