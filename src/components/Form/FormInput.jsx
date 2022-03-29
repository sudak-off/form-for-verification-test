import React from 'react'
import PropTypes from 'prop-types'

export const FormInput = ({
    name,
    label,
    col,
    font,
    color,
    size,
    maxLength,
    inputType,
    extraText,
    onChange,
}) => {

    const LabelStyle = {
        fontSize: size,
        color: color,
        fontFamily: font,
    };

    const InputStyle = {
        fontSize: '12px',
        color: '#919191',
        fontFamily: 'Geometria-Bold',
    };
    return (
        <div className={'form-control col-' + col}>
            {label.length > 0 ? <label style={LabelStyle}>{label}</label> : ''}
            <input
                name={name}
                style={InputStyle}
                type="text"
                maxLength={maxLength}
                type={inputType}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

FormInput.defaultProps = {
    lable: '',
    col: '100',
    size: '12px',
    color: '#919191',
    font: 'Geometria-Bold',
    maxLength: '25',
    inputType: 'text',
    extraText: '',
};

FormInput.propTypes = {
    label: PropTypes.string,
    col: PropTypes.string,
    font: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    maxLength: PropTypes.string,
    inputType: PropTypes.string,
    extraText: PropTypes.string,
};
