1. JSX – JSX is a way to write HTML-like code inside JavaScript. It makes creating UI easier and more readable. React uses JSX to define what the screen should show.

2. State vs Props – State is data that lives inside a component and can change over time. Props are data passed from a parent component and cannot be changed by the child. State is for internal changes, props are for communication.

3. useState – useState is a React tool (hook) that lets a component remember values. When you change the value using useState, the component automatically updates the UI. It is the main way to make components dynamic.

4. Share state – To share state between components, keep it in a parent and pass it to children using props. For bigger apps, tools like Context or Redux can share state globally. This helps multiple components use the same data.

5. Event handling – React handles events using functions, like clicks or typing. Events are written in camelCase, not lowercase like HTML. Functions are called when the event happens, letting components respond to user actions.