import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nav from './Components/nav'

function App() {

  return (
     <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/users/:name" elements = {<Users/>} />
          </Routes>
     </Router>
  );
}

export default App;
