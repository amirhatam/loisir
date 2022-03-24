import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBCardHeader } from 'mdb-react-ui-kit';

export default function Jeux() {
    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow >
                <MDBCardTitle className='text-center my-md-5 display-4'>Des Jeux</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCard >
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://www.quedujouet.fr/5126-large_default/jeu-des-petits-chevaux-en-bois-format-voyage.jpg' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Jeu des petits chevaux</MDBCardTitle>
                            <MDBCardText className='fw-lighter text-justify'>
                                Le jeu des petits chevaux est un jeu qui consiste à déplacer plusieurs pions par joueur, et à les emmener sur la partie réservée à leur couleur. Le premier joueur qui arrive sur la dernière case triangulaire remporte la partie.
                            </MDBCardText>
                            <MDBBtn href='/jeux/petits-chevaux'>Enter</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}