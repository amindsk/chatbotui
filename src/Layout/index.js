import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Navigation from './Navigation';
import { handleLogout, isUserLoggedIn, getUserPermissions, getUserRole } from '../screens/Login/loginSlice';
import { APP_ROUTES } from './Navigation/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLoadings, getTheme, handleChangeTheme } from '../common/commonSlice';
import ProgressBar from '../components/mui/ProgressBar';
import logo from "../screens/Login/media/databei-without-icon.png"
import Icons from '../common/icons'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTheme } from '@emotion/react';
import { Button, FormControl, InputLabel, Select, Tooltip } from '@mui/material';

const settings = [];
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    // ...(open && {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // }),
}));

const Layout = (props) => {


    const dispatch = useDispatch();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const userPermissions = useSelector(getUserPermissions);
    const userRole = useSelector(getUserRole);
    const loadings = useSelector(getLoadings);

    const selectedTheme = useSelector(getTheme)

    const theme = useTheme()

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();
    // const theme = useTheme()
    // const location = useLocation()
    const loading = useSelector(getLoadings)


    const [open, setOpen] = React.useState(true);


    React.useEffect(() => {
        if (["/monitoring", "/dashboard", "/sensors"].includes(window.location.pathname.toLowerCase())) {
            setOpen(false)
        }
    }, [window.location.pathname])


    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            {isLoggedIn && (
                <>
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <Box sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <Box sx={{
                                    width: "180px",
                                }}>
                                    <img src={logo} style={{
                                        width: '80%',
                                        filter: theme.palette.mode === "light" ? "invert(10)" : "none"
                                    }} />
                                </Box>
                                <Box sx={{}}>
                                    {APP_ROUTES.map(route => <Button onClick={() => navigate(route.url)}>{route.label}</Button>)}
                                </Box>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                gap: 1
                            }}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="theme-select-label">Theme Preference</InputLabel>
                                    <Select
                                        sx={{
                                            width: 200
                                        }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={selectedTheme}
                                        label="Theme Preference"
                                        onChange={(e) => {
                                            dispatch(handleChangeTheme(e.target.value))
                                        }}
                                    >
                                        <MenuItem value={'light'}>Light</MenuItem>
                                        <MenuItem value={'dark'}>Dark</MenuItem>
                                        <MenuItem value={'cosmic'}>Cosmic</MenuItem>
                                    </Select>
                                </FormControl>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                                    <Icons.AccountCircleOutlined sx={{
                                        color: theme.palette.mode === "light" ? theme.palette.customFontColor.light : "#fff",
                                    }} />
                                </IconButton>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                    <MenuItem onClick={() => { dispatch(handleLogout()); handleCloseUserMenu(); }}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </>
            )
            }
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) => theme.palette.mainBackground.main,
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                {isLoggedIn && <Toolbar />}
                {/* <Grid item xs={12} sx={isLoggedIn && { overflow: 'auto', padding: 2 }}> */}
                <Navigation />
                {/* </Grid> */}
            </Box>
            <ProgressBar progressBarOpen={loadings > 0} />
        </Box >
        // <Grid container spacing={1} style={{ height: '100%' }}>
        //     <CssBaseline />
        //     <Grid item xs={12}>
        //         {isLoggedIn ? (
        //             <nav className={styles.layoutHeaderNav} style={{
        //                 background: theme.palette.grey[900],
        //             }}>
        //                 <div className={styles.layoutHeaderNavInner}>
        //                     <div style={{ width: "10%" }}>
        //                         <img src={logo} style={{
        //                             width: "100%",
        //                         }} />
        //                     </div>
        //                     <div style={{ width: "80%" }}>
        //                         <div style={{   
        //                             display: "flex",
        //                             marginLeft: 30,
        //                             marginRight: 30
        //                         }}>
        // {APP_ROUTES.map(route => route.showInTopNav && route.roles.includes(userRole) && userPermissions.includes(route.permission) ? (
        //     <MenuItem variant='contained' onClick={() => { navigate(route.url.toLowerCase()); }} key={route.label} sx={{ color: '#fff' }}>
        //         {route.label.includes("-") ?
        //             route.label.split("-").map((l) => (
        //                 l.charAt(0).toUpperCase() + l.slice(1) + " "
        //             ))
        //             : route.label.charAt(0).toUpperCase() + route.label.slice(1)}
        //     </MenuItem>
        // ) : null)}
        //                         </div>
        //                     </div>
        //                     <div style={{ width: "10%", display: "flex", justifyContent: "flex-end" }}>
        //                         <Box sx={{ flexGrow: 0 }}>
        //                             <IconButton onClick={handleOpenNavMenu} size="large" aria-label="show 4 new mails" color="inherit">
        //                                 <Badge badgeContent={4} color="error">
        //                                     <Icons.NotificationsActive sx={{
        //                                         color: "#fff"
        //                                     }} />
        //                                 </Badge>
        //                             </IconButton>
        //                             <Menu
        //                                 sx={{ mt: '45px' }}
        //                                 id="menu-appbar"
        //                                 anchorEl={anchorElNav}
        //                                 anchorOrigin={{
        //                                     vertical: 'top',
        //                                     horizontal: 'center',
        //                                 }}
        //                                 keepMounted
        //                                 transformOrigin={{
        //                                     vertical: 'top',
        //                                     horizontal: 'center',
        //                                 }}
        //                                 open={Boolean(anchorElNav)}
        //                                 onClose={handleCloseNavMenu}
        //                             >
        //                                 {settings.map((setting) => (
        //                                     <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //                                         <Typography textAlign="center">{setting}</Typography>
        //                                     </MenuItem>
        //                                 ))}
        //                             </Menu>
        // <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
        //     <Icons.AccountCircleOutlined sx={{
        //         color: "#fff"
        //     }} />
        // </IconButton>
        // <Menu
        //     sx={{ mt: '45px' }}
        //     id="menu-appbar"
        //     anchorEl={anchorElUser}
        //     anchorOrigin={{
        //         vertical: 'top',
        //         horizontal: 'center',
        //     }}
        //     keepMounted
        //     transformOrigin={{
        //         vertical: 'top',
        //         horizontal: 'center',
        //     }}
        //     open={Boolean(anchorElUser)}
        //     onClose={handleCloseUserMenu}
        // >
        //     {settings.map((setting) => (
        //         <MenuItem key={setting} onClick={handleCloseUserMenu}>
        //             <Typography textAlign="center">{setting}</Typography>
        //         </MenuItem>
        //     ))}
        //     <MenuItem onClick={() => { dispatch(handleLogout()); handleCloseUserMenu(); }}>
        //         <Typography textAlign="center">Logout</Typography>
        //     </MenuItem>
        // </Menu>
        //                         </Box>
        //                     </div>
        //                 </div>
        //             </nav>) : null}
        //     </Grid>
        //     <Grid item xs={12} sx={{ mt: '42px', height: 'calc(100% - 42px)', overflow:'auto' }}>
        //         <Navigation />
        //     </Grid>
        // <ProgressBar progressBarOpen={loadings > 0} />
        // </Grid>
    );
}

export default Layout;