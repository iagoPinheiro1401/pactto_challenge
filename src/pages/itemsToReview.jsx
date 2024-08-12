import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import SearchBar from "@/components/searchBar/SearchBar"

import { useMenu } from "@/hooks/useMenu"

const MenuAndTextContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

export default function ItemsToReview() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <>
            <MenuAndTextContainer>
                <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                <TextHuge>There are no review requests sent to you</TextHuge>
            </MenuAndTextContainer>
            <SearchBar placeholder="Search"/>
        </>
    )
}