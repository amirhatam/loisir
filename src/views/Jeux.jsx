import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBCardHeader } from 'mdb-react-ui-kit';

export default function Jeux() {
    return (
        <MDBContainer >
            <MDBRow>
                <MDBCardTitle className='text-center my-md-5 display-4'>Jeux</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn href='#'>Button</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}