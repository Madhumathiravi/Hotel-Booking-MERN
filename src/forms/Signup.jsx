import FloatingInput from "../components/FloatingInput";
import { useState } from "react";

export default function Signup({ close }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
  switch (name) {
    case "name": {
      const nameRegex = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+)*$/;
      if (!value.trim()) return "Name is required";
      if (!nameRegex.test(value)) return "Enter a valid name";
      return "";
    }

    case "email": {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value)) return "Enter a valid email address";
      return "";
    }

    case "password": {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!value) return "Password is required";
      if (!passwordRegex.test(value))
        return "Password must be 8+ chars, include uppercase, lowercase, number & special character";
      return "";
    }

    case "confirmPassword": {
      if (!value) return "Confirm your password";
      if (value !== formData.password) return "Passwords do not match";
      return "";
    }

    default:
      return "";
  }
};

const handleBlur = (e) => {
  const { name, value } = e.target;

  setTouched((prev) => ({
    ...prev,
    [name]: true
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: validateField(name, value)
  }));
};

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const [isSubmitted, setIsSubmitted] = useState(false);


const [touched, setTouched] = useState({});


const validate = () => {
  const newErrors = {};

  // NAME REGEX
  const nameRegex = /^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+)*$/;

  // EMAIL REGEX
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // PASSWORD REGEX
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // NAME
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  } else if (!nameRegex.test(formData.name)) {
    newErrors.name = "Enter a valid name";
  }

  // EMAIL
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  // PASSWORD
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "Password must be 8+ chars, include uppercase, lowercase, number & special character";
  }

  // CONFIRM PASSWORD
  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validate();
  if (!isValid) return;

  try {
    const res = await fetch("http://127.0.0.1:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    setIsSubmitted(true);
  } catch (error) {
    console.error("Signup error", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      <div className="w-[90%] sm:w-[400px] md:w-[420px] lg:w-[440px] bg-white rounded-xl shadow-xl p-6 relative">
        
        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

     {isSubmitted ? (
  <div className="text-center py-10">
    <h2 className="text-xl font-semibold mb-2">Account Created Successfully!</h2>
    <p>You can now log in.</p>
    <button
      onClick={close}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      Close
    </button>
  </div>
) : (
  <form onSubmit={handleSubmit} noValidate className="space-y-5 md:space-y-5">
    
        <h2 className="text-xl font-semibold mb-6">Create Account</h2>
    <FloatingInput
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.name}
      touched={touched.name}
    />

    <FloatingInput
      label="Email"
      name="email"
      type="text"
      value={formData.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.email}
      touched={touched.email}
    />

    <FloatingInput
      label="Password"
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.password}
      touched={touched.password}
    />

    <FloatingInput
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.confirmPassword}
      touched={touched.confirmPassword}
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 md:py-2 rounded-md font-medium"
    >
      Sign Up
    </button>
  </form>
)}

      </div>
    </div>
  );
}

