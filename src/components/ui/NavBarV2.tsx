'use client'

import React from 'react'
import Link from 'next/link'
import { AppBar, Box, Container, Typography } from '@mui/material'

import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const NavBarV2 = () => {
    return (
        <AppBar
            color='secondary'
            position='sticky'
        >
            <Container 
                sx={{
                    display:'flex',
                    justifyContent:'space-between'
                }}
            >                    
                <Typography
                    variant='h6'
                    noWrap                  
                    sx={{
                        mr:2,
                        display: {xs:'flex', md:'none'},
                        fontFamily:'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration:'none'
                    }}
                >
                    <Link href='/'>Jhei</Link>                    
                </Typography>
                <Typography
                    variant='h6'
                    noWrap                  
                    sx={{
                        mr:2,
                        display: {xs:'none', md:'flex'},
                        fontFamily:'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration:'none'
                    }}
                >
                    <Link href='/'>Jheison</Link>                    
                </Typography>

                    <Box
                        sx={{
                            display:'flex',
                            gap:4,
                            mt:.5,
                            
                        }}
                    >
                        <Typography
                            sx={{
                                display:{xs:'flex', md:'none'}
                            }}
                        >
                            <Link href='/e_background'><SchoolIcon/></Link>                                                    
                        </Typography>
                        <Typography
                            sx={{
                                display:{xs:'none', md:'flex'}
                            }}
                        >
                            <Link href='/e_background'>Educational Background</Link>                                                    
                        </Typography>

                        <Typography
                            sx={{
                                display:{xs:'flex', md:'none'}
                            }}
                        >
                            <Link href='/work_experience'><WorkHistoryIcon/></Link>
                        </Typography>
                        <Typography
                            sx={{
                                display:{xs:'none', md:'flex'}
                            }}
                        >
                            <Link href='/work_experience'>Work Experience</Link>
                        </Typography>

                        <Typography
                            sx={{
                                display:{xs:'flex', md:'none'}
                            }}
                        >
                            <Link href='/skills'><AssignmentIndIcon/></Link>
                        </Typography>
                        <Typography
                            sx={{
                                display:{xs:'none', md:'flex'}
                            }}
                        >
                            <Link href='/skills'>Skills & Proficiencies</Link>
                        </Typography>

                    </Box>
            </Container>
        </AppBar>
    )
}
