import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import scriptCSS from './DashboardStyles';
import image1 from '../../images/20.png';

export default function FeaturedProducts(props) {
    const classes = scriptCSS();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            const response = await fetch("http://localhost:8000/api/auth/products/");
            const parseRes = await response.json();
            if (parseRes) {
                setRows(parseRes);
            }
            console.log('aaaaaa' + parseRes);
        }
        apiCall();
    }, [])

    return (
        <div className={classes.widgetsm}>
            <h3 style={{ textAlign: 'center' }}>Featured Products</h3>

            <TableContainer component={Paper}  >
                <Table className={classes.table} aria-label="simple table" >
                    <TableHead >
                        <TableRow>
                            <TableCell width="1%" align="left">Product</TableCell>
                            <TableCell width="1%" align="left" >Procuct Name</TableCell>
                            <TableCell width="1%" align="left" >Type</TableCell>
                            <TableCell width="1%" align="left" >Quantity</TableCell>
                            <TableCell width="1%" align="left" >Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map((row, index) => (
                            <TableRow key={row.product_id} id={row.id}>
                                {console.log('asd' + rows[index])}
                                <TableCell width="1%" align="left" ><img id={`img${row.product_id}`} src={image1} alt={`pic of ${row.name}`} style={{ width: 60 }} /></TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.product_id}`}>{row.name}</TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.product_id}`}>{row.type}</TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.product_id}`}>{row.quantity}</TableCell>
                                <TableCell width="1%" align="left" id={`fn${row.product_id}`}>{row.retailprice}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    )
}
