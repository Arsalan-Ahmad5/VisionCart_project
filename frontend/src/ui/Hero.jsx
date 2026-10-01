import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="bg-slate-50">
      <section className="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">

          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-teal-700 uppercase">
              Intelligent Retail Automation
            </p>

            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Smarter Checkout.
              <br />
              Better Inventory.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              VisionCart uses computer vision to automate retail checkout,
              track products in real time, and keep inventory synchronized.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#how-it-works"
                className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition inline-block text-center"
              >
                Get Started
              </a>

              <Link
                to="/login"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition inline-block text-center"
              >
                Login
              </Link>
            </div>
          </div>

        </div>
      </section>
      <hr className="border-slate-200" />
    </div>
  );
};

export default Hero;
