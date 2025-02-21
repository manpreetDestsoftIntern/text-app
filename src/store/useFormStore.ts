import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

interface FormState {
  formData: { [key: string]: string };
  isSubmitting: boolean;
  errors: { [key: string]: string };
  setField: (field: string, value: string) => void;
  validateForm: () => boolean;
  submitForm: (endpoint: string) => Promise<void>;
  resetForm: () => void;
}

export const useFormStore = create<FormState>((set, get) => ({
  formData: {},
  isSubmitting: false,
  errors: {},

  setField: (field, value) => {
    set((state) => ({
      formData: { ...state.formData, [field]: value },
    }));
  },

  validateForm: () => {
    const { formData } = get();
    const errors: { [key: string]: string } = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = `${key} is required`;
      }
    });

    set({ errors });

    if (Object.keys(errors).length > 0) {
      toast.error("Please fill out all fields correctly.");
      return false;
    }

    return true;
  },

  submitForm: async (endpoint) => {
    if (!get().validateForm()) return;

    set({ isSubmitting: true });

    try {
      const res = await axiosInstance.post(endpoint, get().formData);
      toast.success("Form submitted successfully!");
      get().resetForm();
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Submission failed.");
    } finally {
      set({ isSubmitting: false });
    }
  },

  resetForm: () => {
    set({ formData: {}, errors: {} });
  },
}));
