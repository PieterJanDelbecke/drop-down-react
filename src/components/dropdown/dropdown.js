import React from 'react'
import { CurrencyDropdown, DropdownContainer } from './dropdownStyles'
import Flag from 'react-flagkit'

const Dropdown = () => {
  return (
    <DropdownContainer>
        <CurrencyDropdown>
            <Flag size='50' country="US"/>
        </CurrencyDropdown>
    </DropdownContainer>
  )
}

export default Dropdown