---
sidebar_position: 2
---

In React, props (short for "properties") are a way to pass data and functionality from a parent component to its child components.

When a parent component renders a child component, it can pass props to the child component as attributes. The child component can then access these props and use them to render its own content or to perform certain actions.

Props are typically used to make a component more dynamic and reusable.

Here's an example React component:

```jsx title="App.js"
// Import the useState hook from the react package:
import React, { useState } from "react";

//passing props
function Card(props) {
  return <>Hello, {props.name}</>;
}
export function MyComponent() {
  return (
    <div>
      {/*Use the Component Many times you want with Different props */}
      <Card name={"John"} />
      <Card name={"Dany"} />
    </div>
  );
}
```
