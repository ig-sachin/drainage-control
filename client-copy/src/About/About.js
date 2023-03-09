import React from 'react'

const About = () => {
    return (
        <section id="about" class="about">
            <div class="container-fluid">

                <div class="row justify-content-center">
                    <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <a href="https://www.youtube.com/watch?v=02G_EG2TfPg" class="glightbox play-btn mb-4">Youtube Link</a>
                    </div>
                </div>

                <div class="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                    <h3>Explore Features</h3>
                    <p></p>

                    <div class="icon-box">
                        <div class="icon"><i class='bx bxs-report' ></i></div>
                        <h4 class="title"><a href="/">Complaint Submssion</a></h4>
                        <p class="description">Users are able to submit complaints related to sewage problems of their local area through a <b>Complaint Submission</b>  section of our WebApp. </p>
                    </div>

                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-dialpad"></i></div>
                        <h4 class="title"><a href="/">Complaint Tracking</a></h4>
                        <p class="description">Users are allowed to check status of their complaint via their unique complaint ID.</p>
                    </div>

                    <div class="icon-box">
                        <div class="icon"><i class="bx bx-atom"></i></div>
                        <h4 class="title"><a href="/">Administrations Feedback on Complaint</a></h4>
                        <p class="description">The complaint resolution team would have access to a password protected dashboard where they can view a list of all complaints, see the status of each complaint, add notes and updates, and change the status of the complaints.</p>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default About