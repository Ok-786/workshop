import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import image1 from '../../images/20.png';



const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const food = [
    { name: "Pizza",img:"", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hot Dog",img:"", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Burger",img:"", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Hamburger",img:"", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Fries",img:"", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
    { name: "Ice Cream",img:"", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
];

export default function AllProducts() {
    const [rows, setRows] = useState (food);
    const [searched, setSearched] = useState ("");
    const classes = useStyles();

    const requestSearch = (searchedVal) => {
        const filteredRows = food.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
            <Paper>
                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Products</TableCell>
                                <TableCell align="left">Product Name</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Type</TableCell>
                                <TableCell align="left">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                    <img id={`img${row.name}`} src={image1} alt={`pic of ${row.name}`} style={{ width: 60 }} />
                                    </TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>
                                    <TableCell align="left">{row.fat}</TableCell>
                                    <TableCell align="left">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
    );
}