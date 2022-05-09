import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "../../../Link";
import Section from "../SectionBase";
import MyAvatar from "../Avatar";
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';


const CEO_URL = "https://media-exp1.licdn.com/dms/image/C5603AQErlP9_6x7zwQ/profile-displayphoto-shrink_800_800/0/1579254884791?e=1657756800&v=beta&t=gdkBVJsDZ_gBI62u9-aVbwhwhScSVqIwygPTDb4KW2k";


const sectionStyles = {
    textAlign: 'left',
    minHeight: 500
}

export default function CommentsSection() {
    return (
        <Section sx={sectionStyles}>
            <Box px={2} py={4} m={2} bgcolor={'#fafafa'} borderRadius={4}  >

                <Typography variant={'subtitle2'} color='GrayText' gutterBottom align='center'>
                    Read what others are saying
                </Typography>



                <Grid container spacing={4} justifyContent='center'>
                    <Grid item xs={12} md={2} lg={3}>
                        <Box position='relative' width={'fit-content'}>
                            <MyAvatar src={CEO_URL} alt={"CEO profile photo"}/>
                            <Box sx={{ position: 'absolute', bottom:0, right:0, mr: -3, mb: -2, bgcolor: 'secondary.main', borderRadius: 2, color: '#fff', px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
                                <ChatBubbleOutlineRoundedIcon />
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} lg={6}>
                        <Typography variant={'h4'} gutterBottom >
                            "Magroove is the independent musician’s best friend."
                        </Typography>
                        <Box mt={1}>
                            <Typography component={'span'} fontWeight='bold' variant={'caption'} color='GrayText' >
                                — FABRÍCIO SCHIAVO,
                            </Typography>
                            <Typography component={'span'} variant={'caption'} color='GrayText' >
                                {' CEO, MAGROOVE'}
                            </Typography>

                            <Link color='inherit' underline='hover' href={"/"} sx={{ display: 'flex', alignItems: 'center' }}>
                                Read More
                                <ArrowRightAltRoundedIcon sx={{ ml: 2, color:'primary.main' }} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Section>
    );
}
