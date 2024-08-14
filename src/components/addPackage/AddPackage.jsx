import styled from "styled-components"

import TextMedium from "../tipography/textMedium/TextMedium"
import Input from "../input/Input"
import Textarea from "../textarea/Textarea"
import RoundCheckbox from "../input/RoundCheckbox"
import SelectOptions from "../selectOptions/SelectOptions"
import NumberInput from "../input/NumberInput"
import GreenButton from "../buttons/GreenButton"

const Container = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 40px;
    margin: 10px;
    background-color: #181818;
    border: 1px solid ${props => props.theme.colors.green};
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 33.33%;
`

const TextAndLine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Line = styled.div`
    width: 100%;
    height: 1.5px;
    margin: 0 20px;
    background-color: ${props => props.theme.colors.green};
`

const DescriptionContainer = styled.div`
    display: flex;
    padding: 30px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const LabelAndInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const CheckbosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const CheckboxAndLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
`

const CheckboxFileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
`

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
`

const Text = styled.p`
    font-size: 12px;
    color: gray;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const LabelAndSelect = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const LabelAndNumberInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function AddPackage() {
    return(
        <Container>
            <Section>
                <TextAndLine>
                    <TextMedium color="white" fontWeigth="500">1. Describe your package</TextMedium>
                    <Line />
                </TextAndLine>
                <DescriptionContainer>
                    <TextMedium fontWeigth="500">Users will see this info on your expert page<br/> or in your integrations, view example.</TextMedium>
                </DescriptionContainer>
                <Form>
                    <LabelAndInput>
                        <TextMedium color="white" fontWeigth="600">Package name</TextMedium>
                        <Input placeholder="Change the name of package"/>
                    </LabelAndInput>
                    <LabelAndInput>
                        <TextMedium color="white" fontWeigth="600">Package description</TextMedium>
                        <Textarea placeholder="Add description to this package" heigth="80px"/>
                    </LabelAndInput>
                    <LabelAndInput>
                        <TextMedium color="white" fontWeigth="600">Package details (user will view only)</TextMedium>
                        <Input placeholder="Add details"/>
                    </LabelAndInput>
                    <LabelAndInput>
                        <TextMedium color="white" fontWeigth="600">Package instructions (customers will view too)</TextMedium>
                        <Input placeholder="Add instructions"/>
                    </LabelAndInput>
                </Form>
            </Section>

            <Section>
                <TextAndLine>
                    <TextMedium color="white" fontWeigth="500">2. Define requirements for your package</TextMedium>
                    <Line />
                </TextAndLine>
                <DescriptionContainer>
                    <TextMedium fontWeigth="500">Users will be able to upload items for you to review.<br/> The items can be files, links or combinations.</TextMedium>
                </DescriptionContainer>
                <CheckbosContainer>
                    <TextMedium color="white">Review type</TextMedium>
                    <CheckboxAndLabel>
                        <RoundCheckbox />
                        <TextMedium color="white">Single file review (e.g. video, image, or PDF)</TextMedium>
                    </CheckboxAndLabel>
                    <CheckboxAndLabel>
                        <RoundCheckbox />
                        <TextMedium color="white">Single link review (e.g. LinkedIn URL, portfolio)</TextMedium>
                    </CheckboxAndLabel>
                    <CheckboxAndLabel>
                        <RoundCheckbox disabled/>
                        <TextMedium>Single review of multiple files (e.g. 2 videos and 1 image, reviewed together)</TextMedium>
                    </CheckboxAndLabel>
                </CheckbosContainer>
                <CheckboxFileContainer>
                    <TextMedium color="white">Review file type</TextMedium>
                    <CheckboxAndLabel>
                        <RoundCheckbox />
                        <TextMedium color="white">Video</TextMedium>

                        <RoundCheckbox />
                        <TextMedium color="white">Image</TextMedium>

                        <RoundCheckbox />
                        <TextMedium color="white">File (PDF, txt, etc)</TextMedium>
                    </CheckboxAndLabel>
                </CheckboxFileContainer>
                <OptionsContainer>
                    <TextMedium color="white" fontWeigth="500">Options for the user to select (tags) view example</TextMedium>
                    <Text>The user will be able to select these options when purchasing the package.<br/> They will become tags in your dashboard.</Text>
                    <Input placeholder="Add option"/>
                </OptionsContainer>
            </Section>

            <Section>
                <TextAndLine>
                    <TextMedium color="white" fontWeigth="500">3. Define its cost and number of reviews</TextMedium>
                    <Line />
                </TextAndLine>
                <DescriptionContainer>
                    <TextMedium fontWeigth="500">Users will upload their items for you to<br/> review, and they pay your review fee.</TextMedium>
                </DescriptionContainer>
                <PriceContainer>
                    <LabelAndSelect>
                        <TextMedium>Currency</TextMedium>
                        <SelectOptions />
                    </LabelAndSelect>
                    <LabelAndSelect>
                        <TextMedium color="white">Package const</TextMedium>
                        <TextMedium>Price</TextMedium>
                        <SelectOptions />
                    </LabelAndSelect>
                </PriceContainer>
                <DescriptionContainer>
                    <TextMedium>This package can result in one single review,<br/> or it can be a specific number of reviews to<br/> be consumed as credits.</TextMedium>
                </DescriptionContainer>
                <LabelAndNumberInput>
                    <TextMedium>Number of reviews (credits) in this package View video explanation</TextMedium>
                    <NumberInput />
                </LabelAndNumberInput>
                <DescriptionContainer>
                    <TextMedium>Users can see and buy your package<br/> when it’s published.</TextMedium>
                </DescriptionContainer>
                <ButtonContainer>
                    <GreenButton>PUBLIC PACKAGE</GreenButton>
                </ButtonContainer>
            </Section>
        </Container>
    )
}