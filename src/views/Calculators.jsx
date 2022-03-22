import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Calculator() {
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow >
                <MDBCardTitle className='text-center my-md-5 display-4'>Des Calculatrices</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <br />
                            <MDBCardText>
                                The calculated seconds will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                            </MDBCardText>
                            <MDBCardLink href='/calculator/seconds-to-date'>Enter</MDBCardLink>
                            <MDBCardLink target="_blank" href='https://github.com/amirhatam/codewars/blob/main/4-kyu/human-readable-duration/human-readable-duration.js'>Source Code</MDBCardLink>
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
                            <MDBCardLink href='https://github.com/amirhatam/codewars/blob/main/4-kyu/multiply-nums-as-str/multiply-nums-as-str.js'>Source Code</MDBCardLink>
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
                            <MDBCardLink href='#'>Source Code</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}