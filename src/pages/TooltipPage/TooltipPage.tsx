import React from 'react'
import './TooltipPage.css';
import Tooltip from '../../components/Tooltip/Tooltip';

const text = "Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions";

const TooltipPage = () => {
  return (
    <div className="tooltip-container">
        <Tooltip infoText={text}>
            <button className="btn">Testing button</button>
        </Tooltip>
    </div>
  )
}

export default TooltipPage