import React, { Fragment, useState } from "react";
import { TextField, Button, Grid, Typography, Divider, InputAdornment, IconButton, Toolbar } from "@mui/material";
import Box from '@mui/material/Box'
import { CssBaseline } from '@mui/material';
import { loginRequested } from "./loginSlice";
import { useDispatch } from 'react-redux';
import Icons from '../../common/icons';
import logo from "./media/databei-white3.png"
import isbeilogo from "./media/isbeilogo.png"
import { useTheme } from "@emotion/react";
import "./style.css"


import FolderSvg from "./media/folder.svg"
import MonitorSvg from "./media/monitor.svg"
import TextSvg from "./media/text.svg"
import ProcessSvg from "./media/process.svg"
import DashboardJPG from "./media/dashboard.png"
const Login2 = () => {
    const theme = useTheme()
    const [clicked, setClicked] = React.useState(false)

    const [userName, setUserName] = useState('admin@admin.com');
    const [password, setPassword] = useState('P@ssword123');
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    return (
        <Box sx={{
            bgcolor: theme => theme.palette.background.paper,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            cursor: "pointer",
            position: "relative"
        }} >
            <Box sx={{
                position: "relative",
                width: "400px",
                height: "400px",
                background: " #333  url('/earth.png')",
                backgroundSize: "cover",
                borderRadius: "50%",
                boxShadow: "inset 0 0 50px rgba(0,0,0,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "rotate 12s linear infinite ",
                transform: "scale(3)",
                overflow: "hidden",
                transition: "all .5s ease-in",
                "&.active": {
                    animation: "scale .5s ease-out, rotate 12s linear infinite",
                    transform: "scale(1)",
                    width: "200px",
                    height: "200px",
                }
            }} onClick={() => setClicked(!clicked)} className={clicked ? "active" : ""}>

            </Box>
            <Typography sx={{
                cursor: "pointer",
                fontSize: "15rem",
                position: "absolute",
                fontFamily: theme => theme.typography.fontFamily,
                fontWeight: 900,
                letterSpacing: "3.25rem",
                animation: "glow 1s ease-in-out infinite alternate",
                transition: "all .5s ease-in",
                "&.active": {
                    animation: "scaleTypography .5s ease-out",
                    letterSpacing: "0",
                    fontSize: "4rem",
                    position: "relative",
                    color: theme => theme.palette.secondary.main
                }
            }} className={clicked ? "active" : ""} onClick={() => setClicked(!clicked)}>DATABEI</Typography>

            {clicked ? <Box>
                <Grid container spacing={2} sx={{ p: 1 }}>
                    {/* <Grid item xs={12} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                        <Typography sx={{
                            fontWeight: 700,
                            mb: 0.5
                        }} component={"h2"} variant="h3" color="primary">Login</Typography>
                        <Typography sx={{
                            mb: 1,
                            fontStyle: 'italic',
                        }} component={"p"} variant="p" color="secondary">Authorize yourself to enjoy amazing features.</Typography>
                    </Grid> */}
                    <Grid item xs={12}>
                        <TextField
                            label="Username/Email"
                            color="primary"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <Fragment>
                                        <InputAdornment position="start">
                                            <Icons.AccountCircle color="secondary" />
                                        </InputAdornment>
                                    </Fragment>
                                )

                            }} type='text' fullWidth placeholder="User Name/Email" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <Fragment>
                                        <InputAdornment position="start">
                                            <Icons.AdminPanelSettings color="secondary" />
                                        </InputAdornment>
                                    </Fragment>
                                ),
                                endAdornment: (
                                    <Fragment>
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setVisible(!visible)} color="secondary">
                                                {!visible ? <Icons.Visibility /> : <Icons.VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    </Fragment>
                                ),

                            }} type={visible ? 'text' : 'password'} fullWidth placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth size="small" variant="contained" onClick={() => { dispatch(loginRequested({ username: userName, password })); }}>Login</Button>
                    </Grid>
                </Grid>
            </Box> : ""}
        </Box >
    )
}

export default Login2