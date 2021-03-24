import React from 'react'
import {AppBar, Button, Link, Toolbar, Typography} from "@material-ui/core";

function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h6" style={{flex: 1}}>
                    <Link
                        href='/'
                        style={{
                            color: 'white',
                            fontWeight: 'bolder'
                        }}
                    >
                        Report Parser

                    </Link> </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{
                        marginRight: 0,
                        borderRadius: 0,
                    }}
                    href='/project/new'
                >New Project</Button>
            </Toolbar>

        </AppBar>
    )
}

export default Header
