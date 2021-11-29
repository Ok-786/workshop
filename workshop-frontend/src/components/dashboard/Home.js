import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import makeStyles, { theme } from './DashboardStyles';

export default function Home() {
    const classes = makeStyles();
    return (
        <Fragment>
            <Grid container >
                <Grid item xl={12}>
                    Under Development!
                </Grid>
                <Grid item xl={12}>
                    <div className={classes.centerDiv}>
                        <div className={classes.home}>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
}
