import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import Cyber from './Pages/Cyber';
import './App.css'
import All from './Pages/All';
import FullStackDevelopment from './Pages/About';
import Datascience from './Pages/Datascience';
import Navbar from './Components/Navbar';
// import User from './Pages/User';
import Carrier from './Pages/Carrier';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/all' element={<All />} />
        <Route path='/Cyber' element={<Cyber />} />
       
       
        <Route path='/FullStackDevelopment' element={<FullStackDevelopment />} />
        <Route path='/datascience' element={<Datascience />} />
        <Route path='/carrier' element={<Carrier />}/>
        {/* <Route path='/User/:id' element={<User />}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
