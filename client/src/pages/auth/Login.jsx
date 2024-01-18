import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const path = 'http://localhost:8080';
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${path}/api/v1/auth/login`, {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                })
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title="Login User">
            <div className="login_form  flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="bg-black max-w-md min-w-[30vw] text-white rounded-md flex items-center justify-center flex-col gap-5 px-5 py-5">
                    <h4 className="text-2xl font-bold ">LOGIN FORM</h4>
                    <div className="input_box">
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-1 rounded-sm bg-gray-100 text-black"
                                id="exampleInputEmail1"
                                placeholder="Enter Your Email "
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-1 rounded-sm bg-gray-100 text-black"
                                id="exampleInputPassword1"
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="py-2 bg-gray-100 rounded-md font-semibold text-black px-3">
                        LOGIN
                    </button>
                    <Link to={'/forgot_password'}>
                        Forgot Password
                    </Link>
                </form>
            </div>
        </Layout>
    );
};

export default Login;