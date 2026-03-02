import React from 'react'
import Mainroutes from './Routes/Mainroutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen text-white font-thin">
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Navbar />
        <Mainroutes />
      </div>

    </div>
  )
}

export default App