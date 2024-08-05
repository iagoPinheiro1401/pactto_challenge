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

export default function ItemsToReview() {
    return(
        <Container>
            <TextHuge>There are no review requests sent to you</TextHuge>
            <SearchBar placeholder="Search"/>
        </Container>
    )
}