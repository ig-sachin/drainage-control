import React from 'react'

function Footer() {
    return (
        <footer id="footer">
            <div class="footer-top">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">About us</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Services</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Sewage Management</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Drainage Control</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Water Disposal</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">Lealage Problems</a></li>
                                        <li><i class="bx bx-chevron-right"></i> <a href="/">StormWater Management</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <p>
                                        A108 Adam Street <br />
                                        New York, NY 535022<br />
                                        United States <br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>

                                </div>

                                <div class="col-lg-3 col-md-6 footer-info">
                                    <h3>About Drain Control</h3>
                                    <p>A smart approach towards solving your problems. <br /> Your Problem, Our Priority.</p>
                                    <div class="social-links mt-3">
                                        <a href="/" class="twitter"><i class="bx bxl-twitter"></i></a>
                                        <a href="/" class="facebook"><i class="bx bxl-facebook"></i></a>
                                        <a href="/" class="instagram"><i class="bx bxl-instagram"></i></a>
                                        <a href="/" class="google-plus"><i class="bx bxl-skype"></i></a>
                                        <a href="/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong><span>Abhishek Sharma</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer >
    )
}

export default Footer