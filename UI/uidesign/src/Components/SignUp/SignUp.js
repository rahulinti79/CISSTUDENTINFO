import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

export default function SignUp() {
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [technology, setTechnology] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleSignUp = () => {
    // Logic for signing up
    const userData = {
      userId,
      firstName,
      lastName,
      email,
      userType,
      technology,
      password
    };
    console.log('Signing up with:', userData);
  };
  const handleSignIn = () => {
    // Logic for signing in with username and password
    navigate('/'); 
};
  return (
    <div className="container mt-5">
      <h1>SignUp</h1>
      <form>
        <table >
          <tbody>
            
            <tr>
              <td><label htmlFor="firstName">First Name:</label></td>
              <td>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last Name:</label></td>
              <td>
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email:</label></td>
              <td>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="userType">User Type:</label></td>
              <td>
                <select
                  id="userType"
                  className="form-control"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="" disabled selected>Select User Type</option>
                  <option value="Manager">Manager</option>
                  <option value="Lead">Lead</option>
                  <option value="Student">Student</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="technology">Technology:</label></td>
              <td>
                <select
                  id="technology"
                  className="form-control"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  required
                >
                  <option value=""disabled selected>Select Technology</option>
                  <option value=".Net">.Net</option>
                  <option value="Java">Java</option>
                  <option value="Sales Force">Sales Force</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Data Engineer">Data Engineer</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-secondary btn-lg" onClick={handleSignUp}>Sign Up</button>
        <button className="btn btn-secondary btn-lg mr-2" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}
