import React from 'react'
import { CurrencyDropdown, DropdownContainer } from './dropdownStyles'
import Flag from 'react-flagkit'
import { Text } from '../../globalStyles'
import { IconContext } from 'react-icons'
import { AiOutlineCaretDown } from 'react-icons/ai'

const Dropdown = () => {
  return (
    <DropdownContainer>
        <CurrencyDropdown>
            <Flag size='32' country="US"/>
            <Text color='#f4f4f4'>USD</Text>
            <IconContext.Provider value={{size:'1.3rem', color:'#dfdfdf'}}>
                <AiOutlineCaretDown />
            </IconContext.Provider>
        </CurrencyDropdown>
    </DropdownContainer>
  )
}

export default Dropdown