import styled from "styled-components"
import { X } from "@phosphor-icons/react"

import TextMedium from "../tipography/textMedium/TextMedium"
import TextSmall from "../tipography/textSmall/TextSmall"
import TextBig from "../tipography/textBig/TextBig"
import MenuOptions from "./MenuOptions"
import LogoutButton from "../buttons/LogoutButton"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.secondary};
    width: 500px;
    height: 100vh;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 86%;
    margin-bottom: 20px;
    padding: 0 10px;
    margin: 25px 0 0 20px;
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;
    margin-bottom: 20px;
`

export default function Menu() {
    const { isMenuOpen, toggleMenu } = useMenu()

    if (!isMenuOpen) {
        return null
    }

    return(
        <Container isOpen={isMenuOpen}>
            <LogoContainer>
                <img src="/pactto_logo.png"/>
                <StyledX onClick={toggleMenu}>
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
                <MenuOptions src="/homeIcon" path="/">Home</MenuOptions>
                <MenuOptions src="/chatIcon" path="/chat">Pacttos (Chats)</MenuOptions>
                <MenuOptions src="/videosIcon" path="/itemsToReview">Items to review</MenuOptions>
                <MenuOptions src="/webLinksIcon" path="/webLinks">Web links to created</MenuOptions>
                <MenuOptions src="/personaIcon" path="/personalInformation">Personal information</MenuOptions>
                <MenuOptions src="/packagesIcon">Review packages for sale</MenuOptions>
                <MenuOptions src="/pacttoPagesIcon">Pactto website</MenuOptions>
                <MenuOptions src="/referenceIcon">Reference video library</MenuOptions>
                <MenuOptions src="/subscriptionIcon">Subscription</MenuOptions>
                <MenuOptions src="/settingsIcon">Review settings</MenuOptions>
            </StyledNav>
            <ButtonContainer>
                <LogoutButton />
            </ButtonContainer>
        </Container>
    )
}