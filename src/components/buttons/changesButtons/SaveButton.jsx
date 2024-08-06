import styled from "styled-components"

const StyledButton = styled.button`
    padding: 17px 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    background-color: ${props => props.theme.colors.green};
    border-radius: 50px;
    cursor: pointer;
    border: none;

    :hover {
        background-color: #cccaca;
    }
`

export default function SaveButton() {
    return(
        <StyledButton>
            SAVE CHANGES
        </StyledButton>
    )
}