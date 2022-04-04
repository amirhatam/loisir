import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

export const AsideLeft = (props) => {
    const [definition] = useState('Definition')
    const [synonyms] = useState("Synonyms")
    const [antonyms] = useState("Antonyms")

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBCardBody className=' '>
                    <MDBCardTitle className='h4-fs fw-lighter text-primary'>Noun</MDBCardTitle>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted h6-fs'>
                        {
                            props.nounDefinition.length > 0
                                ?
                                definition
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='h5-fs'>
                        {props.nounDefinition}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted h6-fs'>
                        {
                            props.nounSynonyms.length > 0
                                ?
                                synonyms
                                :
                                null

                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize h5-fs'>
                        {props.nounSynonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>

                <MDBCardBody className=' '>
                    <MDBCardText className='text-muted h6-fs'>
                        {
                            props.nounAntonyms.length > 0
                                ?
                                antonyms
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize h5-fs'>
                        {props.nounAntonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </>
    )
}
