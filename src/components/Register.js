import React from "react";
import SignUpForm from "./SignUpForm";

const Register = () => {
  return (
    <div className=" flex flex-col justify-top mt-3">
      <div className="max-w-7xl w-full text-center">
        <div>
          <h1 className="text-2xl mb-3">teach:able</h1>
          <hr className="border-gray-800 bg-gray-800 h-0.5" />
        </div>
        <div>
          <h1 className="text-2xl font-light my-3">
            Get started with Teachable
          </h1>
          <div className="text-xs">
            <p className="text-gray-500">
              Join more than 100,000 creators who've sold over
              <b className="text-gray-800"> $1 billion</b> in courses and
              coaching.
            </p>
          </div>
        </div>
      </div>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Register;
