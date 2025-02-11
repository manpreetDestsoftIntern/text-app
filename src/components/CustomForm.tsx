import { useFormStore } from '../store/useFormStore';
import React from 'react'

interface Field {
    name: string;
    placeholder: string;
    type: string;
}

interface Props {
    Heading?: string;
    ParagraphOne?: string;
    ParagraphTwo?: string;
    Fields: Array<Field>;
    Button_Labal: string;
    handleSubmit: any;
}

const CustomForm = (props: Props) => {
    const { Heading, ParagraphOne, ParagraphTwo, Fields , Button_Labal, handleSubmit} = props;
    const { formData, setField, submitForm, errors, isSubmitting } = useFormStore();

    return (
        <div className="bg-theme min-h-screen text-white grid grid-cols-2">
            <div className="flex justify-center items-end lg:items-center md:items-center h-full lg:col-span-1 md:col-span-1 col-span-2">
                <span className="text-center :w-[60%] md:w-[60%] w-fit px-16 lg:py-32 md:py-32 py-8 lg:rounded-r-[70%] lg:rounded-t-[90%] lg:rounded-l-[90%] lg:rounded-b-[70%] md:rounded-r-[70%] md:rounded-t-[90%] md:rounded-l-[90%] md:rounded-b-[70%] lg:bg-[#232338] md:bg-[#232338]">
                    <h2 className="text-3xl mb-4">{Heading}</h2>
                    <p>{ParagraphOne}</p>
                    <p>{ParagraphTwo}</p>
                </span>
            </div>

            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex justify-center lg:items-center md:items-center h-full">
                <form className="bg-[#232338] w-fit h-fit p-10 rounded-2xl text-center"
                          onSubmit={handleSubmit} // ✅ Submit the form here
                          >
                    {Fields?.map((field: Field, index: number) => (
                        <>
                        <input
                            key={index}
                            className="block p-2 mb-4 border-b focus:outline-none text-center"
                            placeholder={field.placeholder}
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""} // ✅ Controlled input
                            onChange={(e) => setField(field.name, e.target.value)} // ✅ Updates store            
                        />
                        {errors[field.name] && (
                            <p className="text-red-500 text-sm">{errors[field.name]}</p>
                          )}
                          </>
                    ))}
                    <button
                     className="block cursor-pointer w-full hover:text-white bg-white hover:bg-[rgb(22,22,37)] hover:border-white text-[rgb(22,22,37)] font-bold border-2 border-transparent rounded-xl px-4 py-2 mx-auto text-center transition-all duration-300 ease-in-out"
                     type="submit"
                    //  disabled={isSubmitting}
                     >
                        {Button_Labal}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomForm;
