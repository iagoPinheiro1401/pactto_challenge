import styled from "styled-components"
import { List } from "@phosphor-icons/react"
import { Trash } from "@phosphor-icons/react"

import GreenButton from "@/components/buttons/GreenButton"
import AddPackage from "@/components/addPackage/AddPackage"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import Checkbox from "@/components/input/Checkbox"
import ToggleButton from "@/components/buttons/ToggleButton"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

const ButtonsPackage = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-left: 10px;
`

const LabelAndButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export default function Packages() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container>
            <Header>
                <MenuAndAddButtonContainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <GreenButton plus>ADD PACKAGE</GreenButton>
                </MenuAndAddButtonContainer>
                <ButtonsContainer>
                    <GreenButton disabled>SAVE CHANGES</GreenButton>
                    <GreenButton>PAYMENT DETAILS</GreenButton>
                </ButtonsContainer>
            </Header>
            <ButtonsPackage>
                <LabelAndButton>
                    <TextMedium>Package in unpublished</TextMedium>
                    <ToggleButton/>
                </LabelAndButton>
                <LabelAndButton>
                    <TextMedium>Delete package</TextMedium>
                    <Trash size={32} weight="bold" color="gray"/>
                </LabelAndButton>
            </ButtonsPackage>
            <AddPackage />
        </Container>
    )
}