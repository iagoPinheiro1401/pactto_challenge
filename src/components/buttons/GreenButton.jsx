import styled from "styled-components"
import { Plus } from "@phosphor-icons/react"

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    padding: 15px 20px;
    background-color: ${props => props.theme.colors.green};
    border: none;
    border-radius: 50px;
    font-weight: 600;

    :hover {
        background-color: #0bb39c;
    }
`

export default function GreenButton({ plus, children }) {
    return(
        <StyledButton>
            {plus && <Plus size={15}  weight="bold"/>}
            {children}
        </StyledButton>
    )
}