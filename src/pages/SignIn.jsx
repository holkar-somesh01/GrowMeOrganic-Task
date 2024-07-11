import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useLazyLoginUserQuery } from '../redux/api/userApi';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = () => {

    const defaultTheme = createTheme();
    const navigate = useNavigate()
    const [LoginUser, { data, isSuccess, isLoading, isError, error }] = useLazyLoginUserQuery()
    const { user } = useSelector(state => state.auth)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email("Enter a valid Email").required("Enter Email"),
            password: yup.string().required("Enter Number"),
        }),
        onSubmit: (values, { resetForm }) => {
            LoginUser(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (user) {
            navigate("/table")
        }
    }, [])
    useEffect(() => {
        if (isSuccess && data) {
            toast.success("Sign In Success")
            navigate("/table")
        } else if (isSuccess && !data) {
            toast.error("Email or Password Not valid")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error("Unable To Sign In", error.message)
        }
    }, [isError])
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    {...formik.getFieldProps("email")}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    {...formik.getFieldProps("password")}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Enter Password"
                                    type="text"
                                    id="password"
                                    autoComplete="new-password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/' variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignIn