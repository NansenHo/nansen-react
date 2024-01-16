import React from "./React.js";

export const ReactDOM = {
  createRoot(root) {
    return {
      render(el) {
        React.render(el, root);
      },
    };
  },
};
