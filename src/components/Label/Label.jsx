import PropTypes from 'prop-types';

export const Label = ({ text, width, color, font, size }) => {

    const LabelStyle = {
        width: width,
        color: color,
        fontFamily: font,
        fontSize: size,
    };

    return (
        <div style={LabelStyle}>
            {text}
        </div>
    );
};

Label.defaultProps = {
    Lable: '',
    width: '100%',
    color: '#000',
    font: 'Geometria',
    size: '13px',
};

Label.propTypes = {
    Lable: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    font: PropTypes.string,
    size: PropTypes.string,
};

