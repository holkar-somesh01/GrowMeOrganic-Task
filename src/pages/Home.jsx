import React from 'react'
import { Box, Container, CssBaseline } from '@mui/material'
import Table from './Table'
import Navbar from './Navbar'

const Home = () => {
    return <>
        <React.Fragment>
            <CssBaseline />
            <Container fixed style={{ marginTop: 30 }}>
                <Navbar />
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    {/* <Table /> */}
                </Box>
            </Container>
        </React.Fragment>

    </>
}

export default Home