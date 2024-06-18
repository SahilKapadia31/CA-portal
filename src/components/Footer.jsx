import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <h5>Quik Links</h5>
                        <ul className="list-unstyled">
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Home</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>About Us</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Contact Us</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Career</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Finance And Accounts Outsourcing</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Human Resource Outsourcing</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Audit And Assurance</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>Consulting</a></li>
                            <li className='pb-2'><a href="#" className='fs-7'><i class="bi bi-chevron-right fs-7 me-2"></i>PAN India Compliance Administration</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Subscribe Now</h5>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control rounded-0" placeholder="Enter email address" />
                            </div>
                            <button type="submit" className="btn read-more fw-bold rounded-0 px-3 mt-2">SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h5>Connect With Us</h5>
                        <div className="d-flex mb-3">
                            <i class="bi bi-geo-alt-fill text-secondary me-3"></i>
                            <p className='fs-7'>B-9, Second Floor, Mahalaxmi Nagar, Behind WTP South Block, Malviya Nagar, Jaipur - 302017(Raj.)</p>
                        </div>
                        <div className="d-flex mb-3">
                            <i class="bi bi-telephone-fill text-secondary me-3"></i>
                            <p className='fs-7'> 0141-4072000</p>
                        </div>
                        <div className="d-flex mb-3">
                            <i class="bi bi-envelope text-secondary me-3"></i>
                            <p className='fs-7'>caportal@sagipl.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom mt-4 pb-4">
                <div className="container d-flex justify-content-between">
                    <p className="mb-0 fs-7">Copyright © SAG Infotech Private Limited. All Rights reserved.</p>
                    <p className="mb-0 fs-7">Designed & Developed by: SAG Infotech Pvt Ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer