import { MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React from "react";


import "../assets/styles/Contact.css";


const ContactPage = () => {

  return (

    <div id="Contact" className="gray-container pb-5" >
      <MDBContainer>
        <h1 className="titre-fs text-center fontW py-lg-5 pt-3">Contact</h1>
        <MDBRow className="justify-content-around">
          <MDBCol className="col-lg-5 col-8 lg-0 mb-4">
            <MDBCard>
              <MDBCardHeader className="form-header text-center bg-info rounded">
                <h3 className="my-3 text-white">
                  Contactez-moi <MDBIcon fab icon="telegram-plane" />
                </h3>
              </MDBCardHeader>
              <MDBCardBody className="mb-lg-3 px-sm-4 px-0" >
                <form action="https://formsubmit.co/amirhatam136@gmail.com" method="POST" className="px-3">
                  <div className="my-sm-3 my-2">
                    <input type="email" name="email" placeholder="Your Email" required className="h6-fs form-control col" />
                  </div>
                  <div className="my-sm-3 my-2">
                    <input type="text" name="Nom" placeholder="Your Name" required className="h6-fs form-control col" />
                  </div>
                  <div className="my-sm-3 my-2">
                    <textarea rows="5" cols="33" type="text" name="message" placeholder="Your Message" required className="h6-fs form-control col" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-info rounded-pill px-3 p-fs py-md-2 px-md-3 py-1 px-2  text-white" >Send</button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="col-lg-5 col-8 mt-lg-0">
            <MDBRow className="justify-content-center">
              <MDBCol className="col-lg-12 col-6">
                <div className="my-lg-3">
                  <MDBIcon fab icon="linkedin" className="col-1 px-0 mr-1 text-primary h4-fs" />
                  <span className="fontW h5-fs ml-1">LINKEDIN</span>
                  <div className="d-table">
                    <a href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/" target="_blank" rel="noreferrer" className="li-ic d-block txt-dark h6-fs textColor mb-md-0 my-lg-2 mt-1">https://www.linkedin.com/in/amir-hatam-7ba7601ba/</a>
                  </div>
                </div>
                <div className="mt-lg-4 mt-lg-3">
                  <MDBIcon fab icon="github" className="col-1 px-0 mr-1 h4-fs" />
                  <span className="fontW h5-fs ml-1">GitHub</span>
                  <div className="d-table">
                    <a href="https://github.com/amirhatam" target="_blank" rel="noreferrer" className="fb-ic d-block txt-dark h6-fs textColor mb-md-0 my-lg-2 mt-1">https://github.com/amirhatam</a>
                  </div>
                </div>
                <div className="mt-lg-4">
                  <MDBIcon icon="camera-retro" className="col-1 px-0 mr-1 text-muted h4-fs" />
                  <span className="fontW h5-fs ml-1">YouPic</span>
                  <div className="d-table">
                    <a href="https://youpic.com/photographer/AmirHatam/" target="_blank" rel="noreferrer" className="ins-ic d-block txt-dark h6-fs textColor mb-md-0 my-lg-2 mt-1">https://youpic.com/photographer/AmirHatam/</a>
                  </div>
                </div>
              </MDBCol>

              <MDBCol className="col-lg-12 col-6">
                <div className="my-lg-4">
                  <MDBIcon icon="envelope" className="col-1 px-0 mr-lg-1 mr-2 text-muted h4-fs" />
                  <span className="fontW h5-fs ml-1">Email</span>
                  <div className="d-table">
                    <a href="mailto:amirhatam136@gmail.com" className="d-block h6-fs txt-dark mb-md-0 my-lg-2 mt-1"> amirhatam136@gmail.com</a>
                  </div>
                </div>
                <div className="my-lg-4">
                  <MDBIcon icon="phone-alt" className="col-1 px-0 mr-1 text-info h4-fs" />
                  <span className="fontW h5-fs ml-1">Téléphone </span>
                  <div className="d-table">
                    <a href="tel:+33 7 68 57 35 81" className="d-block h6-fs txt-dark mb-md-0 my-lg-2 mt-1">+33 7 68 57 35 81</a>
                  </div>
                </div>
                <div className="mb-lg-3 mt-lg-4 ">
                  <MDBIcon icon="map-marker-alt" className="col-1 text-danger h4-fs px-0 mr-1" />
                  <span className="fontW h5-fs ml-1">Paris</span>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div >

  );
}

export default ContactPage;

