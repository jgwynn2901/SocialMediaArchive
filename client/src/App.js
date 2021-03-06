import "./tailwind.output.css";
import Navbar from "./components/layout/Navbar";
import Posts from "./components/posts/posts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
      <div className="flex flex-col h-screen App bg-gray-200">
        <Navbar />
        <Posts />
      </div>
  );
}

export default App;
