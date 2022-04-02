import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import InfoTable from './InfoTable'



export const Playing = (props) => {

    return (
        <MDBRow className='justify-content-around'>
            <MDBCol size='6'>
                <InfoTable
                    randomWord={props.randomWord}
                    numberOfPlay={props.numberOfPlay}
                    nounDefinition={props.nounDefinition}
                    nounSynonyms={props.nounSynonyms}
                    nounAntonyms={props.nounAntonyms}
                    verbDefinition={props.verbDefinition}
                    verbSynonyms={props.verbSynonyms}
                    verbAntonyms={props.verbAntonyms}
                />

            </MDBCol>

            <MDBCol size='4'>
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

        </MDBRow>
    )
}
