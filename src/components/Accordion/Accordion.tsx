import React, { ReactElement, useState } from "react";
import "./Accordion.css";

type AccordionType = {
    key: number;
    item: any;
    isOpen: boolean;
    open: (key: number) => void;
}

const Accordion = ({ item, isOpen, open }: AccordionType) => {
    return (
        <div className={`accordion ${isOpen ? "active" : ""}`}>
            {/* Header section of the accordion */}
            <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={() => open(item.id)}>
                <p>{item.title}</p>

                {/* Icon to represent the accordion state */}
                <span className={`material-symbols-outlined ${isOpen ? "active" : ""}`}>
                    expand_more
                </span>
            </div>

            {/* Content section of the accordion*/}
            {isOpen && (
                <div className="accordion-content">
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;