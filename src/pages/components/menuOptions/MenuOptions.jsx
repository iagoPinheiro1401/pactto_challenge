import styled from "styled-components"

import TextMedium from "../tipography/textMedium/TextMedium"

const Container = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 10px;
    padding: 15px 0 15px 35px;
    cursor: pointer;

    :hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
`

export default function MenuOptions({ src, children }) {
    return(
        <Container>
            <img src={src}/>
            <TextMedium>{children}</TextMedium>
        </Container>
    )
}