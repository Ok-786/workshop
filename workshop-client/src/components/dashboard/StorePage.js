import Featuredinfo from './Featuredinfo';
import scriptCSS from './DashboardStyles';
import { Grid } from '@material-ui/core';
import Chart from './Chart';
import BarChart from './BarCharts';
import NewUsers from './NewUsers';
import FeaturedProducts from './FeaturedProducts';
import { useEffect } from 'react';

export default function AdminHome() {
    const classes = scriptCSS();

    return (
        <div className={classes.home1}>
            <Grid container>
                <Grid item sm={12}>
                    <Featuredinfo />
                </Grid>
                <Grid container>
                    <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            {<Chart />}
                        </div>
                    </Grid>
                    <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            {<BarChart />}
                        </div>
                    </Grid>
                    <Grid item sm={12} xm={12} xl={6} lg={6} md={12}>
                        {<FeaturedProducts />}
                    </Grid>
                    <Grid item sm={6}>
                        {<NewUsers />}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
