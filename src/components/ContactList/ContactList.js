import React, { useEffect } from 'react';
import  PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import phonebookOperations from './../../redux/phonebook/phonebook-operations';
// import phonebookSelectors from './../../redux/phonebook/phonebook-selectors';

import {phonebookOperations, phonebookSelectors} from './../../redux/phonebook';

const ContactList = ({loading, contacts, fetchContacts, removeContactId }) => {

    // 
    useEffect(()=>{
        console.log(fetchContacts())
    }, [fetchContacts])

    return(
        <>  
            {loading && <h3>Loading</h3>}
            <ul>
                {
                    contacts.map(({id, name, phone}) => (
                        <li key={id}><span> {name}: {phone} </span><button onClick={()=>{removeContactId(id)}}>Delete</button> </li>
                    ))
                }
            </ul>
        </>
    )
}

ContactList.defaultProps = {
    contacts:[],
    removeContactId:() =>{}
}
ContactList.propTypes = {
    contacts:PropTypes.array.isRequired,
    removeContactId:PropTypes.func
}


const mapStateToProps = state =>({
    loading:phonebookSelectors.getLoading(state),
    contacts:phonebookSelectors.getFilterContacts(state)
})


const mapDispatchToProps = dispatch =>({
    fetchContacts: () => dispatch(phonebookOperations.fetchContact()),
    removeContactId: id => dispatch(phonebookOperations.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)