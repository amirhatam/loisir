import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Calculator() {
    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-md-5'>
                <MDBRow >
                    <MDBCardTitle className='text-center my-md-5 display-5'>The Calculators</MDBCardTitle>
                    <MDBCol md='4'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    Convert seconds to date( years, months, days...)
                                </MDBCardText>
                                <MDBCardLink href='/calculator/seconds-to-date'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Multiplying large numbers</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    Multiplying very large numbers.
                                </MDBCardText>
                                <MDBCardLink href='/calculator/large-numbers'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Tribonacci</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    Find tribonacci numbers, between two numbers.
                                </MDBCardText>
                                <MDBCardLink href='/calculator/tribonacci'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className='mt-md-5'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Age in days</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    find your age in days, hours, minutes, seconds
                                </MDBCardText>
                                <MDBCardLink href='/calculator/age-in-days'>Enter</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4' className='mt-md-5'>
                        <MDBCard >
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Square number</MDBCardTitle>
                                <br />
                                <MDBCardText className=''>
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