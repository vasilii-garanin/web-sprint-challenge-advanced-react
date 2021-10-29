# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

* `Functional components` simply accept data and display them in some form, that they are mainly responsible for rendering UI. `Class Components` implement logic and state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

* `componentWillMount()`  lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server. It triggers before the initial render, and the function will only trigger once in the lifespan of a component.
`componentWillUpdate` is used during the updating phase of the React lifecycle. This function is generally called before the component is updated or when the state or props passed to the component changes.

3. Define stateful logic.

* `Stateful logic` is any code that uses state and built into a component.

4. What are the three step of creating a successful test? What is done in each phase?

* `Arrange` The render method renders a React element into a virtual DOM.
  `Act` The screen.getByText() method can be used to "query" the DOM for a specific node by its text that we expect to see in the browser.
  `Assert` we use a couple of new functions - expect is a Jest function that is made globally available with create react app. The other, toBeInTheDocument(), comes from Jest DOM (Links to an external site.), a companion library to react-testing-library that provides custom matchers for Jest. 
