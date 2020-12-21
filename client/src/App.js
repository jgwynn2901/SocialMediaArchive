import "./tailwind.output.css";
import Navbar from "./components/layout/Navbar";
import PostState from "./components/context/posts/postState";
import Posts from "./components/posts/posts";
import Post from "./components/posts/post";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <Router>
      <Route path='/post/:id' component={Post} />
      <PostState>
        <div className="flex flex-col h-screen App bg-gray-200">
          <Navbar />
          <Posts />
        </div>
      </PostState>
    </Router>
  );
}

export default App;
