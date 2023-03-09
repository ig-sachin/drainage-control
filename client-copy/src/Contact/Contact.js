import React from 'react'

function Contact() {
    return (
        <section id="contact" class="contact section-bg">
            <div class="container-fluid">

                <div class="section-title">
                    <h2>Contact</h2>
                    <h3>Get In Touch With <span>Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>

                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="row">

                            <div>

                                <div class="row justify-content-center">

                                    <div class="col-md-6 info d-flex flex-column align-items-stretch">
                                        <i class="bx bx-map"></i>
                                        <h4>Address</h4>
                                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                                    </div>
                                    <div class="col-md-6 info d-flex flex-column align-items-stretch">
                                        <i class="bx bx-phone"></i>
                                        <h4>Call Us</h4>
                                        <p>+1 5589 55488 55<br />+1 5589 22548 64</p>
                                    </div>
                                    <div class="col-md-6 info d-flex flex-column align-items-stretch">
                                        <i class="bx bx-envelope"></i>
                                        <h4>Email Us</h4>
                                        <p>contact@example.com<br />info@example.com</p>
                                    </div>
                                    <div class="col-md-6 info d-flex flex-column align-items-stretch">
                                        <i class="bx bx-time-five"></i>
                                        <h4>Working Hours</h4>
                                        <p>Mon - Fri: 9AM to 5PM<br />Sunday: 9AM to 1PM</p>
                                    </div>

                                </div>

                            </div>

                            {/* <div class="col-lg-6">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <label for="name">Your Name</label>
                                            <input type="text" name="name" class="form-control" id="name" required />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <label for="email">Your Email</label>
                                            <input type="email" class="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="subject">Subject</label>
                                        <input type="text" class="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" name="message" rows="8" required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact