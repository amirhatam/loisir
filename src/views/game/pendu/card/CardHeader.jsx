import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const CardHeader = (props) => {
    return (
        <>
            <MDBRow className='justify-content-center mb-md-4'>
                <MDBCol size='4' className=''>
                    <MDBRow>
                        <MDBCol size='6' className=''>
                            <MDBCardBody className='px-0'>
                                <MDBCardTitle>Mystery Word has: </MDBCardTitle>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size='5' className=''>
                            <MDBCardBody className='pt-md-1'>
                                <MDBCardText>
                                    <strong className='text-success display-6'> {props.randomWord.length} </strong>
                                    letters
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol size='4' className=''>
                    <MDBRow>
                        <MDBCol size='7' className=''>
                            <MDBCardBody className='px-0'>
                                <MDBCardTitle className=''>Your Number Of Tries :</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size='5' className=''>

                            <MDBCardBody className='pt-md-1 '>
                                <MDBCardText>
                                    <strong className='text-danger display-6'> {props.numberOfPlay} </strong>
                                    token
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

            </MDBRow>
        </>
    );
}

export default CardHeader;