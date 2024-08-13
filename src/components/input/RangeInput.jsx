import React, { useState } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  position: relative;
  width: 150px;
  padding: 5px 0; 
`

const StyledRangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      #1DBBA5 ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #224744 ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%
    );
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1DBBA5;
    cursor: pointer;
    margin-top: -6px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 8px;
    background: linear-gradient(
      to right,
      #1DBBA5 ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%,
      #ddd ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%
    );
    border-radius: 5px;
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1DBBA5;
    cursor: pointer;
  }
`

const ValueLabel = styled.div`
  position: absolute;
  left: ${(props) => ((props.value - props.min) / (props.max - props.min)) * 100}%;
  transform: translateX(-50%);
  top: -30px;
  background: #1DBBA5;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  white-space: nowrap;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`

export default function RangeInput() {
  const min = 1
  const max = 7
  const [value, setValue] = useState((min + max) / 2)
  const [isLabelVisible, setIsLabelVisible] = useState(false)

  const handleChange = (event) => {
    setValue(Number(event.target.value))
  }

  const handleMouseEnter = () => {
    setIsLabelVisible(true)
  }

  const handleMouseLeave = () => {
    setIsLabelVisible(false)
  }

  return (
    <SliderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ValueLabel value={value} min={min} max={max} isVisible={isLabelVisible}>
        {value}
      </ValueLabel>
      <StyledRangeInput
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </SliderContainer>
  )
}