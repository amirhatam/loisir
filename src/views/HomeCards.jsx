import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function HomeCards() {
    return (
        <MDBRow className='my-5'>

            <MDBCol size="3">
                <MDBCard background='primary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Primary card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size="3">
                <MDBCard background='secondary' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Secondary card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size="3">
                <MDBCard background='success' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Success card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size="3">
                <MDBCard background='danger' className='text-white mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Danger card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='warning' className='mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Warning card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='info' className='text-body mb-3' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Info card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol size='3'>
                <MDBCard background='dark' className='text-white' style={{ maxWidth: '18rem' }}>
                    <MDBCardHeader>Header</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Dark card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>


        </MDBRow>
    );
}