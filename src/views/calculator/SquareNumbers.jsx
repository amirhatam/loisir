import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function SquareNumbers() {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const [result, setResult] = useState([])
    const [errorFirstInput, setErrorFirstInput] = useState("")
    const [errorSecondInput, setErrorSecondInput] = useState("")

    // const signature = [0, 0, 1]

    function isSquare() {
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

        let res = []
        for (var i = firstInput; i <= secondInput; i++) {
            if (Math.sqrt(i) % 1 === 0) {
                res.push(i)
            }
        }
        setResult(res)
    }

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-4'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-md-5 my-3'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs my-md-3 my-4'>square numbers</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>Finding square numbers, between two numbers.</MDBCardText>
                                <MDBRow>
                                    <MDBCol md="6">

                                        <MDBInput label='First Number' onChange={(e) => setFirstInput(parseInt(e.target.value))} id='form1' type='text' className='mb-3' />
                                        {
                                            errorFirstInput
                                                ?
                                                <p className='text-center text-danger'>{errorFirstInput}</p>
                                                :
                                                null
                                        }
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput label='Second Number' onChange={(e) => setSecondInput(parseInt(e.target.value))} id='form1' type='text' className='mb-3' />
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
                                    result
                                        ?
                                        <p className='text-center'>{result.join(", ")}</p>
                                        :
                                        null
                                }
                                <MDBBtn color="dark" onClick={isSquare}>Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer >
        </section>
    );
}