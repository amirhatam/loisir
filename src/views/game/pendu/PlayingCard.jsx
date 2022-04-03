import { MDBBtn, MDBCardImage, MDBCardText, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { AsideLeft } from './card/AsideLeft'
import { AsideRight } from './card/AsideRight'
import CardHeader from './card/CardHeader'



export const Playing = (props) => {
    // console.log(props.nounSynonyms.length);
    // console.log(props.nounAntonyms.length);

    return (
        <>

            <CardHeader
                {...props}
            />
            <MDBRow className=''>
                <AsideLeft
                    {...props}
                />

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

                <AsideRight
                    {...props}
                />

            </MDBRow>
        </>

    )
}
