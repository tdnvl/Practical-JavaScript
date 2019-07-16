# Practical JavaScript

## Functions (Version 2)

We played with basic functions in the console. The functions that have to be pasted in the console are in `todos-v2.js`. The variable name is `todos`; it's an array.

## Objects (Version 3)

### JavaScript object notation

From [JSON.org](https://www.json.org/):

> An object is an unordered set of name/value pairs. An object begins with {left brace and ends with }right brace. Each name is followed by :colon and the name/value pairs are separated by ,comma.

For example:

```
var myObject = {
    name1 : 'value 1',
    name2 : 'value 2',
    name3 : 'value 3'
}
```

Then, to call a value: `myObject.name2` will return `'value 2'`.

### Object and functions

Objects can contain functions. But how does ones refer to the current object in a function? Using the keyword `this`.

```
var gordon = {
    name: 'Gordon',
    sayName: function(){
        console.log(this.name);
    }
}
```

So: `gordon.sayName` will return `Gordon`. Putting a function on an object is very common: `sayName` is a _method_ on the gordon object. A method can be an anonymous function.

