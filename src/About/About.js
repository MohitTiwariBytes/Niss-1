// import React from 'react';
// import NavBar from '../Navbar/Navbar';
// import './About.css'

// const About = () => {
//     return (
//         <div className='App'>
//         <div className="container mt-5">
//             <NavBar></NavBar>
            

//                 {/* Company Mission and Vision */}
//                 <div className="company-mission">
//                     <h2>Our Mission</h2>
//                     <p>At NISS Pvt Ltd, our mission is to deliver high-quality web development solutions that empower businesses to succeed online. We are committed to innovation, excellence, and customer satisfaction in every project we undertake.</p>
//                     <h2>Our Vision</h2>
//                     <p>We envision a digital world where businesses of all sizes can thrive through custom web solutions that are both functional and aesthetically pleasing. Our goal is to be a leading provider of web development services, known for our creativity and technical expertise.</p>
//                 </div>

//                 {/* Company History */}
//                 <div className="company-history">
//                     <h2>Our Journey</h2>
//                     <p>Founded in September 2024 by Manish Kumar Singh, NISS Pvt Ltd started with a vision to bridge the gap between businesses and their online presence. Since then, we have grown into a trusted partner for companies seeking innovative web solutions.</p>
//                     <ul>
//                         <li><strong>2024:</strong> Company established and first projects launched.</li>
//                         <li><strong>2025:</strong> Expanded services to include dynamic web applications.</li>
//                         <li><strong>2026:</strong> Achieved milestone of 100 completed projects.</li>
//                     </ul>
//                 </div>

//                 {/* Team Introduction */}
//                 <div className="team-introduction">
//                     <h2>Meet Our Team</h2>
//                     <div className="team-member">
//                         <h3>Manish Kumar Singh - Founder & CEO</h3>
//                         <p>With over a decade of experience in web development, Manish leads the team with a focus on innovation and client satisfaction. His leadership ensures that NISS Pvt Ltd remains at the forefront of web technology.</p>
//                     </div>
//                     <div className="team-member">
//                         <h3>Jane Doe - Lead Developer</h3>
//                         <p>Jane is an expert in both front-end and back-end development, bringing a wealth of experience to every project. Her attention to detail and technical skills are crucial to our success.</p>
//                     </div>
//                     <div className="team-member">
//                         <h3>John Smith - UX/UI Designer</h3>
//                         <p>John specializes in creating user-friendly and visually appealing designs. His work ensures that our websites are not only functional but also engaging for users.</p>
//                     </div>
//                 </div>

//                 {/* Client Testimonials */}
//                 <div className="client-testimonials">
//                     <h2>What Our Clients Say</h2>
//                     <div className="testimonial">
//                         <p>"NISS Pvt Ltd transformed our online presence with a stunning website. Their team was professional and delivered beyond our expectations." - Client A</p>
//                     </div>
//                     <div className="testimonial">
//                         <p>"Exceptional service and innovative solutions. We highly recommend NISS Pvt Ltd for any web development needs." - Client B</p>
//                     </div>
//                 </div>

//                 {/* Company Culture and Values */}
//                 <div className="company-culture">
//                     <h2>Our Culture and Values</h2>
//                     <p>At NISS Pvt Ltd, we foster a collaborative and inclusive work environment where creativity and technical expertise thrive. Our values include:</p>
//                     <ul>
//                         <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
//                         <li><strong>Innovation:</strong> We embrace new technologies and ideas to provide the best solutions.</li>
//                         <li><strong>Customer-Centricity:</strong> We prioritize our clients’ needs and work to exceed their expectations.</li>
//                         <li><strong>Excellence:</strong> We strive for the highest standards in all aspects of our work.</li>
//                     </ul>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="call-to-action">
//                     <h2>Get in Touch</h2>
//                     <p>If you're interested in learning more about our services or have any questions, feel free to contact us. We would love to help you achieve your web development goals!</p>
//                     <a href="/contact-us" className="btn btn-primary">Contact Us</a>
//                 </div>
//             </div>
//         </div>
    
//     );
// };

// export default About;

import React from 'react';
import NavBar from '../Navbar/Navbar';
import './About.css';
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <div className='App'>
            <div className="container mt-5">
                <NavBar />

                {/* Company Mission and Vision */}
                <div className="company-mission">
                    <h2>Our Mission</h2>
                    <p>At NISS Pvt Ltd, our mission is to deliver high-quality web development solutions that empower businesses to succeed online. We are committed to innovation, excellence, and customer satisfaction in every project we undertake.</p>
                    <h2>Our Vision</h2>
                    <p>We envision a digital world where businesses of all sizes can thrive through custom web solutions that are both functional and aesthetically pleasing. Our goal is to be a leading provider of web development services, known for our creativity and technical expertise.</p>
                </div>

                {/* Company History */}
                <div className="company-history">
                    <h2>Our Journey</h2>
                    <p>Founded in September 2024 by Manish Kumar Singh, NISS Pvt Ltd started with a vision to bridge the gap between businesses and their online presence. Since then, we have grown into a trusted partner for companies seeking innovative web solutions.</p>
                    <ul>
                        <li><strong>2024:</strong> Company established and first projects launched.</li>
                        <li><strong>2025:</strong> Expanded services to include dynamic web applications.</li>
                        <li><strong>2026:</strong> Achieved milestone of 100 completed projects.</li>
                    </ul>
                </div>

                {/* Team Introduction */}
                <div className="team-introduction">
                    <h2>Meet Our Team</h2>
                    <div className="team-member">
                        <h3>Manish Kumar Singh - Founder & CEO</h3>
                        <p>With over a decade of experience in web development, Manish leads the team with a focus on innovation and client satisfaction. His leadership ensures that NISS Pvt Ltd remains at the forefront of web technology.</p>
                    </div>
                    <div className="team-member">
                        <h3>Jane Doe - Lead Developer</h3>
                        <p>Jane is an expert in both front-end and back-end development, bringing a wealth of experience to every project. Her attention to detail and technical skills are crucial to our success.</p>
                    </div>
                    <div className="team-member">
                        <h3>John Smith - UX/UI Designer</h3>
                        <p>John specializes in creating user-friendly and visually appealing designs. His work ensures that our websites are not only functional but also engaging for users.</p>
                    </div>
                </div>

                {/* Client Testimonials */}
                <div className="client-testimonials">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonial">
                        <p>"NISS Pvt Ltd transformed our online presence with a stunning website. Their team was professional and delivered beyond our expectations." - Client A</p>
                    </div>
                    <div className="testimonial">
                        <p>"Exceptional service and innovative solutions. We highly recommend NISS Pvt Ltd for any web development needs." - Client B</p>
                    </div>
                </div>

                {/* Company Culture and Values */}
                <div className="company-culture">
                    <h2>Our Culture and Values</h2>
                    <p>At NISS Pvt Ltd, we foster a collaborative and inclusive work environment where creativity and technical expertise thrive. Our values include:</p>
                    <ul>
                        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                        <li><strong>Innovation:</strong> We embrace new technologies and ideas to provide the best solutions.</li>
                        <li><strong>Customer-Centricity:</strong> We prioritize our clients’ needs and work to exceed their expectations.</li>
                        <li><strong>Excellence:</strong> We strive for the highest standards in all aspects of our work.</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="call-to-action">
                    <h2>Get in Touch</h2>
                    <p>If you're interested in learning more about our services or have any questions, feel free to contact us. We would love to help you achieve your web development goals!</p>
                    <a href="/contact-us" className="btn btn-primary">Contact Us</a>
                </div>
            </div><Footer></Footer>
        </div>
    );
};

export default About;
