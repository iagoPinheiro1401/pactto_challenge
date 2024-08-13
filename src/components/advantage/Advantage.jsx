import styled from "styled-components"
import { Check } from "@phosphor-icons/react"

import TextMedium from "../tipography/textMedium/TextMedium"

const StyledAdvantage = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export default function Advantage({ children }) {
    return(
        <StyledAdvantage>
            <Check size={19} color="#1DBBA5" weight="bold"/>
            <TextMedium color="white">{children}</TextMedium>
        </StyledAdvantage>
    )
}