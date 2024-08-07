import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import SaveButton from "@/components/buttons/changesButtons/SaveButton"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ButtonsAndMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.show ? 'end' : 'space-between')};
    gap: 10px;
    width: 100%;
    padding: 20px 0 20px 30px;
    position: fixed;
    top: 0;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 74%;
    justify-content: end;
    padding: 0 50px;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`


export default function PersonalInformation() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container>
            <ButtonsAndMenuContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <ButtonContainer>
                    <ResetButton />
                    <SaveButton />
                </ButtonContainer>
            </ButtonsAndMenuContainer>
        </Container>
    )
}