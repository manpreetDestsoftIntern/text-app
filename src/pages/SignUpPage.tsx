import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuthStore } from '../store/useAuthStore';
import toast from "react-hot-toast";
import CustomForm from "../components/CustomForm"
import { SIGN_UP_FIELDS } from "../lib/form_fields";
import { useAuthStore } from "../store/useAuthStore";
import { useFormStore } from "../store/useFormStore";

const SignUpPage = () => {
  const { formData, submitForm } = useFormStore();

  const {signup, isSigningUp} = useAuthStore();
  const validateForm = () => {
    if (!formData.username) return toast.error("Please enter a full name");
  
    if (!formData.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      return toast.error("Please enter a valid email address");
    }
  
    if (!formData.password || formData.password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    }
    if (formData.password !== formData.confirm_password) {
      return toast.error("Password and confirm_password are not same");
    }
  
    return true; // If all validations pass
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
console.log(formData)
    const success = validateForm();
    if(success === true) {
      signup(formData)
    }
  };
  

  return (
    <>
      <CustomForm 
      Heading="Hey There!"
      ParagraphOne="Are you ready to chat and have fun?"
      ParagraphTwo="Let's get started 🚀"
      Fields={SIGN_UP_FIELDS} // ✅ Ensure it is correctly passed
      Button_Labal={"Sign Up"}
      handleSubmit={handleSubmit}
    />
    </>
  );
};

export default SignUpPage;
