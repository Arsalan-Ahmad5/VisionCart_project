import React from 'react'
import { howItWorksSteps } from "../data/landingdata";

function HowItWorks() {
  return (
    <div>
      <section id="how-it-works" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            From product detection to checkout.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            VisionCart connects computer vision with backend services and
            inventory management to automate the retail checkout workflow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((step) => (
            <div key={step.number}>
              <p className="text-sm font-bold text-teal-700">
                {step.number}
              </p>

              <div className="mt-3 h-px bg-slate-200" />

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <hr className="text-slate-200"/>
    </div>
  );
}

export default HowItWorks;
