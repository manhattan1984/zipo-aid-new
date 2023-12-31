"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const ChangePassword = () => {
  const newPasswordRef = useRef("");
  const { supabase } = useSupabase();

  const changePassword = async () => {
    const { user, error } = await supabase.auth.updateUser({
      // @ts-ignore
      password: newPasswordRef.current.value,
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Password Change Successful");
  };
  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded p-4 shadow w-full m-4 max-w-md">
          <p className="text-xl">Change Password</p>
          <p className="text-xs my-2">Don't share with anyone</p>

          {/* <div className="">
            <p className="font-light text-sm">Old Password</p>
            <input
              type="password"
              placeholder="Old Password"
              className="border p-1 my-2 w-full"
            />
          </div> */}
          <div className="">
            <p className="font-light text-sm">New Password</p>
            <input
              //   @ts-ignore
              ref={newPasswordRef}
              type="password"
              placeholder="New Password"
              className="border p-1 my-2 w-full"
            />
          </div>

          <button onClick={changePassword} className="text-blue-900 my-2">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
