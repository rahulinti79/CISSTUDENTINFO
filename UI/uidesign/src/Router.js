
import './App.css';
import Login from './Components/Login/Login.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import SignUp from './Components/SignUp/SignUp.js';
import Homepage from '../src/Components/Home/Homepage';


export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  );
}
