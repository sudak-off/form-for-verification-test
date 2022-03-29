import React from 'react'
import { FormInput } from './FormInput'

import './Form.css'

export const Form = ({ data, setData }) => {

    const onUpdate = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className="form-wrapper">
            <div className="form-group">
                <div className="row">
                    <FormInput label="Им'я" col="45" name="name" onChange={onUpdate} />
                    <FormInput
                        label="Фамілія"
                        col="45"
                        name="surname"
                        onChange={onUpdate}
                    />
                </div>
                <FormInput
                    label="Назва компанії, організації"
                    col="100"
                    name="company"
                    onChange={onUpdate}
                    extraText="+Логотип"
                />
                <FormInput
                    label="Email-адрес"
                    col="100"
                    type="email"
                    name="email"
                    onChange={onUpdate}
                />
                <FormInput
                    label="Номер телефону"
                    col="100"
                    type="tel"
                    name="phone"
                    onChange={onUpdate}
                />
            </div>
            <div className="form-group">
                <FormInput
                    label="Країна"
                    col="100"
                    name="country"
                    onChange={onUpdate}
                />
                <div className="row">
                    <FormInput label="Місто" col="45" name="city" onChange={onUpdate} />
                    <FormInput
                        label="Штат, район"
                        col="45"
                        name="state"
                        onChange={onUpdate}
                    />
                </div>
                <FormInput
                    label="Адреса"
                    col="71005"
                    name="address"
                    onChange={onUpdate}
                />
                <FormInput
                    label="Поштовий індекс"
                    col="45"
                    name="post"
                    onChange={onUpdate}
                />
            </div>
        </form>
    )
}
