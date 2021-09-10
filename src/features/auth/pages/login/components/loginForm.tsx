import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/common';
import { InputField } from 'components/FormFields';
import { LoginParams } from 'models';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

export interface LoginFormProps {
  onSubmit?: (formValues: LoginParams) => void;
}

const schema = yup.object().shape({
  username: yup.string().required('Please enter email.'),

  password: yup.string().required('Please enter password'),
  // .min(8, 'Password must be at least 8 characters'),
});

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: LoginParams) => {
    await onSubmit?.(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex flex-col justify-center items-center "
    >
      <InputField name="username" control={control} label="Username" placeholder="enter username" />
      <InputField
        name="password"
        control={control}
        label="Password"
        placeholder="password"
        type="password"
      />

      <div className="flex flex-row justify-between items-center w-full mt-4">
        <Link to="/forgot-password" className=" text-gray-700 text-sm hover:text-blue-500 ">
          Forgot Password
        </Link>

        {/* <button
          disabled={isSubmitting}
          type="submit"
          onClick={handleSubmit(handleFormSubmit)}
          className={`py-3 px-12 bg-red-400 ${
            isSubmitting ? '' : 'hover:bg-red-500'
          } rounded-md text-white text-sm flex flex-row`}
        >
          Sign in
        </button> */}
        <Button
          txLabel="button:signin"
          onClick={handleSubmit(handleFormSubmit)}
          loading={isSubmitting}
        />
      </div>
    </form>
  );
};
