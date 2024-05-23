import React from 'react';
import { Box, Typography } from '@mui/material';
import MuiBackDrop from '@mui/material/Backdrop';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material';
import PropTypes from 'prop-types';

const Backdrop = styled(MuiBackDrop)(({ theme }) => ({}));
const CircularProgress = styled(MuiCircularProgress)(({ theme }) => ({}));

const ProgressBar = ({ label, progressBarOpen }) => {
    return (
        <Backdrop
            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: (theme) => theme.zIndex.tooltip + 1 }}
            open={progressBarOpen}
        >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box style={{ width: '200px', height: '80px', overflowX: 'auto', overflowY: 'hidden' }}>
                    <Typography sx={{ whiteSpace: 'nowrap', fontSize: '20px', fontWeight: 'bold', color: theme => theme.palette.primary.light }}>
                        <marquee scrollamount="3">10101010110110011001</marquee>
                    </Typography>
                    <Typography sx={{ whiteSpace: 'nowrap', fontSize: '30px', fontWeight: 'bold', mt: '-20px', color: theme => theme.palette.primary.main }}>
                        <marquee direction="right" scrollamount="3" hspace='1'>01011010101010110</marquee>
                    </Typography>
                    <Typography sx={{ whiteSpace: 'nowrap', fontSize: '20px', fontWeight: 'bold', mt: '-20px', color: theme => theme.palette.primary.dark }}>
                        <marquee scrollamount="3">10011101010100110101</marquee>
                    </Typography>
                </Box>
                <Box style={{}}>
                    <Typography sx={{ color: 'white' }}>Loading...</Typography>
                </Box>
                {/* <CircularProgress color="primary" /> */}
                {/* <h5 style={{ padding: '0', color: '#000', fontSize: '20px', fontFamily: 'monaco' }}>{label}</h5> */}
            </Box>
        </Backdrop>
    )
}

ProgressBar.propTypes = {
    progressBarOpen: PropTypes.bool.isRequired,
    label: PropTypes.string,
}

ProgressBar.defaultProps = {
    label: 'Loading...',
    progressBarOpen: false
}
export default ProgressBar