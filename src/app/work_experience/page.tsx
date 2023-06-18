"use client" 
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const WorkExperience = () => {
    return (
        <Container>
            <Box 
                sx={{
                    backgroundColor:'#cdb4db',
                    width:'500px',
                    height:'500px',
                    display:'flex',
                    alignItems:'center',
                    // justifyItems:'center',
                    justifyContent:'center',

                    '&:hover':{
                        backgroundColor:'#6d6875',
                        opacity:[0.9, 0.8, 0.7]
                    }
                }}
            >
                <Typography sx={{
                    backgroundColor:'black',
                    width:'50px'


                }} >
                    Holiwi
                </Typography>
            </Box>
        </Container>
    )
}

export default WorkExperience
