import { Button, Typography } from "@mui/material";
import Section from "../SectionBase";

const sectionStyles = {
    backgroundColor: '#fd746c',/* fallback for old browsers */
    // background: '-webkit-linear-gradient(to right, #fd746c, #ff9068)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #fd746c, #ff9068)',
    textAlign: 'center',
    minHeight: 500
}

export default function ReadySection() {
    return (
        <Section color="#fff" sx={sectionStyles}>
            <Typography variant={'h2'} gutterBottom fontWeight="bold" align='center'>
                Ready? Let’s play.
            </Typography>

            <Button size='large' color='secondary' variant='contained'>Try it now!</Button>
        </Section>);
}
