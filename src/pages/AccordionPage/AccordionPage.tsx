import React, { useState } from 'react'
import { DATA_LIST } from './data';
import './AccordionPage.css';
import Accordion from '../../components/Accordion/Accordion';

const AccordionPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemKey, setItemKey] = useState(null);

    const toggleAccordion = (key: any) => {
        if (itemKey !== key) {
            setIsOpen(true);
        } else {
            setIsOpen(!isOpen);
        }
        setItemKey(key);
    };

    return (
        <div className="acc-container">
            <div className="wrapper">
                {DATA_LIST.map((item: any) => (
                    <Accordion
                        key={item.id}
                        item={item}
                        isOpen={isOpen && itemKey === item.id}
                        open={toggleAccordion}
                    />
                ))}
            </div>
        </div>
    )
}

export default AccordionPage