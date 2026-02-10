# RadioGroup Component (Advanced React Composition)

## Overview

This project demonstrates an advanced React pattern for building a flexible and intuitive `RadioGroup` component using **component composition** and **React’s children utilities**.

Instead of requiring consumers of the component to manually manage `checked` state and `onChange` handlers for each individual radio option, this implementation centralizes state management within a parent `RadioGroup` component. The result is a cleaner API, reduced redundancy, and a more declarative usage pattern that mirrors how developers naturally think about grouped form inputs.

The `RadioGroup` leverages `React.Children.map` and `React.cloneElement` to dynamically inject behavior into its child `RadioOption` components—without tightly coupling them or requiring repetitive props.

---

## Key Concepts Demonstrated

- **Component Composition**  
  Designing components that work together through structure rather than prop-drilling or duplication.

- **React.Children.map**  
  Safely iterating over children elements to apply consistent logic across all `RadioOption` components.

- **React.cloneElement**  
  Enhancing child components by injecting additional props (`checked`, `onChange`) without modifying their original implementation.

- **Single Source of Truth**  
  Managing selection state at the `RadioGroup` level rather than distributing it across multiple child components.

- **Declarative APIs**  
  Creating a clean and intuitive component interface that abstracts away internal complexity.

---

## Lab Notes

- The `RadioGroup` component accepts a `selected` value and a single `onChange` handler.
- Each `RadioOption` only needs to define its `value`, making the component easier to read and harder to misuse.
- The parent component determines which option is selected by comparing the child’s `value` to the current `selected` state.
- This pattern closely mirrors how native radio groups behave while remaining fully controlled by React.
- The approach improves scalability—adding or removing options requires no additional state logic.

Example usage:

```jsx
<RadioGroup selected={selectedValue} onChange={handleOnChange}>
  <RadioOption value="1" />
  <RadioOption value="2" />
  <RadioOption value="3" />
</RadioGroup>
```

## Possible Enhancements

- **Accessibility Improvements**
  Add ARIA roles and keyboard navigation support to more closely align with native radio group behavior.

- **Controlled vs. Uncontrolled Mode**
  Support an optional uncontrolled mode with internal state management for simpler use cases.

- **Custom Styling Support**
  Allow consumers to pass custom styles or render props for more flexible UI designs.

- **Validation & Error States**
  Introduce validation feedback for required selections in form contexts.

- **Type Safety**
  Add TypeScript support to enforce stronger contracts between `RadioGroup` and `RadioOption`.
