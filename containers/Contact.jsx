import React, { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { Footer } from "../components";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, number, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      number: formData.number,
      message: formData.message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });

    formData.name = "";
    formData.email = "";
    formData.number = "";
    formData.message = "";
  };

  return (
    <div className=" w-full h-screen md:h-[40rem] mt-10 md:mb-0 mb-32">
      <section className="h-[38rem] relative md:h-[42rem] lg:px-16 top-10 dark:bg-gray-900 bg-gray-100">
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 ">
          <div className="flex flex-col mt-10 space-y-10  md:px-10">
            <div className=" flex items-center justify-around bg-white dark:bg-gray-800  py-7 md:w-[18rem] rounded-md mx-auto w-[20rem]">
              <AiOutlinePhone className="text-4xl" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-roboto ">Call Us</h1>
                <h4 className="text-lg font-inter">+93-7790-2122-22</h4>
              </div>
            </div>
            <div className="flex items-center justify-around bg-white dark:bg-gray-800  py-7 md:w-[18rem] rounded-md mx-auto w-[20rem]">
              <BiMap className="text-4xl" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-roboto ">Location</h1>
                <h4 className="text-lg font-inter">Kabul, Afghanistan</h4>
              </div>
            </div>
            <div className="flex items-center justify-around bg-white dark:bg-gray-800  py-7 md:w-[18rem] rounded-md mx-auto w-[20rem]">
              <AiOutlineMail className="text-4xl" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-roboto ">Mail Us</h1>
                <h4 className="text-lg font-inter">info@codeforgood.com</h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:h-[41rem] md:h-[43rem] dark:bg-gray-800 border-2 rounded-lg relative -top-20 bg-white shadow-sm shadow-gray-200 mt-24    md:pb-20  mb-10  md:right-4  lg:right-36 ">
            <div className="mt-6  ">
              <h2 className="text-3xl font-inter dark:text-slate-300 font-bold tracking-wider text-gray-800 ml-16">
                Contact Now
              </h2>
              <p className="ml-16 font-inter text-lg dark:text-slate-200 font-medium mt-3 text-gray-700">
                Need help with your web application or mobile app? Our team is
                here to assist you. Contact us today to get started.{" "}
                <span className="text-red-600 text-2xl">💖</span>
              </p>

              {isFormSubmitted && (
                <span className="ml-16 text-xl relative top-5 font-inter px-8 py-2 bg-green-500 text-white text-center w-full rounded-md mt-10">
                  Thank you for your message
                </span>
              )}
              {!isFormSubmitted && (
                <form onSubmit={handleSubmit} action="" className="mt-6 mx-16">
                  <div class="relative float-label-input">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      class="block w-full bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3  appearance-none leading-normal focus:border-blue-400"
                    />
                    <label
                      for="name"
                      class="absolute top-3 left-2 text-lg text-gray-800 pointer-events-none transition duration-200 ease-in-out px-2 text-grey-darker font-inter"
                    >
                      Name
                    </label>
                  </div>
                  <div class="relative float-label-input">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      class="block w-full bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3  appearance-none leading-normal focus:border-blue-400"
                    />
                    <label
                      for="email"
                      class="absolute top-3 left-2 text-lg text-gray-800 pointer-events-none transition duration-200 ease-in-out px-2 text-grey-darker font-inter"
                    >
                      Email
                    </label>
                  </div>
                  <div class="relative float-label-input">
                    <input
                      type="number"
                      id="number"
                      name="number"
                      value={number}
                      onChange={handleChange}
                      placeholder=" "
                      class="block w-full bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3  appearance-none leading-normal focus:border-blue-400"
                    />
                    <label
                      for="number"
                      class="absolute top-3 left-2 text-lg text-gray-800 pointer-events-none transition duration-200 ease-in-out px-2 text-grey-darker font-inter"
                    >
                      Number
                    </label>
                  </div>
                  <div class="relative float-label-input">
                    <textarea
                      id="message"
                      placeholder=" "
                      name="message"
                      value={message}
                      onChange={handleChange}
                      rows="3"
                      class="block w-full bg-white dark:bg-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-3  appearance-none leading-normal focus:border-blue-400"
                    />
                    <label
                      for="message"
                      class="absolute top-3 left-2 text-gray-800 text-lg pointer-events-none transition duration-200 ease-in-out px-2 text-grey-darker font-inter"
                    >
                      Message
                    </label>
                  </div>
                  <button className="mb-8 px-10 text-xl font-semibold font-inter text-slate-100 tracking-wider py-2 border-2 rounded-md bg-[#2F80ED]">
                    {loading && <span>Sending...</span>}
                    {!loading && <span>Send</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
