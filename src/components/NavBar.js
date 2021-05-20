import { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { amber } from '@material-ui/core/colors';

class NavBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <SportsCricketIcon style={{ color: amber[500] }} />
                    </IconButton>
                    <Typography>Crisco-live cricket score</Typography>
                </Toolbar>

            </AppBar>
        )
    }
}

export default NavBar;