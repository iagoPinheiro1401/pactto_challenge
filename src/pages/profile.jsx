import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import LaunchButton from "@/components/buttons/LaunchButton"
import TextBig from "@/components/tipography/textBig/TextBig"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import Input from "@/components/input/Input"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 140px 0 50px 0;
    margin-left: ${props => props.isMenuOpen ? "400px" : "20px"};
`

const ButtonsAndMenuContainer = styled.header`
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

const MenuAndTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-right: ${props => props.isMenuOpen ? "400px" : "0"};
    justify-content: end;
    padding: 0 50px;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

const DisabledButton = styled.button`
    background-color: #3E3D3F;
    padding: 17px 0;
    width: 180px;
    border-radius: 50px;
    border: none;
    font-size: 14px;
    font-weight: 600;
`

const Text = styled.p`
    font-size: 16px;
    color: white;
    font-weight: 500;
`

const Content = styled.div`
    display: flex;
    gap: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    margin-left: 30px;
`

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 50%;
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export default function Profile() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container isMenuOpen={isMenuOpen}>
            <ButtonsAndMenuContainer>
                <MenuAndTextContainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <TextBig>Please edit your Pactto page below.</TextBig>
                </MenuAndTextContainer>
                <ButtonContainer isMenuOpen={isMenuOpen}>
                    <LaunchButton />
                    <DisabledButton>SAVE</DisabledButton>
                </ButtonContainer>
            </ButtonsAndMenuContainer>
            <Content>
                <Form>
                    <HeroContainer>
                        <Text>Hero</Text>
                        <Input placeholder="Public name" big/>
                        <Input placeholder="Headline" big/>
                    </HeroContainer>
                </Form>
                <AvatarContainer>

                </AvatarContainer>
            </Content>
        </Container>
    )
}