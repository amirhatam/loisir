import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import HomeCards from '../components/HomeCards'
import '../assets/styles/Home.css'



function Home() {
    return (
        <MDBContainer>
            <div className="containerBG" >
                <div className='animeBG'></div>
            </div >
            <HomeCards />
        </MDBContainer>
    )
}

export default Home