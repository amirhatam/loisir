import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Calculator() {
    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-md-5'>
                <MDBRow className='justify-content-center'>
                    <MDBCardTitle className='text-center my-md-5 my-4 display-5'>The Calculators</MDBCardTitle>
                    <MDBCol className='col-md-4 col-9 my-3'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase h6-fs'>Seconds to date</MDBCardTitle>
                                <br />
                                <MDBCardText className='p-fs'>
                                    Convert seconds to date( years, months, days...)
                                </MDBCardText>
                                <MDBCardLink href='/calculator/seconds-to-date'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='col-md-4 col-9 my-3'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase h6-fs'>Multiplying large numbers</MDBCardTitle>
                                <br />
                                <MDBCardText className='p-fs'>
                                    Multiplying very large numbers.
                                </MDBCardText>
                                <MDBCardLink href='/calculator/large-numbers'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='col-md-4 col-9 my-3'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase h6-fs'>Tribonacci</MDBCardTitle>
                                <br />
                                <MDBCardText className='p-fs'>
                                    Find tribonacci numbers, between two numbers.
                                </MDBCardText>
                                <MDBCardLink href='/calculator/tribonacci'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='col-md-4 col-9 my-3'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase h6-fs'>Age in days</MDBCardTitle>
                                <br />
                                <MDBCardText className='p-fs'>
                                    find your age in days, hours, minutes, seconds
                                </MDBCardText>
                                <MDBCardLink href='/calculator/age-in-days'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className='col-md-4 col-9 my-3'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase h6-fs'>Square number</MDBCardTitle>
                                <br />
                                <MDBCardText className='p-fs'>
                                    Find square numbers, between two numbers.
                                </MDBCardText>
                                <MDBCardLink href='/calculator/square-numbers'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}