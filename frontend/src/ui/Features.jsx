import { features } from "../data/landingdata";

function Features() {
  return (
    <div>
      <section id="features" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Features
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Everything needed for smarter retail operations.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            VisionCart combines computer vision, automated checkout, and
            inventory management into a single retail management system.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 font-semibold text-teal-700">
                {feature.no}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <hr className="border-slate-200"/>
    </div>
  );
}

export default Features;