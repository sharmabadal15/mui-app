import React, { useState } from 'react'
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-scroll';
import Toolbar from '@mui/material/Toolbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';
import Logo from './Logo';

const links = [
    {
        name: 'Home',
        href: 'home'
    },

]

const StyledLink = styled(Link) ({
    cursor: 'pointer',
    marginRight: 20,
});

function NavBar() {

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <AppBar 
            color={navbar ? 'secondary' : 'transparent'} 
            position='fixed' 
            elevation={1}>
            <Container maxWidth='lg'>
                <Box my={2}>
                    <Toolbar disableGutters>
                        <Logo/>
                        <Hidden mdDown>
                            {
                                links.map((link) => (
                                    <StyledLink
                                        key={link.name} 
                                        variant='link' 
                                        underline='none'
                                        activeClass='active'
                                        to={ link.href }
                                        spy={ true }
                                        smooth={ true }
                                        offset={ -100 }
                                        duration= { 500 }
                                    >
                                        { link.name }
                                    </StyledLink>
                                ))
                            }
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton onClick={() => setOpen(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Box>
            </Container>

            <SwipeableDrawer 
                anchor='right' 
                open={ open } 
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}>
                
                <div className='d-flex m-10'>
                    <Logo/>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                </div>

                <Divider/>

                <List>
                    {
                        links.map((link) => (
                            <ListItem>
                                <StyledLink 
                                    key={link.name} 
                                    variant='link' 
                                    underline='none'
                                    activeClass='active'
                                    to={ link.href }
                                    spy={ true }
                                    smooth={ true }
                                    offset={ -100 }
                                    duration= { 500 }
                                >
                                    { link.name }
                                </StyledLink>
                            </ListItem>
                        ))
                    }
                </List>
            </SwipeableDrawer>

        </AppBar>
    )
}

export default NavBar