import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-black text-white justify-center text-center w-full'>
            <Typography variant="h5" component="h5" className='font-light'>Prime Video</Typography>
            <Typography variant="h6" component="h6" className='font-thin hover:underline'>Terms &amp; Privacy  Notice &nbsp; Send us feedback &nbsp; Help</Typography>
            <Typography variant="h6" component="h6" className='font-sans'>© 1996-2024, Amazon.com, Inc. or its affiliates</Typography>
        </footer>
    )
}

export default Footer