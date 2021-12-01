import React, { useState } from 'react';
import ClientWorkoutInfoStyles from './DashboardStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './AddStaff.css';
import ImageUpload from './ImageUpload';

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
    const [image, setImage] = useState(new Date());
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
        <form onSubmit={formik.handleSubmit}>

            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <ImageUpload center id="file" name="file" onInput={setImage} rounded={true} errorText="Please provide an image." />
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right" >Create Staff Profile</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels" style={{ marginBlockEnd: '5px' }} >First Name</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="First Name" value="" /></div>
                                <div className="col-md-6"><label className="labels" style={{ marginBlockEnd: '5px' }}>Last Name</label><TextField size="small" variant="outlined" type="text" className="form-control" value="" placeholder="Last Name" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Email</label><TextField size="small" variant="outlined" type="email" className="form-control" placeholder="Enter Email" value="" /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Mobile Number</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="Enter Phone Number" value="" /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Address</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="Enter Address" value="" /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Area</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="Enter Operational Area" value="" /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>ID Number</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="Enter ID Number" value="" /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Education</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="Education" value="" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Country</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="country" value="" /></div>
                                <div className="col-md-6"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>State/Region</label><TextField size="small" variant="outlined" type="text" className="form-control" value="" placeholder="state" /></div>
                            </div>
                            <div className="mt-5 text-center"><Button fullWidth style={{ marginTop: '1vh' }} color="secondary" variant="contained" type="submit">Save Profile</Button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><Button   color="secondary" variant="outlined" type="submit">Experience</Button></div><br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Experience</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Skills</label><TextField size="small" variant="outlined" type="text" className="form-control" placeholder="skills" value="" /></div> <br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Additional Details</label><TextField multiline={true} rows={15} size="small" variant="outlined" type="text" className="form-control" placeholder="Enter additional details" value="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

// {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
//                     <DatePicker
//                         label="Date of Birth"
//                         value={date}
//                         onChange={(newValue) => {
//                             setDate(newValue);
//                         }}
//                         renderTextField size="small"  variant="outlined"={(params) => <TextField size="small"  variant="outlined" style={{ width: '49%', marginInlineStart: '1%' }} className={classes.innerFormDate} variant="outlined"  {...params} />}
//                     />
//                 </LocalizationProvider> */}
