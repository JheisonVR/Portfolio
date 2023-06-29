'use client'
import { useState } from 'react';
import { Box, Container, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import Link from 'next/link'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


export const MenuNavbar = () => {

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
        <Container>            
            <Box>
                <Tooltip title='Open Settings'>
                    <IconButton
                        size='small'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleCloseUserMenu}
                        color='inherit'
                    >
                        <ElectricBoltIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
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
                    <MenuItem>
                        <Link href='/e_background'>Educational Background</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href='/work_experience'>Work Experience</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href='/skills'>Skills & Proficiencies</Link>
                    </MenuItem>
                </Menu>
            </Box>
        </Container>
    )
}
