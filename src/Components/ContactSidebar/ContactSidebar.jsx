import React, { useContext } from 'react'
import { getContacts } from '../../services/contactsService'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

export default function ContactSidebar() {
    //useContext: hook que nos permite consumir el contexto, es decir, acceder a los estados y funciones que se encuentran en el contexto
    //Recibepor parametro el contexto que queremos consumir, en este caso el ContactsContext
    //Una vez consumido me traera el valor del value del contexto, es decir, el provider_values del ContactContextProvider
    const { contacts, favorite_name } = useContext(ContactsContext)
  return (
    <div>
        <h2>Whatsapp Clone</h2>
        <h3>Me cae muy bien {favorite_name}</h3>
        <div>
            {
                contacts.map(
                    (contact) => {
                        return (
                            <Link
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                            >
                                <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                    style={
                                        {
                                            width:'200px'
                                        }
                                    }
                                />
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
  )
}
