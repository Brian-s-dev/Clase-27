import React from 'react'
import ContactSidebar from '../../Components/ContactSideBar/ContactSidebar'

export default function HomeScreen( contactState ) {
  return (
    <div>
        <ContactSidebar contactState={contactState}/>
    </div>
  )
}
