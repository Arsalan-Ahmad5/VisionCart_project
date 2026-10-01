import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Smartphone,
  Banknote,
  Receipt,
  ShieldCheck,
} from "lucide-react";

function CheckoutConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [confirmed, setConfirmed] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleConfirmPayment = () => {
    // Backend integration baad mein yahan aayegi
    setConfirmed(true);
  };

  // Temporary success screen
  if (confirmed) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>

          <h1 className="mt-5 text-xl font-semibold text-slate-900">
            Payment Successful
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The order has been successfully confirmed.
          </p>

          <div className="mt-6 rounded-lg bg-slate-50 px-5 py-4">
            <p className="text-xs text-slate-500">
              Total Amount
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              ₹{total.toFixed(2)}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-emerald-600">
            <ShieldCheck className="h-4 w-4" />
            Transaction recorded successfully
          </div>

          <button
            onClick={() => navigate("/live-checkout")}
            className="mt-6 h-10 w-full rounded-lg bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Start New Checkout
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <button
            onClick={() => navigate(-1)}
            className="mb-3 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Live Checkout
          </button>

          <h1 className="text-2xl font-semibold text-slate-900">
            Checkout Confirmation
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Review the order and confirm the payment.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 self-start sm:self-auto">
          <Receipt className="h-4 w-4 text-slate-500" />

          <span className="text-sm font-medium text-slate-700">
            Order Review
          </span>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Order Summary */}
        <div className="col-span-1 lg:col-span-8 rounded-xl border border-slate-200 bg-white overflow-hidden">

          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Order Summary
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Verify the detected products before confirming payment.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[550px]">

              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500">
                    Product
                  </th>

                  <th className="px-5 py-3 text-center text-xs font-semibold text-slate-500">
                    Quantity
                  </th>

                  <th className="px-5 py-3 text-right text-xs font-semibold text-slate-500">
                    Unit Price
                  </th>

                  <th className="px-5 py-3 text-right text-xs font-semibold text-slate-500">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {cart.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-5 py-10 text-center text-sm text-slate-500"
                    >
                      No products found in the cart.
                    </td>
                  </tr>
                ) : (
                  cart.map((item) => (
                    <tr key={item.id}>

                      <td className="px-5 py-4">
                        <p className="text-sm font-medium text-slate-900">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          SKU: {item.sku}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-center text-sm text-slate-700">
                        {item.quantity}
                      </td>

                      <td className="px-5 py-4 text-right text-sm text-slate-700">
                        ₹{item.price.toFixed(2)}
                      </td>

                      <td className="px-5 py-4 text-right text-sm font-semibold text-slate-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 lg:col-span-4 space-y-6">

          {/* Payment Method */}
          <div className="rounded-xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Payment Method
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Select the customer's payment method.
              </p>
            </div>

            <div className="space-y-3 p-5">

              {/* UPI */}
              <button
                onClick={() => setPaymentMethod("UPI")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left ${
                  paymentMethod === "UPI"
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Smartphone
                  className={`h-5 w-5 ${
                    paymentMethod === "UPI"
                      ? "text-teal-700"
                      : "text-slate-500"
                  }`}
                />

                <div>
                  <p className="text-sm font-medium text-slate-900">
                    UPI
                  </p>

                  <p className="text-xs text-slate-500">
                    Google Pay, PhonePe, etc.
                  </p>
                </div>
              </button>

              {/* Card */}
              <button
                onClick={() => setPaymentMethod("Card")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left ${
                  paymentMethod === "Card"
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <CreditCard
                  className={`h-5 w-5 ${
                    paymentMethod === "Card"
                      ? "text-teal-700"
                      : "text-slate-500"
                  }`}
                />

                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Card
                  </p>

                  <p className="text-xs text-slate-500">
                    Debit or credit card
                  </p>
                </div>
              </button>

              {/* Cash */}
              <button
                onClick={() => setPaymentMethod("Cash")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left ${
                  paymentMethod === "Cash"
                    ? "border-teal-600 bg-teal-50"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                <Banknote
                  className={`h-5 w-5 ${
                    paymentMethod === "Cash"
                      ? "text-teal-700"
                      : "text-slate-500"
                  }`}
                />

                <div>
                  <p className="text-sm font-medium text-slate-900">
                    Cash
                  </p>

                  <p className="text-xs text-slate-500">
                    Cash payment
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* Final Bill */}
          <div className="rounded-xl border border-slate-200 bg-white">

            <div className="border-b border-slate-200 px-5 py-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Final Bill
              </h2>
            </div>

            <div className="space-y-3 p-5">

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

              <div className="rounded-lg bg-slate-50 px-3 py-2">
                <p className="text-xs text-slate-500">
                  Payment Method
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {paymentMethod}
                </p>
              </div>

              <button
                onClick={handleConfirmPayment}
                disabled={cart.length === 0}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                <CheckCircle2 className="h-4 w-4" />
                Confirm Payment
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CheckoutConfirmation;