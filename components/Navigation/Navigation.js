import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import './navStyles.scss';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Navigation = (props) => {
    const [isToggleNav, setToggleNav] = useState(false);
    const { data, cartreducer } = props;

    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState('');

    useEffect(() => {
        let tokenLogin = localStorage.getItem('access-token');
        let userLogin = localStorage.getItem('username');
        setToken(tokenLogin);
        setUserLogin(userLogin);
    }, []);
    const logout = () => {
        let tokenLogin = localStorage.removeItem('access-token');
        let userLogin = localStorage.removeItem('username');
        localStorage.removeItem('uuid');
        setToken(tokenLogin);
        setUserLogin(userLogin);
    }
    return (
        <div className={isToggleNav ? 'nav-box' : 'nav-box-hidden'}>
            <div className="hamburgur-container" onClick={() => { setToggleNav(!isToggleNav) }}>
                <div className={isToggleNav ? 'change-hamburgur-top' : 'hamburgur-top'}></div>
                <div className={isToggleNav ? 'change-hamburgur-middle' : 'hamburgur-middle'} ></div>
                <div className={isToggleNav ? 'change-hamburgur-bottom' : 'hamburgur-bottom'} ></div>
            </div>
            <div className="nav-container">
                <div className="nav-gird-item">
                    <ul className="menu">
                        {data.navigationreducer.navigationItems.map((route, index) => {
                            return (
                                <li className="link-item" key={index}>
                                    {route.keyTitle === "category" ?
                                        <React.Fragment>
                                            <div className="dropdown">
                                                <Link href={{ pathname: "Category", query: { name: route.routePath.shirt } }}>
                                                    {route.keyTitle}
                                                </Link> <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
                                                <div className="dropdown-content" id="dropdown">
                                                    <Link href={{ pathname: "Category", query: { name: route.routePath.shirt } }}>{route.routePath.shirt}</Link>
                                                    <Link href={{ pathname: "Category", query: { name: route.routePath.pants } }}>{route.routePath.pants}</Link>
                                                    <Link href={{ pathname: "Category", query: { name: route.routePath.shoes } }}>{route.routePath.shoes}</Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        : route.keyTitle === "cart" ?
                                            <React.Fragment>
                                                <Link href={route.routePath}>
                                                    {route.keyTitle}
                                                </Link>
                                                {`(${cartreducer.addedItems.length ? cartreducer.addedItems.length : '0'})`}
                                            </React.Fragment>
                                            : route.keyTitle === "signup" ?
                                                <Link href={userLogin ? '' : route.routePath}>
                                                    {userLogin !== null && userLogin !== undefined ?
                                                        `สวัสดี ${userLogin}` : `${route.keyTitle}`
                                                    }
                                                </Link>
                                                : route.keyTitle === "signin" ?
                                                    <Link href={userLogin ? '' : route.routePath}>
                                                        {userLogin !== null && userLogin !== undefined ?
                                                            <span onClick={() => logout()}>ออกจากระบบ</span> : `${route.keyTitle}`
                                                        }
                                                    </Link> :
                                                    route.keyTitle === "order" ?
                                                        <React.Fragment>
                                                            <Link href={route.routePath}>
                                                                {route.keyTitle}
                                                            </Link>
                                                        </React.Fragment>
                                                        : <Link href={route.routePath}>
                                                            {route.keyTitle}
                                                        </Link>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state)(Navigation);