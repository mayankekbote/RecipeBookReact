import React from 'react'
import Mainroutes from './Routes/Mainroutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 py-10 px-[20%] w-screen min-h-screen text-white font-thin bg-gray-700'>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App
