import React from 'react'

import './Switch.css'

export const Switch = ({ dataSecond, dataFirst }) => {
    return (
        <div className='button-wrapper'>
            <div className="toggle-button rect-button">
                <input id='switch' type="checkbox" />
                <label htmlFor='switch'>
                    <div className="toggle-button__switch"
                        data-checked={dataFirst}
                        data-unchecked={dataSecond}>
                    </div>
                </label>
            </div>
        </div>
    )
}
