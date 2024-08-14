import styled from "styled-components"
import { useState } from "react"
import { CaretDown } from '@phosphor-icons/react'
 
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 20px;
    width: 220px;
    height: 53px;
    border: 1px solid #9b9a9a;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        border-color: ${props => props.theme.colors.green};
        outline: none;
    }
`

const StyledCaret = styled(CaretDown)`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`

export default function SelectOptions() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <Container               onClick={handleClick}>
             <StyledCaret
                size={15}
                weight="fill"
                color={isOpen ? '#1DBBA5' : 'gray'}
                isOpen={isOpen} 
            />
        </Container>
    )
}