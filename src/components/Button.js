import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    const styles = {
        backgroundColor: color,
    }
    return (
        <button className='btn' onClick={onClick} style={styles}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
