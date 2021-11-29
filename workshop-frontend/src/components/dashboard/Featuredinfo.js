import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { AttachMoney, Assignment, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import scriptCSS from './DashboardStyles';

export default function Featuredinfo(props) {
    const classes = scriptCSS();
    var count;

    function renderedList(index, text) {
        if (index === 0) {

            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            0
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(count > 0) ? (
                                <SupervisorAccount className={classes.featuredIconPositive} />
                            ) : (
                                <SupervisorAccount className={classes.featuredIconNegative} />
                            )}
                        </span>
                    </div>
                </div >
            )
        } else if (index === 1) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            0
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(props.count > 0) ? (
                                <Assignment className={classes.featuredIconPositive} />
                            ) : (
                                <Assignment className={classes.featuredIconNegative} />
                            )}
                        </span>
                    </div>
                </div>
            )
        } else if (index === 2) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            0
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(props.amount > 0) ? (
                                <AttachMoney className={classes.featuredIconPositive} />
                            ) : (
                                <AttachMoney className={classes.featuredIconNegative} />
                            )}
                        </span>
                    </div>
                </div>
            )
        } else if (index === 3) {
            return (
                <div className={classes.featuredItem}>
                    <ListItemText primary={text} className={classes.featuredTitle} />
                    <div className={classes.featuredMoneyContainer}>
                        <span className={classes.featuredMoney}>
                            0
                        </span>
                        <span className={classes.featuredMoneyRate}>
                            {(props.amount > 0) ? (
                                <AttachMoney className={classes.featuredIconPositive} />
                            ) : (
                                <AttachMoney className={classes.featuredIconNegative} />
                            )}
                        </span>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={classes.centerDiv}>
            <List className={classes.featured}>
                {['Customers', 'Orders', 'Products', 'Sales'].map((text, index) => (
                    <ListItem key={text}>
                        {renderedList(index, text)}
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
