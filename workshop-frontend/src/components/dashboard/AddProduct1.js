import React, { useState } from 'react';
import ClientWorkoutInfoStyles from './DashboardStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from '@mui/system';
import ImageUpload from './ImageUpload';


export default function AddProduct1() {
    const handleFileUpload = (event) => {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: reader.result
            });
        };
        reader.readAsDataURL(file);
    }

    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')
            .required('name is required'),
        type: yup
            .string('Enter your type')
            .required('type is required'),
        brand: yup
            .string('Enter your brand')
            .required('brand is required'),
        saleprice: yup
            .number('Enter your saleprice')
            .required('saleprice is required'),
        retailprice: yup
            .number('Enter retailprice')
            .required('retailprice is required'),
        part_ID: yup
            .string('Enter part_ID')
            .required('part_ID is required'),
        quantity: yup
            .string('Enter Quantity')
            .required('part_ID is required'),
        model: yup
            .string('Enter Model')
            .required('part_ID is required'),
        modelYear: yup
            .string('Enter Model Year')
            .required('part_ID is required'),
        make: yup
            .string('Enter Make')
            .required('part_ID is required'),
    });

    const classes = ClientWorkoutInfoStyles();
    const [image, setImage] = useState();
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            brand: '',
            saleprice: '',
            retailprice: '',
            part_ID: '',
            quantity: '',
            model: '',
            modelYear: '',
            make: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('type', values.type);
                formData.append('brand', values.brand);
                formData.append('saleprice', values.saleprice);
                formData.append('retailprice', values.retailprice);
                formData.append('part_ID', values.part_ID);
                formData.append('quantity', values.quantity);
                formData.append('model', values.model);
                formData.append('modelYear', values.modelYear);
                formData.append('make', values.make);
                formData.append('file', image);
                console.log(formData);

                const response = await fetch('http://localhost:8000/api/auth/products/create', {
                    method: 'POST',
                    headers: { token: localStorage.token },
                    body: formData
                });

                const parseRes = await response.json();
                console.log(parseRes);
                console.log('im in')

            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className={classes.form}>
            <form onSubmit={formik.handleSubmit}>

                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="name"
                    name="name"
                    label="Product Name"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="type"
                    name="type"
                    label="Type"
                    type="type"
                    variant="outlined"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="brand"
                    name="brand"
                    label="Brand"
                    variant="outlined"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    error={formik.touched.brand && Boolean(formik.errors.brand)}
                    helperText={formik.touched.brand && formik.errors.brand}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="part_ID"
                    name="part_ID"
                    label="part_ID"
                    variant="outlined"
                    value={formik.values.part_ID}
                    onChange={formik.handleChange}
                    error={formik.touched.saleprice && Boolean(formik.errors.part_ID)}
                    helperText={formik.touched.part_ID && formik.errors.part_ID}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="saleprice"
                    name="saleprice"
                    type="number"
                    label="Salebprice"
                    variant="outlined"
                    value={formik.values.saleprice}
                    onChange={formik.handleChange}
                    error={formik.touched.saleprice && Boolean(formik.errors.saleprice)}
                    helperText={formik.touched.saleprice && formik.errors.saleprice}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="retailprice"
                    name="retailprice"
                    label="Retail Price"
                    type="number"
                    variant="outlined"
                    value={formik.values.retailprice}
                    onChange={formik.handleChange}
                    error={formik.touched.retailprice && Boolean(formik.errors.retailprice)}
                    helperText={formik.touched.retailprice && formik.errors.retailprice}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                    helperText={formik.touched.quantity && formik.errors.quantity}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="make"
                    name="make"
                    label="Make"
                    variant="outlined"
                    value={formik.values.make}
                    onChange={formik.handleChange}
                    error={formik.touched.make && Boolean(formik.errors.make)}
                    helperText={formik.touched.make && formik.errors.make}
                />
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="model"
                    name="model"
                    label="Model"
                    variant="outlined"
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    error={formik.touched.model && Boolean(formik.errors.model)}
                    helperText={formik.touched.model && formik.errors.model}
                />
                {/* <Box paddingBottom={2}>
                    <input
                        accept="image/*"
                        name="file"
                        // className={classes.input}
                        // style={{ display: "none" }}
                        onChange={(event) => {
                            setImage(event.currentTarget.files[0]);
                        }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Button
                            variant="contained"
                            component="span"
                        // className={classes.button}
                        >
                            Upload Image
                        </Button>
                    </label>
                </Box> */}
                
                <TextField
                    className={classes.innerForm}
                    style={{width:'49%'}}
                    id="modelYear"
                    name="modelYear"
                    label="Model Year"
                    variant="outlined"
                    value={formik.values.modelYear}
                    onChange={formik.handleChange}
                    error={formik.touched.modelYear && Boolean(formik.errors.modelYear)}
                    helperText={formik.touched.modelYear && formik.errors.modelYear}
                />
                <ImageUpload center id="image" onInput={setImage} errorText="Please provide an image." />
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date of Birth"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField style={{ width: '49%', marginInlineStart: '1%' }} className={classes.innerFormDate} variant="outlined"  {...params} />}
                    />
                </LocalizationProvider> */}

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
