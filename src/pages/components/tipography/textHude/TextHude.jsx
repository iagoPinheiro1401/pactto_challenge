import styled from "styled-components"

const StyledText = styled.h1`
    font-size: ${props => props.theme.fontSize.huded};
    color: ${props => props.color ? props.color : "white"};
    font-weight: ${props => props. fontWeigth ? props.color : "700"};
`

export default function TextHude({ children, color, fontWeigth }) {
    return(
        <StyledText color={color} fontWeigth={fontWeigth}>{children}</StyledText>
    )
}