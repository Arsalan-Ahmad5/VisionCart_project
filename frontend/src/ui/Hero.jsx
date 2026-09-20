import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
   <div className="bg-slate-50">
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
              Intelligent Retail Automation
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
              Smarter Checkout.
              <br />
              Better Inventory.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              VisionCart uses computer vision to automate retail checkout,
              track products in real time, and keep inventory synchronized.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-md bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800">
                Get Started
              </button>

              <button className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
               <Link to='/login'>Login</Link>
              </button>
            </div>
          </div>

        </div>
      </section>
      <hr className="text-slate-200"/>
    </div>
  )
}

export default Hero
