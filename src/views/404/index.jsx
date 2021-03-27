import React from 'react'
import {
    CCard,
    CCardBody,
    CRow,
    CCol
} from "@coreui/react" 

const Error = () => {
    return (
        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="3" style={{backgroundColor: "red"}}> Col 1 </CCol>
                    <CCol sm="9" style={{backgroundColor: "blue"}}> Col 2 </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default Error

