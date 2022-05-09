import React, { useEffect, useRef, useState } from "react";
import { CurrencyDropdown, DropdownContainer } from "./dropdownStyles";
import Flag from "react-flagkit";
import { Text } from "../../globalStyles";
import { IconContext } from "react-icons";
import { AiOutlineCaretDown } from "react-icons/ai";
import DropdownList from "../dropdownList/dropdownList";

const Dropdown = ({ currency, setCurrency }) => {
  const ref = useRef();
  const listRef = useRef('USD');
  const [show, setShow] = useState(false);

  const closeDropDown = (el) => {
    setCurrency(el.cur);
    setShow(false);
  };

  useEffect(() => {
    const handleMouseClick = (e) => {
      console.log("e.target", e.target)
      if (show && !listRef?.current?.contains(e.target)) {
        setShow(false);
      }
    };

    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [show, ref]);


  useEffect(() => {
    if (show && window.innerWidth <= 960) {
        document.body.style.overflowY = 'hidden';
        return;
    }
    document.body.style.overflowY = 'scroll';
}, [show])

  const handleClick = () => {
    console.log("button2 clicked")
    setShow(true)
  }

  return (
    <DropdownContainer>
      <CurrencyDropdown ref={ref} onClick={ handleClick}>
        <Flag size={32} country={currency.slice(0, -1)} />
        <Text color="#f4f4f4">{currency}</Text>
        <IconContext.Provider value={{ size: "1.3rem", color: "#dfdfdf" }}>
          <AiOutlineCaretDown />
        </IconContext.Provider>
      </CurrencyDropdown>
      <DropdownList
        listRef={listRef}
        setCurrency={setCurrency}
        show={show}
        closeDropdown={closeDropDown}
      />
    </DropdownContainer>
  );
};

export default Dropdown;
