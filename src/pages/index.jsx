import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import TextBig from "@/components/tipography/textBig/TextBig"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import Status from "@/components/status/Status"
import GreenButton from "@/components/buttons/GreenButton"
import SearchBar from "@/components/searchBar/SearchBar"

import { useMenu } from "@/hooks/useMenu"

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StatusAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Hiperlink = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.colors.green};
`

const UploadsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

const MenuAndTextContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

function HomePage () {
  const { isMenuOpen, toggleMenu } = useMenu()

  return (
    <>
        <TextBig>Hey IAGO, welcome to Pactto!</TextBig>
        <StatusContainer>

          <StatusAndText>
            <Status>DONE</Status>
            <TextMedium>Open your inbox and verify your email</TextMedium>
          </StatusAndText>

          <StatusAndText>
            <Status>DONE</Status>
            <TextMedium>Check the <Hiperlink>short video of Pactto in action</Hiperlink></TextMedium>
          </StatusAndText>

          <StatusAndText>
            <Status>DONE</Status>
            <TextMedium>Wanna record your computer screen or review files? Download Pactto for <Hiperlink>Mac</Hiperlink> or <Hiperlink>Windows</Hiperlink></TextMedium>
          </StatusAndText>

          <StatusAndText>
            <Status>DONE</Status>
            <TextMedium>Wanna review videos, images or audio files with your phone or tablet? Download Pactto for <Hiperlink>IOS</Hiperlink> or <Hiperlink>Android</Hiperlink></TextMedium>
          </StatusAndText>
        </StatusContainer>
        
        <UploadsContainer>
          <MenuAndTextContainer>
            <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
            <TextHuge>My uploads</TextHuge>
          </MenuAndTextContainer>
          <GreenButton plus>UPLOAD NEW VIDEO</GreenButton>
        </UploadsContainer>

        <SearchBar placeholder="Search"/>
    </>
  )
}

export default HomePage