import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Nav';
import Home from './pages/Home';
import Interview from './pages/Interview';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
    </Router>
  );
}

export default App;
