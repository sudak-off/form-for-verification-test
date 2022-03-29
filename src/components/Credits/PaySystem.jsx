import React from 'react'
import { SiVisa } from 'react-icons/si';
import { SiMastercard } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { SiWebmoney } from 'react-icons/si';
import { SiPaypal } from 'react-icons/si';
import { useState } from 'react';
import './Credits.css'
import { Pay } from './Pay';
import { Label } from '../Label/Label';

export const PaySystem = () => {
    const [pays, setPays] = useState([
        {
            id: 1,
            icon_1: <SiMastercard size="45" color="#f1f7fa" />,
            icon_2: <SiVisa size="45" color="#f1f7fa" />,
            description: 'Visa/MasterCard',
            selected: false,
        },
        {
            id: 2,
            icon_1: (
                <Label
                    text="Приват24"
                    color="#f1f7fa"
                    size="20px"
                    font="Gilroy-ExtraBold"
                />
            ),
            description: 'Visa/MasterCard',
            selected: true,
        },
        {
            id: 3,
            icon_1: <DiReact size="40" color="#f1f7fa" />,
            description: 'Термінали України',
            selected: false,
        },
        {
            id: 4,
            icon_1: (
                <Label
                    text="WebMoney"
                    color="#f1f7fa"
                    size="14px"
                    font="Geometria-Bold"
                />
            ),
            icon_2: <SiWebmoney size="35" color="#f1f7fa" />,
            description: 'WebMoney',
            selected: false,
        },
        {
            id: 5,
            icon_1: <SiPaypal size="28" color="#f1f7fa" />,
            description: 'PayPal',
            selected: false,
        },
    ]);

    const selectPay = (id) => {
        setPays(
            pays.map((pay) =>
                pay.id !== id
                    ? {
                        ...pay,
                        selected: false,
                    }
                    : {
                        ...pay,
                        selected: true,
                    }
            )
        );
    };

    return (
        <div className="label-column">
            <Label text="Спосіб оплати" color="#b6bcc2" font="Geometria-Bold" />
            <div className="pay-group">
                {pays.map((pay) => (
                    <Pay key={pay.id} pay={pay} onToggle={selectPay} />
                ))}
            </div>
        </div>
    )
}
