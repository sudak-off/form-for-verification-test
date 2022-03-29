import React from 'react'

import './Assistance.css'

export const AssistanceType = ({ assistance, onToggle }) => {
    return (
        <div className="assistance-row" onClick={() => onToggle(assistance.id)}>
            <div
                className={`assistance  ${assistance.selected ? 'assistance-selected' : ''
                    }`}
            >
                {assistance.icon}
            </div>
            <div
                className={`assistance-label ${assistance.selected ? 'assistance-label-selected' : ''
                    }`}
            >
                {assistance.title}
            </div>
        </div>
    )
}
