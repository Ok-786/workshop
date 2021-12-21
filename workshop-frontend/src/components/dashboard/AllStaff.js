import React, { useEffect, useState } from "react";
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
import Spinner from "../spinner/Spinner";



const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});


export default function AllStaff() {
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.staff)
            setRows(parseRes.staff);
            setData(parseRes.staff);

        }
        setIsLoading(true);
        callApi();
        setIsLoading(false);
    }, [])

    const [searched, setSearched] = useState("");
    const classes = useStyles();

    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((row) => {
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
            <Spinner loading={isLoading} />
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Users</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Mobile Number</TableCell>
                            <TableCell align="left">CNIC</TableCell>
                            <TableCell align="left">Area</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.firstName}>
                                <TableCell component="th" scope="row">
                                    <img id={`img${row.firstName}`} src={`http://localhost:8000/${row.image}`} alt={`pic of ${row.firstName}`} style={{ width: 60 }} />
                                </TableCell>
                                <TableCell align="left">{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell align="left">{row.phoneNumber}</TableCell>
                                <TableCell align="left">{row.idNumber}</TableCell>
                                <TableCell align="left">{row.operationalArea}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}