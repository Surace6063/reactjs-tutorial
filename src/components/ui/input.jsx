import { cn } from "../lib/utils";

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-lg border border-pink-300 py-2.5 px-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-900/10",
        className,
      )}
    />
  );
};
export default Input;
