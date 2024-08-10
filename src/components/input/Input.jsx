import styled from "styled-components"

const StyledInput = styled.input`
    background-color: #39393B;
    padding: 15px 20px;
    max-width: ${props => props.big ? "100%" : "700px"};
    border: none;

    ::placeholder {
        font-size: 16px;
        color: #8B8A8C;
        font-weight: 600;
    }
   

    &:focus {
        caret-color: ${props => props.theme.colors.green};
        outline: none;
        background-color: #474649;
    }
`

export default function Input({ placeholder, big }) {
    return(
        <StyledInput placeholder={placeholder} big={big}/>
    )
}