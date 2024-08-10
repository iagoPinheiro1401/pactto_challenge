import styled from "styled-components"
import { useState } from "react"
import { X } from "@phosphor-icons/react"

const StyledLabel = styled.label`
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #39393B;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: white;
`

const StyledX = styled(X)`
    cursor: pointer;
`
export default function LabelMove({ children }) {
    const [close, setClose] = useState(true)

    const handleClick = () => {
        setClose(!close)
    }

    return(
        <>
        {close && (
            <StyledLabel>
                <Text>{children}</Text>
                <StyledX 
                    size={17} 
                    color="#c9c9c9" 
                    weight="bold" 
                    onClick={handleClick} 
                />
            </StyledLabel>
        )}
        </>
    )
}