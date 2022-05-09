import { Button, Typography } from "@mui/material";
import Section from "../SectionBase";

const sectionStyles = {
    background: 'url("/assets/banner_bg.jpg") no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center'
}

export default function BannerSection() {
    return (
        <Section color="#fff" sx={sectionStyles}>
            <Typography variant={'h2'} gutterBottom fontWeight="bold" align='center'>
                Magroove helps you find your next favorite song
            </Typography>

            <Button size='large' color='inherit' variant='outlined'>Try it now!</Button>
        </Section>);
}
