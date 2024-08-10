import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import SaveButton from "@/components/buttons/changesButtons/SaveButton"
import Input from "@/components/input/Input"
import Dropdown from "@/components/input/SelectInput"
import Checkbox from "@/components/input/Checkbox"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 140px 0;
    margin-left: ${props => props.isMenuOpen ? "500px" : "0"};
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
    z-index: 10000;
    background-color: ${props => props.theme.colors.primary};
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

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 70px;
    font-size: 16px;
    color: white;
`

const StyledInputOther = styled.input`
  padding: 16px 40px 16px 14px;
  font-size: 1rem;
  border: 2px solid #706d6d;
  border-radius: 3px;
  width: 660px;
  background-color: transparent;
  color: white;

  ::placeholder {
    font-weight: 700;
  }

  :hover {
    border-color: white;
  }

  &:focus {
    caret-color: ${props => props.theme.colors.green};
    border-color: ${props => props.theme.colors.green};
    outline: none;
  }
`

export default function PersonalInformation() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container isMenuOpen={isMenuOpen}>
            <ButtonsAndMenuContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <ButtonContainer>
                    <ResetButton />
                    <SaveButton />
                </ButtonContainer>
            </ButtonsAndMenuContainer>
            <FormContainer>
                <InputsContainer>
                    <Input placeholder="First name"/>
                    <Input placeholder="Last name"/>
                    <Input placeholder="Email"/>
                    <Dropdown />
                </InputsContainer>
                <CheckboxContainer>
                    <p>What is your main activity? Or activities</p>
                    <Checkbox label="Video"/>
                    <Checkbox label="Design"/>
                    <Checkbox label="Development"/>
                    <Checkbox label="Sports"/>
                    <Checkbox label="Medical"/>
                    <Checkbox label="Inspections"/>
                    <StyledInputOther placeholder="Other"/>
                </CheckboxContainer>
            </FormContainer>
        </Container>
    )
}