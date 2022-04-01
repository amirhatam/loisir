import { MDBBtn, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import PenduSeven from "../../../assets/pic/pendu/Le-Pendu-7.png"
import Win from "../../../assets/pic/smile.webp"

export const EndGame = (props) => {
    return (
        <>
            <MDBCardText className='h4 fw-lighter my-md-4 text-center'>{props.EndGameMsg}
                <strong className='text-uppercase'>{props.randomWord}</strong>
            </MDBCardText>
            <MDBRow className='justify-content-center mb-md-5'>
                <MDBCol size='6'>
                    {
                        props.EndGameMsg === `Sorry, you just lost the game, the word was : `
                            ?
                            <MDBCardImage src={PenduSeven} fluid alt='...' />
                            :
                            <MDBCardImage src={Win} fluid alt='...' />

                    }
                </MDBCol>
            </MDBRow>
            <MDBRow className='justify-content-center'>
                <MDBCol size='5'>
                    <MDBBtn onClick={props.clearState}>Try again <MDBIcon className='fa-lg ' far icon="smile-wink" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </>
    )
}
