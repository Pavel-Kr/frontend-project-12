import { Outlet } from 'react-router';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <main className="h-100 bg-light">
      <Navbar expand="lg" className="bg-white shadow-sm mb-5">
        <div className="container">
          <Navbar.Brand href="/">React chat</Navbar.Brand>
        </div>
      </Navbar>
      <div className="container h-100">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
