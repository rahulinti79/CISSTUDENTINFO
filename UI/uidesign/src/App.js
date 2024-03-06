
import './App.css';
import Login from './Components/Login/Login.js'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import SignUp from './Components/SignUp/SignUp.js';
import Homepage from '../src/Components/Home/Homepage';
import AllRouter from './Router.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AllRouter />
      </header>
    </div>
  );
}

export default App;
