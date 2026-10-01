import { aboutStats } from "../data/landingdata";

function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              About VisionCart
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Building a faster and more reliable retail experience.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              VisionCart is an intelligent retail checkout and inventory
              automation system designed to reduce manual billing, minimize
              checkout delays, and improve inventory accuracy.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
              The system combines computer vision, object tracking, backend
              services, and database management to create an automated
              checkout workflow.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              The Vision
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Replace slow, manual checkout processes with an intelligent
              system that can detect products, generate bills, and keep
              inventory synchronized with minimal manual intervention.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl sm:text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;