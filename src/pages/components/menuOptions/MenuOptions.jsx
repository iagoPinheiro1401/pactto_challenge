import styled from "styled-components"
import { useRouter } from "next/router"

import TextMedium from "../tipography/textMedium/TextMedium"

const Container = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 10px;
    padding: 15px 0 15px 35px;
    cursor: pointer;
    background-color: ${props => props.isSelected ? '#3A363F' : 'transparent'};

    :hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
`

export default function MenuOptions({ src, children, path }) {
    const router = useRouter()
    const isSelected = router.pathname === path

    const handleNavigation = () => {
        router.push(path);
      }

    return(
        <Container isSelected={isSelected} onClick={handleNavigation}>
            <img src={isSelected ? src+"Green.png" : src+".png"}/>
            <TextMedium color={isSelected ? '#1dbba5' : '#b8b8b8'}>{children}</TextMedium>
        </Container>
    )
}