import React from 'react'

export const CheckValidateData = (email,password) => {

        const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
        const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
         
        if(!isEmailValid) return "Invalid email";
        if(!isPasswordValid) return "Choose the Strong Password";
        return null;
};
