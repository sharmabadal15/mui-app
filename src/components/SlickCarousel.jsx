import React, { Component } from "react";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import CardMedia  from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography'

class SlickCarousel extends Component {
    render() {

        let settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            lazyLoad: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const benefits = [
            {
                src: 'assets/benefits/flexibilidad_horaria.svg',
                txt: 'Flexibility in hours'
            },
            {
                src: 'assets/benefits/home_office.svg',
                txt: 'Home office'
            },
            {
                src: 'assets/benefits/capacitaciones.svg',
                txt: 'Training and workshops'
            },
            {
                src: 'assets/benefits/snacks.svg',
                txt: 'Free snacks, fruits, and beverages'
            },
            {
                src: 'assets/benefits/home_office.svg',
                txt: 'Remote week'
            },
            {
                src: 'assets/benefits/capacitaciones.svg',
                txt: 'Working with latest technologies'
            }
        ]

        return (
            <Slider {...settings}>
                {
                    benefits.map((benefit) => (
                        <Grid item xs={10} sm={8} my={10} key={ benefit.txt }>
                            <CardMedia
                                component="img"
                                image={ benefit.src }
                                alt={ benefit.txt }
                            />
                            <Typography variant="p" component="p">
                                { benefit.txt }
                            </Typography>
                        </Grid>
                    ))
                }
            </Slider>
        )
    }
}

export default SlickCarousel;