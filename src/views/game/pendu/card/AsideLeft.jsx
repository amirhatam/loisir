import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

export const AsideLeft = (props) => {
    const [definition, setDefinition] = useState('Definition')
    const [synonyms, setSynonyms] = useState("Synonyms")
    const [antonyms, setAntonyms] = useState("Antonyms")

    return (
        <>
            <MDBCol size='4'>
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
            </MDBCol>
        </>
    )
}
