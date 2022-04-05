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
                    <MDBCardTitle tag='h3' variant="h3-responsive" className='fw-light text-primary'>Noun</MDBCardTitle>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4'>
                        {
                            props.nounDefinition.length > 0
                                ?
                                definition
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText tag='h4' variant="h4-responsive" className='fw-normal'>
                        {props.nounDefinition}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardBody className=' '>
                    <MDBCardText tag='h5' variant="h5-responsive" className='fw-lighter mb-4'>
                        {
                            props.nounSynonyms.length > 0
                                ?
                                synonyms
                                :
                                null

                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize fw-normal' tag='h4' variant="h4-responsive" >
                        {props.nounSynonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>

                <MDBCardBody className=' '>
                    <MDBCardText className='fw-lighter mb-4' tag='h5' variant="h5-responsive">
                        {
                            props.nounAntonyms.length > 0
                                ?
                                antonyms
                                :
                                null
                        }
                    </MDBCardText>
                    <MDBCardText className='text-capitalize fw-normal' tag='h4' variant="h4-responsive">
                        {props.nounAntonyms.join(" - ")}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCol>
        </>
    )
}
