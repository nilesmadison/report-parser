import React from 'react'
import {AppBar, Card, CardContent, Container, Link, TextField, Toolbar, Typography} from "@material-ui/core";
import style from "../../styles/NewProjectLayout.module.css";

function NewProjectLayout({children}) {
    return (
        <div className={style.main}>
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
                </Toolbar>
            </AppBar>
            <Container maxWidth='xs' style={{
                marginTop: 100,
            }}>
                <Typography gutterBottom variant="h5" component="h2">
                    New Project
                </Typography>
                <Card style={{borderRadius: 0}}>
                    <CardContent style={{borderRadius: 0}}>
                        <TextField id="standard-required" label="Project name" placeholder="Project name..."
                                   style={{width: '100%'}}/>
                    </CardContent>
                </Card>
                {children}
            </Container>
        </div>
    )
}

export default NewProjectLayout
