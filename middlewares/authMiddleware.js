// whenever we need to pass the data from the client to the server we use body parser which is provided by express here
// that is middlewares

import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base

export const requireSignIn = async (req, res, next) => {
    //if we don't write next here our response will not be thrown by the middleware instead it will save the response

    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
    catch (error) {
        console.log("error in middlwarer", error);
    }
};

//admin access 
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Access'
            });
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Erorr in admin middleware',
            error
        })
    }
}