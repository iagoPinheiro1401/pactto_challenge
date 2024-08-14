import styled from "styled-components"

const StyledStatus = styled.div`
    padding: 3px 7px;
    border-radius: 10px;
    background-color: ${props => props.children == 'DONE' ? props.theme.colors.green : 'rgba(252, 252, 252, 0.2)'};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9px;
    font-weight: 400;
`

export default function Status({ children }) {
    return(
        <StyledStatus>{children}</StyledStatus>
    )
}