import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export default function AgeInDays() {
    const [y, setYear] = useState("")
    const [m, setMonth] = useState("")
    const [d, setDays] = useState("")
    const [inputErr, setInputErr] = useState("")

    const [age, setAge] = useState("")
    const [daysResult, setDaysResult] = useState("")
    const [hoursResult, setHoursResult] = useState("")
    const [minutesResult, setMinutesResult] = useState("")
    const [secondsResult, setSecondsResult] = useState("")


    const ageInDays = () => {
        if (!y || !m || !d) {
            setInputErr("Please enter birthday")
            setDaysResult("");
        } else {
            setInputErr("")

            //Find age in complete version years, months, days
            const birthday = new Date(`${y}-${m}-${d}`)
            const years = new Date(new Date() - birthday).getFullYear() - 1970
            const months = new Date(new Date() - birthday).getMonth()
            const days = new Date(new Date() - birthday).getDate() - 1
            setAge(`You are ${years} years ${months} months ${days} days`)

            //Find age in days
            let getDays = (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000
            if (getDays) {
                setDaysResult(getDays);
                setHoursResult(getDays * 24)
                setMinutesResult(getDays * 24 * 60)
                setSecondsResult(getDays * 24 * 60 * 60)
            }
        }
    }
    return (

        <section className='bgc-lightblue'>
            <MDBContainer className='pb-5'>
                <MDBRow className='justify-content-center mb-md-5'>
                    <MDBCardTitle className='text-center my-md-5 display-5 my-5'>Calculator</MDBCardTitle>
                    <MDBCol className='col-md-4 col-8'>
                        <MDBCard className='my-5'>
                            <MDBCardBody className='text-center'>
                                <MDBCardTitle className='text-uppercase h5-fs'>Age Calculator</MDBCardTitle>
                                <MDBCardText className='my-md-4 fw-lighter p-fs'>Find your age in days, hours, minutes, seconds.</MDBCardText>
                                <MDBRow>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Year' onChange={(e) => setYear(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Month' onChange={(e) => setMonth(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol md="4" className='my-2'>
                                        <MDBInput label='Days' onChange={(e) => setDays(parseInt(e.target.value))} id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>
                                {
                                    inputErr
                                        ?
                                        <p className='text-center text-danger mt-md-3'>
                                            {inputErr}

                                        </p>
                                        :
                                        null
                                }
                                {
                                    daysResult
                                        ?
                                        <p className=' my-md-4'>
                                            <strong>
                                                Your age is :
                                            </strong>
                                            <br />
                                            {age}
                                            <br />
                                            or {daysResult} days
                                            <br />
                                            or {hoursResult} hours
                                            <br />
                                            or  {minutesResult} minutes
                                            <br />
                                            or {secondsResult} seconds
                                        </p>
                                        :
                                        null
                                }
                                <MDBBtn color="dark" onClick={ageInDays} className="mt-md-3 mt-4">Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer >
        </section>
    );
}