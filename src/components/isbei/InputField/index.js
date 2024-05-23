import { Box } from '@mui/material'
import './style.module.css'
import PropTypes from 'prop-types'

const InputField = (props) => {
    return (
        props.bordered ? <Box sx={{
            border: "1px solid #999",
            width: props.fullWidth ? "100%" : "inherit",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box"
        }}>
            <input {...props} />
        </Box> : <>
            <input {...props} />
        </>
    )
}

InputField.propType = {
    bordered: PropTypes.bool
}

InputField.defaultProps = {
    bordered: true
}
export default InputField