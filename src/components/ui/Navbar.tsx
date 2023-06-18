"use client"
import React, { useState } from 'react'

import Link from 'next/link';

import { AppBar, Avatar, Box, Button, Container, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const pages = [ {name:'Educational Background',URL:'e_background'}, {name:'Work Experience', URL:'work_experience'}, {name:'Skills & Proficiencies',URL:'skills'}];
const settings = ['Curriculum Vitae', 'Contact Info', 'About'];

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
        <AppBar position='sticky' color='secondary'>
            <Container maxWidth='xl'>
                <Toolbar 
                    variant='dense' 
                    sx={{
                        
                        
                        
                    }}
                >
                    <IconButton
                        size='small'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <ElectricBoltIcon/>
                    </IconButton>
                    
                    <Typography
                        variant='h6'
                        noWrap                        
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
                    <Link href='/'>Jheison</Link>                    
                    </Typography>

                    <Box>
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
                                horizontal:'center'
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display:{xs:'block', md:'none'},
                                
                            }}
                        >
                            {pages.map((page,i)=>(
                                <MenuItem key={i} onClick={handleCloseNavMenu} >
                                    <Link href={`/${page.URL}`}>{page.name}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

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
                    <Link href='/' >Jhei</Link>
                    </Typography>

                    <Box sx={{flexGrow:1, display:{xs:'none', md:'flex'}, justifyContent:'space-around'}} >
                        {pages.map((page,i)=> (
                            <Typography key={i}>
                                <Link                                    
                                    href={`/${page.URL}`}
                                >
                                    {page.name}
                                </Link>
                            </Typography>
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
