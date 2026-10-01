import { useEffect, useRef, useState } from "react";
import {
  Camera,
  CheckCircle2,
  Minus,
  Plus,
  ScanSearch,
  Trash2,
  CreditCard,
} from "lucide-react";
import { detectedProducts } from "../data/landingdata";
import { useNavigate } from "react-router-dom";

function LiveCheckout() {
  const [cart, setCart] = useState(detectedProducts);
const navigate = useNavigate();
const videoRef = useRef(null);
const [cameraOn, setCameraOn] = useState(false);

const toggleCamera = async () => {
  if (cameraOn) {
    // Camera OFF
    const stream = videoRef.current?.srcObject;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    setCameraOn(false);
    return;
  }

 
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    videoRef.current.srcObject = stream;
    setCameraOn(true);
  } catch (error) {
    console.error("Camera access failed:", error);
  }
};


  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + change),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Live Checkout
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor product detection and manage the current cart.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 self-start sm:self-auto">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>

          <span className="text-sm font-medium text-emerald-700">
            Camera Live
          </span>
        </div>
      </div>

      {/* Main Checkout Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Camera Section */}
        <div className="col-span-1 lg:col-span-7">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

            <div className="flex items-center justify-between border-b border-slate-200 px-4 sm:px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 shrink-0">
                  <Camera className="h-5 w-5 text-teal-700" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Camera Feed
                  </h2>

                  <p className="text-xs text-slate-500">
                    Camera 01 · Checkout Counter
                  </p>
                </div>
              </div>

              <button
                onClick={toggleCamera}
                className={`rounded-lg px-3 py-2 text-xs font-semibold text-white transition ${
                  cameraOn
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {cameraOn ? "Turn Camera Off" : "Turn Camera On"}
              </button>
            </div>

           
            {/* Mock Camera */}
            <div className="m-3 sm:m-5 h-[240px] sm:h-[340px] md:h-[430px] overflow-hidden rounded-lg bg-slate-900">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="h-full w-full object-cover"
              />
            </div>
           

            {/* Camera Info */}
            <div className="grid grid-cols-3 border-t border-slate-200 text-center sm:text-left">

              <div className="border-r border-slate-200 px-3 sm:px-5 py-3 sm:py-4">
                <p className="text-xs text-slate-500">Camera</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  CAM-01
                </p>
              </div>

              <div className="border-r border-slate-200 px-3 sm:px-5 py-3 sm:py-4">
                <p className="text-xs text-slate-500">Status</p>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  Connected
                </p>
              </div>

              <div className="px-3 sm:px-5 py-3 sm:py-4">
                <p className="text-xs text-slate-500">Detections</p>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 lg:col-span-5 space-y-6">

          {/* Detection Results */}
          <div className="rounded-xl border border-slate-200 bg-white">

            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50">
                <ScanSearch className="h-5 w-5 text-teal-700" />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Detection Results
                </h2>

                <p className="text-xs text-slate-500">
                  Products detected by the AI model
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-100">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      SKU: {product.sku}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">
                      {product.confidence}%
                    </p>

                    <p className="mt-1 text-xs text-emerald-600">
                      Confidence
                    </p>
                  </div>

                  <div className="ml-5 flex h-7 min-w-7 items-center justify-center rounded-md bg-slate-100 px-2 text-xs font-semibold text-slate-700">
                    x{product.quantity}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Current Cart */}
          <div className="rounded-xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Current Cart
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Review detected products before checkout
              </p>
            </div>

            <div className="divide-y divide-slate-100">

              {cart.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-slate-500">
                    Cart is empty
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-5 py-4 gap-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        ₹{item.price} each
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">

                      {/* Quantity */}
                      <div className="flex items-center rounded-lg border border-slate-200">

                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center text-slate-500 hover:bg-slate-50"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>

                        <span className="w-8 text-center text-sm font-medium text-slate-900">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center text-slate-500 hover:bg-slate-50"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>

                      </div>

                      {/* Item Total */}
                      <p className="w-16 text-right text-sm font-semibold text-slate-900">
                        ₹{item.price * item.quantity}
                      </p>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                    </div>
                  </div>
                ))
              )}

            </div>
          </div>

          {/* Bill Summary */}
          <div className="rounded-xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Bill Summary
              </h2>
            </div>

            <div className="space-y-3 px-5 py-5">

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-medium text-slate-900">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Tax (5%)
                </span>

                <span className="font-medium text-slate-900">
                  ₹{tax.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-slate-900">
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>

             <button
  onClick={() =>
    navigate("/supervisor/final-checkout", {
      state: { cart },
    })
  }
  disabled={cart.length === 0}
  className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
>
  <CreditCard className="h-4 w-4" />
  Proceed to Checkout
</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LiveCheckout;