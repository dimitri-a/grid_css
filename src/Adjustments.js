/*eslint-disable*/
import React, { Fragment } from 'react';
import AdjustmentRow from './AdjustmentRow';
import styled from 'styled-components';



const Wrapper = styled.div`
  margin: 100px;
  -ms-grid-column: 1;
  -ms-grid-column-span: 8;
  grid-column: left-start / span 8;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 45% 25% 25% 5%;
  grid-template-columns: [col1] 45% [col2] 25% [col3] 25%[col4]5%;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  grid-column-gap: 2em;

`;

const ColHeading = styled.div`
  font-size: 12px;
  font-style: italic;
  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;
  -ms-grid-column: ${props => (props.gridCol ? props.gridCol : 2)};
  grid-column-start: ${props => (props.gridCol ? props.gridCol : 2)};

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


class Adjustments extends React.Component {

    render = () => {
        const { fields } = this.props;
        const adjustmentsWrong = [{ lastYear: 2000, currentYear: 1000 },{ lastYear: 300, currentYear: 500 }] 
        const adjustments = [{ lastYear: 2000, currentYear: 1000 }] 
      
        return (
            <Fragment>
                <Wrapper>
                    <ColHeading textAlign="right" gridCol={1} >
                    </ColHeading>
                    <ColHeading textAlign="right" gridCol={2}>
                        Last year
                    </ColHeading>
                    <ColHeading textAlign="right" gridCol={3}>
                        Current year
                     </ColHeading>
                    <ColHeading textAlign="right" gridCol={4}>
                        test
                     </ColHeading>

                    {adjustments.map((adjustment) => (
                        <AdjustmentRow adjustment={adjustment} />
                    ))}

                    <Value textAlign="right" gridCol={3} >
                        <button>add</button>
                </Value>

                </Wrapper>
            </Fragment >
        );
    };
}




export default Adjustments;
