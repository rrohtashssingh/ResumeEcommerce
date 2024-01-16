import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, author, description, keywords, title }) => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Helmet>
            <Header />
            <main style={{ marginBottom: '20px' }}><ToastContainer />{children}</main>
            <Footer />
        </div>
    )
};

//if you want that your website should be SEO friendly then on every page write description, author name,keywords and title accordingly
Layout.defaultProps = {
    title: 'Ecommerce App',
    description: 'MERN Stack Project',
    keywords: 'mern,react,mongodb,node',
    author: 'Rohtash Singh'
}

export default Layout