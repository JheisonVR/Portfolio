"use client" 
import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import { EbTimeLine } from './components';
import { EBackground } from '../../../interfaces';


export const educationalInfo : EBackground[] = [
    {
        fecha:'Junio - 23',
        institucion:'Oracle Next Education',
        image: 'https://logos-marcas.com/wp-content/uploads/2020/09/Oracle-Logo.png',
        dialog: {
            title:'Desarrollador Web FullStack',
            description:"Entrenamiento intensivo en programación enfocado en desarrollar habilidades y competencias aplicadas a Frontend y Backend, por medio de la aplicación de lenguajes y tecnologias de vanguardia. Construcción de proyectos web individuales y grupales por medio del uso de metodologias y herramientas agiles, propiciando el aprendizaje colaborativo, así como el entorno laboral del sector."
        }    
    },
    {
        fecha:'Marzo - 23',
        institucion:'Henry',
        image: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
        dialog: {
            title:'Desarrollador FullStack Web',
            description:"Entrenamiento intensivo en programación enfocado en desarrollar habilidades y competencias aplicadas a Frontend y Backend, por medio de la aplicación de lenguajes y tecnologias de vanguardia. Construcción de proyectos web individuales y grupales por medio del uso de metodologias y herramientas agiles, propiciando el aprendizaje colaborativo, así como el entorno laboral del sector."
        }    
    },
    {
        fecha:'Marzo - 23',
        institucion:'Labs XD',
        image: 'https://tse1.mm.bing.net/th?id=OIP.MNYLSzyxOeO3Ap4VdH5eCAHaDJ&pid=Api&P=0&h=180',
        dialog: {
            title:'Salesforce Developer',
            description:'Formación especializada en desarrollo y administración de Salesforce, enfocada en transformar requerimientos de historias de usuario en implementaciones estandarizadas de bajo código que sigan las mejores prácticas de la industria, así como desarrollar procesos guiados, lógica de negocio e integraciones por medio de código Apex con un alto nivel de cobertura de Apex Test.'
        }    
    },
    {
        fecha:'Febrero - 22',
        institucion:'Colsubsidio CET',
        image: 'https://yt3.ggpht.com/a/AATXAJzGoqmrr0se0eohgnhydj3CgIEPvpMdFqcR=s900-c-k-c0xffffffff-no-rj-mo',
        dialog: {
            title:'Análisis de Datos y Big Data',
            description:'Formación especializada en desarrollo y administración de Salesforce, enfocada en transformar requerimientos de historias de usuario en implementaciones estandarizadas de bajo código que sigan las mejores prácticas de la industria, así como desarrollar procesos guiados, lógica de negocio e integraciones por medio de código Apex con un alto nivel de cobertura de Apex Test.'
        }    
    },
    {
        fecha:'Diciembre - 21',
        institucion:'Universidad Autonoma de Bucaramanga',
        image: 'https://media.sipiapa.org/adjuntos/185/imagenes/001/819/0001819726.jpg',
        dialog: {
            title:'Tecnico en programación con énfasis en aplicaciones Web',
            description:"Programa de formación técnica para el desarrollo de aplicaciones web de alta calidad, mediante la aplicación de lenguajes de programación relevantes, como HTML, CSS, Java, así como frameworks y tecnologias modernas para la creación de aplicaciones web interactivas y receptivas"
        }    
    },
    {
        fecha:'Noviembre - 20',
        institucion:'Correlation One',
        image: 'https://www.hireheroesusa.org/wp-content/uploads/2020/09/Correlation-One.png',
        dialog: {
            title:'Data Science for All (DS4A)',
            description:"Programa de formación técnica para el desarrollo de aplicaciones web de alta calidad, mediante la aplicación de lenguajes de programación relevantes, como HTML, CSS, Java, así como frameworks y tecnologias modernas para la creación de aplicaciones web interactivas y receptivas"
        }    
    },
    {
        fecha:'Octubre - 19',
        institucion:'Escuela Superior de Administración Pública',
        image: 'https://universidadesgratuitas.com/wp-content/uploads/2018/08/ESAP.jpg',
        dialog: {
            title:'Especialista en proyectos de desarrollo social',
            description:"Programa de formación técnica para el desarrollo de aplicaciones web de alta calidad, mediante la aplicación de lenguajes de programación relevantes, como HTML, CSS, Java, así como frameworks y tecnologias modernas para la creación de aplicaciones web interactivas y receptivas"
        }    
    },
    {
        fecha:'Abril - 18',
        institucion:'Escuela Superior de Administración Pública',
        image: 'https://universidadesgratuitas.com/wp-content/uploads/2018/08/ESAP.jpg',
        dialog: {
            title:'Administrador Público',
            description:"Admin Public"
        }    
    },
]


const Educational_Background = () => {
    return (
        <Grid>
            <Box>
                <EbTimeLine 
                    info={educationalInfo}
                />
            </Box>
        </Grid>
    )
}

export default Educational_Background