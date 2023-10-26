import React from 'react';

const Team = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: '600px'}}>
                    <h6 className="text-primary text-uppercase">Team Members</h6>
                    <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>
                <div className="owl-carousel team-carousel position-relative" style={{paddingRight: '25px'}}>
                    
                    {[1,2].map(index => (
                        <div className="team-item" key={`team-member-${index}`}>
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={`img/team-${index}.jpg`} alt=""/>
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-twitter"></i></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-facebook"></i></a>
                                        <a className="btn btn-light btn-square mx-1" href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="text-uppercase">Full Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
