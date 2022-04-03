import React from 'react'
import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'

export const CardBody = (props) => {
    return (
        <>
            <MDBCol className='col-md-4 col-12'>
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

                    <MDBCol size='2' className="input-group-prepend px-0">
                        <MDBBtn onClick={props.findMysteryWord}>
                            {/* <MDBBtn onClick={props.clearState}> */}
                            Enter
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>

                <MDBCardText className='text-danger text-center fw-lighter px-md-4'>{props.errMsg} </MDBCardText>
                <MDBCardText className='text-danger fw-lighter text-center'>{props.errValueMsg}</MDBCardText>

                <MDBCardText className='display-6 my-md-4 text-center'>{props.wordsFound.join(" ")}</MDBCardText>
                <MDBRow className='justify-content-center'>
                    <MDBCol size='6'>
                        <MDBCardImage src={props.penduImg} fluid alt='...' />
                    </MDBCol>
                </MDBRow>
                <MDBCardText className='text-center'>
                    {props.lettersChosenMsg}
                    <br />
                    <strong className='text-uppercase'>{props.lettersChosen.join(", ")}</strong>
                </MDBCardText>
            </MDBCol>
        </>
    )
}
