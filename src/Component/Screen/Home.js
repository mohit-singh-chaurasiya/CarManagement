import { Grid2, TextField } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router,  Routes,Route, Link } from 'react-router-dom';

import CarList from '../User/CarList'

import AddData from '../User/AddData'
import { Update, Widgets } from '@mui/icons-material';
import NavBar from '../User/Navbar';
import CarInfo from '../User/CarInfo';
import UpdateData from '../User/UpdateData';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Icon from '../assets/car.png';
import AdbIcon from '@mui/icons-material/Adb';
import User from "../assets/user.jpg"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase'; 
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
const pages = ['AddCar', 'CarList', 'About', 'Logout'];
const settings = ['AddCar', 'CarList', 'About', 'Logout'];
export default function Home() {

    const NavBar = () => {
        var navigate=useNavigate()
        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
        const [pattern, setPattern] = useState('')
        const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
        };
        const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseNavMenu = () => {
            setAnchorElNav(null);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };
        const handleFilterPage = () => {
            navigate(`/filterdetails/${pattern}`)
          }
        
          const handleEnterKey = (e) => {
            if (e.key == 'Enter')
              navigate(`/filterdetails/${e.target.value}`)
          }

        const searchBarComponent = () => {

            return (
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '60%', margin: 0.6,border:"3px solid aqua" ,borderRadius:5,margin:2}}>
                <IconButton sx={{ p: '10px' }} aria-label="menu">
        
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Products"
                  inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setPattern(e.target.value)}
                onKeyDown={(e) => handleEnterKey(e)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon onClick={handleFilterPage} />
                </IconButton>
        
              </Paper>
            );
          }
        return (
            <AppBar position="sticky" style={{background:'#22a6b3',color:"#000"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Icon} style={{ width: 45, height: 45, marginRight: 10 }} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CarBazar
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={()=>navigate(handleCloseNavMenu)}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                           
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CarBazzar
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                         
                            <Button
                                
                                onClick={()=>navigate('/home/add')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                              AddCar
                            </Button>
                            <Button
                                
                                onClick={()=>navigate('/home/list')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                              CarList  
                            </Button>
                            {searchBarComponent()}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={User} />
                            </IconButton>
                        </Tooltip>
                    
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        )
    }
    return (
        <div>

            <NavBar  />
            <div style={{ background: '#dff9fb', width: '100%', height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:70 }}>

                <div style={{ background: '#dfe6e9 ', width: '80%', height: 'auto' ,marginTop:15}}>
                  <Routes>
                  <Route path='/add' element={<AddData/>} />
                   <Route path={"/list"} element={<CarList />} />
                   <Route path={"/info"} element={<CarInfo />} />
                   <Route path={"/update"} element={<UpdateData />} />

                  </Routes> 
                   
                </div>



            </div>
        </div>
    )
}
