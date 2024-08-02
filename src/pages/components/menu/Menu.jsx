import styled from "styled-components"
import { X } from "@phosphor-icons/react"

import TextMedium from "../tipography/textMedium/TextMedium"
import TextSmall from "../tipography/textSmall/TextSmall"
import TextBig from "../tipography/textBig/TextBig"
import MenuOptions from "../menuOptions/MenuOptions"

const Container = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    width: 383px;
    height: 100vh;
    padding-top: 25px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 86%;
    margin-bottom: 20px;
    padding: 0 10px;
    margin-left: 20px;
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

const StyledText = styled.p`
    color: #545454;
    margin-left: 38px;
    font-weight: 700;
    font-size: 14px;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 10px 0 0 30px;
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

const UserNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 0 0 20px 35px;
`

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
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
            <StyledText>YOUR PACTTO PROFILE</StyledText>
            <ProfileContainer>
                <img src="/user.png"/>
                <PacttoProContainer>
                    <TextSmall>TRIAL: 12 DAYS LEFT</TextSmall>
                    <PacttoProText>PACTTO PRO</PacttoProText>
                </PacttoProContainer>
                <TextUpgrate>Upgrate</TextUpgrate>
            </ProfileContainer>
            <UserNameContainer>
                <TextBig>IAGO PINHEIRO DE OLIVEIRA ALVES</TextBig>
                <TextMedium>Pactto member since 2024</TextMedium>
            </UserNameContainer>
            <StyledNav>
                <MenuOptions src="/homeIcon.png">Home</MenuOptions>
                <MenuOptions src="/chatIcon.png">Pacttos (Chats)</MenuOptions>
                <MenuOptions src="/videosIcon.png">Items to review</MenuOptions>
                <MenuOptions src="/webLinksIcon.png">Web links to created</MenuOptions>
                <MenuOptions src="/personaIcon.png">Personal information</MenuOptions>
                <MenuOptions src="/packagesIcon.png">Review packages for sale</MenuOptions>
                <MenuOptions src="/pacttoPagesIcon.png">Pactto website</MenuOptions>
                <MenuOptions src="/referenceIcon.png">Reference video library</MenuOptions>
                <MenuOptions src="/subscriptionIcon.png">Subscription</MenuOptions>
                <MenuOptions src="/settingsIcon.png">Review settings</MenuOptions>
            </StyledNav>
        </Container>
    )
}