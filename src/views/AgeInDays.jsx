import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function AgeInDays() {
    const [inputValue, setInputValue] = useState("")
    const [dateResult, setDateResult] = useState([])
    // EXE (2015, 11, 1)

    // function ageInDays() {
    //     if (!inputValue) {
    //         setErrorFirstInput("Please enter number")
    //     } else {
    //         setErrorFirstInput("")
    //     }

    // }
    const ageInDays = (y, m, d) => 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';

    console.log();
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Calculators</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Age in days</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>Find your age in days</MDBCardText>
                            <MDBInput label='Minimum Number' onChange={(e) => setFirstInput(parseInt(e.target.value))} id='form1' type='text' className='mb-md-3' />
                            {/* {
                                errorFirstInput
                                    ?
                                    <p className='text-center text-danger'>{errorFirstInput}</p>
                                    :
                                    null
                            } */}

                            {/* {
                                dateResult
                                    ?
                                    <p className='text-center'>{dateResult.join(", ")}</p>
                                    :
                                    null
                            } */}
                            <MDBBtn onClick={ageInDays}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer >
    );
}