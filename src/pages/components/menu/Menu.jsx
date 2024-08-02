import styled from "styled-components"
import { X } from "@phosphor-icons/react"

const Container = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    width: 350px;
    height: 100vh;
    padding: 25px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const StyledX = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    cursor: pointer;
    
    :hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
`

export default function Menu() {
    return(
        <Container>
            <LogoContainer>
                <img src="/pactto_logo.png"/>
                <StyledX>
                    <X size={20} color="#faf9f9" weight="bold" />
                </StyledX>
            </LogoContainer>
        </Container>
    )
}