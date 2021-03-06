import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import makeStyles, { theme } from './DashboardStyles';
import Map from './Map';

export default function Home() {
    const classes = makeStyles();
    return (
        <Fragment>
            <Grid container >
                <Grid item xl={12}>
                    <div className={classes.centerDiv}>
                        <Map/>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
}
