import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useGetUsersQuery, useLazyGetUsersQuery, useRegisterUserMutation } from '../redux/api/userApi';
import { toast } from 'react-toastify';
import { json, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUp = () => {
    const defaultTheme = createTheme()
    const navigate = useNavigate()
    const { user, userId } = useSelector(state => state.auth)
    const [RegisterUser, { isSuccess, isLoading, isError, error }] = useRegisterUserMutation()
    const [GetuserQuery, { data: GetUser, isSuccess: getSuccess }] = useLazyGetUsersQuery()
    const formik = useFormik({
        initialValues: {
            name: "",
            lname: "",
            email: "",
            password: "",
            number: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter First Name"),
            lname: yup.string().required("Enter Last Name"),
            email: yup.string().email("Enter a valid Email").required("Enter Email"),
            password: yup.string().required("Enter Number"),
            number: yup.string().required("Enter Number"),
        }),
        onSubmit: (values, { resetForm }) => {
            RegisterUser({ ...values, userId: userId + GetUser.length + 1 })
            resetForm()
        }
    });
    useEffect(() => {
        GetuserQuery()
        if (getSuccess) {
            GetuserQuery()
        }
    }, [getSuccess])
    useEffect(() => {
        if (isSuccess) {
            toast.success("Sign Up Success")
            navigate("/login")
        }
    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error("Unable To Sign Up", error.message)
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    {...formik.getFieldProps("name")}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="lname"
                                    {...formik.getFieldProps("lname")}
                                    error={formik.touched.lname && Boolean(formik.errors.lname)}
                                    helperText={formik.touched.lname && formik.errors.lname}
                                    id="lname"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    fullWidth
                                />
                            </Grid>
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
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="number"
                                    {...formik.getFieldProps("number")}
                                    error={formik.touched.number && Boolean(formik.errors.number)}
                                    helperText={formik.touched.number && formik.errors.number}
                                    label="Enter Mobile"
                                    type="text"
                                    id="number"
                                    autoComplete="new-number"
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
                                <Link to='/login' variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignUp