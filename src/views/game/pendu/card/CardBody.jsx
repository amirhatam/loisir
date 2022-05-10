import React from 'react'
import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import Button from '../components/Button'

export const CardBody = (props) => {
    //Accept only alphabets values in input 
    const getInputValue = (e) => {

        const userValue = e.target.value.toLowerCase()
        if (userValue.match(/[a-z]/i)) {

            props.setInput(userValue)
            props.setErrValueMsg("");
        } else if (userValue && userValue.match(/[a-z]/i) === null) {

            props.setErrValueMsg("Please enter alphabets only");
        } else if (!userValue) {

            props.setErrValueMsg("");
        }



        const btn = document.getElementById('btn');

        btn.addEventListener('click', function handleClick(event) {
            //  if you are submitting a form (prevents page reload)
            event.preventDefault();

            const formInput = document.getElementById('form');

            //  clear input field
            formInput.value = '';
        });
    }

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBRow className="input-group justify-content-center">
                    <MDBCol size='8' className="input-group-prepend px-0">
                        <MDBInput
                            label='Please enter a letter or a word'
                            onChange={getInputValue}
                            id='form'
                            type='text'
                            className='mb-md-3 form-control'
                        />
                    </MDBCol>

                    <Button {...props} />
                    {/* <MDBCol size='2' className="input-group-prepend px-0">
                        <MDBBtn id="btn" onClick={props.findMysteryWord}>
                            Enter
                        </MDBBtn>
                    </MDBCol> */}
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
