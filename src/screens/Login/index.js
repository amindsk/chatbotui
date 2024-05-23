import { Fragment, useState } from "react";
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

const Login = () => {

    const [userName, setUserName] = useState('admin@admin.com');
    const [password, setPassword] = useState('P@ssword123');
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const theme = useTheme()
    return (
        <Box sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}>
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', width: "60%", margin: "auto",
               
            }}>
                <CssBaseline />
                <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center',  [theme.breakpoints.down("md")]: {
                    display: "none"
                } }}>
                    <Box sx={{
                        position: 'absolute',
                        width: '30%'
                    }}>
                        <img src={logo} style={{
                            width: '100%',
                            filter: theme.palette.mode === "light" ? "invert(10)" : "none"
                        }} />
                        <img src={isbeilogo} style={{
                            width: '30%',
                            float: 'right'
                        }} />
                    </Box>
                    <svg height="500" width="500">
                        <path opacity={0.2} d="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" stroke="rgb(0, 128, 0)" stroke-width="15" fill="transparent" />
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".1" dur="3s" repeatCount="indefinite" path="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".2" dur="3s" repeatCount="indefinite" path="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".3" dur="3s" repeatCount="indefinite" path="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".4" dur="3s" repeatCount="indefinite" path="M 500 20 H 157 Q 107 20 107 70 V 380 Q 107 430 57 430 H 0" />
                            1
                        </text>

                        <path opacity={0.2} d="M 300 500 V 200 Q 300 150 350 150 H 500" stroke="#e21949" stroke-width="15" fill="transparent" />
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M 300 500 V 200 Q 300 150 350 150 H 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".1" dur="4s" repeatCount="indefinite" path="M 300 500 V 200 Q 300 150 350 150 H 500" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".2" dur="4s" repeatCount="indefinite" path="M 300 500 V 200 Q 300 150 350 150 H 500" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".3" dur="4s" repeatCount="indefinite" path="M 300 500 V 200 Q 300 150 350 150 H 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".4" dur="4s" repeatCount="indefinite" path="M 300 500 V 200 Q 300 150 350 150 H 500" />
                            0
                        </text>

                        <path opacity={0.2} d="M 0 270 H 150 Q 200 270 200 320 V 500" stroke="#e21949" stroke-width="15" fill="transparent" />
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion dur="1s" repeatCount="indefinite" path="M 0 270 H 150 Q 200 270 200 320 V 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".1" dur="1s" repeatCount="indefinite" path="M 0 270 H 150 Q 200 270 200 320 V 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".2" dur="1s" repeatCount="indefinite" path="M 0 270 H 150 Q 200 270 200 320 V 500" />
                            1
                        </text>

                        <path opacity={0.2} d="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" stroke="rgb(0, 128, 0)" stroke-width="15" fill="transparent" />
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".1" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".2" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".3" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".4" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".5" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".6" dur="5s" repeatCount="indefinite" path="M 400 0 V 400 Q 400 450 350 450 H 190 Q 140 450 140 400 V 100 Q 140 50 190 50 H 500" />
                            1
                        </text>

                        <path opacity={0.2} d="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" stroke="#e21949" stroke-width="15" fill="transparent" />
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".1" dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".2" dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".3" dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            1
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".4" dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            0
                        </text>
                        <text opacity={0.2} x="-4" y="5" fill="white">
                            <animateMotion begin=".5" dur="4s" repeatCount="indefinite" path="M 50 0 V 150 Q 50 200 100 200 H 350 Q 400 200 400 250 V 325 Q 410 400 485 400 H 560" />
                            1
                        </text>
                    </svg>
                </Box>
                {/* <Divider orientation="vertical" flexItem /> */}
                <Box sx={{
                    flex: 1,
                    background: theme => theme.palette.background.paper,
                    minHeight: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: theme => theme.shadows[7]
                }}>
                    <Grid container spacing={1} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            <Typography sx={{
                                fontWeight: 700,
                                mb: 0.75,
                                textAlign: "center"
                            }} component={"h2"} variant="h3" color="primary">Login</Typography>
                            <Divider sx={{ p: 0, mb: 1.5 }}><Typography sx={{
                                mb: 1,
                                fontStyle: 'italic',
                                textAlign: "center",
                                fontSize: 13,
                                fontWeight: 500,
                                m: 0
                            }} component={"p"} variant="p" color="secondary">Authorize yourself to enjoy amazing features.</Typography></Divider>

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Username/Email"
                                color="primary"
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
                            <Button sx={{ float: 'right', width: '30%' }} variant="contained" onClick={() => { dispatch(loginRequested({ username: userName, password })); }}>Login</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box >

        </Box>
    );
}

export default Login;