import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Paper, Typography, CardActionArea, CardActions, Button, Divider } from '@mui/material';


const workExperience = [
    {
        company:'',
        image:'',
        description:'',
        time:'',
        role:'',
    }
];

const academic = [
    {
        institution:'',
        duration:'',
        grade:'',
        description:'',
        image:'',
    }
]

export const CardJob = () => {

    const Img = styled('img')({
        width:400,
        height:'100%',
        objectFit: 'cover',
        objectPosition:'center'
    })


    return (
        // <Paper
        //     sx={{
        //         display:"flex",
        //         alignItems:'center',
        //         gap:2,
        //         overflow:'hidden',
        //         mt:5
        //     }}
        // >
            
        //     <Img
        //         src="https://images7.alphacoders.com/381/381583.jpg"
        //         alt='first'
        //     />
        //     <Box sx={{                
        //         display:'grid',
        //         mr:4,
        //         gap:1
        //     }} >
        //         <Typography variant="h4" >Mercado Libre </Typography>
        //         <Typography variant="body1">Tiempo laborado: May. 2018 / Jul. 2022 (4 años) </Typography>
        //         <Typography variant="h5">Descripcion: </Typography>
        //         <Typography variant="h6" align="justify" >Garantizar que la experiencia de los usuarios al 
        //                                 contactarse con Mercado Libre sea única y diferencial, alcanzar ambiciosos objetivos 
        //                                 de calidad y satisfacción, agregando valor a los usuarios, con soluciones efectivas, 
        //                                 análisis y gestión de información de métricas grupales, capacitación a equipos internos 
        //                                 y externos de la operación, brindar feedback, formulación y ejecución de iniciativas sobre 
        //                                 las oportunidades de mejora detectadas en las operaciones para optimizar la experiencia en la plataforma
        //         </Typography>
        //     </Box>
        // </Paper>
        <Card
            sx={{
                backgroundColor:'#e9ecef',
                color:'Black',
                borderRadius:3

            }}
        >
            <CardActionArea>
                <CardMedia
                    component='img'
                    height={100}
                    image="https://images7.alphacoders.com/381/381583.jpg"
                    alt="company"
                />
                <CardContent
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        gap:2
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        textTransform='uppercase'
                    >
                        Mercado Libre Colombia
                    </Typography>
                    <Divider/>
                    <Typography
                        variant="subtitle1"
                    >
                        Representative Senior of Customer Centricity
                    </Typography>
                    <Typography
                        variant="body2"
                        align="justify"
                        mx={4}
                    >
                        Garantizar que la experiencia de los usuarios al 
                        contactarse con Mercado Libre sea única y diferencial, alcanzar ambiciosos objetivos 
                        de calidad y satisfacción, agregando valor a los usuarios, con soluciones efectivas, 
                        análisis y gestión de información de métricas grupales, capacitación a equipos internos 
                        y externos de la operación, brindar feedback, formulación y ejecución de iniciativas sobre 
                        las oportunidades de mejora detectadas en las operaciones para optimizar la experiencia en la plataforma
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Box 
                sx={{
                    width:'100%',
                    backgroundColor:'#231942',
                    color:'whitesmoke'

                }}
            >
                <Typography variant="body1" align="center" >Tiempo laborado: May. 2018 / Jul. 2022 (4 años) </Typography>
            </Box>

        </Card>
    )
}