
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SingleProperty from './components/SingleProperty'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<SingleProperty />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
