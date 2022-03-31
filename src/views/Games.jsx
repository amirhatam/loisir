import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBCardHeader } from 'mdb-react-ui-kit';
import "../assets/styles/GeneralBGC.css"
import petitsChevaux from '../assets/pic/petits-chevaux.jpg'
import penduImg from '../assets/pic/pendu.jpg'

export default function Jeux() {

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-md-5 bgc-lightblue'>
                <MDBRow className='justify-content-around'>
                    <MDBCardTitle className='text-center my-md-5 display-4'>The Games</MDBCardTitle>
                    <MDBCol md='4'>
                        <MDBCard >
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={petitsChevaux} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Jeu des petits chevaux</MDBCardTitle>
                                <MDBCardText className='fw-lighter text-justify'>
                                    Le jeu des petits chevaux est un jeu qui consiste à déplacer plusieurs pions par joueur, et à les emmener sur la partie réservée à leur couleur. Le premier joueur qui arrive sur la dernière case triangulaire remporte la partie.
                                </MDBCardText>
                                <MDBBtn href='/games/petits-chevaux' className='mt-md-4'>Enter</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard >
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={penduImg} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase'>Hangman</MDBCardTitle>
                                <MDBCardText className='fw-lighter text-justify'>
                                    This is version of the classic letter guessing game called Hangman. You are shown a set of blank letters that match a word or phrase and you have to guess what these letters are to reveal the hidden word. You guess by picking letters from those displayed on the sides.
                                </MDBCardText>
                                <MDBBtn href='/games/pendu'>Enter</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}