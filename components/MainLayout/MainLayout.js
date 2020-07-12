import React from 'react';
import Head from 'next/head';
import NavigationContainer from '../Navigation/NavigationContainer';

const MainLayout = (props) => {
    return (
        <div>
            <Head>
                <title>
                    e-comerce development
                </title>
            </Head>
            <div className="container-web">
                <NavigationContainer />
            </div>
                <div className="container-web">
                    {props.children}
                </div>
        </div>
    )
}

export default MainLayout;