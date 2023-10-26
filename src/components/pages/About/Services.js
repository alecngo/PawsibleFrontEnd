import React from 'react';

function Services() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary text-uppercase">Services</h6>
                    <h1 className="display-5 text-uppercase mb-0">Our Excellent Pet Care Services</h1>
                </div>
                <div className="row g-5">
                    {serviceItems.map((service, index) => (
                        <div key={index} className="col-md-6">
                            <div className="service-item bg-light d-flex p-4">
                                <i className={`flaticon-${service.icon} display-1 text-primary me-4`}></i>
                                <div>
                                    <h5 className="text-uppercase mb-3">{service.title}</h5>
                                    <p>{service.description}</p>
                                    <a className="text-primary text-uppercase" href="#">Read More<i className="bi bi-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const serviceItems = [
    {
        icon: "house",
        title: "Pet Boarding",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
    {
        icon: "food",
        title: "Pet Feeding",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
    {
        icon: "grooming",
        title: "Pet Grooming",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
    {
        icon: "cat",
        title: "Pet Training",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
    {
        icon: "dog",
        title: "Pet Exercise",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
    {
        icon: "vaccine",
        title: "Pet Treatment",
        description: "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit"
    },
];

export default Services;
