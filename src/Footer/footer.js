import React from 'react';
import { MDBFooter, MDBContainer,MDBBtn, MDBRow, MDBCol, MDBIcon, MDBtn } from 'mdb-react-ui-kit';
import classes from './footer.module.css'

const Footer = () => {
    return (
        <MDBFooter className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-1 d-none d-lg-block'>
            <span className={classes.colorWhite}>Get connected with us on social networks:</span>
            </div>

            <section className=''>
            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#3b5998' }}
                href='https://www.facebook.com/TERO.FELO'
                role='button'
            >
                <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#55acee' }}
                href='https://twitter.com/Tero_Atef_metry'
                role='button'
            >
                <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#ac2bac' }}
                href='https://www.instagram.com/tero._.kalawy/'
                role='button'
            >
                <MDBIcon fab icon='instagram' />
            </MDBBtn>

            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#0082ca' }}
                href='https://www.linkedin.com/in/george-atef-0a5bb6141/'
                role='button'
            >
                <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
                floating
                className='m-1'
                style={{ backgroundColor: '#333333' }}
                href='https://github.com/GeorgeAtefMetry'
                role='button'
            >
                <MDBIcon fab icon='github' />
            </MDBBtn>
        </section>
        </section>

        <section className={classes.colorWhite} >
            <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Movies Page
                </h6>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
                <p>
                    <a href='#!' className='text-reset'>
                    Movies
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Series
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-1'>
                <h6 className='text-uppercase fw-bold mb-4'>Movies Categories</h6>
                <p>
                    <a href='#!' className='text-reset'>
                    Action
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Romance
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Mistery 
                    </a>
                </p>
                <p>
                    <a href='#!' className='text-reset'>
                    Fiction
                    </a>
                </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-1'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                    <MDBIcon icon="home" className="me-2" />
                    Egypt, Cairo
                </p>
                <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    georgeatefmetry@gmail.com
                </p>
                <p>
                    <MDBIcon icon="phone" className="me-3" /> 01212456962
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <hr></hr>
        <div className={`text-center  ${classes.colorWhite}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2022 Copyright: 
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            George Atef
            </a>
        </div>
        
        <hr></hr>
        </MDBFooter>
    );
}

export default Footer;
