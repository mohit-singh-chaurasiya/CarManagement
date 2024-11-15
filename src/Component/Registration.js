import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './ComponentCss/Register.css'
import { ElderlySharp } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid2 } from '@mui/material';
import { postData } from '../Services/FetchNodeServices';
const defaultTheme = createTheme();
export default function  Registration(props) {


    const [mobileno, setMobileno] = useState('')
    const [emailid, setEmailid] = useState('')
    const [name, setName] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    var navigate = useNavigate()


    const handleClick = (label, msg) => {


    }

    function Copyright(props) {

        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="http://localhost:3000/home">
                    MedBazzar.in
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
    //   var body = { emailid: emailid, name: name, mobileno: mobileno, password: password }
        localStorage.setItem('name', name)
        localStorage.setItem('emailid', emailid)
        localStorage.setItem('mobileno', mobileno)
        localStorage.setItem('password', password)
        // var result = await postData('login/submit_admin_data', body)

        // console.log("DSF", result )
        // alert(result.status)
        if (emailid != '' && password != '') {
            alert("Admin Registered")
        }

        else {
            alert("Fail")
        }

    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (
 
        <Grid2 className="main" sm={12} md={5} style={{ display: 'flex', justifyContent: 'center', color: "rgb(1 129 115)",  height: 800,   }}>

            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs" style={{background:'smoke'}} className='container' >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }} style={{ marginTop: "30%"}}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{ color: 'rgb(14 102 122)', fontSize: 25, fontWeight: 600 }}>
                            Registration
                        </Typography>
                        <Box sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="emailid"
                                placeholder="Email Address"
                                name="email"
                                value={emailid}
                                autoComplete="email"
                                autoFocus
                                variant="standard"
                                onChange={(e) => setEmailid(e.target.value)}
                                InputStyle={{ color: "#fff", }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                placeholder="Name"
                                name="name"
                                value={name}
                                autoComplete="text"
                                autoFocus
                                variant="standard"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="mobileno"
                                placeholder="Mobile Number"
                                name="mobileno"
                                type="text"
                                value={mobileno}
                                autoComplete="text"
                                autoFocus
                                variant="standard"
                                onChange={(e) => setMobileno(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                variant="standard"
                                value={password}
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ color: "red" }}

                            />
                            <Grid2 fullWidth style={{ textAlign:'left'}}>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" onClick={togglePasswordVisibility} > {showPassword ? 'Hide' : 'Show'}</Checkbox>}
                                label="Show Password"
                               
                            />
                            </Grid2>




                            <Button
                                // onClick={handleClick}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                                style={{ background: 'rgb(1, 129, 115)', textTransform: "none" }}
                            >
                                Register
                            </Button>

                        </Box>
                        <Link style={{ cursor: 'pointer', textAlign: 'center', fontSize: 15, display: 'flex', justifyContent: 'center', color: "rgb(1, 129, 115)" }} onClick={() => navigate('/login')}>
                            Already Registered</Link>
                        {/* <Copyright sx={{ mt: 3 }} /> */}
                    </Box>

                </Container>
            </ThemeProvider>
        </Grid2>
 
    )
}