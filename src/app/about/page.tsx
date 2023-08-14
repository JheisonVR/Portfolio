'use client'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { EbTimeLine } from '../e_background/components'
import { educationalInfo } from '../e_background/page'

const About = () => {
    return (
        <Grid 
            container
        >
            <Grid
                item
                xs={12} sm={8} md={8} xl={6}
            >
                <EbTimeLine
                    info={educationalInfo}
                />
            </Grid>
            <Grid
                item
                xs={12} sm={4} md={4} xl={6}
            >
                <Box>
                    <Typography>
                        holiiiiiiiii
                    </Typography>
                    
                </Box>

            </Grid>
            
        </Grid>

    )
}

export default About
