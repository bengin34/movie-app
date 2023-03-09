import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import { UserContext } from "../context/AuthContext";

const Register = () => {
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );
      setUser(user.user.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <button
              onClick={registerUser}
              type="submit"
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue-500"
              to="/login/"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
  );
};

export default Register;
