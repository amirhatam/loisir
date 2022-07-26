import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCardGroup, MDBBtn } from 'mdb-react-ui-kit';

export default function Calculator() {
    const [calculators] = useState([
        {
            title: 'Predict your age',
            info: 'Predict your age with list of ages when each of your great-grandparent died',
            url: '/calculator/predict-your-age'
        },
        {
            title: 'Seconds to date',
            info: 'Convert seconds to date( years, months, days...)',
            url: '/calculator/seconds-to-date'
        },
        {
            title: 'Multiplying large numbers',
            info: 'Multiplying very large numbers',
            url: '/calculator/large-numbers'
        },
        {
            title: 'Tribonacci',
            info: 'Find tribonacci numbers, between two numbers',
            url: '/calculator/tribonacci'
        },
        {
            title: 'Age in days',
            info: 'find your age in days, hours, minutes, seconds',
            url: '/calculator/age-in-days'
        },
        {
            title: 'Square number',
            info: 'Find square numbers, between two numbers',
            url: '/calculator/square-numbers'
        },
        {
            title: 'Volume of a Cuboid',
            info: 'calculate the volume of a cuboid with three values: the length, width and height of the cuboid.',
            url: '/calculator/cuboid-volume'
        },

    ])


    return (
        <section className='bgc-lightblue'>
            <MDBContainer className='pb-md-5'>
                <MDBRow className='justify-content-center'>
                    <MDBCardTitle className='text-center my-md-5 my-4 display-5'>The Calculators</MDBCardTitle>
                    {
                        calculators.map((e, index) => {
                            return (
                                <MDBCardGroup className='col-md-4 col-9 my-4' key={index}>
                                    <MDBCard className='text-center pt-3'>
                                        <MDBCardBody >
                                            <MDBCardTitle className='text-uppercase h6-fs'>{e.title}</MDBCardTitle>
                                            <br />
                                            <MDBCardText className='p-fs'>
                                                {e.info}
                                            </MDBCardText>
                                            <div className='text-center mt-5'>
                                                <MDBBtn color="dark" href={e.url}>Enter</MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCardGroup>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </section>
    );
}