"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { sendEmailToUser } from "@/utils/emailSender";
import { useRouter } from "next/navigation";
import mjml2html from "mjml";

const Withdrawal = ({
  user_id,
  wallets,
  email,
  balance,
}: {
  user_id: string;
  email: string;
  wallets: {
    name: string;
  }[];
  balance: number;
}) => {
  const { supabase } = useSupabase();

  const router = useRouter();

  const amountRef = useRef(0);

  const addTransactionToDatabase = async (type: string, amount: number) => {
    const { data, error } = await supabase
      .from("transactions")
      .insert([{ user_id, amount, type }]);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Processing Your Withdrawal");
  };
  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center h-[75vh]">
        <div className="bg-white flex flex-col gap-4 shadow p-8 rounded">
          <p className="font-bold">Withdraw Funds</p>
          <div className="">
            <p className="font-light text-sm">Amount ($)</p>
            <input
              //   @ts-ignore
              ref={amountRef}
              className="border p-1 rounded w-full my-2"
              placeholder="USD"
              type="number"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Withdrawal Type</p>
            <select className="my-2 w-full" name="" id="">
              {wallets.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs">
            Ensure your wallet details provided are correct.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                // @ts-ignore
                const withdrawAmount = +amountRef.current.value;
                if (balance < withdrawAmount || withdrawAmount === 0) {
                  toast.error("You have insufficient funds.");
                  return;
                }
                addTransactionToDatabase(
                  "withdrawal",

                  withdrawAmount
                );
                sendEmailToUser(
                  email,
                  "Withdrawal",

                  `We have been notified of your recent request of $${withdrawAmount}. It is currently being processed. Thank you.`
                );

                setTimeout(() => {
                  router.push(`/dashboard/${user_id}`);
                }, 3000);
              }}
              className="text-blue-900 py-1 px-3"
            >
              Withdraw
            </button>
            <button className="text-neutral-500 py-1 px-3 ">New Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
