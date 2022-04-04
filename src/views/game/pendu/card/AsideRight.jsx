import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

export const AsideRight = (props) => {
    const [definition] = useState('Definition')
    const [synonyms] = useState("Synonyms")
    const [antonyms] = useState("Antonyms")

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBCardBody className=''>
                    <MDBCardTitle className='h4-fs text-md-end fw-lighter text-primary'>Verb </MDBCardTitle>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted text-md-end h6-fs'>
                        {
                            props.verbDefinition.length > 0
                                ?
                                definition
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='text-md-end h5-fs'>
                        {props.verbDefinition}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted text-md-end h6-fs'>
                        {
                            props.verbSynonyms.length > 0
                                ?
                                synonyms
                                :
                                null

                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize text-md-end h5-fs'>
                        {props.verbSynonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>

                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted text-md-end h6-fs'>
                        {
                            props.verbAntonyms.length > 0
                                ?
                                antonyms
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize text-md-end h5-fs'>
                        {props.verbAntonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </>
    )
}
