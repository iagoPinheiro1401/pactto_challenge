import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
  position: relative;
  border: 1px solid #9b9a9a;
  border-radius: 6px;
  width: 150px;
  height: 60px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputAndColor = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0 4px;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Text = styled.div`
  font-size: 12px;
  position: absolute;
  top: -12px; 
  left: 40px; 
  transform: translateX(-50%);
  color: #9b9a9a; 
  padding: 2px 5px;
  background-color: ${props => props.theme.colors.primary};
`

const TextInput = styled.input`
  background-color: transparent;
  width: 80px;
  height: 100%;
  border: none;
  color: white;
  font-size: 19px;

  ::placeholder {
        font-size: 19px;
   }

   &:focus {
    border: none;
    outline: none;
  }
`

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color || 'transparent'};
  border-radius: 50px;
`

export default function NoteColor({ initialText = '#000000', text }) {
    const [color, setColor] = useState(initialText)
    const [inputValue, setInputValue] = useState(initialText)

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (/^#([0-9A-F]{3}){1,2}$/i.test(value)) {
          setColor(value);
        }
      };

    return(
        <Container>
            <Text>{text}</Text>
            <InputAndColor>
                <TextInput 
                    type="text"
                    placeholder="#000000"
                    onChange={handleInputChange}
                    value={inputValue}
                    color={color}
                />
                <ColorBox color={color}/>
            </InputAndColor>
        </Container>
    )
}