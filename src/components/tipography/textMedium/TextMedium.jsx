import styled from "styled-components"

const StyledText = styled.h3`
    display: inline;
    font-size: ${props => props.theme.fontSize.medium};
    color: ${props => props.color ? props.color : "#b8b8b8"};
    font-weight: ${props => props. fontWeigth ? props.color : "500"};
`

export default function TextMedium({ children, color, fontWeigth }) {
    return(
        <StyledText color={color} fontWeigth={fontWeigth}>{children}</StyledText>
    )
}