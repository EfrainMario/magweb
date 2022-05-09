import { Button, Grid, Typography, Box } from "@mui/material";
import Section from "../SectionBase";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const sectionStyles = {
    textAlign: 'center',
    minHeight: 500
}

const src = 'https://image.winudf.com/v2/image1/Y29tLm1hZ3Jvb3ZlLmFwcF9zY3JlZW5fNl8xNjMwMjQ5OTY0XzA0MA/screen-6.jpg?fakeurl=1&type=.jpg';
const src3 = 'https://image.winudf.com/v2/image1/Y29tLm1hZ3Jvb3ZlLmFwcF9zY3JlZW5fMl8xNjMwMjQ5OTYxXzAzMQ/screen-2.jpg?fakeurl=1&type=.webp';
const src2 = 'https://image.winudf.com/v2/image1/Y29tLm1hZ3Jvb3ZlLmFwcF9zY3JlZW5fM18xNjMwMjQ5OTYyXzAwOA/screen-3.jpg?fakeurl=1&type=.webp';


export default function PlayOnSection() {
    return (
        <Section sx={sectionStyles}>
            <Typography variant={'subtitle2'} color='GrayText' gutterBottom align='center'>
                With Magroove you do more
            </Typography>
            <Typography variant={'h2'} gutterBottom fontWeight="bold" align='center'>
                Play Anywere you want
            </Typography>

            <Typography variant={'h4'} gutterBottom align='center' sx={{my:4, maxWidth: 900, mx: 'auto'}}>
            Create amazing experiences for the web in record time—without thinking once about servers or devops.
            </Typography>


            <Grid container spacing={4} justifyContent='center'>
                <Grid item xs={12} md={3} lg={2}>
                    <Box borderRadius={4} width='fit-content' bgcolor='#0d0d0d'>
                        <Box borderRadius={4} width={'100%'} component='img' src={src} alt='Magroove ScreenShot'/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                <Box borderRadius={4} width={'100%'} component='img' src={'/assets/Google_Play_Store_badge_EN.svg'} alt='Google Play Bagde'/>
                <Box borderRadius={4} width={'100%'} component='img' src={'/assets/apple_Store_Badge.svg'} alt='Google Play Bagde'/>
                <Box borderRadius={4} width={'100%'} component='img' src={src2} alt='Magroove ScreenShot'>

                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Box borderRadius={4} width='fit-content' bgcolor='#0d0d0d'>
                        <Box borderRadius={4} width={'100%'} component='img' src={src3} alt='Magroove ScreenShot 3'/>
                    </Box>
                </Grid>
            </Grid>
            <Typography color='textSecondary' sx={{mt: 4}}>Or</Typography>
            <Button disableElevation sx={{mt: 4}} size='large' color='primary' variant='contained' startIcon={<LanguageRoundedIcon/>}>
                    Try it On Web
                </Button>

        </Section>
    );
}
