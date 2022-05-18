import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import ModalPage from '../../components/ModalPage';

export default function SecondsToDate() {
    const [seconds, setSeconds] = useState([])
    const [dateResult, setDateResult] = useState("")
    const [err, setErr] = useState("")

    const formatDuration = () => {
        const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
            res = [];
        if (seconds === 0) return 'now';

        let some = seconds

        for (let key in time) {
            if (some >= time[key]) {
                let val = Math.floor(some / time[key]);

                res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);

                some = some % time[key];
            }
        }

        let finalRes = res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
        setDateResult(finalRes)


    }

    const getInputValue = (e) => {
        const userValue = e.target.value
        if (userValue.match(/[0-9]/gm)) {
            setSeconds(parseInt(userValue))
            setErr('')
        } else {
            setErr('Please enter numbers only ')
        }
    }

    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-4'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-md-5 my-3'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs my-md-3 my-4'>Seconds to date</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>
                                    The calculated seconds will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                                </MDBCardText>
                                <MDBInput label='Enter seconds' onChange={getInputValue} id='form1' type='text' className='mt-4 mb-0' />
                                {
                                    dateResult
                                        ?
                                        <ModalPage res={dateResult} />
                                        :
                                        <p className='text-center text-danger my-0'>{err}</p>
                                }
                                <MDBBtn className='mt-5' color="dark" onClick={formatDuration}>Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
        </section>
    );
}