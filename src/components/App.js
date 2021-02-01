// import React, { useMemo, useState } from 'react';
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

// import useLocalStorage from './../hooks/useLocalStorage';


export default function App(){
    return (
        <>   
            <h2>Phonebook</h2>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter/>
            <ContactList />  
        </>
    );
}
