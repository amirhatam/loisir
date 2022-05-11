import React from 'react'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import HomeCards from '../components/HomeCards'



function Home() {
    return (
        <MDBContainer>
            <MDBRow className='justify-content-center'>
                <div className="col-4" >
                    <img src="https://raw.githubusercontent.com/juliangarnier/anime/master/documentation/assets/img/animejs-v3-header-animation.gif" className='img-fluid  ' alt='...' />
                </div >
            </MDBRow>
            <HomeCards />
        </MDBContainer>
    )
}

export default Home