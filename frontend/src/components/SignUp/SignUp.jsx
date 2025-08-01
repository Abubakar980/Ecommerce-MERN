import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = () => {
    console.log("Submitted");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start items-center py-10 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mt-30 sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
          Register as a new user
        </h2>
      </div>

      {/* Form */}
      <div className="w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            {/* FullName */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                FullName
              </label>
              <input
                type="text"
                name="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 
                focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md 
                shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 
                focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md 
                  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 
                  focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer text-gray-500"
                    size={22}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer text-gray-500"
                    size={22}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            {/* Upload Pic */}
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Profile Picture
              </label>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <RxAvatar className="text-gray-400 h-10 w-10" />
                  )}
                </div>

                <label
                  htmlFor="file-input"
                  className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Upload
                </label>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  className="sr-only"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full h-[40px] flex justify-center items-center 
                border border-transparent text-sm font-medium rounded-md text-white 
                bg-blue-600 hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>

            {/* Sign Up */}
            <div className="flex justify-center items-center">
              <h4 className="text-sm">Already have an account?</h4>
              <Link
                to="/login"
                className="text-blue-600 hover:underline pl-1 text-sm"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
