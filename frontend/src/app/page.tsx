"use client";

import { useState } from "react";

export default function PaymentHubPage() {
  const [oneTimeQuantity, setOneTimeQuantity] = useState(1);
  const [oneTimePaymentMethod, setOneTimePaymentMethod] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("");
  const [subscriptionPaymentMethod, setSubscriptionPaymentMethod] =
    useState("");

  const paymentMethods = [
    "Stripe",
    "PayPal",
    "Checkout.com",
    "CIB",
    "Edahabia",
    "BaridiMob",
    "Djezzy Pay",
    "Ooredoo Pay",
  ];

  const subscriptionPlans = [
    { value: "monthly", label: "Monthly - $9.99/month" },
    { value: "quarterly", label: "Quarterly - $24.99/quarter" },
    { value: "yearly", label: "Yearly - $89.99/year" },
  ];

  const handleOneTimePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oneTimePaymentMethod) {
      alert("Please select a payment method");
      return;
    }
    console.log("One-time payment:", {
      quantity: oneTimeQuantity,
      method: oneTimePaymentMethod,
    });
    // Handle payment processing here
  };

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriptionPlan || !subscriptionPaymentMethod) {
      alert("Please select both a plan and payment method");
      return;
    }
    console.log("Subscription:", {
      plan: subscriptionPlan,
      method: subscriptionPaymentMethod,
    });
    // Handle subscription processing here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Payment Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            One place for all your payments — local and international.
          </p>
        </div>

        {/* Payment Cards */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* One-Time Payment Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <div className="mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                One-Time Payment
              </h2>
              <p className="text-gray-600">
                Make a single payment with your preferred method
              </p>
            </div>

            <form onSubmit={handleOneTimePayment} className="space-y-6">
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={oneTimeQuantity}
                  onChange={(e) =>
                    setOneTimeQuantity(parseInt(e.target.value) || 1)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="oneTimeMethod"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Payment Method
                </label>
                <select
                  id="oneTimeMethod"
                  value={oneTimePaymentMethod}
                  onChange={(e) => setOneTimePaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          {/* Subscription Payment Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
            <div className="mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Subscription Payment
              </h2>
              <p className="text-gray-600">
                Set up recurring payments with flexible plans
              </p>
            </div>

            <form onSubmit={handleSubscription} className="space-y-6">
              <div>
                <label
                  htmlFor="subscriptionPlan"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subscription Plan
                </label>
                <select
                  id="subscriptionPlan"
                  value={subscriptionPlan}
                  onChange={(e) => setSubscriptionPlan(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                >
                  <option value="">Select a plan</option>
                  {subscriptionPlans.map((plan) => (
                    <option key={plan.value} value={plan.value}>
                      {plan.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="subscriptionMethod"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Payment Method
                </label>
                <select
                  id="subscriptionMethod"
                  value={subscriptionPaymentMethod}
                  onChange={(e) => setSubscriptionPaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  required
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Secure payments powered by industry-leading providers
          </p>
        </div>
      </div>
    </div>
  );
}
