import React from 'react'
import Footer from '../componant/Footer'
import Header from '../componant/Header'
import Login from '../componant/Login'
import SocialMediaLinks from '../componant/SocialMediaLinks';

export default function About() {
    document.title = 'About Us';
    return (
        <div>
            <Header />
            <Login />
            <SocialMediaLinks/>
            {/* section start */}
            <section>
                <div class="container com-sp pad-bot-70">
                    <div class="row">
                        <div class="cor about-sp">
                            <div class="ed-about-tit">
                                <div class="con-title">
                                    <h2>About <span> Vaish</span></h2>
                                    <p><strong>Approved by AICTE, Ministry of HRD, Govt of India and Affiliated to MDU, Rohtak</strong></p>
                                </div>
                            </div>
                            <div class="ed-about-sec1">
                                <div class="ed-advan">
                                    <ul>
                                        <li>
                                            <div class="ed-ad-img">
                                                <img src="images/adv/1.png" alt="" />
                                            </div>
                                            <div class="ed-ad-dec">
                                                <h4>President Message</h4>
                                                <img src='https://vcertk.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-05-at-9.54.55-PM-214x300.jpeg' alt=''></img> <br/><br/>
                                                <p>The last couple of decades have seen great changes in the field of education. The total emphasis now is to provide professional education and training to the young men and women to enable them to find their own space in the employment world. In this direction Vaish Education Society over the years, has been totally committed and fully equipped to pursue dreams of excellence in imparting basic and higher education to the students.

                                                    In our sprawling campus, we have provided the most modern infrastructure, state-of-art-laboratories, with all required equipments and highly experienced and dedicated faculty. But more importantly, we have always endeavored to generate an environment on the campus that allows our students to develop and grow as well-rounded thinking professionals confident enough to take on the highly competitive outside world.

                                                    We have a mission in higher education and we promise to continually review the quality of our aims and strive to go higher in the field.

                                                    I wish all the success to students and warm regards to all visitors.

                                                    <h1>  Sh. Navin Kumar Jain</h1>
                                                    President
                                                </p>

                                            </div>
                                        </li>

                                        <li>
                                            <div class="ed-ad-img">
                                                <img src="images/adv/3.png" alt="" />
                                            </div>
                                            <div class="ed-ad-dec">
                                                <h4>Principal Message</h4>
                                                <img src='https://vcertk.com/wp-content/uploads/2019/04/PO.jpg' alt=''></img><br/><br/>
                                                <p>Vaish College of Engineering was established in 1995 with a mission to achieve excellence in technical education. The college is committed to produce world class Engineers.At the Vaish College of Engineering , we are striving hard to achieve excellence in all fields e.g. academics, infrastructural facilities, practical training and personality development programs for  the students.I would like  to welcome all the new entrants and assure them that they will be provided an environment to achieve higher  academic excellence which will enable them to meet all the challenges in their future.

                                                    We have a mission in higher education and we promise to continually review the quality of our aims and strive to go higher and higher in the field. We are confident that they will meet your expectations due to their hardwork and good learning.<br />

                                                    <h1>Dr. Deepak Goyal</h1>
                                                    (Principal)</p>

                                            </div>
                                        </li>
                                        <li>
                                            <div class="ed-ad-img">
                                                <img src="images/adv/4.png" alt="" />
                                            </div>
                                            <div class="ed-ad-dec">
                                                <h4>Mission</h4>
                                                <p>To provide quality education by grooming the technical skills/abilities of the students.<br />
                                                    To improve the overall persona of the students by enabling them to identify their maximum capacity and consequently shape them into the future pioneers.<br />
                                                    To connect the students with roots of their culture by giving them freedom to spread their wings in the sky of different cultural activities.<br />
                                                    To make students good human beings, who are always ready to serve society and environment.</p><br />
                                                 
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ed-ad-img">
                                                <img src="images/adv/6.png" alt="" />
                                            </div>
                                            <div class="ed-ad-dec">
                                                <h4>Vision</h4>
                                                <p>To provide quality technical education for the holistic development of the society.</p>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <div class="ed-ad-img">
                                                <img src="images/adv/5.png" alt="" />
                                            </div>
                                            <div class="ed-ad-dec">
                                                <h4>Facilities</h4>
                                                <p>Hostel Facilities</p>
                                                 <p>Reading Room</p>
                                                 <p>Fully Wifi campus</p>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="ed-about-sec1">
                                <div class="col-md-6"></div>
                                <div class="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
