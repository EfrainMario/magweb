import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


export default function Section({ children, ...rest }: any) {
    return (
    <Box component='section' minHeight={'100vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} py={8} {...rest}>
        <Container maxWidth={'lg'}>
            {children}
        </Container>

    </Box>);
}
