import React from 'react'

import './Title.css'

export const Title = ({ title, type }) => {
    return (
        <div className={type}>{title}</div>
    )
}

Title.defaultProps = {
    title: 'Empty Title',
    type: 'title',
};

Title.propsTypes = {
    title: 'PropsTypes.string',
    type: 'PropsTypes.string'
}