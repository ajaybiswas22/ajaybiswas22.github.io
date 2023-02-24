import logo from './logo.svg';
import useSound from 'use-sound';
import mySound from './interstellar.mp3'

import './App.css';

function App() {

  const [playSound] = useSound(mySound, { volume: 0.7 }) // 70% of the original volume

  return (
    <div className="App">
      <ul className="Navbar">
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">You</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
    </div>
  );
}

export default App;
