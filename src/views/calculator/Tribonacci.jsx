import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import ModalPage from '../../components/ModalPage';

export default function Tribonacci() {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const [dateResult, setDateResult] = useState([])
    const [err, setErr] = useState([])



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
        setDateResult(filterNum.join(', '));
    }

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-4'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-md-5 my-3'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs my-md-3 my-4'>tribonacci numbers</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>Finding tribonacci numbers between two numbers</MDBCardText>
                                <MDBRow>
                                    <MDBCol md="6">

                                        <MDBInput label='Enter First Number' onChange={(e) => setFirstInput(parseInt(e.target.value))} id='form1' type='text' className='mb-3' />
                                        {
                                            errorFirstInput
                                                ?
                                                <p className='text-center text-danger'>{errorFirstInput}</p>
                                                :
                                                null
                                        }
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput label='Enter Seconds Number' onChange={(e) => setSecondInput(parseInt(e.target.value))} id='form1' type='text' className='mb-3' />
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
                                    dateResult != 0
                                        ?
                                        <ModalPage res={dateResult} />
                                        :
                                        null
                                }
                                <MDBBtn color="dark" className='my-4' onClick={tribonacciP}>Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </section>
    );
}