function Login() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">
            V
          </div>

          <h1 className="mt-4 text-2xl font-semibold text-slate-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to your VisionCart account
          </p>
        </div>


        {/* Login Card */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <form className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>


            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-11 w-full rounded-md border border-slate-300 px-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>


            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-teal-700 hover:text-teal-800"
              >
                Forgot password?
              </button>
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="h-11 w-full rounded-md bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Sign in
            </button>

          </form>


          {/* Signup */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-teal-700 hover:text-teal-800"
            >
              Create one
            </button>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;