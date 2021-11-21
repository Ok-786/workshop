import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { TextField } from "formik-material-ui";
import {
  Card,
  CardContent,
  MuiThemeProvider,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { Fragment, useState } from "react";
import { object } from "yup";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@mui/system";
import { theme } from "./DashboardStyles";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function AddProduct() {
  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <Card>
          <CardContent
            style={{
              width: "90vh",
              paddingInline: "6vh",
              paddingBlockEnd: "3vh",
            }}
          >
            <FormikStepper
              initialValues={{}}
              onSubmit={async (values) => {
                console.log("1");
                const response = await fetch(
                  "http://localhost:8000/api/auth/products/create",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      token: localStorage.token,
                    },
                    body: JSON.stringify(values),
                  }
                );

                const parseRes = await response.json();

                console.log("asd");
                console.log(parseRes);
                setTimeout(function () {
                  if (parseRes.p) {
                    toast.success(parseRes.p);
                  } else {
                    toast.error(parseRes);
                  }
                }, 3000);
              }}
            >
              <FormikStep
                label="General"
                validationSchema={object({
                  productName: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  type: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  brand: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                  regularPrice: Yup.number().required("Required"),
                  salePrice: Yup.number().required("Required"),
                  color: Yup.string()
                    .min(2, "Too Short!")
                    .max(50, "Too Long!")
                    .required("Required"),
                })}
              >
                <Box paddingBottom={3}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="productName"
                    component={TextField}
                    label="Title"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="type"
                    component={TextField}
                    label="Type"
                  />
                </Box>
                <Box paddingBottom={3}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="brand"
                    component={TextField}
                    label="Brand"
                  />
                  <Field
                    style={{ width: "49%", marginInlineStart: "1%" }}
                    name="color"
                    component={TextField}
                    label="Color"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="regularPrice"
                    type="number"
                    component={TextField}
                    label="Standard Price(PKR)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineStart: "1%" }}
                    name="salePrice"
                    type="number"
                    component={TextField}
                    label="Sale Price(PKR)"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                label="Inventory"
                validationSchema={object({
                  quantity: Yup.number().required("Required"),
                  quality: Yup.string().required("Required"),
                  length: Yup.number().required("Required"),
                  height: Yup.number().required("Required"),
                  width: Yup.number().required("Required"),
                  weight: Yup.number().required("Required"),
                })}
              >
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="quantity"
                    type="number"
                    component={TextField}
                    label="Quantity"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="quality"
                    component={TextField}
                    label="Quality"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="length"
                    type="number"
                    component={TextField}
                    label="length(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="height"
                    type="number"
                    component={TextField}
                    label="Height(cm)"
                  />
                </Box>
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="width"
                    type="number"
                    component={TextField}
                    label="Width(cm)"
                  />
                  <Field
                    style={{ width: "49%", marginInlineEnd: "1%" }}
                    name="weight"
                    type="number"
                    component={TextField}
                    label="Weight(cm)"
                  />
                </Box>
              </FormikStep>
              <FormikStep
                label="More Info"
                validationSchema={object({
                  description: Yup.string().required("Required"),
                })}
              >
                <Box paddingBottom={2}>
                  <Field
                    style={{ width: "80%", marginInlineEnd: "1%" }}
                    multiline={true}
                    rows={10}
                    name="description"
                    component={TextField}
                    label="Enter Complete Description"
                  />
                </Box>
              </FormikStep>
            </FormikStepper>
          </CardContent>
        </Card>
      </MuiThemeProvider>
    </Fragment>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({
  children,
  ...props
}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [isLoading, setIsLoading] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          setIsLoading(true);
          await props.onSubmit(values, helpers);
          await setTimeout(() => {
            setIsLoading(false);
            helpers.resetForm();
            setStep(0);
          }, 4000);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <Form autoComplete="off">
        <Spinner loading={isLoading} />
        <Stepper activeStep={step} alternativeLabel>
          {childrenArray.map((child) => (
            <Step key={child.props.label}>
              <StepLabel>{child.props.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ marginBlockStart: "50px" }}></div>
        {currentChild}
        <div style={{ marginBlockStart: "20px" }}>
          <Button
            disabled={step === 0 && true}
            variant="contained"
            color="primary"
            onClick={() => setStep((s) => s - 1)}
            style={{ marginInlineEnd: "20px" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color={isLastStep() ? "primary" : "primary"}
            type="submit"
          >
            {isLastStep() ? "Submit" : "Next"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
