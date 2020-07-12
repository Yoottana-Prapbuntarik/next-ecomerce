import React, { useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import MainLayout from '../components/MainLayout/MainLayout';
import ShowDetail from '../components/ProductDetailComponent/ShowDetail';
import { mapDispatchToProps } from '../components/ProductDetailComponent/AddToCartContainer';
import { connect } from 'react-redux';
const ProductDetail = (props) => {
    let { resData, resId, fetchingApi } = props;
    let listItem = [];
    useEffect(() => {
        resData.forEach(dataArr => {
            listItem.push(dataArr)
            fetchingApi(listItem);
        });
    }, []);
    return (

        <MainLayout>
            {resData.map((data, inex) => {
                return resId == data.id && <ShowDetail resType={data.product_type} key={inex} item={data} />
            })}
        </MainLayout>
    )
}

ProductDetail.getInitialProps = async ({ query }) => {
    let url_dev = "http://localhost:8000/api/product/"
    const api = await fetch(url_dev)
    const jsonData = await api.json();
    
    return { resData: jsonData, resId: query.id }
}

export default connect(state => state.cartreducer, mapDispatchToProps)(ProductDetail);