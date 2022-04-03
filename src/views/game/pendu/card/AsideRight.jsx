import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

export const AsideRight = (props) => {
    const [definition, setDefinition] = useState('Definition')
    const [synonyms, setSynonyms] = useState("Synonyms")
    const [antonyms, setAntonyms] = useState("Antonyms")

    return (
        <>
            <MDBCol size='4'>
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
            </MDBCol>
        </>
    )
}
