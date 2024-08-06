import styled from "styled-components"

import ResetButton from "@/components/buttons/changesButtons/ResetButton"
import SaveButton from "@/components/buttons/changesButtons/SaveButton"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    width: 77%;
    padding: 20px 0;
    position: fixed;
    top: 0;
`

export default function PersonalInformation() {
    return(
        <Container>
            <ButtonsContainer>
                <ResetButton />
                <SaveButton />
            </ButtonsContainer>
        </Container>
    )
}