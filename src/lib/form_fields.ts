interface Field {
    name: string;
    placeholder: string;
    type: string;
}

export const SIGN_UP_FIELDS: Array<Field> = [
    { 
        name : "email",
        placeholder: "Email",
        type: "email"
    },
    { 
        name : "username",
        placeholder: "Username",
        type: "text"
    },
    { 
        name : "password",
        placeholder: "Password",
        type: "password"
    },
    { 
        name : "confirm_password",
        placeholder: "Confirm password",
        type: "password"
    }
]

export const LOGIN_FIELDS: Array<Field> = [
    { 
        name : "email",
        placeholder: "Email",
        type: "email"
    },
    { 
        name : "password",
        placeholder: "Password",
        type: "password"
    }
]