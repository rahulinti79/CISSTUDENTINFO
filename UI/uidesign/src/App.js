import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import SignUp from './Components/SignUp/SignUp.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
