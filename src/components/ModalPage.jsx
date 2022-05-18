import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function ModalPage(props) {
    const [basicModal, setBasicModal] = useState(true);


    const toggleShow = () => setBasicModal(!basicModal);


    const hanldeClick = () => {
        window.location.reload(false); //Refresh a Page
    }

    return (
        <>
            {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
            <MDBModal show={basicModal} tabIndex='-1' >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader className='d-block'>
                            <MDBModalTitle >RESULT</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {props.res}
                        </MDBModalBody>

                        <MDBModalFooter className='d-block'>
                            <MDBBtn color='dark' id="btn"
                                onClick={hanldeClick}
                            >
                                Recalculate
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}