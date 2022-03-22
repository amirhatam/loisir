import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function LargeNumbers() {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const [dateResult, setDateResult] = useState("")

    function multiply() {
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
    }




    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Calculators</MDBCardTitle>
                <MDBCol md='5'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Multiplying large numbers</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>Multiplying very large numbers.</MDBCardText>
                            <MDBInput label='Enter First Number' onChange={(e) => setFirstInput(e.target.value)} id='form1' type='text' className='' />
                            <MDBCardText className='my-md-2  text-center text-warning '>X</MDBCardText>
                            <MDBInput label='Enter Seconds Number' onChange={(e) => setSecondInput(e.target.value)} id='form1' type='text' className='mb-md-3' />
                            <MDBCardText className='my-md-2 text-center text-warning'>=</MDBCardText>
                            {
                                dateResult
                                    ?
                                    <p className='text-center text-success'>{dateResult}</p>
                                    :
                                    null
                            }
                            <MDBBtn onClick={multiply}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}