import styled from "styled-components"
import { List } from "@phosphor-icons/react"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import TextMedium from "@/components/tipography/textMedium/TextMedium"
import GreenButton from "@/components/buttons/GreenButton"
import SearchBar from "@/components/searchBar/SearchBar"

import { useMenu } from "@/hooks/useMenu"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 20px;
`

const ButtonsAndMenuContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.show ? 'end' : 'space-between')};
    gap: 10px;
    width: 100%;
    padding: 20px 0;
`

const MenuAndMenucontainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const StyledList = styled(List)`
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`

export default function Library() {
    const { isMenuOpen, toggleMenu } = useMenu()

    return(
        <Content>
            <ButtonsAndMenuContainer>
                <MenuAndMenucontainer>
                    <StyledList show={!isMenuOpen} onClick={toggleMenu} size={27} color="#ffff" weight="bold"/>
                    <TextHuge>Select a video</TextHuge>
                </MenuAndMenucontainer>
                <GreenButton plus>UPLOAD NEW VIDEO</GreenButton>
            </ButtonsAndMenuContainer>
            <TextMedium color="#6e6e6e">Videos uploaded to the reference video library can be used in side-by-side comparisons, or can be shared with learners directly.</TextMedium>
            <SearchBar placeholder="Search"/>
        </Content>
    )
}