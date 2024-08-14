import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.disabled ? '3px solid gray' : (props.isSelect ? '3px solid #1DBBA5' : '3px solid gray')};
    border-radius: 50px;
    height: 22px;
    min-width: 22px;
    cursor: pointer;
` 

const Select = styled.div`
    width: 10px;
    height: 10px;
    background-color: #1DBBA5;
    border-radius: 10px;
`

export default function RoundCheckbox({ disabled }) {
    const [isSelect, setIsSelect] = useState(false)

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }

    return (
        <Container onClick={handleSelect} isSelect={isSelect} disabled={disabled}>
            {isSelect && !disabled && <Select/>}
        </Container>
    )
}