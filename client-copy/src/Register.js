import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import Header from './Header/Header';
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
    form: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    submitButton: {
        marginTop: theme.spacing(4),
    },
    link: {
        marginTop: theme.spacing(2),
        textDecoration: 'none',
        color: '#000',
    },
}));

const Register = () => {
    const classes = useStyles();

    const [form, setForm] = useState({
        username: '',
        password: '',
        fullName: '',
        email: '',
        mobileNo: '',
        isAdmin: false,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting', form);
        await axios({
            method: 'post',
            url: 'http://localhost:4040/users/register',
            data: form,
        }).then((res) => {
            if (res.status === 201) {
                swal("User Registered Successfully", "Please Login with username and password", "success").then(() => window.location.replace('http://localhost:3000/login'));
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        if (password === 'admin') {
            setChecked(!checked);
            setForm({ ...form, isAdmin: true });
            handleClose();
        } else {
            swal("Error!", "Incorrect Security Code", "error");
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header />
            <div className={classes.root}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Register
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField required id="fullName" name="fullName" label="Full Name" value={form.fullName} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField required id="username" name="username" label="Username" value={form.username} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required id="password" name="password" label="Password" type="password" value={form.password} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required id="email" name="email" label="Email Address" type="email" value={form.email} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required id="mobileNo" name="mobileNo" label="Mobile Number" value={form.mobileNo} onChange={handleChange} fullWidth />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel control={<Checkbox color="primary" />} label="Are you Admin" labelPlacement="end" name="isAdmin" checked={checked} onClick={() => {
                                                if (checked) {
                                                    setOpen(false);
                                                    setPassword('');
                                                    setChecked(false);
                                                } else {
                                                    handleClickOpen();
                                                }
                                            }} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" type="submit" style={{ marginRight: '1rem' }}>
                                                Register
                                            </Button>
                                            <Link to="/login" className={classes.link}>
                                                Already have an account? Login
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Enter security code to verify you are Admin</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus margin="dense" label="Security-Code" type="password" value={password} onChange={handlePasswordChange} fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCheckboxChange}>OK</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default Register