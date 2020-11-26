import './tailwind.output.css';
import Navbar from './components/layout/navbar';
import PostState from './components/context/posts/postState';
import Posts from './components/posts/posts';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <PostState>
      <div className="flex flex-col App">
     
      <Navbar />
      <div className="relative flex flex-col flex-1 w-full overflow-hidden bg-white shadow xs:max-w-sm">
        <div className="flex items-center px-4 py-3 border-b">
          <Posts />
        </div>
      </div>
    </div>
    </PostState>
  );
}

export default App;
