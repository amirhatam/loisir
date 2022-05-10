import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'

export const AsideRight = (props) => {

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBCardBody className=''>
                    <MDBCardTitle tag='h3' variant="h3-responsive" className='text-capitalize text-md-end fw-light text-primary'>{props.partTwoOfSpeech}</MDBCardTitle>
                </MDBCardBody>
                {
                    props.verbDefinition.length > 0
                        ?
                        <MDBCardBody className=''>
                            <MDBCardText tag='h5' variant="h5-responsive" className='fw-light text-md-end mb-4'>
                                Definition
                            </MDBCardText>
                            <MDBCardText tag='h4' variant="h4-responsive" className='fw-normal text-md-end'>
                                {props.verbDefinition}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null
                }
                {
                    props.verbSynonyms.length > 0
                        ?
                        <MDBCardBody className=' '>
                            <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter text-md-end mb-4'>
                                Synonyms
                            </MDBCardText>
                            <MDBCardText tag='h4' variant="h4-responsive" className='text-capitalize text-md-end fw-normal'>
                                {props.verbSynonyms.join(" - ")}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null
                }
                {
                    props.verbAntonyms.length > 0
                        ?
                        <MDBCardBody className=' '>
                            <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4 text-md-end'>
                                Antonyms
                            </MDBCardText>
                            <MDBCardText className='text-capitalize text-md-end fw-normal' tag='h4' variant="h4-responsive">
                                {props.verbAntonyms.join(" - ")}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null
                }
            </MDBCol>
        </>
    )
}
