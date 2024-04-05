import React, { useState } from "react";

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
    // Clear the error message when the user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { ...errors };
    let formIsValid = true;

    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        formIsValid = false;
      } else {
        newErrors[key] = "";
      }
    }

    if (!formData.agreeTerms) {
      newErrors["agreeTerms"] = "Please agree to the Terms and Conditions";
      formIsValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors["confirmPassword"] = "Passwords do not match";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Perform form submission
      console.log("Form submitted:", formData);
      window.location.href = "/page2";
    }
  };

  return (
    <div className="max-w-md mx-auto mt-2 text-xs">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col">
          <label className="text-gray-500 mb-1" htmlFor="fullName">
            Full Name
          </label>
          <input
            className={`border-2 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } py-2 px-4 text-gray-800`}
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-gray-500 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className={`border-2 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } py-2 px-4 text-gray-800`}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-gray-500 mb-1" htmlFor="password">
            Password
          </label>
          <input
            className={`border-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            } py-2 px-4 text-gray-800`}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-gray-500 mb-1" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`border-2 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } py-2 px-4 text-gray-800`}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="flex items-center text-gray-500 mb-1">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <p className="ml-2">
              I agree to the{" "}
              <u>
                  <a href="#" className="text-gray-800">Terms of Use</a>
              </u>{" "}
              and{" "}
              <u>
                  <a href="#" className="text-gray-800">Privacy Policy</a>
              </u>
            </p>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-500 mt-1">{errors.agreeTerms}</p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 mt-2 "
          >
            Create Account
          </button>
        <div className=" mt-4">
          <p>
            Already have an account? {' '}
              <u>
                
              <a href="#">Login</a>
            </u>
          </p>
        </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
