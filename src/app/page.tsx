'use client'

import { Box, Card, Chip, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Container
        sx={{
          width:'80%'
        }}
      >
        <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            width:'100%'
          }}
          // border='solid'
        >
          <Image
            src='https://camo.githubusercontent.com/4fa9a5bdefafee7e59ad2086429306dfc0c902d0db4d2d1fdfb534b1767d9f62/68747470733a2f2f646576656c6f706572732e67697068792e636f6d2f6272616e63682f6d61737465722f7374617469632f6170692d35313264333663303936363236383237313731303861333862626235633537642e676966'
            alt="git"
            height={400}
            width={1000}
            // fill={true}
            sizes="(max-width:900px) 100vw, (max-width:1200px) 50vw, 33vw"
            loading="lazy"
          />
          <Typography
            variant="h2"
            
            justifyContent='center'
          >
            Jheison David Vargas Rayo
          </Typography>
          <Typography
            variant="subtitle1"
          >
          Full Stack Developer || Salesforce Developer || FrontEnd || React || Backend || Express || Apex || JavaScript || Java
          </Typography>
        </Box>
        
        {/* TODO: agregar division */}
        <Divider
          variant="middle"
          orientation="horizontal"
          
          sx={{
            color:'whitesmoke'
          }}
        >
          <Chip label='Projects' />
        </Divider>
        
      </Container>
      {/* TODO: Agregar proyectos */}
      <Container>
        <Card>
          
        </Card>
        
      </Container>
    </main>
  )
}
