"use client";

import { useFormState } from "react-dom";
import { registerUser } from "@/app/actions/voucher_register";
import { useState, useEffect } from "react";

export default function RegisterForm({
  onSuccess,
}: {
  onSuccess: (id: number, email: string) => void;
}) {
  const [state, formAction] = useFormState(registerUser, null);
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState(1);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (state?.success && state.id) {
      onSuccess(state.id, email);
      setShowDialog(true);

      const nameInput = document.querySelector(
        'input[name="name"]'
      ) as HTMLInputElement;
      sendVoucherEmail({
        name: nameInput?.value || "",
        email,
        qty,
        voucher_name: "Member Benefits Gift Voucher",
      });
    }
  }, [state?.success]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= 3) {
      setQty(value);
    }
  };

  // Function to call the email API
  const sendVoucherEmail = async ({
    name,
    email,
    qty,
    voucher_name,
  }: {
    name: string;
    email: string;
    qty: number;
    voucher_name: string;
  }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("qty", qty.toString());
      formData.append("voucher_name", voucher_name);

      const res = await fetch("/api/send-email/member_voucher", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Email sending failed");

      console.log("Email sent successfully!", data);
    } catch (err) {
      console.error("Error sending email:", err);
    }
  };

  return (
    <>
      <form
        action={formAction}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/img/logo_black.png"
            alt="Logo"
            className="h-12 object-contain"
          />
        </div>

        <h2 className="text-xl font-semibold text-center">Employee Benefits</h2>

        <div className="flex justify-center mt-2 mb-2">
          <img
            src="/img/gift_voucher_shipping.png"
            alt="Member Benefits"
            className="h-12 object-contain"
          />
        </div>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full p-2 border rounded"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          required
          className="w-full p-2 border rounded"
        />

        {/* Qty dropdown */}
        <label className="block">
          Quantity (Max 3 per member)
          <select
            name="qty"
            value={qty}
            onChange={handleQtyChange}
            className="w-full p-2 border rounded mt-1"
          >
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>

        {/* Voucher Terms & Conditions */}
        <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 space-y-1">
          <strong>Member Discounted Gift Vouchers</strong>
          <p>Terms & Conditions</p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Redemption Value: RM200</strong>
            </li>
            <li>Price: RM160 (20% discount)</li>
            <li>Start Date: Immediate</li>
            <li>Expiry Date: 31 March 2026</li>
            <li>Redemption: Must be redeemed in full (no partial usage)</li>
            <li>
              Quantity: Only 100 discounted gift vouchers available on a first-come,
              first-served basis
            </li>
          </ul>
        </div>

        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>

      {/* Success dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-2">
              Registration Successful!
            </h3>
            <p>
              We have received your request. As vouchers are limited to the
              first 100, members who are successful will receive an email for
              instructions on how to complete your purchase.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
