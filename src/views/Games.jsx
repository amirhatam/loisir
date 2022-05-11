import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBContainer, MDBRow, MDBCol, MDBCardHeader, MDBCardGroup } from 'mdb-react-ui-kit';
import "../assets/styles/GeneralBGC.css"
import petitsChevaux from '../assets/pic/petits-chevaux.jpg'
import penduImg from '../assets/pic/pendu.jpg'

export default function Jeux() {

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-md-5 bgc-lightblue'>
                <MDBCardGroup>
                    <MDBRow className='justify-content-around'>
                        <MDBCardTitle className='text-center my-md-5 display-5 my-4'>The Games</MDBCardTitle>

                        <MDBCard className='col-md-4 col-9 my-4'>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={petitsChevaux} fluid alt='...' />
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase text-center h5-fs'>Jeu des petits chevaux</MDBCardTitle>
                                <MDBCardText className='fw-lighter text-justify p-fs'>
                                    Le jeu des petits chevaux est un jeu qui consiste à déplacer plusieurs pions par joueur, et à les emmener sur la partie réservée à leur couleur. Le premier joueur qui arrive sur la dernière case triangulaire remporte la partie.
                                </MDBCardText>
                                <div className='text-center '>
                                    <MDBBtn color="dark" href='/games/petits-chevaux' className='mt-lg-4'>Enter</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className='col-md-4 col-9 my-4'>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={penduImg} fluid alt='...' />
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle className='text-uppercase text-center h5-fs'>Hangman</MDBCardTitle>
                                <MDBCardText className='fw-lighter text-justify p-fs'>
                                    This is version of the classic letter guessing game called Hangman. You are shown a set of blank letters that match a word or phrase and you have to guess what these letters are to reveal the hidden word. You guess by picking letters from those displayed on the sides.
                                </MDBCardText>
                                <div className='text-center'>
                                    <MDBBtn color="dark" href='/games/pendu'>Enter</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBRow>
                </MDBCardGroup>
            </MDBContainer>
        </section>
    );
}