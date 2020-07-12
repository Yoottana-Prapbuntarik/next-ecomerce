import { connect } from 'react-redux';
import Navigation from './Navigation';

const navigationItems = [
    { keyTitle: "home", routePath: "/index" },
    // { keyTitle: "category", routePath: { Pants: "Pants", Bags: "Bags" } },
    { keyTitle: "category", routePath: { pants: "pants", shoes: "shoes", shirt: "shirt"} },

    { keyTitle: "signup", routePath: "/signup" },
    { keyTitle: "signin", routePath: "/signin" },
    { keyTitle: "cart", routePath: "/cart" },
    { keyTitle: "order", routePath: "/order" }
];

export const initialState = {
    navigationItems: navigationItems,
};

export const Navigationreducer = (state = initialState) => {
    return state;
};

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToProps)(Navigation);