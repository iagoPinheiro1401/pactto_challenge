import styled from "styled-components"

const StyledButton = styled.button`
    padding: 17px 130px;
    border-radius: 50px;
    background-color: #B8B8B8;
    font-weight: 700;
    font-size: 14px;
`

export default function LogoutButton() {
    return(
        <StyledButton>
            LOGOUT
        </StyledButton>
    )
}