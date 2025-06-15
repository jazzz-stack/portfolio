import { } from 'react';
import './App.css';

function App() {
  return (
    <div className=" bg-gray-200 h-screen justify-around items-baseline flex flex-row gap-4">
        <div className="px-4 py-2 bg-gray-400 rounded-lg cursor-pointer">
          Home
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-lg cursor-pointer">
          About
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-lg cursor-pointer">
          Contact
        </div>
        <div className="px-4 py-2 bg-gray-400 rounded-lg cursor-pointer">
          Services
        </div>
    </div>
  );
}

export default App
