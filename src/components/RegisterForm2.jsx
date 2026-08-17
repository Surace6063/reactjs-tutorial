import { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm2 = () => {
    const [formData,setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassword: ""
    })

    // handling all input with one function
    const handleChange = (e) => {
       setFormData({
        ...formData,
         [e.target.name]: e.target.value
       }) 
    }

    // function to submit form
    const handleRegister = (e) => {
        e.preventDefault()
        
        console.log(formData)
        toast.success("User registered sucessfully!")

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

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Full name
              </label>
              <input
                id="name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Cooper"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
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
                value={formData.email}
                onChange={handleChange} 
                placeholder="jane@company.com"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
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
                value={formData.password}
                onChange={handleChange} 
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
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
                name="conformPassword"
                type="password"
                value={formData.conformPassword}
                onChange={handleChange} 
                placeholder="Re-enter your password"
                className="w-full rounded-lg border border-slate-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10"
              />
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
  )
}
export default RegisterForm2