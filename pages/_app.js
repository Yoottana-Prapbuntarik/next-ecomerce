import React from 'react'
import App from 'next/app'
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/initStore';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.scss'
import 'react-multi-carousel/lib/styles.css';

class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(initStore)(MyApp)