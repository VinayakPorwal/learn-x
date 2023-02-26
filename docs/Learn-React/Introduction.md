---
sidebar_position: 1
---

# Introduction

If you're just starting with React, you might feel a bit overwhelmed by the number of tools and concepts involved. But don't worry - getting started with React is easier than you might think!

## What is React?

> React is a popular front-end library for building user interfaces in web applications. It's an open-source project developed by Facebook that has gained widespread adoption in recent years.

:::info
It is a **_Library_** not **_Framework_**.
:::

<br/>

### Components

> It works by breaking down your UI into reusable components. Each component has its own set of properties and state, and can be rendered as a part of your app's UI.

:::info Components

Component is nothing but group of html Elemnts wrapped up in a Function or class for Resuability, Modularity and Clean Code prupose.

Two Types of Components in React:

```jsx title="Function Based Components"
import React from "react";

function MyFunctionComponent() {
  return (
    <div>
      <h1>Hello Learner</h1>
    </div>
  );
}

export default MyFunctionComponent;
```

```jsx title="Class Based Components"
import React, { Component } from "react";

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello Learner</h1>
      </div>
    );
  }
}

export default MyClassComponent;
```

:::

<br/>

### Virtual DOM

> React uses a "virtual DOM" to efficiently update the UI(user interface) when changes occur.

:::info Virtual DOM

Virtual DOM - It is an in-memory representation of the actual DOM (Document Object Model) that React uses to determine which parts of the user interface need to be updated.

When changes occur, React updates the virtual DOM and then performs a "diff" operation to determine the minimal set of changes needed to update the actual DOM.
:::

<br/>

> This makes it more modular and maintainable, and provides excellent performance.

> To get started with React, learn the basics of JavaScript, HTML, and CSS.

> React is typically used in conjunction with other tools and frameworks, such as Node.js, npm, and Webpack.

---

## Start with React

>Prerequisite: <br/>
_To get started with React using **npm**, the easiest and most popular way is to use the **create-react-app** package. This package sets up a basic React project for you, with all the necessary dependencies and configurations already included. To use it, first make sure you have npm installed on your computer._

Create a Folder. Open it with VS code or any code editor you want. Then open your terminal or command prompt and run the following command:

```js
npx create-react-app my-app
```

Replace **"my-app"** with the name of your project. This command creates a new directory called **"my-app"** and sets up a new React project inside it. Once the command finishes, navigate into the new directory by running `cd my-app`. From there, you can start the development server by running `npm start`. This will open a new tab in your browser, where you can see your React app running. You can then edit the source code files inside the **"src"** directory, and the changes will be automatically reflected in the browser.

Now You have Folder something like this:

<img src="https://techformist.com/uploads/2021/create-react-app-structure.jpg"/>

>Great job ! Now we will move to next chapter and learn about `props` in React.js.
