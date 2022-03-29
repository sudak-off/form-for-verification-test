import React from 'react'
import './GradientButton.css'

export const GradientButton = ({ text, onSubmit }) => {
    return (
        <div className="gradient_button_wrapper">
            <input
                type="button"
                className="gradient_button"
                value={text}
                onClick={onSubmit}
            />
        </div>
    )
}
