import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5 pb-4">
                    <div className="col-md-5 py-3">
                        <img src="public/hm-about.jpg" className='h-100 w-100' alt="" />
                    </div>
                    <div className="col-md-7">
                        <h4 className='fw-bold'>LOREM IPSUM IS SIMPLY DUMMY</h4>
                        <p className='fs-7 mt-4 lh-base text-body-secondary'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className='fs-7 mt-3 lh-base text-body-secondary'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button type="button" className="btn read-more fw-bold rounded-0">Read More
                            <i className="bi bi-chevron-double-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <section className='mt-3 pt-5 pb-4 bg-light'>
                <div className="container">
                    <h2 className="fw-bold text-center my-5">Our Services <span className="text-warning">Offerings</span>
                    </h2>
                    <div className="row mt-4 row-gap-2">
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">Start my Business</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">Considering registering company in India and that too in a fast and hassle-free</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">Business and Tax Registration</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">In the era of globalization entrepreneurship is the need of the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">GST</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">GST is a huge tax reform in India post-Independence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">Intellectual Property Rights</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">A trademark is typically a name, word, phrase, logo, symbol, design, image</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">Startup Advisory</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">We understand that for a startup, the primary focus is to grow their</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card h-100 border-light-subtle rounded-0 ">
                                <div className="card-body py-5 px-4 text-center">
                                    <div className="icon mb-3 text-center">
                                        <img src="public/business-icon.png" alt="Start my Business" className="img-fluid" />
                                    </div>
                                    <h5 className="card-title fw-semibold fs-18">Foreign Investment in India</h5>
                                    <p className="card-text fs-7 text-body-secondary lh-base">Foreign investment in India is primarily regulated by the FDI policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center">
                        <button type="button" className='btn load-more rounded-0 fw-bold'>
                            Load more
                            <i className="bi bi-chevron-double-right"></i>
                        </button>
                    </div>
                </div>
            </section>
            <section className="news-section bg-opacity-75">
                <div className="container">
                    <h2 className='py-4 m-0'>News Section</h2>
                    <div className="row pb-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card news-card rounded-0 border-0 h-100">
                                <h3 className="card-header rounded-0 text-white fs-4">News</h3>
                                <div className="card-body">
                                    <p className='text-dark fs-7 fw-medium'>CBIC further extends enabling New Changes in GSTR-9 and GSTR-9C to Dec 21</p>
                                    <p className='text-dark fs-7 fw-medium'>17 Dec 19</p>
                                    <p className='text-dark fs-7 fw-medium'>Industry Favours New GSTR Slow Implementation & 4-digits HSN Code</p>
                                    <p className='text-dark fs-7 fw-medium'>Centre releases over Rs 35,000 crore as pending GST compensation to states</p>
                                    <p className='text-dark fs-7 fw-medium'>States get GST dues ahead of key meet</p>
                                    <p className='text-dark fs-7 fw-medium'>Under Fire, Govt Releases Rs 35,298 Crore GST</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card news-card rounded-0 border-0 h-100">
                                <h3 className="card-header rounded-0 text-white fs-4">Due Date Reminder</h3>
                                <div className="card-body">
                                    <div>
                                        <button className="btn fs-7 text-primary">Jan</button>
                                        <button className="btn fs-7 text-primary">Feb</button>
                                        <button className="btn fs-7 text-primary">Mar</button>
                                        <button className="btn fs-7 text-primary">Apr</button>
                                        <button className="btn fs-7 text-primary">May</button>
                                        <button className="btn fs-7 text-primary">June</button>
                                        <button className="btn fs-7 text-primary">July</button>
                                        <button className="btn fs-7 text-primary">Aug</button>
                                        <button className="btn fs-7 text-primary">Sep</button>
                                        <button className="btn fs-7 text-primary">Oct</button>
                                        <button className="btn fs-7 text-primary">Nov</button>
                                        <button className="btn fs-7 text-primary">Dec</button>
                                        <button className="btn fs-7 text-primary">All</button>
                                    </div>
                                    <p className='text-dark fs-7 fw-medium'>November 19</p>
                                    <p className='text-dark fs-7 fw-medium'><strong>07 Jan 20</strong></p>
                                    <p className='text-dark fs-7 fw-medium'>Payment of TDS of December 2019 (For Govt deductors paying through challan)</p>
                                    <p className='text-dark fs-7 fw-medium'><strong>11 Jan 20</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="card news-card rounded-0 border-0 h-100">
                                <h3 className="card-header rounded-0 text-white fs-4">Blog News</h3>
                                <div className="card-body">
                                    <p className='text-dark fs-7 fw-medium'><strong>09 Dec 2019 About Us</strong> - ASSOCIATES is a professional firm of Chartered Accountants s...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form w-100">
                                <h2 className='display-5'>Contact With Us</h2>
                                <p className='fs-7 pb-5'>Please send us your query and we'll be happy to assist you</p>
                                <form>
                                    <div className="d-flex flex-wrap row-gap-4">
                                        <div class="form-floating mb-3 pe-3 col-md-6">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label className='fs-7 fst-italic text-body-secondary' htmlFor="floatingInput">Enter Name*</label>
                                        </div>
                                        <div class="form-floating mb-3 col-md-6">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label className='fs-7 fst-italic text-body-secondary' htmlFor="floatingInput">Enter Email Address*</label>
                                        </div>
                                        <div class="form-floating mb-3 col-md-12">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label className='fs-7 fst-italic text-body-secondary' htmlFor="floatingInput">Enter Phone</label>
                                        </div>
                                        <div class="form-floating mb-3 col-md-12">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                            <label className='fs-7 fst-italic text-body-secondary' htmlFor="floatingTextarea">Type your msg here</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn read-more fw-bold py-3 rounded-0 w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
                            <img src="public/hm-call.png" alt="Contact Image" className="contact-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero