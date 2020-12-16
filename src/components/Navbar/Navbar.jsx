import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.png';
// import useStyles from './styles';

const Navbar = () => {
    const classes=useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={class.title} color="inherit">
                        <img src={logo} alt="Morket" height="25px" className={classes.image} />
                            Morket
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Navbar;
