1. Creating and nesting components:

-> React apps are made out of components. A component is a piece of the UI(user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.
->  React component names must always start with a capital letter, while HTML tags must be lowercase.


2.1. Writing markup with JSX

-> JSX is stricter than HTML. You have to close tags like <.. />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like an empty <>...</> wrapper:


2.2. Adding styles

-> In React, you specify a CSS class with className. It works the same way as the HTML class attribute:


3. Displaying data

-> JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user

-> You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:


4.1. Conditional rendering

-> In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code


4.2. Rendering lists

-> We rely on JavaScript features like for loop and the array map() function to render lists of components.


5.1. Responding to events

-> one can respond to events by declaring event handler functions inside your components.


5.2. Updating the screen

-> Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
}

-> You will get two things from useState: the current state (count), and the function that lets you update it (setCount). 


6. Sharing data between components:

-> We'll need components to share data and always update together.