import { LOGIN_FIELDS } from '../lib/form_fields'
import CustomForm from '../components/CustomForm'
import { useAuthStore } from '../store/useAuthStore';
import { useFormStore } from '../store/useFormStore';

const HomePage = () => {
  const {login, isLoggingIn} = useAuthStore();
  const { formData, submitForm } = useFormStore();

  const handleSubmit = (e) => {
    e.preventDefault();
      login(formData)
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

export default HomePage