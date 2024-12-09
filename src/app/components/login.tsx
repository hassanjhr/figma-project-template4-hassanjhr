"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import sponsorsImage from "@/app/assets/sponsors.png";

const Login = () => {
  return (
    <div className="bg-[#F6F7FB]">
      {/* Breadcrumb Section */}
      <div className="bg-[#F6F7FB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-xl font-bold text-[#151875] mb-2">My Account</h2>
          <div className="text-sm text-[#151875]">
            <Link href="/" className="hover:text-[#FB2E86] hover:underline">
              Home
            </Link>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span>Pages</span>
            <span className="mx-2 text-[#B7BACB]">•</span>
            <span className="text-[#FB2E86]">My Account</span>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="bg-white py-10">
        <div className="max-w-[400px] mx-auto bg-white shadow-md rounded-md px-6 py-8">
          <h2 className="text-2xl font-bold text-[#151875] mb-4 text-center">Login</h2>
          <p className="text-sm text-[#151875] text-center mb-8">
            Please login using account detail below.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
            />
            <div className="text-right">
              <a href="#" className="text-sm text-[#151875] hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white rounded-md py-2 font-medium text-sm hover:bg-[#e0226f] transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-[#151875] mt-4">
            Don't have an Account?{" "}
            <a href="#" className="text-[#FB2E86] hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-white py-10 flex justify-center">
        <Image src={sponsorsImage} alt="Sponsors" className="max-w-[80%] md:max-w-[60%]" />
      </div>
    </div>
  );
};

export default Login;
