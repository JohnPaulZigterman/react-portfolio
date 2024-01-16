import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
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
        <footer>
          <Footer />
        </footer>
    </>
  );
}

export default App;