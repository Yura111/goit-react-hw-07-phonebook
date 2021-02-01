import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;
const getLoading = state => state.phonebook.loading;

// const getFilterContacts = state => {
//     const filter = getFilter(state);
//     const contacts = getContacts(state);

//     console.log(state);

//     // return contacts.filter(contact => contact.name.toLowerCase().startsWith(filter.toLowerCase()))
//     return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
// }

const getFilterContacts = createSelector(
    [getFilter, getContacts], 
    (filter, contacts) =>{
        return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
    })

export default{
    getFilter,
    getContacts,
    getLoading,
    getFilterContacts
}