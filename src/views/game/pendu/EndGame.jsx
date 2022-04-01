import React from 'react'

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
                            <MDBCardImage src={props.PenduSeven} fluid alt='...' />
                            :
                            <MDBCardImage src={props.Win} fluid alt='...' />

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
