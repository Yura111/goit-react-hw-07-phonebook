import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
// import * as phonebookActions from './../../redux/phonebook/phonebook-actions';
// import phonebookSelectors from './../../redux/phonebook/phonebook-selectors';

import {phonebookSelectors, changeFilter} from './../../redux/phonebook';


const Filter = ({filter, onFilter}) => {

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="filter_1">Find contacts by name</label><br/>
            <input type="text" name="filter" id="filter_1" value={filter}  onChange={onFilter} />
        </form>
    );
}

Filter.defaultProps = {
    filter:'',
    onFilter:()=>{}
}
Filter.propTypes = {
    filter:PropTypes.string.isRequired,
    onFilter:PropTypes.func
}

const mapStateToProps = state => ({
    filter:phonebookSelectors.getFilter(state)
});

const  mapDispatchToprops = dispatch =>({
    onFilter: e => dispatch(changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToprops)(Filter)