import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Calculator() {
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow >
                <MDBCardTitle className='text-center my-md-5 display-4'>Des Calculatrices</MDBCardTitle>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <br />
                            <MDBCardText>
                                The calculated seconds will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                            </MDBCardText>
                            <MDBCardLink href='/calculator/seconds-to-date'>Enter</MDBCardLink>
                            <MDBCardLink href='#'>Source Code</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <br />
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBCardLink href='#'>Enter</MDBCardLink>
                            <MDBCardLink href='#'>Source Code</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <br />
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBCardLink href='#'>Enter</MDBCardLink>
                            <MDBCardLink href='#'>Source Code</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <br />
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBCardLink href='#'>Enter</MDBCardLink>
                            <MDBCardLink href='#'>Source Code</MDBCardLink>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}