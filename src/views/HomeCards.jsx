import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBRow, MDBCol, MDBCardLink } from 'mdb-react-ui-kit';
import "../assets/styles/HomeCards.css";


export default function HomeCards() {
    return (
        <MDBRow className='justify-content-center my-5'>
            <MDBCol size="3">
                <MDBCard background='primary' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/games' className='txt-white'>
                            The Game
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>PETITS CHEVAUX</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size="3">
                <MDBCard background='success' className='text-white mb-3 card-container' >
                    <MDBCardHeader >
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>SECONDS TO DATE</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size="3">
                <MDBCard background='danger' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className=''>MULTIPLY BIG NUMBERS</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='warning' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>TRIBONACCI NUMBERS</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='info' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>AGE IN DAYS</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='dark' className='text-white card-container' >
                    <MDBCardHeader className='border-bottom'>
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>SQUARE NUMBER</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* <MDBCol size="3">
                <MDBCard background='secondary' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Secondary card title</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol> */}

        </MDBRow>
    );
}