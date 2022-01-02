import React, { useState } from 'react';
import ClientWorkoutInfoStyles from './DashboardStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './AddStaff.css';
import ImageUpload from './ImageUpload';
import { toast } from 'react-toastify';

export default function AddStaff() {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('First Name is required'),
        lastName: yup
            .string()
            .required('Last Name is required'),
        email: yup
            .string()
            .email()
            .required('Email is required'),
        phoneNumber: yup
            .number()
            .required('Phone Number is required'),
        address: yup
            .string()
            .required('Address is required'),
        operationalArea: yup
            .string()
            .required('Operational Area is required'),
        idNumber: yup
            .string()
            .required('Id Number is required'),
        education: yup
            .string()
            .required('Education is required'),
        country: yup
            .string()
            .required('Country is required'),
        state: yup
            .string()
            .required('State is required'),
        experience: yup
            .string()
            .required('Experience is required'),
        skills: yup
            .string()
            .required('Skills is required'),
        additionalDetails: yup.string()
    });

    const classes = ClientWorkoutInfoStyles();
    const [image, setImage] = useState();
    const formik = useFormik({
        initialValues: {
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                console.log('im clicked')
                const formData = new FormData();
                formData.append('firstName', values.firstName);
                formData.append('lastName', values.lastName);
                formData.append('email', values.email);
                formData.append('address', values.address);
                formData.append('operationalArea', values.operationalArea);
                formData.append('idNumber', values.idNumber);
                formData.append('education', values.education);
                formData.append('country', values.country);
                formData.append('state', values.state);
                formData.append('experience', values.experience);
                formData.append('skills', values.skills);
                formData.append('file', image);
                formData.append('additionalDetails', values.additionalDetails);
                formData.append('phoneNumber', values.phoneNumber);
                console.log(formData);
                console.log(image);

                setIsLoading(true);
                var response;
                try {
                    response = await fetch('http://localhost:8000/api/auth/staff/create', {
                        method: 'POST',
                        headers: { token: localStorage.token },
                        body: formData
                    });
                } catch (err) {
                    console.log("aaa"+err);
                }

                const parseRes = await response.json();
                if(parseRes==="Staff Created") {
                    toast.success("New Staff Created!");
                } else {
                    
                    toast.error(parseRes);
                }
                console.log('im in')

                setIsLoading(false);

                formik.resetForm();

            } catch (error) {
                console.log(error);
            }
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
                                <div className="col-md-6"><label className="labels" style={{ marginBlockEnd: '5px' }} >First Name</label><TextField name="firstName" size="small" variant="outlined" type="text" className="form-control" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange} /></div>
                                <div className="col-md-6"><label className="labels" style={{ marginBlockEnd: '5px' }}>Last Name</label><TextField name="lastName" size="small" variant="outlined" type="text" className="form-control" value={formik.values.lastName} onChange={formik.handleChange} placeholder="Last Name" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Email</label><TextField size="small" variant="outlined" type="email" className="form-control" placeholder="Enter Email" name="email" value={formik.values.email} onChange={formik.handleChange} /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Mobile Number</label><TextField name="phoneNumber" size="small" variant="outlined" type="number" className="form-control" placeholder="Enter Phone Number" value={formik.values.phoneNumber} onChange={formik.handleChange} /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Address</label><TextField size="small" name="address" variant="outlined" type="text" className="form-control" placeholder="Enter Address" value={formik.values.address} onChange={formik.handleChange} /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Area</label><TextField size="small" name="operationalArea" variant="outlined" type="text" className="form-control" placeholder="Enter Operational Area" value={formik.values.operationalArea} onChange={formik.handleChange} /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>ID Number</label><TextField size="small" name="idNumber" variant="outlined" type="text" className="form-control" placeholder="Enter ID Number" value={formik.values.idNumber} onChange={formik.handleChange} /></div>
                                <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Education</label><TextField size="small" name="education" variant="outlined" type="text" className="form-control" placeholder="Education" value={formik.values.education} onChange={formik.handleChange} /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Country</label><TextField name="country" size="small" variant="outlined" type="text" className="form-control" placeholder="country" value={formik.values.country} onChange={formik.handleChange} /></div>
                                <div className="col-md-6"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>State/Region</label><TextField name="state" size="small" variant="outlined" type="text" className="form-control" value={formik.values.state} onChange={formik.handleChange} placeholder="state" /></div>
                            </div>
                            <div className="mt-5 text-center"><Button fullWidth style={{ marginTop: '1vh' }} color="secondary" variant="contained" type="submit">Save Profile</Button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><Button color="secondary" variant="outlined" type="submit">Experience</Button></div><br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Experience</label><TextField name="experience" size="small" variant="outlined" type="text" className="form-control" placeholder="experience" value={formik.values.experience} onChange={formik.handleChange} /></div> <br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Skills</label><TextField name="skills" size="small" variant="outlined" type="text" className="form-control" placeholder="skills" value={formik.values.skills} onChange={formik.handleChange} /></div> <br />
                            <div className="col-md-12"><label className="labels" style={{ marginBlockStart: '15px', marginBlockEnd: '5px' }}>Additional Details</label><TextField name="additionalDetails" multiline={true} rows={15} size="small" variant="outlined" type="text" className="form-control" placeholder="Enter additional details" value={formik.values.additionalDetails} onChange={formik.handleChange} /></div>
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
