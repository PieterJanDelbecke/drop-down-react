import React, { useState } from 'react'
import { CurrencyDropdown, DropdownContainer } from './dropdownStyles'
import Flag from 'react-flagkit'
import { Text } from '../../globalStyles'
import { IconContext } from 'react-icons'
import { AiOutlineCaretDown } from 'react-icons/ai'
import DropdownList from '../dropdownList/dropdownList'

const Dropdown = (currency, setCurrency) => {
    const [show, setShow] = useState(false)

    const closeDropDown =(el) => {
        setCurrency(el.cur)
        setShow(false)
    }


  return (
    <DropdownContainer>
        <CurrencyDropdown onClick={()=> setShow(true)}>
            <Flag size='32' country="US"/>
            <Text color='#f4f4f4'>USD</Text>
            <IconContext.Provider value={{size:'1.3rem', color:'#dfdfdf'}}>
                <AiOutlineCaretDown />
            </IconContext.Provider>
        </CurrencyDropdown>
        <DropdownList show={show} closeDropdown={closeDropDown}/>
    </DropdownContainer>
  )
}

export default Dropdown