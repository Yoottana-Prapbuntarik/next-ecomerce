import React from 'react';
import Router from 'next/router';
import '../CardProduct/Card.scss';

const Card = (props) => {
    const { productName, productPrice, productIamge, productId, productType } = props;
    let cost = 9200, name = "PURE BLUE JAPAN XX-005 – INDIGO", image_test = "a";
    const imageList = {
        "imageProps": productIamge !== undefined ? productIamge : image_test,
    }

    return (
        <React.Fragment>
            <style jsx>{`
                .wrapper-image-card{
                    border: 0.8px solid #e8e8e8;
                    position: relative;
                    padding: 55.25% 0;
                    overflow: hidden;
                }
                .image-card {
                    position:  absolute;
                    width:100%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    text-align: center;
                    background-image:  url(${imageList.imageProps});
                    background-size:cover;
                    background-repeat:no-repeat;
                    cursor:pointer;
                 }
                 .wrapper-image-card:hover{
                    transition: .5s ease;
                    box-shadow: 10px 7px 18px -6px rgba(0,0,0,0.5);
                    transform: translateY(-5px);
                 }
            }
        `}
            </style>
            <div className="card-container">
                <div className="wrapper-image-card">
                    <div className="image-card" onClick={() => Router.push({
                        pathname: "/ProductDetail",
                        query: { id: productId, type: productType },
                    })}>
                    </div>
                </div>
                <div className="card-detail ml-auto p-5 mt-3">
                    {productName === undefined ? name : productName}
                </div>
                <div className="bath  ml-auto">{productPrice === undefined ? cost.toLocaleString() : parseInt(productPrice).toLocaleString()} THB</div>
            </div>
        </React.Fragment >
    )
}

export default Card;