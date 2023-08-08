"use client" 
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { CardJob, TimeLine } from './components'

const WorkExperience = () => {
    return (
        // <Container>
        //     {/* <Box 
        //         sx={{
        //             backgroundColor:'#cdb4db',
        //             width:'500px',
        //             height:'500px',
        //             display:'flex',
        //             alignItems:'center',
        //             // justifyItems:'center',
        //             justifyContent:'center',

        //             '&:hover':{
        //                 backgroundColor:'#6d6875',
        //                 opacity:[0.9, 0.8, 0.7]
        //             }
        //         }}
        //     >
        //         <Typography sx={{
        //             backgroundColor:'black',
        //             width:'50px'


        //         }} >
        //             Holiwi
        //         </Typography>
        //     </Box> */}
        //     <CardJob/>
        // </Container>
        <TimeLine/>
    )
}

export default WorkExperience
