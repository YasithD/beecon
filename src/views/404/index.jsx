import React from "react";
import { CContainer, CRow, CCol, CImg, CButton } from "@coreui/react";
import img from "../../images/404.svg"

const Error = () => {
  return (
    <CContainer>
      <CRow className="justify-content-center mt-5">
        <CCol sm="8" className="">
          <CImg 
            src={img}
            fluid
            width="95%"
          />
        </CCol>
      </CRow>
      <CRow className="justify-content-center mt-5">
          <CCol sm="10">
            <div style={{fontFamily: "Poppins"}}>
                We can't seem to find that
            </div>
          </CCol>
      </CRow>
      <CRow className="justify-content-center mt-5">
          <CCol sm="10">
            <div style={{fontFamily: "Poppins"}}>
                The page you're looking for doesn't exist or has been moved
            </div>
          </CCol>
      </CRow>
      <CRow>
          <button> Back To Dashboard </button>
      </CRow>
    </CContainer>
  );
};

export default Error;
