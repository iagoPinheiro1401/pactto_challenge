import styled from "styled-components"
import { List } from "@phosphor-icons/react"
import { useState, useEffect } from "react"

import LaunchButton from "@/components/buttons/LaunchButton"
import GreenButton from "@/components/buttons/GreenButton"
import TextBig from "@/components/tipography/textBig/TextBig"
import Input from "@/components/input/Input"
import Textarea from "@/components/textarea/Textarea"
import LabelMove from "@/components/label/LabelMove"

import { useMenu } from "@/hooks/useMenu"

const StyledContainer = styled.div`
    padding-top: 70px;
`

const ButtonsAndMenuContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.show ? 'end' : 'space-between')};
    gap: 10px;
    width: 100%;
    padding: 20px 30px;
    position: fixed;
    top: 0;
    z-index: 10000;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => (props.scroll ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none')};
    transition: box-shadow 0.2s ease;

    @media (max-width: 1280px) {
        flex-direction: column; 
        padding: 20px 0;
    }
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

    @media (max-width: 1280px) {
        margin-right: 0;
        justify-content: center;
    }
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

    @media (max-width: 1280px) {
        flex-direction: column-reverse;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    margin-left: 30px;

    @media (max-width: 1280px) {
        width: 100%;
        margin: 0 10px;
    }
`

const AvatarContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 50%;
    gap: 20px;

    @media (max-width: 1280px) {
        width: 100%;
        margin: 0 10px;
    }
`

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const AboutMeSection = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const Section = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const TextareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const LabelAndInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const ProfileImgContainer = styled.div`
    width: 100%;
    background-color: #1C1B1E;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`

const ButtonWidth = styled.div`
    max-width: 160px;
`

export default function Profile() {
    const { isMenuOpen, toggleMenu } = useMenu()

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50); // Ajuste o valor conforme necessário
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza do listener ao desmontar o componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <StyledContainer isMenuOpen={isMenuOpen}>
            <ButtonsAndMenuContainer scroll={scroll}>
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
                    <AboutMeSection>
                        <TextareaContainer>
                            <Text>About Me</Text>
                            <Textarea placeholder="About Me"/>
                        </TextareaContainer>
                        <Input placeholder="Expertise Title" big/>
                        <LabelAndInput>
                            <LabelMove>Expertise 1</LabelMove>
                            <Input placeholder="Add expertise" big/>
                        </LabelAndInput>
                        <Input placeholder="Awards Title" big/>
                        <LabelAndInput>
                            <LabelMove>Award 1</LabelMove>
                            <Input placeholder="Add award" big/>
                        </LabelAndInput>
                    </AboutMeSection>
                    <Section>
                        <Text>Give me a follow</Text>
                        <LabelAndInput>
                            <LabelMove>www.pactto.com</LabelMove>
                            <Input placeholder="Add social media channel" big/>
                        </LabelAndInput>
                    </Section>
                    <Section>
                        <Text>YouTube video</Text>
                        <Input placeholder="YouTube video URL" big/>
                    </Section>
                    <Section>
                        <Text>Footer</Text>
                        <Textarea placeholder="Quote"/>
                        <Input placeholder="Quote author" big/>
                    </Section>
                </Form>
                <AvatarContainer>
                    <Text>Avatar</Text>
                    <ProfileImgContainer>
                        <img src="/user-profile.png" width={160} height={160}/>
                    </ProfileImgContainer>
                    <Text>Carousel</Text>
                    <ButtonWidth>
                        <GreenButton plus>ADD IMAGE</GreenButton>
                    </ButtonWidth>
                </AvatarContainer>
            </Content>
        </StyledContainer>
    )
}