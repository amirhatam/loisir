import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import ModalPage from '../../components/ModalPage';

export default function LargeNumbers() {
    const [firstInput, setFirstInput] = useState([])
    const [secondInput, setSecondInput] = useState("")
    const [dateResult, setDateResult] = useState("")
    const [err, setErr] = useState([])


    function multiply() {
        if (firstInput && secondInput) {

            var aa = firstInput.split('').reverse();
            var bb = secondInput.split('').reverse();


            var stack = [];

            for (var i = 0; i < aa.length; i++) {
                for (var j = 0; j < bb.length; j++) {
                    var m = aa[i] * bb[j];
                    stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
                }
            }

            for (var i = 0; i < stack.length; i++) {
                var num = stack[i] % 10;
                var move = Math.floor(stack[i] / 10);
                stack[i] = num;

                if (stack[i + 1])
                    stack[i + 1] += move;
                else if (move != 0)
                    stack[i + 1] = move;
            }
            let resFinal = stack.reverse().join('').replace(/^(0(?!$))+/, "");
            setDateResult(resFinal)
        } else {
            setErr('Please make sure all fields are filled in correctly')
        }
    }


    const getFirstInputValue = (e) => {
        let userValue = e.target.value

        if (userValue.match(/[0-9]/gm)) {
            setFirstInput(userValue)
            setErr('')
        } else {
            setErr('Please enter numbers only')
        }
    }
    const getSecInputValue = (e) => {
        const userValue = e.target.value

        if (userValue.match(/[0-9]/gm)) {
            setSecondInput(userValue)
            setErr('')
        } else {
            setErr('Please enter numbers only')
        }
    }

    return (

        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-4'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-5 col-10'>
                        <MDBCard className='my-md-5 my-3' >
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs'>Multiplying large numbers</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>Multiply two very large numbers</MDBCardText>

                                <MDBRow className='justify-content-center'>
                                    <MDBCol className='col-5'>
                                        <MDBInput label='Enter First Number' onChange={getFirstInputValue} id='form1' type='text' className='' />
                                    </MDBCol>
                                    <MDBCol className='col-1'>
                                        <MDBCardText className='my-2 text-center text-danger '>X</MDBCardText>
                                    </MDBCol>
                                    <MDBCol className='col-5'>
                                        <MDBInput label='Enter Seconds Number' onChange={getSecInputValue} id='form1' type='text' className='mb-md-3' />
                                    </MDBCol>
                                </MDBRow>
                                {
                                    dateResult
                                        ?
                                        <ModalPage res={dateResult} />
                                        :
                                        <p className='text-center text-danger mt-1 mb-0'>{err}</p>
                                }
                                <MDBBtn color="dark" className='my-4' onClick={multiply}>Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </section>
    );
}