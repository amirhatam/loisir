import React, { useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import ModalPage from '../../components/ModalPage';

export default function AgeInDays() {
    const [y, setYear] = useState("")
    const [m, setMonth] = useState("")
    const [d, setDays] = useState("")
    const [inputErr, setInputErr] = useState("")

    const [res, setRes] = useState("")


    const ageInDays = () => {
        if (!y || !m || !d) {
            setInputErr("Please make sure all fields are filled in correctly")
        } else {
            setInputErr("")

            const birthday = new Date(`${y}-${m}-${d}`)
            const years = new Date(new Date() - birthday).getFullYear() - 1970
            const months = new Date(new Date() - birthday).getMonth()
            const days = new Date(new Date() - birthday).getDate() - 1

            let getDays = (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000
            if (getDays) {
                const age = `${years} years ${months} months ${days} days`
                const dayRes = Math.round(getDays)
                const hoursRes = getDays * 24
                const minutesRes = getDays * 24 * 60
                const secondsRes = getDays * 24 * 60 * 60

                setRes(
                    <p>
                        <strong> You are  : </strong>
                        <br />
                        {age}
                        <br />
                        or {dayRes} days
                        <br />
                        or {hoursRes} hours
                        <br />
                        or  {minutesRes} minutes
                        <br />
                        or {secondsRes} seconds
                    </p>
                )
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
                                    res
                                        ?
                                        <ModalPage res={res} />
                                        :
                                        <p className='text-center text-danger mt-0'> {inputErr} </p>
                                }
                                <MDBBtn color="dark" onClick={ageInDays} className="mt-4">Calculate</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </MDBContainer >
        </section>
    );
}