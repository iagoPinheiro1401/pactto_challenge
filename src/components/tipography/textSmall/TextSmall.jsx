import styled from "styled-components"

const StyledText = styled.p`
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.color ? props.color : "#cbcbcb"};
    font-weight: ${props => props. fontWeigth ? props.color : "600"};
`

export default function TextSmall({ children, color, fontWeigth }) {
    return(
        <StyledText color={color} fontWeigth={fontWeigth}>{children}</StyledText>
    )
}