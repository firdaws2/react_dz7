import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/basketSlice";
import BookmarksIcon from '@mui/icons-material/Bookmarks';



function NavBar() {
     const {busket} = useSelector(busketSelect)

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display: 'flex', columnGap: 50}}>
                        <NavLink className='link' to={'/'}>
                            HOME
                        </NavLink>
                    <NavLink className='link' to={'/busket'}>
                        <BookmarksIcon/>          {!!busket.length && busket.length}
                    </NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;