import React, { ReactElement, useState } from 'react'
import './Tooltip.css';

type TooltipProps = {
  infoText: string;
  children: ReactElement;
}

const Tooltip = ({ infoText, children }: TooltipProps) => {
  // State to manage tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}  
    >
      {children}

      <div className={`tooltip ${showTooltip ? "open" : ""}`}>
        {infoText}
        <div className="arrow2" />
      </div>
    </div>
  );
}

export default Tooltip