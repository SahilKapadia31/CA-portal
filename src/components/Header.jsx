import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="topbar p-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="mail">
                                <i className="bi bi-envelope fs-5 text-warning opacit text-opacity-75"></i>
                                <span className='fw-semibold text-white ms-2 me-3'>caportal@sagipl.com</span>
                                <i className="bi bi-telephone-fill fs-6 text-warning text-opacity-75"></i>
                                <span className='fw-semibold text-white ms-2'>0141-4072000</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="float-end text-white fs-7 align-items-center d-flex gap-3">
                                <span className='fw-normal'>Connect With Us</span>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-wifi"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-1">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6">
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="float-end d-inline-flex gap-5">
                                <div className="d-flex gap-2">
                                    <div className="time-img">
                                        <img src="/time.png" alt="" />
                                    </div>
                                    <div className="">
                                        <p className='m-0 fs-7'>Contact Time</p>
                                        <p className='mt-1 mb-0 fs-7 fw-semibold'>Mon-Sat: 09.00 - 07.00</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                    <div className="email-img">
                                        <img src="/email.png" alt="" />
                                    </div>
                                    <div className="">
                                        <p className='m-0 fs-7'>Contact Time</p>
                                        <p className='mt-1 mb-0 fs-7 fw-semibold'>info@saginfotech.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="topbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="w-100">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav w-100 justify-content-between me-auto mb-2 mb-lg-0 ps-3">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white">Gst</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active text-white">Knowledge Base</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white">Important Links</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Calculator
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item text-white" href="#">Action</a></li>
                                            <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white">News</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white">Career</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header