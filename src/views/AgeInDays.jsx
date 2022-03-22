import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function AgeInDays() {
    const [y, setYear] = useState("")
    const [m, setMonth] = useState("")
    const [d, setDays] = useState("")
    const [daysResult, setDaysResult] = useState("")



    // function ageInDays() {
    //     if (!inputValue) {
    //         setErrorFirstInput("Please enter number")
    //     } else {
    //         setErrorFirstInput("")
    //     }

    // }
    const ageInDays = () => {
        let getDays = 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old'
        if (getDays) {
            setDaysResult(getDays);
        }
    }
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Calculators</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Age in days</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>Find your age in days</MDBCardText>
                            <MDBRow>
                                <MDBCol md="3">
                                    <MDBInput label='Year' onChange={(e) => setYear(parseInt(e.target.value))} id='form1' type='text' />
                                </MDBCol>
                                <MDBCol md="3">
                                    <MDBInput label='Month' onChange={(e) => setMonth(parseInt(e.target.value))} id='form1' type='text' />
                                </MDBCol>
                                <MDBCol md="3">
                                    <MDBInput label='Days' onChange={(e) => setDays(parseInt(e.target.value))} id='form1' type='text' />
                                </MDBCol>
                            </MDBRow>
                            {/* {
                                errorFirstInput
                                    ?
                                    <p className='text-center text-danger'>{errorFirstInput}</p>
                                    :
                                    null
                            } */}

                            {
                                daysResult
                                    ?
                                    <p className='text-center my-md-4'>{daysResult}</p>
                                    :
                                    null
                            }
                            <MDBBtn onClick={ageInDays} className="mt-md-3">Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer >
    );
}