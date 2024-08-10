import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import GreenButton from "@/components/buttons/GreenButton"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    margin-left: ${props => props.isMenuOpen ? "400px" : "0px"};
`

const MenuAndAddButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
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

export default function Packages() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container isMenuOpen={isMenuOpen}>
            <MenuAndAddButtonContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <GreenButton plus>ADD PACKAGE</GreenButton>
            </MenuAndAddButtonContainer>
            <ButtonsContainer>
                <GreenButton disabled>SAVE CHANGES</GreenButton>
                <GreenButton>PAYMENT DETAILS</GreenButton>
            </ButtonsContainer>
        </Container>
    )
}