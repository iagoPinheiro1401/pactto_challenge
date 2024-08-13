import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextMedium from "@/components/tipography/textMedium/TextMedium"
import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import Advantage from "@/components/advantage/Advantage"

import { useMenu } from "@/hooks/useMenu"

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const TextAndMenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ButtonContainer = styled.div`
    width: 400px;
`

const AdvantagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export default function Subscription(){
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <>
            <TextAndMenuContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold" />
                <TextContainer>
                    <TextMedium color="#6e6e6e" fontWeigth="600">
                        You have access to <TextMedium color="white">PACTTO PRO</TextMedium> as a trial <TextMedium color="white">1 days left</TextMedium>
                    </TextMedium>
                </TextContainer>
            </TextAndMenuContainer>
            <ButtonContainer>
                <ResetButton>SUBSCRIBE TO PACTTO PRO</ResetButton>
            </ButtonContainer>
            <TextMedium color="white">The PACTTO PRO subscription allows you to:</TextMedium>
            <AdvantagesContainer>
                <Advantage>Every feature on the FREE plan</Advantage>
                <Advantage>Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web</Advantage>
                <Advantage>Max screen recording duration on Pactto Desktop: unlimited</Advantage>
                <Advantage>Max review duration on mobile: unlimited</Advantage>
                <Advantage>Max review duration on Pactto Web: 12 minutes</Advantage>
                <Advantage>Max review duration on Pactto Desktop: 20 minutes</Advantage>
                <Advantage>Manage and use your reference video library on the Web and Desktop</Advantage>
                <Advantage>Review videos uploaded by you, using the browser</Advantage>
                <Advantage>Add your own logo to create branded reviews</Advantage>
                <Advantage>If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users</Advantage>
                <Advantage>Integrate Pactto to your website so anyone can send, and pay, for your video feedback</Advantage>
                <Advantage>Share your videos with others (no more sending video files around)</Advantage>
            </AdvantagesContainer>
        </>
    )
}