import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import PenduSeven from "../../../../../assets/pic/pendu/Le-Pendu-7.png"
import Win from "../../../../../assets/pic/winner.gif"

export const EndGame = (props) => {

    return (
        <>
            <MDBCardText className='h4 fw-lighter my-md-4 text-center'>{props.EndGameMsg}
                <strong className='text-uppercase'>{props.randomWord}</strong>
            </MDBCardText>

            <MDBRow className='justify-content-center mb-md-5'>
                <MDBCol size='6' className='text-center'>
                    {
                        props.EndGameMsg === `Sorry, you just lost the game, the word was : `
                            ?
                            <MDBCardImage src={PenduSeven} fluid alt='...' />
                            :
                            <MDBCardImage src={Win} fluid alt='...' />

                    }
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className='text-center'>
                    <MDBBtn onClick={props.clearState}> Try again <MDBIcon className='fa-lg ' far icon="smile-wink" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </>
    )
}
