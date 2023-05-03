/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto w-8/12 mt-16">
        <div className="collapse-title text-xl font-medium text-white">
          Tell us the differences between uncontrolled and controlled
          components?
        </div>
        <div className="collapse-content">
          <p>
            Uncontrolled components are those in which the state is managed
            internally by the component, while controlled components are those
            in which the state is managed externally by a parent component. In
            other words, the parent component has control over the state of the
            controlled component, while it has no control over the state of the
            uncontrolled component. <br />
            The main difference between uncontrolled and controlled components
            is in how their state is managed, with uncontrolled components
            having independent state management and controlled components having
            parent-controlled state management.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto w-8/12 mt-16">
        <div className="collapse-title text-xl font-medium text-white">
          How to validate React props using PropTypes?
        </div>
        <div className="collapse-content">
          <p>
            You can validate React props using prop-types, a package that comes
            with React. To use prop-types, you import it along with React,
            define your component, and then set the propTypes property on the
            component to an object that defines the expected types and values of
            each prop. <br />
            We are setting the propTypes property on MyComponent to an object that has a property called name, which is defined as a string and is required. This will cause a warning to be logged in the console if the name prop is not provided or is not a string.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto w-8/12 mt-16">
        <div className="collapse-title text-xl font-medium text-white">
        Tell us the difference between nodejs and express js?
        </div>
        <div className="collapse-content">
          <p>
          Node.js is a JavaScript runtime built on Chrome is V8 JavaScript engine. It allows you to run JavaScript code outside of the browser, on a server. Node.js provides a set of built-in modules for handling file systems, networking, and other low-level tasks, as well as a large ecosystem of third-party packages. <br />
          Express.js, on the other hand, is a framework built on top of Node.js that provides a set of tools for building web applications and APIs. Express.js makes it easy to handle HTTP requests and responses, define routes, and manage middleware. Express.js is one of the most popular web frameworks for Node.js and is often used in conjunction with other packages, such as MongoDB for data storage.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box container mx-auto w-8/12 mt-16 mb-16">
        <div className="collapse-title text-xl font-medium text-white">
        What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>
          In React, a custom hook is a reusable function that encapsulates commonly used logic and state in a composable way. Custom hooks enable developers to separate concerns, reuse code, and abstract away complex behavior. <br />
          In React, a custom hook is a reusable function that encapsulates commonly used logic and state in a composable way. Custom hooks enable developers to separate concerns, reuse code, and abstract away complex behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
