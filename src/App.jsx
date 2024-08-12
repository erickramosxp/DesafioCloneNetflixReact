import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import BrowseNetflix from './components/BrowseNetflix'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/browse' element={<BrowseNetflix />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
