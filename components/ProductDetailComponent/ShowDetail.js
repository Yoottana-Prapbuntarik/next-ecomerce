import React, { useState, useEffect, useRef } from 'react';
import AddToCart from './AddToCart';

const ShowDetail = (props) => {
    let { item, resType } = props;
    // const [idx, setIndex] = useState(0);
    // const [isFade, setIsFade] = useState(true);

    // const usePrevious = (value) => {
    //     const ref = useRef();
    //     useEffect(() => {
    //         ref.current = value;
    //     });
    //     return ref.current;
    // }

    // const prevState = usePrevious(idx);
    // useEffect(() => {
    //     if (prevState !== idx) {
    //         setIsFade(true);
    //         setTimeout(
    //             function () {
    //                 setIsFade(false);
    //             }.bind(this), 500);
    //     }
    // }, [idx])

    return (
        <div className="container my-5">
            <style jsx>
                {`
                    .img-responsive {
                        width: 100%;
                    }
                    
                    .wrapper-img {
                        width: 100%;
                        border: 1px solid #ececec;
                        height: 538px;
                        overflow: hidden;
                        display: block;
                        text-align: center;
                        margin: 0 auto;
                    }
                    
                    .text-header {
                        font-family: Kanit;
                        font-size: 30px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #707070;
                    }
                    
                    .fade {
                        animation: fadein 2s;
                    }
                    
                    @keyframes fadein {
                        from {
                            opacity: 0;
                        }
                    
                        to {
                            opacity: 1;
                        }
                    }
                    
                    .wrapper-btn-item {
                        width: 100%;
                        height: auto;
                        border: 1px solid #ececec;
                        margin: 10px;
                        cursor: pointer;
                        overflow: hidden;
                    }
                    
                    .active {
                        border: solid 1.5px #000000;
                    }
                    
                    .underline-product-detail {
                        width: 100%;
                        height: 1px;
                        content: "";
                        background: rgb(201, 201, 201);
                    }
                    
                    .description {
                        font-family: Kanit;
                        font-size: 30px;
                        font-weight: bold;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #707070;
                    }
                    
                    .description-subtitle {
                        font-family: Kanit;
                        font-size: 25px;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.5;
                        letter-spacing: normal;
                        text-align: left;
                        color: #707070;
                    }
                    
                    @media only screen and (max-width: 991.98px) {
                        .text-header {
                            font-family: Kanit;
                            font-size: 18px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 1.5;
                            letter-spacing: normal;
                            text-align: left;
                            color: #707070;
                        }
                    
                        .wrapper-btn-item {
                            width: 100%;
                            height: auto;
                            border: 1px solid #ececec;
                            margin: 10px;
                        }
                    
                        .wrapper-img {
                            width: 100%;
                            border: 1px solid #ececec;
                            height: auto;
                            overflow: hidden;
                            display: block;
                            text-align: center;
                            margin: 0 auto;
                        }
                    
                        .description {
                            font-size: 18px;
                        }
                    
                        .description-subtitle {
                            font-size: 15px;
                        }
                    }
            `}
            </style>
            <div className="row">
                <div className="col-md-5 col-12">
                    <div className="wrapper-img">
                        <img className={`img-responsive `} src={item.image.medium_square_crop} alt="product detail" />
                        {/* <img className={`img-responsive ${isFade ? 'fade' : ''}`} src={item.images[idx]} alt="product detail" /> */}
                    </div>
                    <div className="d-flex flex-row my-2">
                        {/* {item.image.map((img, index) => {
                            return (
                                <div key={index} className="wrapper-btn-item">
                                    <img className={`w-100 ${index === idx ? "active" : ""}`} src={img.image.medium_square_crop} alt="img product" onClick={() => setIndex(index)} />
                                </div>
                            )
                        })} */}
                        {
                            <div className="wrapper-btn-item">
                                <img className={`w-25 active`} src={item.image.thumbnail} alt="img product" />
                            </div>
                        }
                    </div>
                </div>
                <div className="col-md-7 col-12 ml-auto">
                    <h5 className="text-header ml-3">
                        {item.product_name}
                    </h5>
                    <div className="underline-product-detail mt-4"></div>
                    <AddToCart item={item} resType={resType} />
                </div>
                <div className="col-md-12 col-12">
                    <h3 className="text-left description">
                        <u>
                            DESCRIPTION
                        </u>
                    </h3>
                    <h5 className="text-left  description-subtitle font-weight-bold">
                        Product Description
                    </h5>
                    <p className="description-subtitle">
                        {item.product_name}
                    </p>
                    <h5 className="text-left text-secondary  font-weight-bold">
                        <u>
                            รายละเอียดสินค้า
                        </u>
                    </h5>
                    <p className="description-subtitle">
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShowDetail;