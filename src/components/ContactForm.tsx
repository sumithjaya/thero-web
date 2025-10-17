"use client";

import { BiMailSend, BiMessage, BiUserCircle } from "react-icons/bi";

export default function ContactForm() {
  return (
    <div className="flex gap-8 p-12 bg-[#ECF4FE] rounded-2xl">
      <div className="flex-1">
        <form className="space-y-8">
          <div className="border-b border-white/10  ">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="flex  gap-2 items-center  block text-sm font-medium text-[#545454]"
                >
                  <BiUserCircle style={{ color: "#0047AB" }} /> First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                  className="mt-2 block w-full rounded-md bg-white  px-3 py-2 text-white placeholder-gray-400 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="flex  gap-2 items-center  block text-sm font-medium text-[#545454]"
                >
                  <BiUserCircle style={{ color: "#0047AB" }} /> Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  className="mt-2 block w-full rounded-md bg-white  px-3 py-2 text-white placeholder-gray-400 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="flex  gap-2 items-center justify-start block flex  gap-2 text-sm font-medium text-[#545454]"
                >
                  <BiMailSend style={{ color: "#0047AB" }} /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="mt-2 block w-full rounded-md bg-white  px-3 py-2 text-white placeholder-gray-400 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="flex  gap-2 items-center  block text-sm font-medium text-[#545454]"
                >
                  <BiMessage style={{ color: "#0047AB" }} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message..."
                  className="mt-2 block w-full rounded-md bg-white  px-3 py-2 text-white placeholder-gray-400 outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="rounded-md bg-[#0047AB] px-6 py-3 font-semibold text-[#FFFFFF] hover:opacity-90 transition"
            >
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
