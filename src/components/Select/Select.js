import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
        <SelectComponent value={value} aria-label={label} onChange={onChange}>
        {children}
      </SelectComponent>
      <StyledIcon id="chevron-down" size={24}/>
    </Wrapper>
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 19px;
  bottom: 18px;
  margin-top: auto;
  margin-bottom: auto;
  right: 8px;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const SelectComponent = styled.select`
  height: 43px;
  appearance: none;
  text-indent: 1px;
  text-overflow: '';
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: "Roboto", "Arial";
  border-radius: 8px;
  border: none;
  
  &:focus {
    outline: default;
    border: 2px solid default;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: max-content;

  &:hover ${SelectComponent} {
    color: black;
  }

  &:hover ${StyledIcon} {
    color: black;
  }
`;

export default Select;
