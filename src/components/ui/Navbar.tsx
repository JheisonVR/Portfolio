"use client"
import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Link from 'next/link';


function Navbar() {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link href='/' >
                    <Typography>
                        Jheison Vargas <ElectricBoltIcon/>                    
                    </Typography>
                    </Link>

                        <Container>
                            <Typography>
                                <Link href='/about'>About</Link>   
                            </Typography>
                        </Container>                    
                </Toolbar>                
            </Container>
        </AppBar>
    )
}

export default Navbar
