import { Badge, Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, Typography } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { CardJob } from "./CardJob";

export const TimeLine = () => {
    return (
        <Container>
            <Timeline
                position="alternate"
            >
                <TimelineItem>
                    <TimelineOppositeContent
                        color="Highlight"
                    >
                        <Typography
                            variant="subtitle2"
                        >Junio</Typography>
                        
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot
                            color="warning"
                            variant="outlined"
                        />
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <CardJob/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>HENRY</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>UNAB</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>ESAP</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>ESAP</TimelineContent>
                </TimelineItem>
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