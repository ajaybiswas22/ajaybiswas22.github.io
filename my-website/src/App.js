import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavbarElement } from './Navbar';
import { Timeline } from './Timeline';
import { Home } from './Home';
import { Gallery } from './Gallery';

function App() {
    return (
        <Router>
            <NavbarElement /> 
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/Timeline' element={<Timeline /> } />
                <Route path='/Gallery' element={<Gallery /> } />
            </Routes>
        </Router>
    );
}

export default App;