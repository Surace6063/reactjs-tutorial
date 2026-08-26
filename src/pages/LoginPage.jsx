import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const registerValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,"Weak password.")
})

const LoginPage = () => {
const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  // function to handle form submit
  const handleRegister = async (data) => {
    try {
      await axios.post("http://localhost:3000/users",data)
      toast.success("User created sucessfully.")
      navigate("/")
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Create an account
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Enter your details below to get started
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                {...register("email")}
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
              {errors.email && (
                <p className="text-sm text-red-700 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                {...register("password")}
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
              {errors.password && (
                <p className="text-sm text-red-700 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>


            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a href="#" className="font-medium text-slate-900 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage
