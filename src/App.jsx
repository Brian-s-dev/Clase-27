import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen.jsx'
import { getContacts } from './services/contactsService.js'
import ContactsContextProvider from './Context/ContactContext.jsx'


/* 
Prop Drilling: transmitir un mismo valor a multiples componentes
La solucion al Prop Drilling es el contexto, que nos permite transmitir estados entre muchos componentes sin intermediarios
*/

function App() {

  return (
    <div>
      <ContactsContextProvider>
        <Routes>
            <Route 
              path='/' 
              element={<HomeScreen />} 
            />
            <Route 
            path='/contact/:contact_id' 
            element={<ContactScreen />} 
            />
            <Route 
              path='*'
              element={<ErrorNotFoundScreen />}
            />
        </Routes>
      </ContactsContextProvider>
    </div>
  )
}

export default App