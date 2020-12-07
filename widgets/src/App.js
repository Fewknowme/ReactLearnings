import React from 'react';
import Accordion from './components/Accordion';

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


export default () => {
    return <div>
        <Accordion items={items} />
    </div>;
};
