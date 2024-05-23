import { Typography, Box } from '@mui/material';
const Tabs = ({ tabs, active, handleChangeTab, children }) => {
    return (
        <Box sx={{ width: '100%', backgroundColor: tabs[active].color }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {tabs.map((tab, index) => (
                    <Box sx={{
                        borderRadius: '0px',
                        padding: '5px',
                        width: `${100 / tabs.length}%`,
                        textAlign: 'center',
                        backgroundColor: active === index ? tab.color : '#aaa',
                        color: active === index ? '#fff' : '#000',
                        '&:hover': {
                            backgroundColor: active === index ? tab.color : '#ccc',
                            color: active !== index ? '#000' : '#fff',
                            cursor: 'pointer'
                        },
                    }}
                        onClick={() => handleChangeTab(index)}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {tab.icon && <tab.icon fontSize='large' />}
                        <Typography variant='h4'>{tab.label}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {children}
        </Box>
    );
}

export default Tabs;