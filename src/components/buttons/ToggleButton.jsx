import styled from "styled-components"
import { useState } from "react";

const StyledButton = styled.button`
    width: 40px;
    height: 20px;
    background-color: ${props => (props.active ? '#8f8e8e' : '#1DBBA5')};
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
`

const Knob = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.active ? '#c5c3c3' : '#12e0c5')};
  border-radius: 50%;
  position: absolute;
  left: ${props => (props.active ? 'calc(100% - 45px)' : '20px')};
  transition: left 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
`;

export default function ToggleButton() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return(
        <StyledButton onClick={handleClick} active={active}>
            <Knob active={active}>{active ? '-' : '✓'}</Knob>
        </StyledButton>
    )
}