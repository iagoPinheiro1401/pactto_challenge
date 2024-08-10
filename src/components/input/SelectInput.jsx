import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { CaretDown } from '@phosphor-icons/react'

const DropdownContainer = styled.div`
  max-width: 700px;
  background-color: #39393B;
  padding: 0 2px;
  color: white;
`

const DropdownHeader = styled.div`
  max-width: 700px;
  background-color: #39393B;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DropdownListContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  background: #39393B;
  white-space: nowrap;
  overflow-y: auto;
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const DropdownListItem = styled.li`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.isSelected ? '#1DBBA5' : 'white')};

  &:hover {
    background-color: #575656;
  }
`

const CheckMark = styled.span`
  color: #1DBBA5;
  margin-left: 10px;
`

const StyledCaret = styled(CaretDown)`
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
`

const options = [
  'Australia',
  'Austria',
  'Belgium',
  'Brazil',
  'Bulgaria',
  'Canada',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hong Kong',
  'United States'
]

function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const dropdownRef = useRef(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  }

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownHeader onClick={toggling}>
        {selectedOption || 'Select an option'}
        <StyledCaret size={20} weight="fill" color={isOpen ? '#1DBBA5' : 'gray'} isOpen={isOpen}/>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map(option => (
              <DropdownListItem 
                onClick={onOptionClicked(option)} 
                key={option}
                isSelected={selectedOption === option}
              >
                {option}
                {selectedOption === option && <CheckMark>✓</CheckMark>}
              </DropdownListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  )
}

export default CustomDropdown
