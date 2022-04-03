import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const CardHeader = (props) => {
    return (
        <>
            <MDBRow className='justify-content-center'>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='px-0'>
                        <MDBCardTitle>Mystery Word has: </MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='pt-md-1'>
                        <MDBCardText>
                            <strong className='text-success display-6'> {props.randomWord.length} </strong>
                            letters
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='px-0'>
                        <MDBCardTitle className=''>Your Number Of Tries :</MDBCardTitle>
                    </MDBCardBody>
                </MDBCol>
                <MDBCol size='2' className=''>
                    <MDBCardBody className='pt-md-1 '>
                        <MDBCardText>
                            <strong className='text-danger display-6'> {props.numberOfPlay} </strong>
                            token
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </>
    );
}

export default CardHeader;