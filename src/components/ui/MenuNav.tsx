import React from 'react'
import { Box, Link } from '@mui/material';

const MenuNav = () => {
    return (
        <Box>
            <Link href='/e_background'>Educational Background</Link>
            <Link href='/work_experience'>Work Experience</Link>
            <Link href='/skills'>Skills & Proficiencies</Link>
        </Box>
    )
}

export default MenuNav
