import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.grey[500],
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            GrowMeOrganic PVT. LTD.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Address, City, State, Zip Code
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: (123) 456-7890
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Links
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary">
                            Home
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            About Us
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Services
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary">
                            Facebook
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Twitter
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            Instagram
                        </Link>
                        <br />
                        <Link href="#" variant="body2" color="text.secondary">
                            LinkedIn
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        {new Date().getFullYear()}
                        {'GrowMeOrganic PVT. LTD.. All rights reserved.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;