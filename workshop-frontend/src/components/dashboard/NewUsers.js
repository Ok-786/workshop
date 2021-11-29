import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import scriptCSS from './DashboardStyles';
import image1 from '../../images/24.jpg';
import image2 from '../../images/22.jpg';
import image3 from '../../images/23.jpg';

export default function NewUsers(props) {
    const classes = scriptCSS();
    const rows = [
        {
            "id": 1, "userName": "M Danish", "email": "danish@gmail.com", "imageURL": `${image1}`
        },
        {
            "id": 2, "userName": "M Ammar", "email": "ammar@gmail.com", "imageURL": `${image2}`
        },
        {
            "id": 3, "userName": "M Adeel", "email": "adeel@gmail.com", "imageURL": `${image3}`
        },
    ]

    return (
        <div className={classes.widgetsm}>
            <h3 style={{ textAlign: 'center' }}>New Users</h3>

            <TableContainer component={Paper}  >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead >
                        <TableRow>
                            <TableCell width="1%" align="left" >User</TableCell>
                            <TableCell width="1%" align="left">Name</TableCell>
                            <TableCell width="1%" align="left" >Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row, index) => (
                            <TableRow key={row.id} id={row.id}>
                                <TableCell width="1%" align="left" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60, borderRadius: "50%" }} /></TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.id}`}>{row.userName}</TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.id}`}>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    )
}
