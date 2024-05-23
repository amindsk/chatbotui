import PropTypes from 'prop-types'
import "./style.css"

const IButton = (props) => {
    const cornoredButtonStyles = (transition) => {

    }
    return (
        props.variant === "cornored" ? <button>{props.children}</button> : <button>{props.children}</button>
    )
}

IButton.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default IButton;