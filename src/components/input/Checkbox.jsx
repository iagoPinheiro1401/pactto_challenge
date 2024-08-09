import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 16px;
    color: white;
`

const StyledCheckbox = styled.div`
    width: 15px;
    height: 15px;
    border: ${props => (props.select ? "solid 2px #1994FC" : "solid 2px gray")};
    border-radius: 3px;
    background-color: ${props => (props.select ? "#1994FC" : "transparent")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export default function Checkbox({ label }) {
    const [isSelect, setIsSelect] = useState(false)

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }

    return(
        <Container>
            <StyledCheckbox onClick={handleSelect} select={isSelect}>
                {isSelect && <p>✓</p>}
            </StyledCheckbox>
            <label>{label}</label>
        </Container>
        )
}