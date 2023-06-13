[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## SEIR 0508

# Hello React

Create a simple `<Hello ${name}/>` component in React, and then pass the name as props between components.

## Prerequisites

- React
- Create react app through Vite

## Instructions

1. Create a react app called `hello-react` using `npm create vite@latest` 
2. Change into the newly created project directory with `cd hello-react`.
3. Follow the requirements below.

## Requirements

For this exercise, you're going to build a `<Hello />` component that renders
some data passed in as props.

### Setup

Create a file called `Hello.js` in the `src/` directory.

### Function Component

Using a function, define a component called `Hello` that renders an `h1` with
the text `"Hello World"` in it. 

Update your `<App>` component so that it renders your new `Hello` component.

### Using the Props Object

Update your component so that it accepts a `name` property. Instead of rendering
`"Hello World"`, your `Hello` component should now render a message with the
value of `name`.

Update your `Hello` component in `App.js` so that you're passing in a name as
a prop.

Then, create a function that Alerts you "Remember to take a break, React is tough!", pass this function down from App.js to your child component as a prop, and use react's onClick function to call it

### BONUS

Feeling ambitious? 

Copy the array below and paste it into your `App.js` file above the `App` function.

```js
const names = ['John Lennon', 'Jimi Hendrix', 'Prince', 'John Mayer']
```

Using the `names` array, render a `Hello` component for each person in the array. You can also find an image of each to render in their components.





This is your chance to play with React before we move on to Hooks, use this as a sandbox to nest components, style them as you want (headers, footers, asides), and pass props down as much as you can.

--

Import a font from https://fonts.google.com/. 

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
