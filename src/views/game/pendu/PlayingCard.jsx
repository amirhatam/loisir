import { MDBBtn, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { AsideLeft } from './card/AsideLeft'
import { AsideRight } from './card/AsideRight'
import CardHeader from './card/CardHeader'



export const Playing = (props) => {
    const [definition, setDefinition] = useState('Definition')
    const [synonyms, setSynonyms] = useState("Synonyms")
    const [antonyms, setAntonyms] = useState("Antonyms")




    // console.log(props.nounSynonyms.length);
    // console.log(props.nounAntonyms.length);

    return (
        <>
            {/* <MDBRow className='justify-content-center'>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='px-0'>
                        <MDBCardTitle>Mystery Word has: </MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='pt-md-1'>
                        <MDBCardText>
                            <strong className='text-success display-6'> {props.randomWord.length} </strong>
                            letters
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='px-0'>
                        <MDBCardTitle className=''>Your Number Of Tries :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='pt-md-1 '>
                        <MDBCardText>
                            <strong className='text-danger display-6'> {props.numberOfPlay} </strong>
                            token
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow> */}
            <CardHeader
                randomWord={props.randomWord}
                numberOfPlay={props.numberOfPlay}
                nounDefinition={props.nounDefinition}
                nounSynonyms={props.nounSynonyms}
                nounAntonyms={props.nounAntonyms}
                verbDefinition={props.verbDefinition}
                verbSynonyms={props.verbSynonyms}
                verbAntonyms={props.verbAntonyms}
            />
            <MDBRow className=''>
                <AsideLeft
                    randomWord={props.randomWord}
                    numberOfPlay={props.numberOfPlay}
                    nounDefinition={props.nounDefinition}
                    nounSynonyms={props.nounSynonyms}
                    nounAntonyms={props.nounAntonyms}
                    verbDefinition={props.verbDefinition}
                    verbSynonyms={props.verbSynonyms}
                    verbAntonyms={props.verbAntonyms}
                />
                {/* <MDBCol size='4'>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className=''>Noun</MDBCardTitle>
                    </MDBCardBody>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted'>
                            {
                                props.nounDefinition.length > 0
                                    ?
                                    definition
                                    :
                                    null
                            }
                        </MDBCardText>
                        <MDBCardText className=''>
                            {props.nounDefinition}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted'>
                            {
                                props.nounSynonyms.length > 0
                                    ?
                                    synonyms
                                    :
                                    null

                            }
                        </MDBCardText>
                        <MDBCardText className='text-capitalize'>
                            {props.nounSynonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>

                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted'>
                            {
                                props.nounAntonyms.length > 0
                                    ?
                                    antonyms
                                    :
                                    null
                            }
                        </MDBCardText>
                        <MDBCardText className='text-capitalize'>
                            {props.nounAntonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol> */}

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

                <AsideRight
                    randomWord={props.randomWord}
                    numberOfPlay={props.numberOfPlay}
                    nounDefinition={props.nounDefinition}
                    nounSynonyms={props.nounSynonyms}
                    nounAntonyms={props.nounAntonyms}
                    verbDefinition={props.verbDefinition}
                    verbSynonyms={props.verbSynonyms}
                    verbAntonyms={props.verbAntonyms}
                />
                {/* <MDBCol size='4'>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className='text-end'>Verb </MDBCardTitle>
                    </MDBCardBody>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted text-end'>
                            {
                                props.verbDefinition.length > 0
                                    ?
                                    definition
                                    :
                                    null
                            }
                        </MDBCardText>
                        <MDBCardText className='text-end'>
                            {props.verbDefinition}
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted text-end'>
                            {
                                props.verbSynonyms.length > 0
                                    ?
                                    synonyms
                                    :
                                    null

                            }
                        </MDBCardText>
                        <MDBCardText className='text-capitalize text-end'>
                            {props.verbSynonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>

                    <MDBCardBody className=' '>
                        <MDBCardText className='text-muted text-end'>
                            {
                                props.verbAntonyms.length > 0
                                    ?
                                    antonyms
                                    :
                                    null
                            }
                        </MDBCardText>
                        <MDBCardText className='text-capitalize text-end'>
                            {props.verbAntonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol> */}

            </MDBRow>
        </>

    )
}
