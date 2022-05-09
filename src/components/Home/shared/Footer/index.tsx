import { Container, IconButton, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import FacebookIcon from '../../../../icons/FacebookIcon'
import Link from '../../../../Link'
import Logo from '../Logo'
import InstagramIcon from '@mui/icons-material/Instagram';


const categoriesLink = [
    {
        title: 'Company',
        items: [
            {
                text: 'About US',
                link: '',
            },
            {
                text: 'Jobs',
                link: '',
            },
            {
                text: 'Contact Us',
                link: '',
            },
            {
                text: 'Terms of Service',
                link: '',
            },
        ]
    },

    {
        title: 'Services',
        items: [
            {
                text: 'For Artists',
                link: '',
            },
            {
                text: 'Users',
                link: '',
            },
            {
                text: 'For the ',
                link: '',
            },
            {
                text: 'About',
                link: '',
            },
        ]
    }
    ,

    {
        title: 'More Info',
        items: [
            {
                text: 'Suport',
                link: '',
            },
            {
                text: 'FAQs',
                link: '',
            },
        ]
    }
]


const socialMediaLinks = [
    {
        text: 'Facebook',
        link: '/',
        icon: <FacebookIcon key={'facebook logo'} />
    },
    {
        text: 'Facebook',
        link: '/',
        icon: <InstagramIcon key={'insta logo'} />
    }
]


const footerLinks = [
    {
        text: 'Legal',
        link: '/'
    },
    {
        text: 'Privacy Policy',
        link: '/'
    },
    {
        text: 'Terms and Condicions',
        link: '/'
    }
]



export default function Footer() {
    return (
        <Box component='footer' bgcolor={'#000'} color={'#fff'} py={10}>
            <Container maxWidth={'lg'}>



                <Grid container spacing={2} justifyContent='space-between'>
                    <Grid item xs={12} md={1}>
                        <Logo />
                    </Grid>
                    {
                        categoriesLink.map((category) => (
                            <Grid item key={category.title} xs={5} sm={6} md={4} lg={2}>
                                <Typography gutterBottom sx={{ textTransform: 'uppercase' }} variant={'subtitle2'} color={'#5d5d5d'}>
                                    {category.title}
                                </Typography>
                                <Stack spacing={2} sx={{ mt: 2}}>
                                    {
                                        category.items.map((categoryItem, index) => (
                                            <Link color='inherit' underline='hover' href={categoryItem.link} key={index}>
                                                {categoryItem.text}
                                            </Link>
                                        ))
                                    }
                                </Stack>

                            </Grid>
                        ))
                    }

                    <Grid item xs={6} md={2} lg={2}>
                        <Box textAlign='right' width='100%'>
                            {
                                socialMediaLinks.map((socialMediaItem) => (
                                    <IconButton sx={{ mr: 1 }} color='inherit' key={socialMediaItem.text} href={socialMediaItem.link}>{socialMediaItem.icon}</IconButton>
                                ))
                            }
                        </Box>
                    </Grid>

                </Grid>

                <Stack direction={'row'} spacing={4} sx={{ mt: 20 }}>
                    {
                        footerLinks.map((item, index) => (
                            <Link color={'inherit'} variant='caption' href={item.link} underline='hover' key={index}>{item.text}</Link>
                        ))
                    }
                    <div style={{ flexGrow: 1 }} />
                    <Typography variant='caption' color='GrayText'>Copyright © {new Date().getFullYear()} Magroove - All Rights Reserved.</Typography>
                </Stack>
            </Container>
        </Box>
    )
}
