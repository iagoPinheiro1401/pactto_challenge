import styled from "styled-components"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import TextBig from "@/components/tipography/textBig/TextBig"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import Status from "@/components/status/Status"
import GreenButton from "@/components/buttons/GreenButton"
import SearchBar from "@/components/searchBar/SearchBar"

const Container = styled.header`
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 40px 30px;
`

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
  width: 1500px;
  margin-top: 60px;
`

function HomePage () {
  return (
    <Container>
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
          <TextHuge>My uploads</TextHuge>
          <GreenButton plus>UPLOAD NEW VIDEO</GreenButton>
        </UploadsContainer>

        <SearchBar placeholder="Search"/>
    </Container>
  )
}

export default HomePage