import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items=[
    {
        title: 'what is React?',
        content: 'Front-End JS framework'
    },
    {
        title: 'why React?',
        content: 'Flexible af'
    },
    {
        title: 'lorem ipsum dorem?',
        content: 'lorenm ipsum dorem?'
    }
];

const options = [
    {
        label:'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropDown] = useState(true);
    return( <div>
        {/* <Accordion items={items} /> */}
        {/* <Search/> */}
        <button onClick={()=> setShowDropDown(!showDropdown)}> Toggle Dropdown</button>
       { showDropdown ?
       <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected} 
        options = {options}
         /> : null
         }
    </div>);
};
