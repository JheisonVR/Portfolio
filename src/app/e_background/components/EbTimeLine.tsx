import React from "react";
import { Dialog, DialogTitle, Badge, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, Typography, Avatar } from "@mui/material"
//import CircleIcon from '@mui/icons-material/Circle';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { EBackground } from "../../../../interfaces";
import SchoolIcon from '@mui/icons-material/School';







export const EbTimeLine =  ( {info}:{info:EBackground[] } ) => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Container>
            <Timeline
                position="alternate"
            >
                {
                    info.map((inf,j) => (
                        <TimelineItem
                            key={j}
                        >
                        <TimelineOppositeContent
                            alignContent='end'
                        >
                            <Typography
                                variant="h5"
                                color='#22577a'
                            >{inf.fecha} </Typography>
                            
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{
                                    backgroundColor:'#184e77'
                                }}
                                variant="filled"
                                
                                
                            >
                                <SchoolIcon
                                    
                                />
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                sx={{
                                    backgroundColor:'#edebeb',
                                    //width:'200',
                                    display:"flex",
                                    justifyContent:'space-between',
                                    boxShadow:'1px 1px #6c757d'
                                    

                                }}
                                variant="elevation"
                                
                            >
                                <Box
                                    sx={{
                                        display:'flex',
                                        flexDirection:'column',
                                        width:'80%'
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            flex:'1 0 auto'
                                        }}
                                    >
                                        <Typography
                                                variant="body1"
                                                color={'#184e77'}                                    
                                                align="left"
                                                
                                            >   
                                                {inf.dialog.title}
                                        </Typography>
                                    </CardContent>                            
                                    <Box
                                        sx={{
                                            display:"flex",
                                            alignItems:'center', pl:1, pb:1,
                                            
                                        }}
                                    >
                                        
                                        <Typography
                                            variant="body2"
                                            color={'#168aad'}
                                            align="center"
                                        >
                                            {inf.institucion}
                                        </Typography>
                                    </Box>
                                </Box>
                                <CardMedia
                                    sx={{
                                        width:200,
                                        objectFit:'contain',
                                        overflow:'hidden',
                                        backgroundColor:'white'
                                    }}
                                    image={inf.image}                                
                                />
                                
                                {/* <CardActionArea
                                    onClick={handleClickOpen}
                                >
                                </CardActionArea> */}
                            
                            {/* <Dialog
                            open={open}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <Card
                            >
                                <CardHeader
                                    title='Description'
                                >
                                    
                                </CardHeader>
                                <CardContent>
                                    <Typography>
                                        {inf.dialog.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Dialog> */}
                        </Card>
                        </TimelineContent>
                    </TimelineItem>

                    ))

                }



                {/* <TimelineItem>
                    <TimelineOppositeContent
                        color="Highlight"
                    >
                        <Typography
                            variant="subtitle2"
                        >{} </Typography>
                        
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            color="warning"
                            variant="outlined"
                        />
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <CardDialog/>
                    </TimelineContent>
                </TimelineItem> */}
            </Timeline>
        </Container>



        // <Grid
        //     container
        //     spacing={0.5}
        //     justifyContent="center"
        //     alignItems='stretch'
        //     marginX={2}
        //     marginY={2}
        // >
        //     <Grid
        //         item
        //         xs={5} sm={5} md={5} lg={5} xl={5}
        //         sx={{
        //             pr:1
        //         }}
        //     >
        //         <Card>
        //             <CardContent>
        //                 <Typography>Hi</Typography>
        //             </CardContent>
        //         </Card>
                
        //     </Grid>
        //     {/* <Grid
        //         item
        //         sx={{
        //             backgroundColor:'whitesmoke'
        //         }}
        //         xs={1} sm={1} md={1} lg={1} xl={1}

        //     >
                
        //     </Grid> */}
        //     <Grid
        //         item
        //         sx={{
        //             width:'100%',
        //             backgroundColor:'blueviolet'
        //         }}
        //         xs={1} sm={1} md={1} lg={1} xl={1}
        //         justifyContent='center'
        //     >
        //         <CircleIcon/>
        //     </Grid>
        //     <Grid
        //         item
        //         xs={5} sm={5} md={5} lg={5} xl={5}
        //         sx={{
        //         }}
        //     >
        //         <Card>
        //             <CardContent>
        //                 <Typography>Bye</Typography>
        //             </CardContent>
        //         </Card>
        //     </Grid>

        //     {/* <Box
        //         sx={{
        //             borderRight:"solid 1px ",                    
        //         }}
                
        //     > 
        //         <Typography>Holiii</Typography>
        //     </Box>
        //     <Box
        //         sx={{
        //             borderLeft:'solid 1px'
        //         }}
        //     >
        //         <Typography>Chauuuuu</Typography>
        //     </Box> */}
        // </Grid>
    )
}
