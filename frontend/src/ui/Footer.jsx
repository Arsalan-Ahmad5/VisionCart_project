import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-700 text-sm font-bold text-white">
                  V
                </div>

                <span className="text-lg font-semibold text-slate-900">
                  VisionCart
                </span>

              </div>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                Intelligent retail checkout and inventory automation
                powered by computer vision.
              </p>
            </div>


            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Product
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="/features"
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  Features
                </a>

                <a
                  href='/'
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  Checkout
                </a>

                <a
                  href='/'
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  Inventory
                </a>
              </div>
            </div>


           
            <div>

              <div className="mt-4 space-y-3">
                <a
                  href="/about"
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  About
                </a>

                <a
                
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  Contact - 7052501218
                </a>

                {/* <a
                  href="#"
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  GitHub
                </a> */}
              </div>
            </div>

          </div>


          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-slate-500">
              © 2026 VisionCart. All rights reserved.
            </p>

            <p className="text-sm text-slate-400">
              AI-powered retail automation
            </p>

          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer
