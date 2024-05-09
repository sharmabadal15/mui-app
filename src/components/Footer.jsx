import React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Logo from './Logo';

function Footer() {
    return (
        <Container maxWidth='md'>
            <hr className="hr-footer"/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box>
                    <Logo/>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer;