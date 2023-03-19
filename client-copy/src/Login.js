import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper, TextField } from '@material-ui/core';
import Header from './Header/Header';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        background: '#111',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const cookies = new Cookies();
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting', form);
        await axios({ method: 'post', url: 'http://localhost:4040/users/login', data: form }).then((res) => {
            if (res.status === 200) {
                const user = res.data.user;
                cookies.set('username', user.username);
                cookies.set('email', user.email);
                cookies.set('contact', user.mobileNo);
                cookies.set('fullName', user.fullName);
                cookies.set('isAdmin', user.isAdmin);
                console.log(user);
                swal("Login Successful", "", "success").then(() => window.location.replace("http://localhost:3000"));
            } else {
                swal("Error!", res.data.message, "error");
            }
        }).catch((err) => {
            console.log(err.response.data);
            swal("Error!", err.response.data.message, "error");
        });
    };
    return (
        <>
            <Header />
            <div className={classes.root}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={5} lg={4}>
                        <Paper className={classes.paper}>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus value={form.username} onChange={handleChange} />
                                <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={form.password} onChange={handleChange} />
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Sign In </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Login;
