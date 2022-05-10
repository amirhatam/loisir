import { MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { AsideLeft } from './playing-cards/AsideLeft'
import { AsideRight } from './playing-cards/AsideRight'
import { CardBody } from './playing-cards/CardBody'
import CardHeader from './playing-cards/CardHeader'

import '../../../../../assets/styles/FontSize.css'

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
