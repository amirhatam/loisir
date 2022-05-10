import { MDBCol, MDBInput } from 'mdb-react-ui-kit'
import React from 'react'

export default function Input(props) {

    const getInputValue = (e) => {

        const userValue = e.target.value.toLowerCase()
        if (userValue.match(/[a-z]/i)) {

            props.setInput(userValue)
            props.setErrValueMsg("");
        } else if (userValue && userValue.match(/[a-z]/i) === null) {

            props.setErrValueMsg("Please enter alphabets only");
        } else if (!userValue) {

            props.setErrValueMsg("");
        }



        const btn = document.getElementById('btn');

        btn.addEventListener('click', function handleClick(event) {
            //  if you are submitting a form (prevents page reload)
            event.preventDefault();

            const formInput = document.getElementById('form');

            //  clear input field
            formInput.value = '';
        });
    }


    return (
        <MDBCol size='8' className="input-group-prepend px-0">
            <MDBInput
                label='Please enter a letter or a word'
                onChange={getInputValue}
                id='form'
                type='text'
                className='mb-md-3 form-control'
            />
        </MDBCol>
    )
}
