import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const isValid = touched && !error && value;

  return (
    <div className="relative flex flex-col">
      <input
        type={isPassword && showPassword ? "text" : type}
        inputMode={name === "email" ? "email" : "text"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        className={`peer w-full rounded-md px-3 pt-4 pb-2 pr-12 focus:outline-none transition-colors ${
          error
            ? "border border-red-500 focus:border-red-500"
            : isValid
            ? "border border-green-500 focus:border-green-500"
            : "border border-gray-300 focus:border-blue-600"
        }`}
      />

      <label
  className={`pointer-events-none absolute left-3 -top-2 bg-white px-0.5 text-sm transition-all ${
    error
      ? "text-red-500"
      : isValid
      ? "text-green-600"
      : "text-gray-500 peer-focus:text-blue-600"
  }
  peer-placeholder-shown:top-3
  peer-placeholder-shown:text-base
  peer-placeholder-shown:text-gray-400
  peer-focus:-top-2
  peer-focus:text-sm`}
>
  {label}
</label>
{isPassword && value && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <LuEyeClosed size={16} /> : <LuEye size={16} />}
        </button>
      )}

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
