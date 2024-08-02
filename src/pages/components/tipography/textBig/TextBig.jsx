import styled from "styled-components"

const StyledText = styled.h2`
    font-size: ${props => props.theme.fontSize.big};
    color: ${props => props.color ? props.color : "white"};
    font-weight: ${props => props. fontWeigth ? props.color : "400"};
`

export default function TextBig({ children, color, fontWeigth }) {
    return(
        <StyledText color={color} fontWeigth={fontWeigth}>{children}</StyledText>
    )
}