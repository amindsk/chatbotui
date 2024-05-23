import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';


const GraphicalCard = ({ title, subtitle, progressive, children }) => {
    return (
        <Card>
            <CardHeader sx={{ paddingBottom: "0 !important"  }}
                title={
                    <>
                        <Typography sx={{ lineHeight: '1em' }} component={"h6"} variant="h6">{title}</Typography>
                    </>
                }
                subheader={
                    <>
                        <Typography sx={{ lineHeight: '1em' }} component={"small"} variant="small">{subtitle}</Typography>
                    </>
                }
            />
            <CardContent sx={{ padding: !progressive ? "0 16px" : "16px", paddingBottom: !progressive ? "0 !important" : "16px" }}>
                {children}
            </CardContent>
        </Card>
    )
}

export default GraphicalCard