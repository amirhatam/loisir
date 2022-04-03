import { MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { AsideLeft } from './card/AsideLeft'
import { AsideRight } from './card/AsideRight'
import { Body, CardBody } from './card/CardBody'
import CardHeader from './card/CardHeader'



export const Playing = (props) => {

    return (
        <>
            <CardHeader {...props} />
            <MDBRow>
                <AsideLeft {...props} />

                <CardBody {...props} />

                <AsideRight {...props} />
            </MDBRow>
        </>

    )
}
