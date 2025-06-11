import {  Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Welcome from './pages/Welcome'
import Carne from './pages/Carne'
import Announcement from './pages/Announcement'


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Welcome />} />
          <Route path="carne" element={<Carne />} />
          
          <Route path="announcement" element={<Announcement />} />
        </Route>
      </Routes>
   
  )
}

export default App
