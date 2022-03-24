import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function SecondsToDate() {
    const [seconds, setSeconds] = useState("")
    const [dateResult, setDateResult] = useState("")

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
        setSeconds(userValue)
    }

    return (
        <MDBContainer className='pb-md-5'>
            <MDBRow className='justify-content-center'>
                <MDBCardTitle className='text-center my-md-5 display-4'>Calculators</MDBCardTitle>
                <MDBCol md='3'>
                    <MDBCard >
                        <MDBCardBody>
                            <MDBCardTitle className='text-uppercase'>Seconds to date</MDBCardTitle>
                            <MDBCardText className='my-md-4 fw-lighter'>
                                The calculated seconds will be displayed in years, months, weeks, days, hours, minutes, and seconds.
                            </MDBCardText>
                            <MDBInput label='Enter seconds' onChange={getInputValue} id='form1' type='text' className='mb-md-3' />
                            {
                                dateResult
                                    ?
                                    <p className='text-center'>{dateResult}  </p>
                                    :
                                    null
                            }
                            <MDBBtn onClick={formatDuration}>Calculate</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}