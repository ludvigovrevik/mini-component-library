/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

let SIZES = {
  small: {
    "--height-of-bar": "8px",
    "--radius": "4px",
    "--padding": "0px",
    "--height-of-large": "8px"
  },
  medium: {
    "--height-of-bar": "12px",
    "--radius": "4px",
    "--padding": "0px",
    "--height-of-large": "12px"
  },
  large: {
    "--height-of-bar": "24px",
    "--radius": "8px",
    "--padding": "4px",
    "--height-of-large": "16px"
  },
};

const ProgressBar = ({ value, size }) => {
  let styles = SIZES[size]

  return <DivElement role={"progressbar"} aria-value-now={value} aria-value-min={0} aria-valuemax={100} style={styles}>
            <BarWrapper>
              <InnerProgressBar style={styles} value={value} size={size}>
              </InnerProgressBar>
            </BarWrapper>
          </DivElement>;
};

const DivElement = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height-of-bar);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  padding: var(--padding)
  `;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const InnerProgressBar = styled.div`
  width: ${({ value }) => value + "%"};
  height: var(--height-of-bar);
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: var(--height-of-large)
`;

export default ProgressBar;
