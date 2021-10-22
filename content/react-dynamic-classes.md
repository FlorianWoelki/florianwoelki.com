---
title: 'React Dynamic Classes like in Vue.js'
date: 'October 19 2021'
excerpt: 'This blog article explores a small function that allows dynamic class binding like Vue.js. At the moment, there is not a good and solid way to add dynamic class binding to your React component. However, this small function lets you add this behavior with ease.'
---

At the end of this blog article, you will know how to dynamically bind classes to an element like Vue.js.

# Dynamic Class Binding in Vue.js

In Vue it is pretty easy to add classes based on a specific condition.
You simply need to use data binding and specify an object with the classes as a key and the condition as the value.

```html
<div :class="{ 'text-red-500': true }"></div>
```

This will become really handy if you want to add classes based on multiple conditions.
However, in React, it is not that simple.

# Implement Dynamic Class Binding in React

Now that you know how to use dynamic class binding with an object in Vue, we will look at the specific implementation in React.

You might be familiar with conditional binding using a ternary operator.

```html
<div class={`bg-gray-100 ${true ? 'text-red-500' : ''`}></div>
```

With the help of this ternary operator, we will check the condition and then add the `string` after the `?`.
Whenever this condition is false, it will add the `string` after the `:`.

However, this syntax will become really messy when you want to add more conditions.

A simple solution would be this little function:

```ts
const classes = (
  dynamic: Record<string, boolean>,
  classes: string = '',
): string => {
  return Object.entries(dynamic) // 1.
    .filter((entry) => entry[1]) // 2.
    .map((entry) => entry[0]) // 3.
    .join(' ') // 4.
    .concat(' ') // 5.
    .concat(classes); // 5.
};
```

Here is a simple step by step explanation of this function:
1. It get the key-value pairs of the Object with `Object.entries` (`entry[0]` are the classes in a string and `entry[1]` is the condition)
2. It will filter all the true key-value pairs
3. It will map the key-value pairs to just the strings as a return value
4. It will join the result array, which includes all the classes where the condition is true
5. It will concat the permanent classes to this result string

You would use this function to declare all the conditional classes in one object as the first argument and the permanent classes as the second argument.

```ts
const colorClasses = classes(
  {
    'text-green-500 bg-green-500': color === 'green',
    'text-red-500 bg-red-500': color === 'red',
    'text-yellow-500 bg-yellow-500': color === 'yellow',
  },
  'rounded-xl cursor-pointer',
);

return (
  <div className={colorClasses}></div>
);
```

And this is all you need to add beautiful dynamic class binding to your React components. This small function lets you add conditional class binding to every single element in your DOM.
