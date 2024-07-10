import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const Navigate = () => {
        navigate("/login")
    }
    return user ? compo : <div>
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Please Login..
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    You'r Not Login, For More Experience please login
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                    onClick={Navigate}
                >
                    Back to Login
                </Button>
                {/* <Button variant="outlined">Back To Login</Button> */}
            </Box>
        </Container>
    </div>
}

export default Protected