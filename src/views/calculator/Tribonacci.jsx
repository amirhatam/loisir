import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function Tribonacci() {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const [dateResult, setDateResult] = useState([])
    const [errorFirstInput, setErrorFirstInput] = useState("")
    const [errorSecondInput, setErrorSecondInput] = useState("")

    const signature = [0, 0, 1]

    function tribonacciP() {
        if (!firstInput) {
            setErrorFirstInput("Please enter number")
        } else {
            setErrorFirstInput("")
        }
        if (!secondInput) {
            setErrorSecondInput("Please enter number")
        } else {
            setErrorSecondInput("")
        }

        for (var i = 0; i < secondInput - 3; i++) { // iterate secondInput times
            let res = signature[i] + signature[i + 1] + signature[i + 2]
            if (res <= secondInput) {
                signature.push(res); // add last 3 array items and push to trib
            }
        }
        let allTriNum = signature.slice(0, secondInput)
        let filterNum = allTriNum.filter(n => {
            return n >= firstInput
        })
        setDateResult(filterNum);
    }

    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Calculators</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>tribonacci numbers</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>Finding tribonacci numbers between two numbers</MDBCardText>
                            <MDBRow>
                                <MDBCol md="6">

                                    <MDBInput label='Minimum Number' onChange={(e) => setFirstInput(parseInt(e.target.value))} id='form1' type='text' className='mb-md-3' />
                                    {
                                        errorFirstInput
                                            ?
                                            <p className='text-center text-danger'>{errorFirstInput}</p>
                                            :
                                            null
                                    }
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBInput label='Maximum Number' onChange={(e) => setSecondInput(parseInt(e.target.value))} id='form1' type='text' className='mb-md-3' />
                                    {
                                        errorSecondInput
                                            ?
                                            <p className='text-center text-danger'>{errorSecondInput}</p>
                                            :
                                            null
                                    }
                                </MDBCol>
                            </MDBRow>
                            {
                                dateResult
                                    ?
                                    <p className='text-center'>{dateResult.join(", ")}</p>
                                    :
                                    null
                            }
                            <MDBBtn onClick={tribonacciP}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer >
    );
}