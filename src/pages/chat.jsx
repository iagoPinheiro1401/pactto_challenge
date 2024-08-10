import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import SearchBar from "@/components/searchBar/SearchBar"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.header`
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
  margin-left: ${props => props.isMenuOpen ? "400px" : "0"};
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

const MenuAndTextContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

export default function ChatPage() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container isMenuOpen={isMenuOpen}>
            <MenuAndTextContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <TextHuge>Pacttos (Chats)</TextHuge>
            </MenuAndTextContainer>
            <SearchBarAndText>
                <Text>No Pacttos found</Text>
                <SearchBar placeholder="Search"/>
            </SearchBarAndText>
        </Container>
    )
}