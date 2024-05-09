import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "./InstagramIcon";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

let squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Benefits() {
    return (
        <div className="container">
            <div className='squares'>
                {
                    squares.map((square) => (
                        <div className='square' key={square}></div>
                    ))
                }

                <Box minHeight={300} position='absolute'>
                    <Grid container textAlign='center' my={5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h5" fontSize={36}>
                                Thank you for <b className="txt-gradient">completing the exercise</b>
                            </Typography>

                            <Typography variant="p" component="p">
                                We invite you to explore more information
                            </Typography>

                        </Grid>
                    </Grid>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box mx={2}>
                            <InstagramIcon />
                        </Box>

                        <a
                            href="https://wacoservices.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline='none'>
                            <Button className="btn-gradient">
                                Learn more
                            </Button>
                        </a>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Benefits;
