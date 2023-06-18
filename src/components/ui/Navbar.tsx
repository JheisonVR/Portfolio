"use client"
import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, Container, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const pages = ['Experience', 'Work Experience', 'Skills & Proficiencies'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

    const [anchorElNav, setAnchorElNav] =  useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>                                        
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr:2,
                            display: {xs:'none', md:'flex'},
                            fontFamily:'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration:'none'
                        }}
                    >                        
                    Jheison                    
                    </Typography> 
                    <Box>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <ElectricBoltIcon/>
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical:'bottom',
                                horizontal:'left'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'left'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display:{xs:'block', md:'none'}
                            }}
                        >
                            {pages.map((page)=>(
                                <MenuItem key={page} onClick={handleCloseNavMenu} >
                                    <Typography textAlign={'center'} >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        </Box>


                    <AdbIcon sx={{display:{xs:'flex', md:'none', mr:1}}} />
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr:2,
                            display: {xs:'flex', md:'none'},
                            flexGrow:1,
                            fontFamily:'monospace',
                            fontWeight:700,
                            letterSpacing:'.3rem',
                            color:'inherit',
                            textDecoration:'none'
                        }}
                    >
                    Holiiiii                        
                    </Typography>                                                        
                    <Box sx={{flexGrow:1, display:{xs:'none', md:'flex'}}} >
                        {pages.map((page)=> (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{my:2, color:'white', display:'block'}}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Tooltip title='Open Settings' >
                            <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
                                <Avatar alt='Remy Sharp' src='https://tse2.mm.bing.net/th?id=OIP.1aoBewyoQBT2H9Nolo7DngAAAA&pid=Api&P=0&h=180' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical:'top',
                                horizontal:'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical:'top',
                                horizontal:'right'
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu} >
                                <Typography textAlign={'center'}>{setting}</Typography>
                            </MenuItem>
                        ))}    
                        </Menu>
                    </Box>                    
                    {/* <ElectricBoltIcon/> */}

                        {/* <Container>
                            <Typography>
                                <Link href='/about'>About</Link>   
                            </Typography>
                        </Container> */}
                </Toolbar>                
            </Container>
        </AppBar>
    )
}

export default Navbar
