import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Pagenotfound = () => {
    return (
        <Layout title={'page not found'}>
            <div className="flex gap-2 flex-col justify-center items-center">
                <h1 className=" text-7xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">Oops ! Page Not Found</h2>
                <Link to="/" className="text-lg p-1 border-black bg-gray-300 hover:bg-ggray-100 border rounded-md">
                    Go Back
                </Link>
            </div>
        </Layout>
    );
};

export default Pagenotfound;