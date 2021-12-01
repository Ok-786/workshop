import React, { Fragment, useState } from 'react';
import makeStyles, { theme } from './DashboardStyles';
import Topbar from "../navbar/Topbar";
import StorePage from './StorePage';
import Sidebar from "../sidebar/Sidebar";
import { Grid, MuiThemeProvider } from '@material-ui/core';
import AddProduct from './AddProduct1';
import Home from './Home';
import Profile from './Profile';
import AddStaff from './AddStaff';
import AllProducts from './AllProducts';
// import dashboardStyles from './DashboardStyles';

const Dashboard = (props) => {
    // const classes = dashboardStyles();
    const classes = makeStyles();
    const [isOpen, setIsOpen] = useState(true);
    const [display, setDisplay] = useState('Home');

    const displayHandler = (display) => {
        setDisplay(display);
    }

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    const clientDisp = () => {
        if (isOpen) {
            return (
                <Grid container>
                    <MuiThemeProvider theme={theme}>
                        <Grid item sm={12} md={3} lg={3} xl={2} xs={12} >
                            <Sidebar displayHandler={displayHandler} />
                        </Grid>
                        <Grid item md={9} lg={9} xl={10} >
                            client dashboard
                        </Grid>
                    </MuiThemeProvider>
                </Grid>
            )
        }
        else {
            return (
                <Fragment>
                    {(display === 'Store') && <StorePage />}
                    {(display === 'Home') && <Home />}
                    {(display === 'Add Product') && <div className={classes.centerDiv} ><AddProduct /></div>}
                    {(display === 'All Products') && <div className={classes.centerDiv} ><AllProducts /></div>}
                    {(display === 'Profile') && <div className={classes.centerDiv} ><Profile /></div>}
                    {(display === 'Add Staff') && <div className={classes.centerDiv} ><AddStaff /></div>}
                </Fragment>
            )
        }
    }
    const adminDisp = () => {
        if (isOpen) {
            return (
                <Grid container>
                    <MuiThemeProvider theme={theme}>
                        <Grid item sm={12} md={3} lg={3} xl={2} xs={12} >
                            <Sidebar displayHandler={displayHandler} />
                        </Grid>

                        <Grid item sm={12} xs={12} md={9} lg={9} xl={10} >
                            <div className={classes.centerDiv} >
                                {(display === 'Store') && <StorePage />}
                                {(display === 'Home') && <Home />}
                                {(display === 'Add Product') && <AddProduct />}
                                {(display === 'All Products') && <AllProducts />}
                                {(display === 'Add Staff') && <AddStaff />}
                            {(display === 'Profile') && <Profile />}
                            </div>
                        </Grid>
                    </MuiThemeProvider>
                </Grid>
            )
        }
        else {
            return (
                <Fragment>
                    <div className={classes.centerDiv} >
                        {(display === 'Store') && <StorePage />}
                        {(display === 'Add Product') && <AddProduct />}
                        {(display === 'All Products') && <AllProducts />}
                        {(display === 'Home') && <Home />}
                        {(display === 'Add Staff') && <AddStaff />}
                    {(display === 'Profile') && <Profile />}
                    </div>
                </Fragment>
            )
        }
    }


    return (
        <Fragment>
            <div className={classes.topContainer}>
                <Topbar isOpenHandler={isOpenHandler} isLoggedout={props.isLoggedout} isLoggedin={props.isLoggedin} isOpen={isOpen} />
                <div className={classes.container}>
                    {adminDisp()}
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard;
