import React from 'react';
import ClientWorkoutInfoStyles from './DashboardStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
    workshopName: yup
        .string('Enter your workshopName')
        .required('workshopName is required'),
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
    businessType: yup
        .string('Enter Businesstype')
        .required('Businesstype is required'),
    outlets: yup
        .number('Enter Businesstype')
        .required('Businesstype is required'),
});

export default function Profile() {
    const classes = ClientWorkoutInfoStyles();
    const formik = useFormik({
        initialValues: {
            workshopName: '',
            email: '',
            phone: '',
            address: '',
            businessType: '',
            outlets: '',
            calf: '',
            wrist: ''
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
                    id="workshopName"
                    name="workshopName"
                    label="Workshop Name"
                    variant="outlined"
                    value={formik.values.workshopName}
                    onChange={formik.handleChange}
                    error={formik.touched.workshopName && Boolean(formik.errors.workshopName)}
                    helperText={formik.touched.workshopName && formik.errors.workshopName}
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
                    label="address"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%', marginInlineEnd:'1%'}}
                    id="businessType"
                    name="businessType"
                    label="Business Type"
                    type="string"
                    variant="outlined"
                    value={formik.values.businessType}
                    onChange={formik.handleChange}
                    error={formik.touched.businessType && Boolean(formik.errors.businessType)}
                    helperText={formik.touched.businessType && formik.errors.businessType}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%', marginInlineStart:'1%'}}
                    id="outlets"
                    name="outlets"
                    label="Outlets"
                    type="number"
                    variant="outlined"
                    value={formik.values.outlets}
                    onChange={formik.handleChange}
                    error={formik.touched.outlets && Boolean(formik.errors.outlets)}
                    helperText={formik.touched.outlets && formik.errors.outlets}
                />
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
