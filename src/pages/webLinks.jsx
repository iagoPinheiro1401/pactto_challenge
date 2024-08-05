import styled from "styled-components"

import TextHuge from "@/components/tipography/textHuge/TextHuge"
import SearchBar from "@/components/searchBar/SearchBar"

const Container = styled.header`
  display: flex;
  gap: 140px;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
`

const TextAndSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export default function WebLinks() {
    return(
        <Container>
            <TextAndSearch>
                <TextHuge>There are no public web links you created</TextHuge>
                <SearchBar placeholder="Search"/>
            </TextAndSearch>

            <TextAndSearch>
                <TextHuge>There are no public web links you created</TextHuge>
                <SearchBar placeholder="Search"/>
            </TextAndSearch>
        </Container>
    )
}