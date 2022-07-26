import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import ModalPage from '../../components/ModalPage';

export default function Predict() {
    const [ages, setAges] = useState([])
    const [err, setErr] = useState("")
    const [ageResult, setAgeResult] = useState('')




    const getPredict = () => {
        //Convert string to array of numbers
        let list = JSON.parse(("[" + ages + "]"));

        //Multiply each number by itself
        let multiply = list.map(e => e * e)
        //Add them all together
        let addAll = multiply.reduce((a, b) => a + b)

        //Take the square root of the result & Divide by two
        setAgeResult(Math.floor(Math.sqrt(addAll) / 2));
    }


    const getInputValue = (e) => {
        const userValue = e.target.value

        if (userValue.match(/[0-9]/gm)) {
            setAges(userValue)
            setErr('')
        } else if (userValue.length == 0) {
            setErr('')
        }
        else {
            setErr('Please enter numbers only')
        }
    }

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-4'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-md-5 my-3'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs my-md-3 my-4'>Predict your age</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>
                                    Predict your age with list of ages when each of your great-grandparent died
                                </MDBCardText>
                                <MDBInput label='Enter their ages. Ex: 70, 65, ... ' onChange={getInputValue} id='form1' type='text' className='mt-4 mb-0' />
                                {
                                    ageResult
                                        ?
                                        <ModalPage res={ageResult} />
                                        :
                                        <p className='text-center text-danger my-0'>{err}</p>
                                }
                                <MDBBtn className='mt-5' color="dark" onClick={getPredict}>Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </section>
    )
}
