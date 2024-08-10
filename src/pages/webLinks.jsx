import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import SearchBar from "@/components/searchBar/SearchBar"

import { useMenu } from "@/hooks/useMenu"

const Container = styled.header`
  display: flex;
  gap: 140px;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
  margin-left: ${props => props.isMenuOpen ? "400px" : "0"};
`

const TextAndSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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

export default function WebLinks() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Container isMenuOpen={isMenuOpen}>
            <TextAndSearch>
                <MenuAndTextContainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <TextHuge>There are no public web links you created</TextHuge>
                </MenuAndTextContainer>
                <SearchBar placeholder="Search"/>
            </TextAndSearch>

            <TextAndSearch>
                <MenuAndTextContainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <TextHuge>There are no private web links you created</TextHuge>
                </MenuAndTextContainer>
                <SearchBar placeholder="Search"/>
            </TextAndSearch>
        </Container>
    )
}