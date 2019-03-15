import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {

    render() {
        const title = this.props.title;


        return (
            <React.Fragment>
                <a>{ title }</a>
                {this.props.children}
                <p className='customClass'> I am stylewd p element</p>
                <p className='customClassFromFile'> I am stylewd p element</p>

                <Link href="/">
                    <a style={{'fontSize': '20px'}}>Home</a>
                </Link>

                <Link href="/">
                    <a>About</a>
                </Link>

                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>
                
                <Link href="/portfolios">
                    <a>Works</a>
                </Link>
           
                <Link href="/courses">
                    <a>Courses</a>
                </Link>
                <style jsx>
                    {`
                       a {
                           font-size: 20px;
                       };
                       .customClass {
                           color: red;
                       };
                    `}
                </style>
            </React.Fragment>
        )
    }
}
export default Header;