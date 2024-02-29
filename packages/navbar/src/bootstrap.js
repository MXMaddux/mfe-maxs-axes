import React from "react";
import * as ReactDOM from "react-dom/client"; // Correctly import for React 18
import App from "./App";

// This function is designed to mount the App component to a given element.
// It's structured to support potential microfrontend setups.
const mount = (el) => {
  // Create a root instance on the element where the React app will be mounted.
  const root = ReactDOM.createRoot(el);

  // Render the App component within the root.
  root.render(<App />, el);
};

// Check if we're in development mode and if the development root exists.
// This allows for isolated development and testing of the microfrontend.
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_navbar-dev-root");

  // If a development root element exists, mount the App component to it.
  if (devRoot) {
    mount(devRoot);
  }
}

// Export the mount function to potentially allow other applications or
// container apps to mount this microfrontend.
export { mount };

// import React from "react";
// // import { ReactDOM } from "react-dom";
// import * as ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const container = document.querySelector("#_cart-dev-root");
// const devRoot = createRoot(container);

// const mount = (el) => {
//   devRoot.render(<App />, el);
// };
// if (process.env.NODE_ENV === "development") {
//   if (devRoot) {
//     mount(devRoot);
//   }
// }

// export { mount };
