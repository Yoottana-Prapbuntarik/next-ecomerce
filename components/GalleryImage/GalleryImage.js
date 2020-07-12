import React from 'react';

const GalleryImage = () => {
    return (
        <div>
            <style jsx>
                {`
                .container-image-group{
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 4px;
                    justify-content: center;
                }
                .container-image-group-column:nth-child(1){
                    flex: 25%;
                    max-width: 45%;
                    padding: 0 4px;
                }
                .container-image-group-column:nth-child(2){
                    flex: 25%;
                    max-width: 25%;
                    padding: 0 4px;
                }
                .container-image-group-column img {
                    border-radius: 8px;
                    margin-top: 8px;
                    vertical-align: middle;
                    width: 100%;
                    height:auto;
                }
                .wrapper-img-gallery{
                    position: relative;
                    overflow: hidden;
                }
                @media only screen and (max-width: 900px) {
                    .container-image-group-column:nth-child(1),
                    .container-image-group-column:nth-child(2){
                        width:100%;
                    }
                }
            `}
            </style>

            <div className="container-image-group">
                <div className="container-image-group-column">
                    <div className="wrapper-img-gallery">
                        <img  src="/prontonudie.jpg" alt="img-header" />
                    </div>
                </div>
                <div className="container-image-group-column">
                    <div className="wrapper-img-gallery">
                        <img  src="/cinder.jpg" alt="img-header" />
                    </div>
                    <div className="wrapper-img-gallery">
                        <img  src="/prontomisterfreedom.jpg" alt="img-header" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImage;