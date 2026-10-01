import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Shield, ArrowRight } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("supervisor");
  const [adminSecretKey, setAdminSecretKey] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (role === "admin" && !adminSecretKey.trim()) {
      setError("Please enter Admin Secret Key");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role,
            ...(role === "admin" && { adminSecretKey }),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      navigate("/login");

    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">

      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="mb-4 text-center">

          <h1 className="text-xl font-semibold text-slate-900">
            Create your account
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            Get started with VisionCart
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
            {error}
          </div>
        )}

        {/* Card */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Full name
              </label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arpit Verma"
                  className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">
                Select role
              </label>

              <div className="grid grid-cols-2 gap-2">

                <button
                  type="button"
                  onClick={() => {
                    setRole("supervisor");
                    setAdminSecretKey("");
                  }}
                  className={`rounded-md border px-3 py-2 text-xs font-semibold ${
                    role === "supervisor"
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-slate-300 text-slate-600"
                  }`}
                >
                  <User className="mx-auto mb-1 h-4 w-4" />
                  Supervisor
                </button>

                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`rounded-md border px-3 py-2 text-xs font-semibold ${
                    role === "admin"
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-slate-300 text-slate-600"
                  }`}
                >
                  <Shield className="mx-auto mb-1 h-4 w-4" />
                  Admin
                </button>

              </div>
            </div>

            {/* Admin Secret */}
            {role === "admin" && (
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Admin Secret Key
                </label>

                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                  <input
                    type="password"
                    value={adminSecretKey}
                    onChange={(e) => setAdminSecretKey(e.target.value)}
                    placeholder="Enter admin secret key"
                    className="h-10 w-full rounded-md border border-slate-300 pl-9 pr-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800 disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create account"}

              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>

          </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-teal-700 hover:text-teal-800"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;