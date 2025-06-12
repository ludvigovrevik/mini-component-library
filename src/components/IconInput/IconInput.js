import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Search } from 'react-feather';

const STYLE = {
  small: {
    "--height": "24px",
    "--font-size": "14px",
    "--border-bottom": "1px solid black",
    "--placeholder-text-size": 14/16 + "rem",
    "--padding-left": "24px",
    "--size": "16px"
  },
  large: {
    "--height": "36px",
    "--font-size": "18px",
    "--border-bottom": "2px solid black",
    "--placeholder-text-size": 18/16 + "rem",
    "--padding-left": "36px",
    "--size": "24px"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  let styles = {
    ...STYLE[size],
    "--input-width": `${width}px`,
  };

  const IconComponent = Icon[icon];

  return (
  <InputWrapper style={styles}>
    <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={styles}>
        <Icon id={icon} size={styles["--size"]} strokeWidth={1} />
      </IconWrapper>
    <InputComponent {...delegated} placeholder={placeholder} style={styles}/>
  </InputWrapper>
  )
};

const InputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  height: var(--size);

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--input-width);
  height: var(--size);
`;

const InputComponent = styled.input`
  height: var(--size);
  width: var(--input-width, 250px);
  border: none;
  border-bottom: var(--border-bottom);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  padding-left: var(--padding-left);
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
