import React from 'react';
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { Avatar } from '@mui/material';

const MuiCard = ({ avatar, action, title, subHeader, actions, sx, children }) => {
    return (
        <Card
        sx={sx}
        >
            <CardHeader
                avatar={avatar ? <Avatar sx={{ bgcolor: 'green' }}>{avatar}</Avatar> : null}
                action={action}
                title={title}
                subheader={subHeader}
            />
            <CardContent>
                {children}
            </CardContent>
            <CardActions disableSpacing sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                {actions}
            </CardActions>
        </Card>
    )
}


MuiCard.propType = {
    avatar: PropTypes.element,
    action: PropTypes.element,
    title: PropTypes.string,
    subHeader: PropTypes.string,
    actions: PropTypes.array,
    sx: PropTypes.object,
    children: PropTypes.element
}

MuiCard.defaultProps = {
    avatar: null,
    action: null,
    title: '',
    subHeader: '',
    actions: [],
    sx: null,
    children: null
}

export default MuiCard;