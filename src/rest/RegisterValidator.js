import axios from "axios";

const registerValidator = (idname,username, surname, email, password) => {
    try {
        const response = axios({
            url: "http://localhost:8000/users/signup",
            method: 'POST',
            data: {
                "first_name": username,
                "last_name": surname,
                "email": email,
                "password": password,
                "phone": idname
            }
        }).then(response => console.log(response.status))
    } catch {
        console.log("No sirvio");
    }

}

export {
    registerValidator
};