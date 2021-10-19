---
title: 'React Dynamic Classes like in Vue.js'
date: 'October 19 2021'
excerpt: 'This blog article explores a small function that allows dynamic class binding like in Vue.js'
---

In the end of this blog article you will know how to dynamically bind classes to an element like in Vue.js.

# Dynamic Class Binding in Vue.js

In Vue it is pretty easy to add classes based on a specific condition.
You simply need to use data binding an specify an object with the classes as a key and the condition as the value.

```html
<div :class="{ 'text-red-500': true }"></div>
```

This will become really handy, if you want to add classes based on multiple conditions.
However, in React it is not that simple.

# Implement Dynamic Class Binding in React

Now, that you know how to use dynamic class binding with a object in Vue, we will look at the specific implementation in React.

You might be familiar with the conditional binding using a ternary operator.

```html
<div class={`bg-gray-100 ${true ? 'text-red-500' : ''`}></div>
```

With the help of this ternary operator, we will check the condition and then add the `string` after the `?`.
Whenever this condition is false, it will add the `string` after the `:`.

However, this syntax will become really messy, when you want to add more conditions.

A simple solution would be this litte function:

```ts
const classes = (
  dynamic: Record<string, boolean>,
  classes: string = '',
): string => {
  return Object.entries(dynamic)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(' ')
    .concat(' ')
    .concat(classes);
};
```
