import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navigation from './Navbar';

function App() {
  return (
    <div>
      <Navigation web3Handler={ } account={ }></Navigation>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          DApp
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mx-auto mt-5">

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;