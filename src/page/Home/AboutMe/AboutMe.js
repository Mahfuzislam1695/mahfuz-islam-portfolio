import { AddBoxTwoTone } from '@mui/icons-material';
import { Button, Card, CardMedia, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import me from '../../../images/DSC_9411.JPG';

const AboutMe = () => {
    return (
        <>
            <Typography variant="h1" marginTop={10} textAlign='center'>
                ABOUT ME
            </Typography>
            <Container sx={{ flexGrow: 1, marginTop: 10 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    <Grid item xs={2} sm={6} md={8}>
                        <Box>
                            <Typography variant="h3">
                                Hello! I am Mahfuz Islam
                            </Typography>
                            <Typography variant="subtitle1">
                                A passionate programmer, born and brought up in Bangladesh. I am a Web Developer with React.js, Express.js, Node.js, and MongoDB as my tech stack.
                                In 2019, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                            </Typography>
                        </Box>
                        <Button>Let's Talk</Button>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Box>
                            <img
                                
                                height={300}
                                src={me}
                                alt=''
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AboutMe;