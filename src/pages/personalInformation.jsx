import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import SaveButton from "@/components/buttons/changesButtons/SaveButton"
import Input from "@/components/input/Input"
import Dropdown from "@/components/input/SelectInput"
import Checkbox from "@/components/input/Checkbox"

import { useMenu } from "@/hooks/useMenu"

const Content = styled.div`
    padding: 40px 0;
`

const ButtonsAndMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.show ? 'initial' : 'space-between')};
    gap: 10px;
    width: 100%;
    padding: 20px 0 20px 30px;
    position: fixed;
    top: 0;
    z-index: 10000;
    background-color: ${props => props.theme.colors.primary};

    @media (max-width: 1280px) {
        padding: 10px 0;
        gap: 30px;
        justify-content: center;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    width: ${props => props.isMenuOpen ? "75%" : "100%"};
    justify-content: end;
    padding: 0 100px;

    @media (max-width: 1280px) {
        width: 250px;
        padding: 0;
        justify-content: center;
    }
`

const StyledList = styled(List)`
    cursor: pointer;
    display: ${props => (props.show ? 'block' : 'none')};
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px;
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

  @media (max-width: 1280px) {
    width: 100%;
  }
`

const HandleAndPasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 70px;
    font-size: 16px;
    color: white;
`

const TextContainer = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #c4c1c1;
    margin: 20px 0 0 35px;
`

const Hiperlink = styled.a`
    color: white;
`

export default function PersonalInformation() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Content>
            <ButtonsAndMenuContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <ButtonContainer isMenuOpen={isMenuOpen}>
                    <ResetButton >RESET CHANGES</ResetButton>
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
                <HandleAndPasswordContainer>
                    <p>User handle and password</p>
                    <Input placeholder="User"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm passowrd"/>
                </HandleAndPasswordContainer>
            </FormContainer>
            <TextContainer>
                To delete your Pactto account and remove your data permanently from all Pactto apps and services, please <Hiperlink href="google.com">click here.</Hiperlink>
            </TextContainer>
        </Content>
    )
}