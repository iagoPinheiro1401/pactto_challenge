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
    width: 20px;
    height: 20px;
    border: ${(props) => props.select ?( props.green ? 'solid 2px #1DBBA5' : 'solid 2px #1994FC') : 'solid 2px gray'};
    border-radius: 3px;
    background-color: ${props => (props.select ? ( props.green ? "#1DBBA5" : "#1994FC") : "transparent")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
`

export default function Checkbox({ label, green }) {
    const [isSelect, setIsSelect] = useState(false)

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }

    return(
        <Container>
            <StyledCheckbox onClick={handleSelect} select={isSelect} green={green}>
                {isSelect && <p>✓</p>}
            </StyledCheckbox>
            <label>{label}</label>
        </Container>
        )
}