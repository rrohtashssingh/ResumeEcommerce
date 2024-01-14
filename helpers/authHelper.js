import bycrpt from "bcrypt"

//we are using it to encrypt the password the user will provide;
export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bycrpt.hash(password, saltRounds);
        return hashedPassword;
    }
    catch (error) {
        console.log(error)
    }
}

export const comparePassword = async (password, hashedPassword) => {
    return bycrpt.compare(password, hashedPassword);
}