import React from 'react';

function Products() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary text-uppercase">Products</h6>
                    <h1 className="display-5 text-uppercase mb-0">Products For Your Best Friends</h1>
                </div>
                <div className="owl-carousel product-carousel">
                    {products.map((product, index) => (
                        <div key={index} className="pb-5">
                            <div className="product-item position-relative bg-light d-flex flex-column text-center">
                                <img className="img-fluid mb-4" src={product.image} alt="" />
                                <h6 className="text-uppercase">{product.title}</h6>
                                <h5 className="text-primary mb-0">{product.price}</h5>
                                <div className="btn-action d-flex justify-content-center">
                                    <a className="btn btn-primary py-2 px-3" href="#"><i className="bi bi-cart"></i></a>
                                    <a className="btn btn-primary py-2 px-3" href="#"><i className="bi bi-eye"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const products = [
    {
        title: "Quality Pet Foods",
        price: "$199.00",
        image: "img/product-1.png"
    },
    {
        title: "Quality Pet Foods",
        price: "$199.00",
        image: "img/product-2.png"
    },
    {
        title: "Quality Pet Foods",
        price: "$199.00",
        image: "img/product-3.png"
    },
    {
        title: "Quality Pet Foods",
        price: "$199.00",
        image: "img/product-4.png"
    },
    {
        title: "Quality Pet Foods",
        price: "$199.00",
        image: "img/product-2.png"
    }
];

export default Products;
