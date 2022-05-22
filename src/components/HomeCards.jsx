import React, { useState } from 'react';
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCardHeader, MDBRow, MDBCol, MDBCardLink, Link } from 'mdb-react-ui-kit';
import "../assets/styles/HomeCards.css";


export default function HomeCards() {
    // const [colors] = useState(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'])

    const [cards] = useState([
        {
            category: 'The Game',
            title: 'PETITS CHEVAUX',
            boxColor: 'primary',
            url: '/games'
        },
        {
            category: 'The Game',
            title: 'HANGMAN',
            boxColor: 'secondary',
            url: '/games'
        },
        {
            category: 'The Calculator',
            title: 'SECONDS TO DATE',
            boxColor: 'success',
            url: '/calculators'
        },
        {
            category: 'The Calculator',
            title: 'MULTIPLY BIG NUMBERS',
            boxColor: 'danger',
            url: '/calculators'
        },
        {
            category: 'The Calculator',
            title: 'TRIBONACCI NUMBERS',
            boxColor: 'warning',
            url: '/calculators'
        },
        {
            category: 'The Calculator',
            title: 'AGE IN DAYS',
            boxColor: 'info',
            url: '/calculators'
        },
        {
            category: 'The Calculator',
            title: 'SQUARE NUMBER',
            boxColor: 'dark',
            url: '/calculators'
        },
        {
            category: 'The Calculator',
            title: 'VOLUME OF A CUBOID',
            boxColor: 'primary',
            url: '/calculators'
        },
    ])

    return (
        <MDBRow className='justify-content-center my-5'>
            {
                cards.map((e, i) => {

                    return (
                        <MDBCol key={i} className='col-md-3 col-6'>
                            <MDBCard background={e.boxColor} className='text-white mb-3 card-container' >
                                <MDBCardHeader className='block-example border-bottom border-gray'>
                                    <MDBCardLink href={e.url} className='txt-white p-fs'>
                                        {e.category}
                                    </MDBCardLink>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle className='h6-fs'>{e.title}</MDBCardTitle>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    )
                })
            }
        </MDBRow>
    );
}