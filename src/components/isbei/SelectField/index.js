import React from 'react'
import styles from './style.module.css'
import { Box } from '@mui/material'

const SelectField = (props) => {
    return (
        props.bordered ?
            <Box className={styles.formControlFocus} sx={{
                border: "1px solid #999",
                width: props.fullWidth ? "100%" : "inherit",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                boxSizing: "border-box"
            }}>
                <div className={styles.formControl}>
                    <label>{props.label}</label>
                    <select {...props}>
                        {props.children}
                    </select>
                </div>
            </Box>
            :
            <div className={styles.formControl}>
                <label>{props.label}</label>
                <select {...props}>
                    {props.children}
                </select>
            </div>
    )
}

export default SelectField