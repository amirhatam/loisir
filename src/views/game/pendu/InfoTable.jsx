import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const InfoTable = (props) => {
    return (
        <>
            <MDBRow>
                <MDBCol className=''>
                    <MDBCardBody className=' '>
                        <MDBCardTitle>Mystery Word has: </MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol className=''>
                    <MDBCardBody className='pt-md-1 '>
                        <MDBCardText>
                            <strong className='text-success display-6'> {props.randomWord.length} </strong>
                            letters
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className=''>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className=''>Your Number Of Tries :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol className=''>
                    <MDBCardBody className='pt-md-1 '>
                        <MDBCardText>
                            <strong className='text-danger display-6'> {props.numberOfPlay} </strong>
                            token
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>



            <MDBRow>
                <MDBCol size='4' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className=''>Definition :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='8' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardText>
                            {props.nounDefinition}
                        </MDBCardText>
                        <MDBCardText>
                            {props.verbDefinition}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='4' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className=''>Synonyms :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='8' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-capitalize'>
                            {props.nounSynonyms.join(" - ")}
                        </MDBCardText>
                        <MDBCardText className='text-capitalize'>
                            {props.verbSynonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size='4' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardTitle className=''>Antonyms :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='8' className=''>
                    <MDBCardBody className=' '>
                        <MDBCardText className='text-capitalize'>
                            {props.nounAntonyms.join(" - ")}
                        </MDBCardText>
                        <MDBCardText className='text-capitalize'>
                            {props.verbAntonyms.join(" - ")}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </>
    );
}

export default InfoTable;