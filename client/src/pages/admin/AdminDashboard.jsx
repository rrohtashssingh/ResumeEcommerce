import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

const AdminDashboard = () => {
    return (
        <Layout className="">
            <div className="container p-0 h-[72vh]">
                <div className="flex gap-2">
                    <div className="grid grid-cols-3">
                        <AdminMenu />
                    </div>
                    <div className="grid grid-cols-9">
                        Content
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AdminDashboard