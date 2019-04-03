
import React from 'react'
import {  FieldArray, reduxForm } from 'redux-form'
import Adjustments from './Adjustments';

export const FieldArraysForm = props => {

    return (
      <form>
       
        <FieldArray name="adjustments" component={Adjustments} />
        
      </form>
    )
  }
  
  export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
    
  })(FieldArraysForm)




// /*eslint-disable*/
// import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { reduxForm, FieldArray } from 'redux-form';
// import styled from 'styled-components';

// import Adjustments from './Adjustments'

// const WrapperAdjustment = styled.div`
//   margin-right: 0px; /* 1 */
//   margin-left: 24px; /* 1 */
//   max-width: 997px; /* 2 */
//   padding-right: 10px; /* 3 */
//   padding-left: 10px; /* 3 */
// `;

// class FormComponent extends React.Component {

//     render() {
//         return (
//             <Fragment>
//                         <FieldArray name="adjustments" component={Adjustments} />
//              </Fragment>
//         );
//     }
// }

// export default reduxForm({ form: 'myForm' })(FormComponent);
