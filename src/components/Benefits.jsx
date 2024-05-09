import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import SlickCarousel from "./SlickCarousel";

const StyledTypography = styled(Typography)({
    variant: 'span',
    fontWeight: 'bold',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(270deg, #00E6E3 2.73%, #00FF68 100%)',
    padding: '10px',
    lineHeight: '42px',
    color: 'initial',
});

function Benefits() {
    return (
        <Container maxWidth='md' name='benefits'>
            <Grid container textAlign='center' my={5}>
                <Grid item xs={12}>
                    <Typography variant="p" component="p" fontSize={36}>
                        Among the 
                        <StyledTypography variant="span" mx={1}>
                            benefits
                        </StyledTypography> 
                        we offer are
                    </Typography>

                  

                    <SlickCarousel/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Benefits;
