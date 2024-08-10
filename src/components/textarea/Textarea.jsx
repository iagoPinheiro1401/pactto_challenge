import styled from "styled-components"

const StyledTextarea = styled.textarea`
    width: 100%;
    height: 200px;
    background-color: #39393B;
    padding: 10px 15px;
    border: none;
    resize: vertical;

    ::placeholder {
        font-size: 17px;
        color: #8B8A8C;
        font-weight: 600;
    }
   

    &:focus {
        caret-color: ${props => props.theme.colors.green};
        outline: none;
        background-color: #474649;
    }
`

export default function Textarea({ placeholder }) {
    return(
        <StyledTextarea placeholder={placeholder}/>
    )
}