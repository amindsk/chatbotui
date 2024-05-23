import React from 'react'
import MuiDialog from '@mui/material/Dialog'
import MuiDialogTitle from '@mui/material/DialogTitle'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import { Button, styled, useTheme, Slide, Grid } from '@mui/material';
import Icons from '../../../../common/icons';
import PropTypes from 'prop-types'
import { InfoSvg, TrashSvg, WarningSvg, WarningSvg2 } from './SvgRepo'

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
}))
const StyledDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
}))
const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper
}))
const StyledDialogActions = styled(MuiDialogActions)(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper
}))

const ConfirmDialog = ({ title, dailogOpen, variant, size, fullWidth, children, actionsButtonArray, scroll, clickAwayListener }) => {
    const theme = useTheme();
    return (
        <StyledDialog
            TransitionComponent={Slide} keepMounted scroll={scroll} open={dailogOpen} fullWidth={fullWidth} maxWidth={size} aria-labelledby="dialog-title" onClose={clickAwayListener ? () => { } : () => { }} >
            <StyledDialogContent sx={{
                position: "relative",
                backgroundColor: variant === "warning" ?  theme.palette.warning.light : variant === "delete" ?  theme.palette.error.light : 
                variant === "info" ?  theme.palette.info.light :"#fff",
                p: 1,
                overflow: "hidden"
            }}>
                <Box sx={{
                    p: 1
                }}>
                    <Box sx={{
                        position: "absolute",
                        right: "-30px",
                        top: "-3px",
                        zIndex: 0,
                        opacity: 0.7,
                        height: "100%"
                    }}>
                        
                        {variant === "warning" && <WarningSvg2 variant="primary" color={'#fff5e6'} />}
                        {variant === "delete" && <TrashSvg variant="primary" color={'#fff5e6'} />}
                        {variant === "info" && <InfoSvg variant="primary" color={'#fff5e6'} />}
                    </Box>
                    <Grid container sx={{ zIndex: 2 }}>
                        <Grid item xs={12} sm={12}>
                            <Box sx={{ p: 1, color: theme => theme.palette.customWarning.contrastText, zIndex: 1, position: "relative" }}>
                                <Box sx={{
                                    width: "100%",
                                    margin: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    mb: 1
                                }}>
                                     {variant === "warning" && <Icons.Warning color={theme.palette.customWarning.contrastText} />}
                                     {variant === "delete" && <Icons.Delete color={theme.palette.customWarning.contrastText} />}
                                     {variant === "info" && <Icons.Info color={theme.palette.customWarning.contrastText} />}
                                    
                                    <Typography sx={{
                                        fontWeight: 700,
                                        fontSize: 20,
                                        color: theme => theme.palette.customWarning.contrastText
                                    }}>{title}</Typography>
                                </Box>
                                {children}
                            </Box>

                        </Grid>
                    </Grid>

                </Box>

            </StyledDialogContent>

            {actionsButtonArray && actionsButtonArray.length > 0 ?
                <StyledDialogActions sx={{ background: theme.palette.background.default }}>
                    {actionsButtonArray.map((button) => (
                        <Button
                            disabled={button.disabled}
                            key={button.label}
                            color={button.color}
                            variant={button.variant}
                            onClick={button.action}
                            className={button.className}
                            id={button.id}
                            sx={{ ...button.sx, minWidth: 100, borderRadius: 0, fontWeight: 700 }}
                            size={button.size}
                            type={button.type}
                        >
                            {button.label}
                        </Button>
                    ))}
                </StyledDialogActions>
                : null}
        </StyledDialog>
    )
}

ConfirmDialog.propTypes = {
    dailogOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
    children: PropTypes.node,
    actionsButtonArray: PropTypes.array,
    scroll: PropTypes.string,
    clickAwayListener: PropTypes.bool,
    variant: PropTypes.string,
    title: PropTypes.string,
}

ConfirmDialog.defaultProps = {
    dailogOpen: false,
    size: "lg",
    fullWidth: true,
    children: <></>,
    actionsButtonArray: [],
    scroll: "paper",
    clickAwayListener: true,
    variant: "warning",
    title: "",
}

export default ConfirmDialog