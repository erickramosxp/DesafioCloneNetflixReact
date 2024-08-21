import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login/Login'
import BrowseNetflix from './components/Browser/BrowseNetflix'
import Home from './components/Home/Home'
import { PopupProvider } from "./components/Browser/PopupContext";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/browse' 
            element={
              <PopupProvider>
                  <BrowseNetflix />
              </PopupProvider>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
