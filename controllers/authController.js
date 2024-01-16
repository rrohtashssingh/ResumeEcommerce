//So controller receives two things: request and response. Working: controller takes request and modifies request and saves something     into database and then if saved successfully it will return a response to the client and if something went wrong then it will send the specific error to client.
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {

    try {
        const { name, email, password, address, phone } = req.body;
        //validations
        if (!name) {
            return res.send({ message: 'name is required' });
        }
        if (!email) {
            return res.send({ message: 'email is required' });
        }
        if (!password) {
            return res.send({ message: 'password is required' });
        }
        if (!phone) {
            return res.send({ message: 'phone is required' });
        }
        if (!address) {
            return res.send({ message: 'address is required' });
        }

        //check User
        const existingUser = await userModel.findOne({ email })
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Registered Please Login'
            })
        }

        //registered user
        const hashedPassword = await hashPassword(password)
        //Save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()
        res.status(201).send({
            success: true,
            message: 'User registered successfully'
        })

    } catch (err) {
        console.log("Error in registration", err)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            err
        })
    }
};

// POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //check  user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            })
        }

        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });        // 1 hour expiration

        res.status(200).send({
            success: true,
            message: "login successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error login happened",
            error
        })
    }
}

//test controller
export const testController = (req, res) => {
    res.send('protected route');
}