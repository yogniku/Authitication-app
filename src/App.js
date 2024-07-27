import Login from './Component/Login.js';
import Profile from './Component/Profile.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
</Router>
  );
}

export default App;
