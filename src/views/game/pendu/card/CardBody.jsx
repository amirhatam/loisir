import React from 'react'
import { MDBCardImage, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import Button from '../components/Button'
import Input from '../components/Input'

export const CardBody = (props) => {

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBRow className="input-group justify-content-center">
                    <Input {...props} />

                    <Button {...props} />
                </MDBRow>

                <MDBCardText className='text-danger text-center fw-lighter px-md-4'>{props.errMsg} </MDBCardText>
                <MDBCardText className='text-danger fw-lighter text-center'>{props.errValueMsg}</MDBCardText>
                <div className='mt-lg-5'>
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
                </div>
            </MDBCol>
        </>
    )
}
