import { Box, Button, Grid, Typography } from "@mui/material";
import Section from "../SectionBase";
import FaqItem from "./FaqItem";

const sectionStyles = {
    textAlign: 'center',
    minHeight: 500
}



const FAQS = [
    {
        ask: 'What is Magroove?',
        answare: 'lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. '
    },
    {
        ask: 'What is Magroove?',
        answare: 'lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. '
    },
    {
        ask: 'What is Magroove?',
        answare: 'lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. '
    },
    {
        ask: 'What is Magroove?',
        answare: 'lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. '
    },
    {
        ask: 'What is Magroove?',
        answare: 'lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. lorem ipsum dolor met. '
    },
]



export default function FaqsSection() {
    return (
        <Section sx={sectionStyles}>
            <Typography variant={'subtitle2'} color='GrayText' gutterBottom align='center'>
                You still have a question?
            </Typography>
            <Typography variant={'h2'} gutterBottom fontWeight="bold" align='center'>
                Frequently Asked Questions
            </Typography>


            <Box textAlign='left' maxWidth={1000} mx='auto'>
                {
                    FAQS.map((faq, index) => (
                        <FaqItem title={faq.ask} key={index}>{faq.answare}</FaqItem>
                    ))
                }
            </Box>
        </Section>
    );
}
