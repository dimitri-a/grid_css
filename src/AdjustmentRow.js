/*eslint-disable*/
import React, { Fragment } from 'react';
import { Field } from 'redux-form'
import styled from 'styled-components'


const AdjustmentRow = ({ adjustment, fields, index }) => {

    // const removeAdjustment = () => {
    //     console.log('remmove adjustment')
    //     fields.remove(index);
    // };


    const ValueHeading = styled.div`
  font-size: 12px;
  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;
  -ms-grid-column: row-heading;
  grid-column-start: row-heading;
  -ms-grid-row: ${props => (props.gridRow ? props.gridRow : 2)};
  grid-row-start: ${props => (props.gridRow ? props.gridRow : 2)};
  margin: 12px 0;

  /* Trick to add spacing between grid columns in IE */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin-right: 1em;
  }
`;

    const Value = styled.div`
  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;
  -ms-grid-column: ${props => (props.gridCol ? props.gridCol : 2)};
  grid-column-start: ${props => (props.gridCol ? props.gridCol : 2)};
  -ms-grid-row: ${props => (props.gridRow ? props.gridRow : 2)};
  grid-row-start: ${props => (props.gridRow ? props.gridRow : 2)};

  /* Trick to add spacing between grid columns in IE */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    margin-right: 1em;
  }
  
`;

    const ValueComments = styled.div`
 grid-column: 2/ 4;
`;

    return (
        <Fragment>

            < Value textAlign="right" gridCol={1} gridRow={index + 3} weight={'regular'}>
                <Field name={`${adjustment}.type`} component="select">
                    <option />
                    <option value="-">Non-recurring income </option>
                    <option value="+">Non-recurring expense</option>
                    <option value="-">Rental Income (new purchase)</option>
                    <option value="+">Rental Expense (new purchase)</option>
                    <option value="+">Discretionary Super</option>
                    <option value="-">Capex</option>
                    <option value="-">Working Capital Adjustments </option>
                </Field>
            </Value>

            <Value textAlign="right" gridCol={2} gridRow={index + 3}>
                <Field
                    name={`${adjustment}.lastYear`}
                    type="number"
                  component='input'
                    label="Prior year"
                />
            </Value>

            <Value textAlign="right" gridCol={3} gridRow={index + 3}>
                <Field
                    name={`${adjustment}.currentYear`}
                    type="number"
                  component='input'
                    label="Current Year"
                />
            </Value>

            <Value textAlign="right" gridCol={4} gridRow={index + 3}>
                DEL
            </Value>

            <ValueComments textAlign="right" gridRow={index + 4} >
                comments here testing
        <textarea>Leave your comments here</textarea>

            </ValueComments>





        </Fragment >
    );
};


export default AdjustmentRow;
