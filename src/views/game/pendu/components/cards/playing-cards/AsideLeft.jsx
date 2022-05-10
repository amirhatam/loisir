import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'

export const AsideLeft = (props) => {

    return (
        <>
            <MDBCol className='col-md-4 col-12'>
                <MDBCardBody className=' '>
                    <MDBCardTitle tag='h3' variant="h3-responsive" className='text-capitalize fw-light text-primary'>{props.partOneOfSpeech} </MDBCardTitle>
                </MDBCardBody>
                {
                    props.nounDefinition.length > 0
                        ?
                        <MDBCardBody className=''>
                            <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4'>
                                Definition
                            </MDBCardText>
                            <MDBCardText tag='h4' variant="h4-responsive" className='fw-normal'>
                                {props.nounDefinition}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null
                }
                {
                    props.nounSynonyms.length > 0
                        ?
                        <MDBCardBody className=''>
                            <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4'>
                                Synonyms
                            </MDBCardText>
                            <MDBCardText className='text-capitalize fw-normal' tag='h4' variant="h4-responsive" >
                                {props.nounSynonyms.join(" - ")}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null

                }
                {
                    props.nounAntonyms.length > 0
                        ?
                        <MDBCardBody className=''>
                            <MDBCardText className='fw-lighter mb-4' tag='h5' variant="h5-responsive">
                                Antonyms
                            </MDBCardText>
                            <MDBCardText className='text-capitalize fw-normal' tag='h4' variant="h4-responsive">
                                {props.nounAntonyms.join(" - ")}
                            </MDBCardText>
                        </MDBCardBody>
                        :
                        null
                }
            </MDBCol>
        </>
    )
}
