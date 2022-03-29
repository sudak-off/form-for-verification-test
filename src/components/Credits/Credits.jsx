import React from 'react'
import { CreditCard } from './CreditCard'
import { PaySystem } from './PaySystem'

export const Credits = ({ data, setData }) => {
    return (
        <div className='credits-wrapper'>
            <PaySystem />
            <CreditCard data={data} setData={setData} />
        </div>
    )
}
