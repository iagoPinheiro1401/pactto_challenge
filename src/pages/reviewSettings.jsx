import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextBig from "@/components/tipography/textBig/TextBig"
import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import GreenButton from "@/components/buttons/GreenButton"

import { useMenu } from "@/hooks/useMenu"

const ButtonsAndMenuContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.show ? 'end' : 'space-between')};
    gap: 10px;
    width: 100%;
    padding: 0px 30px;
    background-color: ${props => props.theme.colors.primary};
`

const TextAndMEnuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
` 

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: default;
    padding: 18px 35px;
    background-color: #464545;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    color: black;
`

export default function ReviewSettings() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <>
            <ButtonsAndMenuContainer>
                <TextAndMEnuContainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <TextBig>Review Settings</TextBig>
                </TextAndMEnuContainer>
                <ButtonsContainer>
                    <ResetButton >RESET CHANGES</ResetButton>
                    <StyledButton>SAVE CHANGES</StyledButton>
                </ButtonsContainer>
            </ButtonsAndMenuContainer>
        </>
    )
}