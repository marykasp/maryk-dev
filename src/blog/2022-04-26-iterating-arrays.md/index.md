---
title: Iterating over Arrays
subtitle: Comparing Ruby vs. JS methods
author: Mary
date: 2022-04-26
---

I recently had to take a pause from the Launch School program due to financial and personal issues. But during my time away from learning about Ruby I practiced and reviewed the JavaScript language when I had free time. I took a couple courses a couple years back on JavaScript and I recall most of what I learned. I am now hoping to get back on track with the program but I decided to get my brain back into learning mode by writing a short blog post on iterating over arrays.

I have been curious how the two languages compare, especially in how they manipulate complex data structures such as arrays, hashes (objects in JS). First in Ruby there are **enumerable** methods that are used to iterate over arrays and iterate over the key:value pairs of hahses. While in JavaScript there is a multitude of ways to itterate over arrays that do not work the same on objects.

## Array Iteration

The iterating methods in Ruby belong to the `Enumerable` module. These methods include those that an select, transform, and search the elements in an array. The classes that have access to this module include `Array, Hash, and Range`.

In JavaScript the array instances are inherited from the Class Array and also from the Array.prototype. This is what allows the instances of the Array class to have access to methods like `map` and `filter`.

### each

Here is some code showing the difference between the most simple iterating method for each language - both iterate over the collection, each element is passed as an argument to the block or callback function, and the code block is executed at least once for each element.

```ruby
arr = [1, 2, 3, 4]

arr.each do |num|
  puts num # prints the current element, returns nil
end
```

```js
arr.forEach(function (num) {
  console.log(num) // prints the number and returns undefined
})
```

In Ruby `Array#each` returns the original collection it was called upon, while in JavaScript `undefined` is returned from the `forEach()` method.

### selection

Another important iterating method is one that selects specific elements from an array that meet a certain condition.

In ruby the `Array#select` method returns a new array. The `select` method iterates over the array, passes each element as an argument to the block, and executes the code block once for each element. It does evaluate the return value of the block, if the return value evaluates as true then that element will be added to the new array. After the last iteration, `select` method returns a new array containing those elements that passed the condition.

```ruby
arr.select { |num| num.even? }
```

```js
arr.filter(function (num) {
  return num % 2 == 0
})
```

In JavaScript, the similar method is `filter()`. Will also return a new array of the elements that evaluate as true from the condition inside the callback function. In both these examples only the elements that are even will be added to the new array. The original array remains unmodified.

### transformation

The `Array#map` method in Ruby also returns a new array of modified values. Again the same procress will occur and the `map` method does look at the return value of the block and adds that value to a new array upon each iteration. JavaScript also has a `map` method that has the same functionality. Ruby does allow for `implicit` return since the last line in the block that is evaluated is the return value of the block. In JavaScript can rewrite the callback function as a concise arrow function to allow for implicit return. In this case explicit return is used with the `return` keyword.

```ruby
arr.map { |num| num * 2 } # returns a new array where each element as been doubled
```

```js
arr.map(function (num) {
  return num * 2
})
```

### Searching

Another Ruby method is the `Array#any?` which will return the boolean `true` as long as one of the elements in the array evaluates to true inside the block. The method will stop iterating over the elements once it encounters an element whoe return value from the block evaluates as true. This is similar to JavaScript's `some()` function. There is also the Ruby `Array#all?` that passes each element to the block and will return `true` if the block never returns `false` or `nil` upon each iteration. The JavaScript equivalent is `every()`

```ruby
arr.all? { |num| num > 1 }
```

```JavaScript
arr.every(function(num) {
  return num > 1
})
```

Comparing the pairs of code snippets above reveal a somewhat surprising similarity between the Ruby and JavaScript versions of these powerful iteration options, something which I feel is usually obscured by JavaScript’s syntax.

Next I hope to do more compare and contrast of these two languages as I continue my coding journey. Next up for me is to get back into solving more difficult coding problems with Ruby and completing my Portfolio.

For more information and many other helpful methods for data collections, can refer to [RubyDocs](https://ruby-doc.org/core-2.2.2/Enumerable.html) and [JavaScript MDN](
