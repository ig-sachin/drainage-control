import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  const [base64Image, setBase64Image] = useState("");
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    console.log(base64Image);
    reader.readAsDataURL(file);
  }
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        values.photo = base64Image;
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.location) errors.location = "Please enter the location";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.problem && "input__error"}`}>
              <label>Problem *</label>
              <Input.TextArea name={"problem"} />
              <p className={"error__feedback"}>{errors.problem}</p>
            </div>
            <div className={`form__item ${errors.photo && "input__error"}`}>
              <label>Photo *</label>
              <input type="file" onChange={(e) => handlePhotoUpload(e)} />
              <p className={"error__feedback"}>{errors.photo}</p>
            </div>
            <div className={`form__item ${errors.location && "input__error"}`}>
              <label>Location *</label>
              <Input name={"location"} />
              <p className={"error__feedback"}>{errors.location}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
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
