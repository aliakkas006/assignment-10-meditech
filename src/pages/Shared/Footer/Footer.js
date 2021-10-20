import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="mx-28 text-center">
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">

                    <div className="text-primary my-16">
                        <h4 className="text-secondary text-2xl">Quick Contacts</h4>
                        <p>If you have any questions or need help, feel free to contact with our team.</p>
                        <h3><i className="fas fa-phone-alt mr-3"></i>01061245741</h3>
                        <p>2307 Beverley Rd Brooklyn, New York 11226 United    States.</p>
                        <p><small>Email: office@meditech.com</small></p>
                    </div>

                    <div className="text-primary my-16">
                        <h4 className="text-secondary text-2xl">Departments</h4>
                        <h5>Neurology Clinic</h5>
                        <h5>Pathology Clinic</h5>
                        <h5>Laboratory Analysis</h5>
                        <h5>Pediatric Clinic</h5>
                        <h5>Cardiac Clinic</h5>
                    </div>

                    <div className="text-primary my-16">
                        <h4 className="text-secondary text-2xl">Help</h4>
                        <h5>Help & FAQs</h5>
                        <h5>Contacts</h5>
                        <h5>Careers</h5>
                        <h5>Site Map</h5>
                    </div>

                    <div className="my-16">
                        <h4 className="text-secondary">Follow us on</h4>
                        <p className="text-danger text-2xl">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter mx-5"></i>
                            <i className="fab fa-instagram mr-5"></i>
                            <i className="fab fa-youtube"></i>
                        </p>
                    </div>
                </div>
                <p className="text-danger pb-12">© 2021 MediTech by CMSSuperHeroes. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;