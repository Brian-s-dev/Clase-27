import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx'


function App() {


  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={
            <HomeScreen />
          } 
        />
        <Route 
        path='/contact/:contact_id' 
        element={
          <ContactScreen />
        } 
        />
        <Route 
        path='*'
        element={<ErrorNotFoundScreen />}
        />
      </Routes>
    </div>
  )
}

export default App