import styled from "@emotion/styled"
import { CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material"
import MuiTextField, { textFieldClasses } from '@mui/material/TextField'
import PropTypes from 'prop-types'
import MuiFormControl from '@mui/material/FormControl'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MuiMenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase';
import Icons from '../../../common/icons'
import MuiTooltip, { tooltipClasses } from '@mui/material/Tooltip';



const StyledTooltip = styled(({ className, ...props }) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

const StyledTextField = styled(MuiTextField, {
    name: "StyledTextField"
})(({ theme }) => ({
    "& .MuiInputBase-root": {
        fontSize: "0.85rem"
    },
    "& .MuiInputLabel-root": {
        fontSize: "0.65rem",
        transform: "translate(14px, 8px) scale(1)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        transform: "translate(14px, -9px) scale(0.75)"
    },
    "& .MuiInputBase-input": {
        padding: "4.5px 14px"
    },
    "& .MuiFormHelperText-root": {
        marginTop: "1.5px",
        fontSize: "0.55rem"
    },
    "&.MuiSelect-select": {
        padding: "2.5px 14px !important"
    }
}))

const StyledMenuItem = styled(MuiMenuItem, {
    name: "StyledMenuItem"
})(({ theme }) => ({}))

const StyledSelect = styled(MuiSelect, {
    name: "StyledSelect"
})(({ theme }) => ({
    '&.MuiSelect-select': {
        height: 100
    }
}))

const StyledInputLabel = styled(MuiInputLabel, {
    name: "StyledInputLabel"
})(({ theme }) => ({}))

const StyledFormControl = styled(MuiFormControl, {
    name: "StyledFormControl"
})(({ theme }) => ({}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-root': {

    }
}))

const CustomTextField = ({ size, name, value, handleChange, disabled, fullWidth, helperText, label }) => {
    return (
        <>
            {size === "xs" ? <StyledTextField
                name={name}
                value={value}
                onChange={handleChange}
                size={size}
                disabled={disabled}
                fullWidth={fullWidth}
                helperText={helperText}
                label={label}
                InputProps={{
                    endAdornment: (
                        <StyledTooltip placement="bottom" title={
                            <>
                                <Typography color="inherit">Title</Typography>
                                <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                {"It's very engaging. Right?"}
                            </>
                        }>
                            <IconButton>
                                <Icons.Help sx={{
                                    width: 20,
                                    height: 20
                                }} />
                            </IconButton>
                        </StyledTooltip>
                    )
                }}

            /> :
                <MuiTextField
                    name={name}
                    value={value}
                    onChange={handleChange}
                    size={size}
                    disabled={disabled}
                    fullWidth={fullWidth}
                    helperText={helperText}
                    label={label}
                    InputProps={{
                        endAdornment: (
                            <StyledTooltip placement="bottom" title={
                                <>
                                    <Typography color="inherit">Title</Typography>
                                    <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                                    {"It's very engaging. Right?"}
                                </>
                            }>
                                <IconButton>
                                    <Icons.Help />
                                </IconButton>
                            </StyledTooltip>
                        )
                    }}
                />}
        </>
    )
}

const CustomSelectField = ({ size, name, value, handleChange, disabled, fullWidth, helperText, label, children, multiple }) => {
    return (
        <>
            {size === "xs" ? <StyledFormControl fullWidth={fullWidth} size={size}>
                <StyledInputLabel id={`select-${label}`}>{label}</StyledInputLabel>
                <StyledSelect
                    labelId={`select-${label}`}
                    id={`select-${label}`}
                    value={value}
                    name={name}
                    disabled={disabled}
                    label={label}
                    multiple={multiple}
                    onChange={handleChange}
                    sx={{
                        padding: "4.5px 14px"
                    }}
                >
                    {children}
                </StyledSelect>
            </StyledFormControl> :
                <FormControl fullWidth size={size}>
                    <InputLabel id={`select-${label}`}>{label}</InputLabel>
                    <Select
                        labelId={`select-${label}`}
                        id={`select-${label}`}
                        value={value}
                        multiple={multiple}
                        label={label}
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                </FormControl>}
        </>
    )
}

const TextField = ({ size, type, name, value, onChange, multiple, disabled, fullWidth, helperText, label, children }) => {
    switch (type) {
        case "text":
            return <CustomTextField label={label} size={size} name={name} value={value} handleChange={onChange} disabled={disabled} fullWidth={fullWidth} helperText={helperText} />
        case "select":
            return <CustomSelectField label={label} multiple={multiple} size={size} name={name} value={value} handleChange={onChange} disabled={disabled} fullWidth={fullWidth} helperText={helperText} children={children} />
        default:
            return true
    }
}

TextField.propTypes = {
    size: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    fullWidth: PropTypes.bool.isRequired,
    helperText: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.array

}

TextField.defaultProps = {
    size: "small",
    type: "text",
    name: "",
    value: "",
    handleChange: () => { },
    disabled: false,
    fullWidth: false,
    helperText: null,
    label: null,
    options: []
}

export default TextField