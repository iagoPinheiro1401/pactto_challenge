import styled from "styled-components"
import { MagnifyingGlass } from "@phosphor-icons/react"

const StyledSearchBar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`

const StyledInput = styled.input`
  padding: 16px 40px 16px 14px;
  font-size: 1rem;
  border: 2px solid #706d6d;
  border-radius: 3px;
  width: 100%;
  background-color: transparent;
  color: white;

  ::placeholder {
    font-weight: 700;
  }

  :hover {
    border-color: white;
  }

  &:focus {
    caret-color: ${props => props.theme.colors.green};
    border-color: ${props => props.theme.colors.green};
    outline: none;
  }
`

const SearchIcon = styled(MagnifyingGlass)`
    position: absolute;
    right: 10px;
    pointer-events: none;
`

export default function SearchBar({ placeholder }) {
    return(
        <StyledSearchBar>
            <StyledInput placeholder={placeholder}/>
            <SearchIcon size={22} color="#ffff" weight="bold"/>
        </StyledSearchBar>
    )
}