import React from 'react';
import Banner from '../components/Banner/Banner';
import MainLayout from '../components/MainLayout/MainLayout';
import Card from '../components/CardProduct/Card';
import Carousel from "react-multi-carousel";
import CustomeButtonGroup from '../components/CardCarousel/CustomeButtonGroup';
import GalleryImage from '../components/GalleryImage/GalleryImage';
const Index = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 991, min: 575 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1
        }
    };

    return (
        <MainLayout>
            <style jsx>{`
        .text-arrivals{
            height: 45px;
            font-family: Kanit;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #707070;
            padding-top:114px;
            padding-bottom:90px;
        }`}
            </style>
            <Banner imageSrc={'/BannerHome.jpg'} routeName="Home" />
            <div className="text-arrivals">
                NEW ARRIVALS
            </div>
            <div className="container mb-5">
                <Carousel
                    infinite={true}
                    responsive={responsive}
                    autoPlaySpeed={2000}
                    autoPlay={true}
                    arrows={false}
                    showDots={true}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<CustomeButtonGroup />}
                >
                    {
                        props.dataJson.map((data) => {
                            return data.items.map((item, index) => {
                                return (
                                    <Card key={index} id_product={item.id} product_type={data.type} images_product={item.images} price_product={item.price} product_name={item.name} />
                                )
                            })
                        })
                    }
                </Carousel>
            </div>
            <div className="container-fluid my-5">
                <GalleryImage />
            </div>
        </MainLayout>
    )
}

Index.getInitialProps = async () => {
    const api = await import('../mockup/mockup.json')
    return { dataJson: api.data }
}

export default Index;