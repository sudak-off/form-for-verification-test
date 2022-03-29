import React from 'react'
import { IoHandRightOutline } from 'react-icons/io5';
import { IoWalletOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import { useState } from 'react';
import { AssistanceType } from './AssistanceType'

export const Assistance = () => {
    const [assistances, setAssistances] = useState([
        {
            id: 1,
            title: 'Зробити',
            icon: <IoHandRightOutline size="35" color="#c5d5e6" />,
            selected: false,
        },
        {
            id: 2,
            title: 'Фінансова допомога',
            icon: <IoWalletOutline size="35" color="#c5d5e6" />,
            selected: false,
        },
        {
            id: 3,
            title: 'Матеріальна допомога',
            icon: <AiOutlineTeam size="35" color="#c5d5e6" />,
            selected: true,
        },
        {
            id: 4,
            title: 'Волонтерство',
            icon: <BsHeart size="35" color="#c5d5e6" />,
            selected: false,
        },
    ]);

    const selectAssistance = (id) => {
        setAssistances(
            assistances.map((assistance) =>
                assistance.id !== id
                    ? {
                        ...assistance,
                        selected: false,
                    }
                    : {
                        ...assistance,
                        selected: true,
                    }
            )
        );
    };

    return (
        <div className="assistance-wraper">
            {assistances.map((assistance) => (
                <AssistanceType
                    key={assistance.id}
                    assistance={assistance}
                    onToggle={selectAssistance}
                />
            ))}
        </div>
    )
}
