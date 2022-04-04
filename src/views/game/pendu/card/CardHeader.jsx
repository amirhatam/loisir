import { MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

const CardHeader = (props) => {
    const [tokenColor, setTokenColor] = useState([])



    // useEffect(() => {

    //     if (props.numberOfPlay === 6 || props.numberOfPlay === 5) {
    //         console.log("1");
    //         setTokenColor("text-success h4-fs")
    //     } else if (props.numberOfPlay === 4 || props.numberOfPlay === 3) {
    //         console.log("2");
    //         setTokenColor("")
    //         setTokenColor("text-warning h4-fs")
    //     } else if (props.numberOfPlay === 2 || props.numberOfPlay === 1) {
    //         console.log("3");
    //         setTokenColor("text-danger h4-fs")
    //     }

    // }, [])


    return (
        <>
            <MDBRow className='justify-content-center mb-md-4'>
                <MDBCol className='col-md-4'>
                    <MDBRow>
                        <MDBCol size='6' className=''>
                            <MDBCardBody className='px-0'>
                                <MDBCardTitle className='h6-fs'>Mystery Word has: </MDBCardTitle>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size='5' className=''>
                            <MDBCardBody className='pt-md-2 px-0'>
                                <MDBCardText className='h6-fs'>
                                    <strong className='text-success h4-fs'> {props.randomWord.length} </strong>
                                    letters
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

                <MDBCol className='col-md-4'>
                    <MDBRow>
                        <MDBCol size='7' className=''>
                            <MDBCardBody className='px-0'>
                                <MDBCardTitle className='h6-fs'>Your Number Of Tries :</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol size='5' className=''>

                            <MDBCardBody className='pt-md-2 px-0'>
                                <MDBCardText className='h6-fs'>
                                    <strong className={
                                        // condition   ?  valeur
                                        // else if  condition  ?  valeur
                                        // else   valeur
                                        props.numberOfPlay > 4 ? "text-success h4-fs"
                                            : props.numberOfPlay > 2 ? "text-warning h4-fs"
                                                : "text-danger h4-fs"
                                    } > {props.numberOfPlay} </strong>
                                    token
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>

            </MDBRow >
        </>
    );
}

export default CardHeader;