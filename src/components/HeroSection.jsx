import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

const StyledPaper = styled(Paper)({
    height: '640px',
    background: 'url(/bg-header.png) #0E0E0E',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

function HeroSection() {
    const [show, setShow] = useState(false);
    useEffect(() => setShow(true), []);

    return (
        <StyledPaper elevation={0} name='home'>
            <Container maxWidth="md" className='h-100'>
                <Grid container alignItems='center' className='h-100'>
                    <Grow in={show} style={{ transformOrigin: '5 5 5' }} {...(show ? { timeout: 2000 } : {})}>
                        <Grid item>
                            <Typography component='h1' variant='h3'>
                                Welcome to
                            </Typography>

                            <Typography component='h1' variant='h3'>
                                <b>Digital EdTech:</b> Transforming Education
                            </Typography>

                            <Box my={2}>
                                <Typography variant="h5">
                                    Empowering learners, educators, and institutions with innovative technology solutions.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grow>
                </Grid>
            </Container>
        </StyledPaper>
    );
}

export default HeroSection;
