import { LOGIN_FIELDS } from '../lib/form_fields'
import CustomForm from '../components/CustomForm'
import { useAuthStore } from '../store/useAuthStore';
import { useFormStore } from '../store/useFormStore';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const {login, isLoggingIn} = useAuthStore();
  const { formData, submitForm } = useFormStore();
  
  const validateForm = () => {
    if (!formData.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      return toast.error("Please enter a valid email address");
    }
  
    if (!formData.password || formData.password.length < 5) {
      return toast.error("Password must be at least 5 characters long");
    }  
    return true; // If all validations pass
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if(success === true) {
      login(formData)
    }
  };
  return (
    <div className=''>
      {/* login form */}
      <CustomForm 
      Heading="Hey There!"
      ParagraphOne="Are you ready to chat and have fun?"
      ParagraphTwo="Let's get started 🚀"
      Fields={LOGIN_FIELDS} // ✅ Ensure it is correctly passed
      Button_Labal={"Sign In"}
      handleSubmit={handleSubmit}
    />
    </div>
  )
}

export default LoginPage