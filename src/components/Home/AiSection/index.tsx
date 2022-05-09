import { Button, Grid, Typography, Box } from "@mui/material";
import Section from "../SectionBase";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const sectionStyles = {
    textAlign: 'center',
    minHeight: 500
}

const src = 'https://cdn.icon-icons.com/icons2/2817/PNG/512/ai_artificial_intelligence_chip_technology_cpu_icon_179503.png';


export default function AiSection() {
    return (
        <Section sx={sectionStyles}>
            <Typography variant={'subtitle2'} color='GrayText' gutterBottom align='center'>
                Know more about
            </Typography>
            <Typography variant={'h2'} gutterBottom fontWeight="bold" align='center'>
                Magroove is inteligent
            </Typography>

            <Typography variant={'h4'} gutterBottom align='center' sx={{my:4, maxWidth: 900, mx: 'auto'}}>
            Magroove is an artificial inteligence based, music discovery plataform that will 
            help you find your next hit.
            </Typography>
            <Box width={'100%'} maxWidth={240} component='img' src={src} alt='AI img'/>

        </Section>
    );
}
