import React from 'react'
import { Label } from '../Label/Label'

export const Pay = ({ pay, onToggle }) => {
    return (
        <div
            className={`pay ${pay.selected ? 'selected-pay' : ''}`}
            onClick={() => onToggle(pay.id)}
        >
            <div className="credit-card-column">
                <div className="card-row">
                    {pay.icon_1}
                    {pay.icon_2}
                </div>
                <div className="card-row-small">
                    <Label text={pay.description} color="#f1f7fa" />
                </div>
            </div>
        </div>

    )
}
