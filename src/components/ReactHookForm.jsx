import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerValidationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .max(25, "Full name must not exceed 25 characters.")
    .min(3, "Full name must be atleast 3 charcters")
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,"Full name must contain alphabate letter only."),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,"Weak password."),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password didn't match"),
})

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  // function to handle form submit
  const handleRegister = (data) => {
    console.log(data);
    toast.success("User registered sucessfully!");
    reset();
  };

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
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                {...register("fullName")}
                placeholder="Jane Cooper"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />

              {errors.fullName && (
                <p className="text-sm text-red-700 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                {...register("confirmPassword")}
                placeholder="Re-enter your password"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-700 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Create account
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
export default ReactHookForm;
