import { FormInput } from '../Form/FormInput';
import { Label } from '../Label/Label';

export const CreditCard = ({ data, setData }) => {
    const onUpdate = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="label-column">
            <Label
                text="Введіть наступні дані"
                color="#b6bcc2"
                width="70%"
                font="Geometria-Bold"
            />
            <div className="credit-card">
                <div className="credit-card-column">
                    <Label text="Номер картки" color="#fff" font="Geometria-Bold" />
                    <div className="card-number-row">
                        <FormInput
                            name="number_1"
                            label=""
                            col="23"
                            maxLength="4"
                            onChange={onUpdate}
                        />
                        <FormInput
                            name="number_2"
                            label=""
                            col="23"
                            maxLength="4"
                            onChange={onUpdate}
                        />
                        <FormInput
                            name="number_3"
                            label=""
                            col="23"
                            maxLength="4"
                            onChange={onUpdate}
                        />
                        <FormInput
                            name="number_4"
                            label=""
                            col="23"
                            maxLength="4"
                            onChange={onUpdate}
                        />
                    </div>
                    <div className="card-number-row">
                        <FormInput
                            name="date"
                            label="Термін дії"
                            col="40"
                            color="#fff"
                            size="13px"
                            maxLength="5"
                            onChange={onUpdate}
                        />
                        <FormInput
                            name="cvv"
                            label="CVC/CVV"
                            col="40"
                            color="#fff"
                            size="13px"
                            maxLength="3"
                            onChange={onUpdate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

