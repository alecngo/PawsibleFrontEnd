import React from 'react';

function PetPhotos(props) {
    const { photos } = props;

    const imageSize = '200px'; // Example dimension for y x y (modify as needed)

    return (
        <div className="col-md-6">
            <div className="card shadow-lg mb-4">
                <div className="card-body">
                    {photos.length > 0 ? (
                        <div id="petCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {photos.map((photo, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img 
                                            src={photo} 
                                            alt="Pet" 
                                            className="d-block mx-auto rounded" 
                                            style={{ 
                                                maxHeight: imageSize, 
                                                maxWidth: imageSize, 
                                                minHeight: imageSize,
                                                minWidth: imageSize, 
                                                objectFit: 'cover'
                                            }} 
                                        />
                                    </div>
                                ))}
                            </div>

                            {photos.length > 1 && (
                                <>
                                    <a className="carousel-control-prev" href="#petCarousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#petCarousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </>
                            )}
                        </div>
                    ) : (
                        <p>No photos available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PetPhotos;
