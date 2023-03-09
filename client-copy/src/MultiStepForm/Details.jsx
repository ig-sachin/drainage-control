import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.phoneNo) errors.phoneNo = "Phone Number is required";
        if (values.phoneNo.length > 10 || values.phoneNo.length < 10) errors.phoneNo = "Enter only 10 digit Phone Number";
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.name && "input__error"}`}>
              <label>Name *</label>
              <Input name={"name"} />
              <p className={"error__feedback"}>{errors.name}</p>
            </div>
            <div className={`form__item ${errors.phoneNo && "input__error"}`}>
              <label>Phone Number *</label>
              <Input name={"phoneNo"} type={"tel"} pattern="[0-9]{10}" />
              <p className={"error__feedback"}>{errors.phoneNo}</p>
            </div>
            <div
              className={`form__item ${errors.profession && "input__error"}`}
            >
              <label>Email *</label>
              <Input name={"email"} type={"email"} />
              <p className={"error__feedback"}>{errors.email}</p>
            </div>
            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
