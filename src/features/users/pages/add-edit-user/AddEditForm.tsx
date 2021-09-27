import { User } from "models";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "components/FormFields";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "components/common";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { RefreshIcon, SaveIcon } from "@heroicons/react/outline";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  email: yup.string().required().email("Invalid email format"),
  username: yup.string().required("Please enter email."),
  password: yup
    .string()
    .required("Please enter password")
    .min(8, "Password must be at least 8 characters"),
  firstname: yup.string().required("Please enter first name"),
  lastname: yup.string().required("Please enter last name"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export interface UserFormProps {
  initialValues?: User;
  onSubmit?: (formValues: User) => void;
}

export const UserForm = ({ initialValues, onSubmit }: UserFormProps) => {
  const [error, setError] = useState<string>("");
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<User>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: User) => {
    try {
      // Clear previous submission error
      setError("");
      await onSubmit?.(formValues);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetForm = (e: any) => {
    e.preventDefault();
    reset();
  };
  return (
    <>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 md:pr-2">
          <InputField
            name="email"
            control={control}
            label="Email"
            placeholder="enter email"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-2">
          <InputField
            name="username"
            control={control}
            label="User name"
            placeholder="enter user name"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:pr-2 lg:pl-2">
          <InputField
            name="password"
            control={control}
            label="Password"
            placeholder="enter password"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:pl-2 lg:pr-2">
          <InputField
            name="firstname"
            control={control}
            label="First name"
            placeholder="enter first name"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:pr-2 lg:px-2">
          <InputField
            name="lastname"
            control={control}
            label="Last name"
            placeholder="enter last name"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 md:pl-2">
          <InputField
            name="phone"
            control={control}
            label="Phone number"
            placeholder="enter phone number"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 py-1 mt-6 justify-end">
        <Button preset="outline">
          <Link to={"/users"} className="flex flex-row">
            <ChevronLeftIcon className="w-4 h4  mx-auto" />
            <span className="text-xs ml-2 font-medium">Go back</span>
          </Link>
        </Button>

        <Button onClick={handleResetForm} preset="outline">
          <div className="flex flex-row">
            <RefreshIcon className="w-4 h4  mx-auto" />
            <span className="text-xs ml-2 font-medium">Reset</span>
          </div>
        </Button>
        <Button loading={isSubmitting} onClick={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-row">
            <SaveIcon className="w-4 h4  mx-auto" />
            <span className="text-xs ml-2 font-medium">Save</span>
          </div>
        </Button>
      </div>
    </>
  );
};
