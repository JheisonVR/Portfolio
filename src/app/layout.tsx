'use client'

import { Metadata } from 'next'
import './globals.css'
import { NavBarV2 } from '@/components/ui'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ]

}


// interface Props{
//   title?: string,
//   children: React.ReactNode
// }



// export const Rootlayout:FC<Props> = ( {title='Portfolio', children} ) => {
//   return(
//     <Box>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <Navbar/>

//       <Box sx={{flexGrow:1}} >
//         {children}
//       </Box>
//     </Box>
//   )
// }

// export default Rootlayout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
      <body>
        <NavBarV2/> 
        {children}
      </body>
    </html>
  )
}
