import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCardHeader, MDBRow, MDBCol, MDBCardLink, Link } from 'mdb-react-ui-kit';
import "../assets/styles/HomeCards.css";


export default function HomeCards() {
    return (
        <MDBRow className='justify-content-center my-5'>
            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='primary' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/games' className='txt-white p-fs'>
                            The Game
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>PETITS CHEVAUX</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='secondary' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        {/* <MDBCardLink href='/games' className='txt-white p-fs'>
                            The Game
                        </MDBCardLink> */}
                        <a className=" nav-link" to="/games"> games</a>

                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>HANGMAN</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='success' className='text-white mb-3 card-container' >
                    <MDBCardHeader >
                        <MDBCardLink href='/calculator' className='txt-white p-fs'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>SECONDS TO DATE</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='danger' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white p-fs'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>MULTIPLY BIG NUMBERS</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='warning' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white p-fs'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>TRIBONACCI NUMBERS</MDBCardTitle>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='info' className='text-white mb-3 card-container' >
                    <MDBCardHeader>
                        <MDBCardLink href='/calculator' className='txt-white p-fs'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>AGE IN DAYS</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol className='col-md-3 col-6'>
                <MDBCard background='dark' className='text-white card-container' >
                    <MDBCardHeader className='border-bottom'>
                        <MDBCardLink href='/calculator' className='txt-white p-fs'>
                            The Calculator
                        </MDBCardLink>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle className='h6-fs'>SQUARE NUMBER</MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>



        </MDBRow>
    );
}