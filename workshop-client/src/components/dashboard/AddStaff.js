import React, { useState } from 'react';
import ClientWorkoutInfoStyles from './DashboardStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function AddStaff() {
    const validationSchema = yup.object({
        fullName: yup
            .string('Enter your fullName')
            .required('fullName is required'),
        email: yup
            .string('Enter your email')
            .email()
            .required('email is required'),
        phone: yup
            .number('Enter your phone')
            .required('phone is required'),
        address: yup
            .string('Enter your address')
            .required('Address is required'),
        expertise: yup
            .string('Enter expertise')
            .required('expertise is required'),
        age: yup
            .number('Enter age')
            .required('age is required'),
        cnic: yup
            .number('Enter Cnic')
            .required('Cnic is required'),
    });

    const classes = ClientWorkoutInfoStyles();
    const [date, setDate] = useState(new Date());
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            address: '',
            expertise: '',
            cnic: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={classes.form}>
            <form onSubmit={formik.handleSubmit}>

                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="number"
                    variant="outlined"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="cnic"
                    name="cnic"
                    label="CNIC"
                    variant="outlined"
                    value={formik.values.cnic}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.cnic)}
                    helperText={formik.touched.cnic && formik.errors.cnic}
                />
                <TextField
                    className={classes.innerForm}
                    style={{ width: '49%', marginInlineEnd: '1%' }}
                    id="expertise"
                    name="expertise"
                    label="Expertise"
                    type="string"
                    variant="outlined"
                    value={formik.values.expertise}
                    onChange={formik.handleChange}
                    error={formik.touched.expertise && Boolean(formik.errors.expertise)}
                    helperText={formik.touched.expertise && formik.errors.expertise}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date of Birth"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ width: '49%', marginInlineStart: '1%' }} className={classes.innerFormDate} variant="outlined"  {...params} />}
                    />
                </LocalizationProvider>
                {/* <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="calf"
                    name="calf"
                    label="Calf"
                    type="number"
                    variant="outlined"
                    value={formik.values.calf}
                    onChange={formik.handleChange}
                    error={formik.touched.calf && Boolean(formik.errors.calf)}
                    helperText={formik.touched.calf && formik.errors.calf}
                />
                <TextField
                    className={classes.innerForm}
                    fullWidth
                    id="wrist"
                    name="wrist"
                    label="Wrist"
                    type="number"
                    variant="outlined"
                    value={formik.values.wrist}
                    onChange={formik.handleChange}
                    error={formik.touched.wrist && Boolean(formik.errors.wrist)}
                    helperText={formik.touched.wrist && formik.errors.wrist}
                /> */}
                <Button fullWidth style={{ marginTop: '1vh' }} color="secondary" variant="contained" type="submit">
                    Submit
                </Button>
            </form>

        </div>
    );
};
