import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AiOutlineLine, AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import data from '../../data/data.json'
import popular from '../../data/popular.json'
import { CountryInput, Label, List, ListItem} from './dropdownListStyles'
import { Container, Text} from '../../globalStyles'

const DropdownList = ({closeDropDown, show, listRef}) => {

    const [search, setSearch] = useState('')

    useEffect(()=> {
        if (!show){
            setSearch('')
        }
    },[show])

    const handleSearch = searchText => {
        setSearch(searchText)
    }

    const filterCountry = el => {
        const searchText = search.trim().toLowerCase();

        const name = el.name.trim().toLowerCase().includes(searchText)
        const code = el.cur.trim().toLowerCase().includes(searchText)

        return name || code
    }

  return (
    <AnimatePresence>
        { show && (
            <List
                initial={{opacity: 0, height: '0%'}}
                animate={{opacity: 1, height: 'auto'}}
                exit={{opacity: 0}}
            >
                <Container>
                    <ListItem>
                        <IconContext.Provider value={{size: '2rem', color: '#c9c9c9'}}>
                            <AiOutlineSearch />
                        </IconContext.Provider>
                        <CountryInput 
                        value={search} 
                        onChange={e => handleSearch(e.target.value)}
                        type="text"
                        />
                    </ListItem>
                </Container>
            </List>
        )}
    </AnimatePresence>
  )
}

export default DropdownList