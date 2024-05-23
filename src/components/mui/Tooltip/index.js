import { Tooltip as MuiTooltip, tooltipClasses, styled } from '@mui/material';

const Tooltip = styled(({ className, ...props }) => (
    <MuiTooltip  {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.info.light,
        color: '#000',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12)
    },
}));

export default Tooltip;