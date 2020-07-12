import React from 'react';

const Banner = (props) => {
    const { imageSrc, routeName,paddingBanner } = props;
    return (
        <React.Fragment>
            <style jsx>{`       
            .bg-banner{
                background-image: url(${imageSrc});
                background-size:cover;
                background-repeat:no-repeat;
                width:100%;
                padding:${paddingBanner};
                height:auto;
            }
            .text{
                height:100%;
                padding:10%;
                color:#fff;
                font-family: OpenSans;
                font-size: 50px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.36;
                letter-spacing: normal;
            }
            `}</style>
            <div className="bg-banner mb-5">
                <div className="text">
                    {routeName}
                </div>
            </div>
        </React.Fragment >
    )
}

export default Banner;