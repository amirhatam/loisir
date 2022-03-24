import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Calculator() {
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow >
                <MDBCardTitle className='text-center my-md-5 display-4'>The Calculators</MDBCardTitle>
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
                                Find tribonacci numbers, between two points.
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
                                Did you ever want to know how many days old are you? Here you can find your age in days, hours ....
                            </MDBCardText>
                            <MDBCardLink href='/calculator/age-in-days'>Enter</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}