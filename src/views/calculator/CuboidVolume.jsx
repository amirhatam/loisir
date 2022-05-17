import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function CuboidVolume() {
    const [length, setlength] = useState([])
    const [width, setWidth] = useState([])
    const [height, setHeight] = useState([])
    const [res, setRes] = useState("")


    const getVolumeOfCuboid = () => setRes(length * width * height)

    return (

        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-5'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-5'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs'>Volume of a Cuboid</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>Calculate the volume of a cuboid with three values: the length, width and height of the cuboid</MDBCardText>
                                <MDBRow>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Length' onChange={(e) => setlength(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Width' onChange={(e) => setWidth(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Height' onChange={(e) => setHeight(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>
                                {
                                    res
                                        ?
                                        <p className='text-center text-danger mt-md-3'>
                                            {res}

                                        </p>
                                        :
                                        null
                                }
                                <MDBBtn color="dark" onClick={getVolumeOfCuboid} className="mt-md-3 mt-4">Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer >
        </section>
    );
}