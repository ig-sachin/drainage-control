import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import axios from 'axios';
import swal from 'sweetalert';
import Cookies from "universal-cookie";

const Review = () => {
  const { details, address, prev } = useContext(MultiStepFormContext);
  const cookies = new Cookies();

  const submit = async () => {
    if (!cookies.get('username') && !cookies.get('email') && !cookies.get('contact') && !cookies.get('fullName')) {
      swal("Session Expired!!", "Please Login Again to Submit your complain", "warning").then(() => window.location.replace("http://localhost:3000/login"));
      return;
    }
    const data = {
      name: details.name,
      phoneNo: details.phoneNo,
      email: details.email,
      problem: address.problem,
      photo: address.photo,
      location: address.location
    };
    await axios({ method: 'post', url: 'http://localhost:4040/complaint/submit-complaint', data }).then((res) => {
      if (res.status === 200) {
        swal("Submitted", "You complaint has been successfully sent to the administrator", "success").then(() => window.location.replace('http://localhost:3000/'));
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Name: {details.name}</p>
          <p>Phone Number: {details.phoneNo}</p>
          <p>Email: {details.email}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>Problem: {address.problem}</p>
          {address.photo && (
            <img
              src={address.photo}
              alt="uploaded"
              style={{ maxWidth: "300px", marginTop: "10px" }}
            />
          )}
          <p>Location: {address.location}</p>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={submit}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;
