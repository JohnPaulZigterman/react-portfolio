import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import "./style.css";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
        <main className="mx-3">
            <Outlet />
        </main>
    </>
  );
}

export default App;