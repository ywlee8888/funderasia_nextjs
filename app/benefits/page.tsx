"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/benefits/loyalty_voucher";

export default function SpinPage() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  const handleRegisterComplete = () => {
    setTimeout(() => {
      router.push("/"); 
    }, 10000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <RegisterForm
        onSuccess={(id: number, email: string) => {
          setUserId(id);
          setUserEmail(email);
          handleRegisterComplete();
        }}
      />
    </main>
  );
}
