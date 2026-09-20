import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">

        
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">
         <Link to='/'>V</Link>
          </div>

          <div>
            <h1 className="text-base font-semibold tracking-tight text-slate-900">
              <Link to='/'>Vision Cart</Link>
            </h1>

            <p className="text-[11px] text-slate-500">
               An Smart Retail Management System
            </p>
          </div>
        </div>

      
       
                <div className='flex gap-5'>

                    <a
            href="/howitworks"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            How it works
          </a>

                 <a
                  href="/features"
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                 Features
                </a>


                  <a
                  href="/about"
                  className="block text-sm text-slate-500 hover:text-teal-700"
                >
                  About
                </a>

              

                </div>
        

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <button 
            type="button"
           className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          ><Link to='/dashboard'>Login
          </Link>
          </button>

           <div className="h-8 w-px bg-slate-200" />

          <button 
            type="button"
            className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          ><Link to='/signup'>
          Signup</Link>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
