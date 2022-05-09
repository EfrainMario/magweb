import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MyAvatar from './Avatar';
import NavBar from './shared/NavBar';
import BannerSection from './BannerSection';
import Footer from './shared/Footer';
import ReadySection from './ReadySection';
import PlayOnSection from './PlayOnSection';
import FaqsSection from './FaqsSection';
import CommentsSection from './CommentsSection';
import AiSection from './AiSection';





export default function Home() {
    return (
        <>
            <NavBar />

            <BannerSection />
            <AiSection />
            <PlayOnSection />
            <ReadySection/>
            <CommentsSection/>
            <FaqsSection/>
            <Footer/>
        </>
    );

}
