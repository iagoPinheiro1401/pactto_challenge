import styled from "styled-components"
import { X } from "@phosphor-icons/react"

import TextMedium from "../tipography/textMedium/TextMedium"
import TextSmall from "../tipography/textSmall/TextSmall"

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
    margin-bottom: 20px;
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

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: red;
    height: 100px;
`

const PacttoProContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const PacttoProText = styled.p`
    color: white;
    background-color: ${props => props.theme.colors.green};
    padding: 6px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 5px;
`

const TextUpgrate = styled.p`
    font-size: 12px;
    text-decoration: underline;
    color: rgb(203, 203, 203);
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
            <TextMedium color="#545454" fontWeigth="700">YOUR PACTTO PROFILE</TextMedium>
            <ProfileContainer>
                <img src="/user.png"/>
                <PacttoProContainer>
                    <TextSmall>TRIAL: 12 DAYS LEFT</TextSmall>
                    <PacttoProText>PACTTO PRO</PacttoProText>
                </PacttoProContainer>
                <TextUpgrate>Upgrate</TextUpgrate>
            </ProfileContainer>
        </Container>
    )
}