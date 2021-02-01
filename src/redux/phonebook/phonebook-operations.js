import axios from 'axios';
import {     
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    findContactName,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError } from './phonebook-actions';

axios.defaults.baseURL = 'http://localhost:3030';

const fetchContact = () => async dispatch => {

    dispatch(fetchContactRequest())

    try{
        const { data } = await axios.get('/contacts');
        dispatch(fetchContactSuccess(data))
    }catch(err){
        dispatch(fetchContactError(err))
    }

}

const addContact = (name, phone) => async dispatch => {
    const contact = {name, phone}

    dispatch(addContactRequest())

    try{
        const { data } = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data))
    }catch(err){
        dispatch(addContactError(err))
    }

}

const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest())

    try{
        await axios.delete(`/contacts/${id}`);
        dispatch(deleteContactSuccess(id))
    }catch(err){
        dispatch(deleteContactError(err))
    }

}

const onFindName = name => (dispatch, getState) =>{
    const { phonebook: {contacts}} = getState();

    return contacts.filter(contact => contact.name === name)
}



export default{
    fetchContact,
    addContact,
    deleteContact,
    onFindName
}