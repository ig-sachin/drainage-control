/* eslint-disable jsx-a11y/img-redundant-alt */
import { Avatar, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header/Header'

const useStyles = makeStyles({
    whiteBorder: {
        borderColor: '#fff',
        color: '#fff'
    },
    tableContainer: {
        marginBottom: '1rem'
    },
    table: {
        minWidth: 650
    }
});
const ListComplain = () => {
    const [data, setData] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const renderComplaintRow = (complaint, index) => (
        <TableRow key={index}>
            <TableCell className={classes.whiteBorder}>{index + 1}</TableCell>
            <TableCell className={classes.whiteBorder}> <img alt="complain image" src={complaint.photo} style={{ width: '150px', height: '150px', objectFit: 'contain' }} /> </TableCell>
            <TableCell className={classes.whiteBorder} align="left">{complaint.name}</TableCell>
            <TableCell className={classes.whiteBorder} align="left">{complaint.email}</TableCell>
            <TableCell className={classes.whiteBorder} align="left">{complaint.phoneNo}</TableCell>
            <TableCell className={classes.whiteBorder} align="left">{complaint.location}</TableCell>
            <TableCell className={classes.whiteBorder} align="left">{complaint.problem}</TableCell>
        </TableRow>
    );

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:4040/complaint/get-complain').then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        fetch();
    }, []);
    // console.log(data);
    return (
        <>
            <Header />
            <br /><br /><br /><br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TableContainer component={Paper} style={{ margin: '0 1rem', background: '#333', color: '#fff !important' }}>
                    <Table className={classes.table} aria-label="complaint table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.whiteBorder}>#</TableCell>
                                <TableCell className={classes.whiteBorder}>Complaint Image</TableCell>
                                <TableCell className={classes.whiteBorder} align="left">Name</TableCell>
                                <TableCell className={classes.whiteBorder} align="left">Email</TableCell>
                                <TableCell className={classes.whiteBorder} align="left">Phone No.</TableCell>
                                <TableCell className={classes.whiteBorder} align="left">Location</TableCell>
                                <TableCell className={classes.whiteBorder} align="left">Problem</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data
                            ).map(renderComplaintRow)}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={7} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography style={{ marginLeft: '1rem', color: '#fff' }}>
                                Showing {Math.min(rowsPerPage, data.length - page * rowsPerPage)} of{' '}
                                {data.length} complaints
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Grid>
                    </Grid>
                </TableContainer>
            </div>
        </>
    )
}

export default ListComplain