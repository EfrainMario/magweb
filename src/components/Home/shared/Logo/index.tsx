import Box from "@mui/material/Box";
import Link from "next/link";

export default function Logo(){
    return <Box sx={{ flexGrow: 1 }}>
        <Link href="/" passHref>
            <img width={32} height={32} src='/magroove logo.webp' alt='magroove logo' />
        </Link>
    </Box>
}