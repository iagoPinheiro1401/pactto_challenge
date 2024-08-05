import styled from "styled-components"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import SearchBar from "@/components/searchBar/SearchBar"

const Container = styled.header`
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
`

const SearchBarAndText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

const Text = styled.p`
    font-size: 16px;
    color: white;
    font-weight: 400;
`

export default function ChatPage() {
    return(
        <Container>
            <TextHuge>Pacttos (Chats)</TextHuge>
            <SearchBarAndText>
                <Text>No Pacttos found</Text>
                <SearchBar placeholder="Search"/>
            </SearchBarAndText>
        </Container>
    )
}