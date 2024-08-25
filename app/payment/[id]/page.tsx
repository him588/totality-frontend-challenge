"use client";
import React, { useState } from "react";
import { Properties } from "@/data";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import { useRouter } from "next/navigation";
interface CheckoutProps {
  params: { id: string };
}

function Page({ params }: CheckoutProps) {
  const { id } = params;
  const propertieDetails = Properties.find((propertie) => propertie.id === id);
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const router = useRouter();
  const usersString = localStorage.getItem("users");
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    code: "",
  });
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: "",
  });

  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBillingDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCardDetailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCardDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateForm(): boolean {
    let valid = true;

    // Validate billing details
    for (const [key, value] of Object.entries(billingDetails)) {
      if (!value) {
        toast.error(`Billing detail "${key}" is required`, {
          position: "top-center",
        });
        valid = false;
      }
    }

    // Validate card details
    if (!cardDetails.name) {
      toast.error("Cardholder's name is required", { position: "top-center" });
      valid = false;
    }
    if (!cardDetails.number) {
      toast.error("Card number is required", { position: "top-center" });
      valid = false;
    }
    if (!cardDetails.exp) {
      toast.error("Expiration date is required", { position: "top-center" });
      valid = false;
    }
    if (!cardDetails.cvv) {
      toast.error("CVV is required", { position: "top-center" });
      valid = false;
    }

    // Basic card number validation
    if (cardDetails.number && !/^\d{16}$/.test(cardDetails.number)) {
      toast.error("Card number must be 16 digits", { position: "top-center" });
      valid = false;
    }

    // Basic expiration date validation
    if (cardDetails.exp && !/^\d{2}\/\d{2}$/.test(cardDetails.exp)) {
      toast.error("Expiration date must be in MM/YY format", {
        position: "top-center",
      });
      valid = false;
    }

    return valid;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Order placed successfully!", { position: "top-center" });
      router.push("/success");
    }
  }
  // function calculateTotalAmount(cart: cartProperties[]) {
  //   return cart.reduce((total, property) => {
  //     return total + property.price * property.quantity;
  //   }, 0);
  // }

  return (
    <div className=" bg-white">
      <ToastContainer />
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Shipping info
                </h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input
                      onChange={handleAddressChange}
                      type="text"
                      name="name"
                      value={billingDetails.name}
                      placeholder="Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddressChange}
                      value={billingDetails.email}
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddressChange}
                      name="address"
                      value={billingDetails.address}
                      type="text"
                      placeholder="Street address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddressChange}
                      name="city"
                      value={billingDetails.city}
                      type="text"
                      placeholder="City"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddressChange}
                      name="state"
                      value={billingDetails.state}
                      type="text"
                      placeholder="State"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      onChange={handleAddressChange}
                      value={billingDetails.code}
                      name="code"
                      type="number"
                      placeholder="Postal code"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="grid gap-8 mt-8">
                  <div>
                    <input
                      onChange={handleCardDetailChange}
                      value={cardDetails.name}
                      name="name"
                      type="text"
                      placeholder="Cardholder's Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>

                  <div className="flex bg-white border-b focus-within:border-blue-600 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 ml-3"
                      viewBox="0 0 291.764 291.764"
                    >
                      <path
                        fill="#2394bc"
                        d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                        data-original="#2394bc"
                      />
                      <path
                        fill="#efc75e"
                        d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                        data-original="#efc75e"
                      />
                    </svg>
                    <input
                      onChange={handleCardDetailChange}
                      value={cardDetails.number}
                      name="number"
                      type="number"
                      placeholder="Card Number"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <input
                        onChange={handleCardDetailChange}
                        value={cardDetails.exp}
                        name="exp"
                        type="text"
                        placeholder="EXP."
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        onChange={handleCardDetailChange}
                        value={cardDetails.cvv}
                        name="cvv"
                        type="number"
                        placeholder="CVV"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-6 lg:mt-16">
              <button
                onClick={handleSubmit}
                className="block w-full max-w-lg mx-auto text-center rounded-full bg-gray-900 text-white text-lg font-bold p-2"
              >
                Place Order
              </button>
            </div>
          </div>

          <div className="lg:col-span-1 max-lg:order-2 bg-white w-full lg:shadow-xl border max-lg:border-t lg:rounded-xl p-6">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Summary
              </h2>
            </div>

            <div className="border-b-2 mt-6">
              <div className="mt-8 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">Subtotal</h2>
                <span className="text-lg font-bold text-gray-800">
                  ${propertieDetails && propertieDetails.price}
                  {/* ${calculateTotalAmount(currentUser?.cart ?? [])} */}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between pb-6">
                <h2 className="text-lg font-bold text-gray-800">Total</h2>
                <span className="text-lg font-bold text-gray-800">
                  ${propertieDetails && propertieDetails.price}
                  {/* ${calculateTotalAmount(currentUser?.cart ?? [])} */}
                </span>
              </div>
            </div>

            <div className="border-b-2 mt-4">
              <div className="mt-8 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                  Selected method
                </h2>
                <span className="text-lg font-bold text-gray-800">
                  {paymentMethod === "card" ? "Card" : "PayPal"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
