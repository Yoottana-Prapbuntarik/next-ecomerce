import React from 'react';
import fetch from 'isomorphic-fetch';
import MainLayout from '../components/MainLayout/MainLayout';
import Banner from '../components/Banner/Banner';
import Card from '../components/CardProduct/Card';

const Category = (props) => {
    let { routeName, dataJson } = props;
    return (
        <MainLayout>
            {
                routeName &&
                <Banner paddingBanner="5.25%" imageSrc={routeName === "Pants" ? "/plant.jpg" : "BannerHome.jpg"} routeName={routeName} />
            }

            <div className="container-fluid mb-3">
                <div className="row m-5">
                    {
                        dataJson.map((data, index) => {
                            return data.product_type == routeName && (
                                <div key={index} className="col-md-4 col-12">
                                    
                                    <Card productId={data.id} productType={data.product_type} productIamge={data.image.medium_square_crop} productPrice={data.product_cost} productName={data.product_name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </MainLayout>
    )
}

Category.getInitialProps = async ({ query }) => {
    const api = await fetch('http://localhost:8000/api/product/')
    let name = query.name;
    const json = await api.json();
    return { routeName: name, dataJson: json }
}

export default Category;