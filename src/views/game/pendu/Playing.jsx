import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

export const Playing = (props) => {
    return (
        <>
            <MDBRow className="input-group justify-content-center">
                <MDBCol size='8' className="input-group-prepend px-0">
                    <MDBInput
                        label='Please enter a letter or a word'
                        onChange={props.getInputValue}
                        id='form1'
                        type='text'
                        className='mb-md-3 form-control'
                    />
                </MDBCol>
                <MDBCardText className='text-danger text-center h5 fw-lighter px-md-4'>{props.errMsg} </MDBCardText>

                <MDBCol size='2' className="input-group-prepend px-0">
                    <MDBBtn onClick={props.findMysteryWord}>
                        Enter
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBCardText className='text-danger fw-lighter text-center'>{props.errValueMsg}</MDBCardText>

            <MDBCardText className=' text-center mt-md-4'>Your
                <strong> MYSTERY WORD </strong> has
                <strong className='text-success h5'> {props.randomWord.length} </strong>
                letters,
                <br />
                and you have
                <strong className='text-danger h5'> {props.numberOfPlay} </strong>
                number of tries.
            </MDBCardText>

            <MDBCardText className='display-6 my-md-4 text-center'>{wordsFound.join(" ")}</MDBCardText>
            <MDBRow className='justify-content-center'>
                <MDBCol size='6'>
                    <MDBCardImage src={props.penduImg} fluid alt='...' />
                </MDBCol>
            </MDBRow>
            <MDBCardText className='text-center'> {props.lettersChosenMsg}
                <br />
                <strong className='text-uppercase'>{props.lettersChosen.join(", ")}</strong>
            </MDBCardText>
        </>
    )
}
