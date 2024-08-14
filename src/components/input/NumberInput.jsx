import styled from "styled-components"

const StyledInput = styled.input`
    padding: 10px;
    border: none;
    width: 120px;
    background-color: #39393B;
    padding: 15px 10px;
    color: white;
`

export default function NumberInput() {
    return(
        <StyledInput type="number" value="1"/>
    )
}