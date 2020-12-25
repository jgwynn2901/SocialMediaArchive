import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Routes from "./Routes";
import PostState from "./components/context/posts/postState";

ReactDOM.render(
  <React.StrictMode>
    <PostState>
      <Routes>
        <App />
      </Routes>
    </PostState>
  </React.StrictMode>,
  document.getElementById("root")
);
