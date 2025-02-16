import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import UserLayout from './Components/Layout/UserLayout'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
