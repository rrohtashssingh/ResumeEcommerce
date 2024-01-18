import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");

    const navigate = useNavigate();

    const path = 'http://localhost:8080';
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${path}/api/v1/auth/forgot_password`, {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message)
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title="forgot_password">
            <div className="login_form  flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="bg-black max-w-md min-w-[30vw] text-white rounded-md flex items-center justify-center flex-col gap-5 px-5 py-5">
                    <h4 className="text-2xl font-bold ">Forgot Password</h4>
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
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="p-1 rounded-sm bg-gray-100 text-black"
                                id="exampleInputPassword1"
                                placeholder="Enter New Password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="p-1 rounded-sm bg-gray-100 text-black"
                                id="answer"
                                placeholder="Who do you love?"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="py-2 bg-gray-100 rounded-md font-semibold text-black px-3">
                        RESET
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default ForgotPassword;