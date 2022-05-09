import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import MuiLink from './../../../../Link'
import React from 'react'
import Link from 'next/link'
import Logo from '../Logo'

const containerStyles = {
    display: 'flex',
    alignItems: 'center',
}


export default function NavBar() {
    return (
        <Box component={'header'} width={'100%'} py={2} color={'#fff'} bgcolor='#000'>
            <Container maxWidth='lg' sx={containerStyles}>
                <Logo/>
                <MuiLink underline="hover" href="/" sx={{color: 'inherit', mr:2}}>
                    Artists
                </MuiLink>
                <MuiLink underline="hover" href="/" sx={{color: 'inherit', mr:2}}>
                    Contact
                </MuiLink>
                <MuiLink underline="hover" href="/" sx={{color: 'inherit', mr:2}}>
                    FAQs
                </MuiLink>
                <Box>|</Box>
                <Button size='large' color='inherit' component={MuiLink} noLinkStyle href="/">
                    Login
                </Button>
                <Button size='large' color='inherit' component={MuiLink} noLinkStyle href="/">
                    Sign Up
                </Button>
                
            </Container>
        </Box>
    )
}


