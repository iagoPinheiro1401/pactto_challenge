import styled from "styled-components"
import { Plus } from "@phosphor-icons/react"

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: ${props => (props.disabled ? "default" : "pointer")};
    padding: 15px 20px;
    background-color: ${props => props.disabled ? "#464545" : "#1DBBA5"};
    border: none;
    border-radius: 50px;
    font-weight: 600;
    color: black;

    ${props => !props.disabled && `
        :hover {
            background-color: #0bb39c;
        }
    `}
`

export default function GreenButton({ plus, children, disabled }) {
    return(
        <StyledButton disabled={disabled}>
            {plus && <Plus size={15}  weight="bold"/>}
            {children}
        </StyledButton>
    )
}