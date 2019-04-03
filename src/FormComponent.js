



/*eslint-disable*/
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, FieldArray } from 'redux-form';
import styled from 'styled-components';
import { InternalGrid } from '../InternalGrid';
import { Statements, Financials, BusinessType } from '../BusinessFinancials';
import { Surplus } from '../BusinessFinancials/Surplus';
import TaxCalculations from '../TaxCalculations';
import { If } from '../common/If';
import FormSection from '../FormSection';
import { statementShape } from '../../helpers/shapes';
import ShareholderDistribution from '../ShareholderDistribution';
import ConnectedAdjustmentRowsTable from '../BusinessFinancials/AdjustmentRowsTable';
import Adjustments from '../BusinessFinancials/Adjustments'

const WrapperAdjustment = styled.div`
  margin-right: 0px; /* 1 */
  margin-left: 24px; /* 1 */
  max-width: 997px; /* 2 */
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
`;

class FormComponent extends React.Component {

    render() {
        return (
            <Fragment>
                <FormSection heading="Adjustments">
            
                        <FieldArray name="adjustments" component={Adjustments} />
                </FormSection>
            </Fragment>
        );
    }
}

export default reduxForm({ form: 'myForm' })(FormComponent);
