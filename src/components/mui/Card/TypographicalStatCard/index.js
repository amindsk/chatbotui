import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';

const TypographicalStatCard = ({ icon, iconbgcolor, label, counts }) => {
    return (
        <Card sx={{ overflow: "visible", boxShadow: theme => theme.shadows[5], mt: 2 }}>
            <CardContent sx={{ position: 'relative', }} >
                <Box sx={{
                    background: iconbgcolor,
                    maxWidth: "fit-content",
                    p: 1,
                    position: "absolute",
                    top: -15,
                }}>
                    {icon}
                </Box>
                <Box sx={{
                    textAlign: "right"
                }}>
                    <Typography sx={{
                        color: theme => theme.palette.customFontColor.light
                    }}>{label}</Typography>
                    <Typography sx={{
                        color: theme => theme.palette.primary.main,
                        fontWeight: 700,
                        fontFamily: theme => theme.typography.fontFamily,
                        fontSize: 32
                    }}>{counts}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default TypographicalStatCard