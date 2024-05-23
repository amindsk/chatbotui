
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import { Box, styled } from '@mui/material'
import React from 'react'
import TabPanel from '../TabPanel'

const Tabs = styled(MuiTabs)(({ theme }) => ({

}))
const Tab = styled(MuiTab)(({ theme }) => ({}))


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const HorizontalTab = ({ tabs }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ minHeight: "100%" }}>
            <Box
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    variant="fullWidth"
                >
                    {tabs.map(tab => (
                        <Tab sx={{
                            fontSize: "12px", padding: 0
                        }} label={tab.title} {...a11yProps(tab.index)} />
                    ))}
                </Tabs>
            </Box>

            {tabs.map(tab => (
                <TabPanel value={value} index={tab.index}>
                    {tab.tabContent}
                </TabPanel>
            ))}
        </Box>
    )
}
export default HorizontalTab;