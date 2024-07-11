import React from 'react'
import { Box, Container, CssBaseline } from '@mui/material'
import Table from './Table'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return <>
        <Navbar />
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={{}}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div>
                            <h1>WelCome To,</h1>
                            <p style={{ marginLeft: 30 }}>GrowMeOrganic..!</p>
                        </div>
                    </div>
                </Box>
            </Container>
        </React.Fragment >
        <Footer />

    </>
}

export default Home