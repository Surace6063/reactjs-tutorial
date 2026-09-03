import { cn } from "../lib/utils"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-slate-800 text-white",
    secondary: "bg-primary text-white",
    outline: "border border-slate-300 text-slate-700",
  }

  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-4",
    lg: "px-8 py-5",
  }

  return (
    <button
      {...props}
      className={cn(
        variants[variant],
        sizes[size],
        className,
        "rounded-md cursor-pointer shadow",
      )}
    >
      {children}
    </button>
  )
}
export default Button
