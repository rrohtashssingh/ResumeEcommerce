import React from "react";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
    return (
        <>


            <div className="w-48 text-gray-700 dark:bg-gray-900 dark:text-white">
                <h1 className="text-white px-2 border-b py-2 border-b-gray-200 text-2xl">Admin Dashboard</h1>
                <NavLink to={'/dashboard/admin/create-category'} className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <BiCategory className="me-2.5" size={20} />
                    Create Category
                </NavLink>
                <NavLink to={'/dashboard/admin/create-product'} className="relative flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <FaCartFlatbed className="me-2.5" size={20} />
                    Create Product
                </NavLink>
                <NavLink to={'/dashboard/admin/users'} className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <FaUser className="me-2.5" size={20} />
                    Users
                </NavLink>
            </div>


        </>
    );
};

export default AdminMenu;