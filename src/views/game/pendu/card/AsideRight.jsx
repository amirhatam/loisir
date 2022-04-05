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
                    <MDBCardTitle tag='h3' variant="h3-responsive" className='text-md-end fw-light text-primary'>Verb </MDBCardTitle>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText tag='h5' variant="h5-responsive" className='fw-light text-md-end mb-4'>
                        {
                            props.verbDefinition.length > 0
                                ?
                                definition
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText tag='h4' variant="h4-responsive" className='fw-normal text-md-end'>
                        {props.verbDefinition}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter text-md-end mb-4'>
                        {
                            props.verbSynonyms.length > 0
                                ?
                                synonyms
                                :
                                null

                        }
                    </MDBCardText>
                    <MDBCardText tag='h4' variant="h4-responsive" className='text-capitalize text-md-end fw-normal'>
                        {props.verbSynonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>

                <MDBCardBody className=' '>
                    <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4 text-md-end'>
                        {
                            props.verbAntonyms.length > 0
                                ?
                                antonyms
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize text-md-end fw-normal' tag='h4' variant="h4-responsive">
                        {props.verbAntonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </>
    )
}
