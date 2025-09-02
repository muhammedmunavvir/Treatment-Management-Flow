

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { LoginPage } from './pages/Loginpage';
import { ToastProvider } from './components/Toastp';
import TreatmentPage from './pages/Treatment';
function App() {
 

  return (
    <>
     <Router>
      <ToastProvider />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/treatments" element={< TreatmentPage/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
