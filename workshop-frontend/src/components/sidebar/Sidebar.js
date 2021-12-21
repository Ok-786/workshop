import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AccountCircle, Assistant, Home, Timeline, NoteAdd, PersonAdd, DonutLarge, KeyboardArrowRight, KeyboardArrowDown } from '@material-ui/icons';
import SidebarStyles from './SidebarStyles';
import { useState } from 'react';
import { ManageAccounts } from '@mui/icons-material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArchiveIcon from '@mui/icons-material/Archive';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Sidebar = (props) => {
    const classes = SidebarStyles();
    const [open, setOpen] = useState(false);

    const openProfileHandler = () => {
        setOpen(!open);
    }

    const [open1, setOpen1] = useState(false);

    const openStaffHandler = () => {
        setOpen1(!open1);
    }

    const [open2, setOpen2] = useState(false);

    const openClientHandler = () => {
        setOpen2(!open2);
    }

    const [open3, setOpen3] = useState(false);

    const openStoreHandler = () => {
        setOpen3(!open3);
    }


    // const profile = () => {
    //     if (open) {
    //         return (
    //             <div >
    //                 <List className={classes.sidebarList}>
    //                     {['Update Profile', 'Update Password'].map((text, index) => (
    //                         <ListItem button onClick={openProfileHandler} className={classes.dropDownPanel} key={text}>
    //                             <ListItemText primary={text} />
    //                         </ListItem>
    //                     ))}

    //                 </List>
    //             </div>
    //         )
    //     }
    // }

    const staff = () => {
        if (open1) {
            return (
                <div >
                    <List className={classes.sidebarList}>
                        {['Add New', 'Manage Staff'].map((text, index) => (
                            (text === "Add New") ?
                                <ListItem button onClick={() => {
                                    props.displayHandler("Add Staff");
                                }} className={classes.dropDownPanel} key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                                :
                                <ListItem button onClick={() => {
                                    props.displayHandler("All Staff");
                                }} className={classes.dropDownPanel} key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                        ))}

                    </List>
                </div>
            )
        }
    }

    const client = () => {
        if (open2) {
            return (
                <div >
                    <List className={classes.sidebarList}>
                        {['Manage Orders', 'New Orders'].map((text, index) => (
                            <ListItem button className={classes.dropDownPanel} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}

                    </List>
                </div>
            )
        }
    }

    const store = () => {
        if (open3) {
            return (
                <div >
                    <List className={classes.sidebarList}>
                        {['Add New', 'All Products', 'Orders', 'Analytics', 'Reports'].map((text, index) => {
                            switch (text) {
                                case "Add New":
                                    return (
                                        <ListItem button onClick={() => {
                                            props.displayHandler("Add Product");
                                        }} className={classes.dropDownPanel} key={text}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    )
                                case "All Products":
                                    return (
                                        <ListItem button onClick={() => {
                                            props.displayHandler("All Products");
                                        }} className={classes.dropDownPanel} key={text}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    )

                                default:
                                    return (
                                        <ListItem button className={classes.dropDownPanel} key={text}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    )
                            }
                        })}

                    </List>
                </div>
            )
        }
    }


    return (
        <div className={classes.sidebarBg}>
            <div className={classes.sidebar}>

                <div className={classes.backCover}>
                    <div className={classes.sidebarWrapper}>
                        <div className={classes.sidebarMenu}>
                            <h3 className={classes.sidebarTitle}>
                                Dashboard
                            </h3>
                            <List className={classes.sidebarList}>
                                {['Home'].map((text, index) => (
                                    <ListItem button className={classes.sidebarListItem} key={text} onClick={() => {
                                        props.displayHandler("Home");
                                    }}>
                                        <ListItemIcon >
                                            {index === 0 ? <Home className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 1 ? <Timeline className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                        <div className={classes.sidebarMenu}>
                            {/* <h3 className={classes.sidebarTitle}>
                                Profile Management
                            </h3> */}
                            <List className={classes.sidebarList}>
                                {['Profile'].map((text, index) => (
                                    <ListItem button className={classes.sidebarListItem} key={text} onClick={() => {
                                        props.displayHandler("Profile");
                                    }}>
                                        <ListItemIcon >
                                            {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 0 ? <AccountCircle className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />

                                        {/* {!open ? <KeyboardArrowRight /> : <KeyboardArrowDown />} */}
                                    </ListItem>
                                ))}
                            </List>
                        </div>

                        <hr style={{ borderTop: '1px solid gray', opacity: '.2', marginBlockEnd: '5vh' }} />


                        <h3 className={classes.sidebarTitle}>
                            Management
                        </h3>
                        <div className={classes.sidebarMenu}>
                            <List className={classes.sidebarList}>
                                {['Store'].map((text, index) => (
                                    <ListItem button className={classes.sidebarListItem} key={text} onClick={() => {
                                        openStoreHandler();
                                        props.displayHandler("Store");
                                    }}>
                                        <ListItemIcon >
                                            {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 0 ? <LocalGroceryStoreIcon className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />

                                        {!open3 ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
                                    </ListItem>
                                ))}

                                {store()}
                            </List>
                        </div>
                        <div className={classes.sidebarMenu}>
                            <List className={classes.sidebarList}>
                                {['Staff'].map((text, index) => (
                                    <ListItem button onClick={openStaffHandler} className={classes.sidebarListItem} key={text}>
                                        <ListItemIcon >
                                            {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 0 ? <StorefrontIcon className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />

                                        {!open1 ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
                                    </ListItem>
                                ))}

                                {staff()}
                            </List>
                        </div>
                        <div className={classes.sidebarMenu}>
                            {/* <h3 className={classes.sidebarTitle}>
                                Orders Management
                            </h3> */}
                            <List className={classes.sidebarList}>
                                {['Client'].map((text, index) => (
                                    <ListItem button onClick={openClientHandler} className={classes.sidebarListItem} key={text}>
                                        <ListItemIcon >
                                            {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                            {index === 0 ? <ArchiveIcon className={classes.sidebarIcon} /> : <div></div>}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />

                                        {!open2 ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
                                    </ListItem>
                                ))}

                                {client()}
                            </List>
                            {/* <hr style={{ borderTop: '1px solid gray', opacity: '.2', marginBlockEnd: '5vh' }} /> */}
                        </div>
                        {/* <div className={classes.sidebarMenu}>
                            <h3 className={classes.sidebarTitle}>
                                Staff Area
                            </h3>
                            
                        </div> */}
                    </div>
                    {/* <Button variant="outlined" color="secondary" style={{ marginInline: '30%' }} onClick={() => { history.push("/Signup"); localStorage.removeItem("Login User") }}>Logout</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
