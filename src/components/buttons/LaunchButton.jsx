import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #1994FC;
    padding: 17px 0;
    width: 180px;
    border-radius: 50px;
    border: none;
    font-size: 14px;
    font-weight: 600;
`

export default function LaunchButton() {
    return(
        <StyledButton>
            LAUNCH
        </StyledButton>
    )
}