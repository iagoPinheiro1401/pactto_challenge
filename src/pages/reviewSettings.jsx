import styled from "styled-components"
import { Check, List } from "@phosphor-icons/react"

import TextBig from "@/components/tipography/textBig/TextBig"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import Checkbox from "@/components/input/Checkbox"
import RangeInput from "@/components/input/RangeInput"
import NoteColor from "../components/noteColor/NoteColor"

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

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 30px 0 0 35px;
`

const RangeInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 10px 0 0 20px;
`

const TextAndNote = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 36px;
`

const NoteColorContainer = styled.div`
    display: flex;
    gap: 20px;
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
            <CheckboxContainer>
                <Checkbox label="Show logo"/>
                <Checkbox label="Start with microphone enabled"/>
                <Checkbox label="Start with camera enabled"/>
                <Checkbox label="Videos loaded start muted"/>
                <Checkbox label="Notes disappear after 1 second"/>
                <Checkbox label="Trackpad: pinch to zoom"/>
                <Checkbox label="Trackpad: reposition with 2-finger swipe"/>
            </CheckboxContainer>
            <RangeInputContainer>
                <TextMedium color="white">Brush size for tools</TextMedium>
                <RangeInput />
            </RangeInputContainer>
            <TextAndNote>
                <TextMedium color="white">Note color options</TextMedium>
                <NoteColorContainer>
                    <NoteColor initialText="#FF0000" text="Color 1"/>
                    <NoteColor initialText="#008000" text="Color 2"/>
                    <NoteColor initialText="#FFFFF" text="Color 3"/>
                    <NoteColor initialText="#00000" text="Color 4"/>
                </NoteColorContainer>
            </TextAndNote>
        </>
    )
}