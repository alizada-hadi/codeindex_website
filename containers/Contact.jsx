import React, { useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, lastname, email, number, service, message } = formData;
  console.log(lastname, service);
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
      lastname: formData.lastname,
      email: formData.email,
      number: formData.number,
      service: formData.service,
      message: formData.message,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });

    formData.name = "";
    formData.lastname = "";
    formData.email = "";
    formData.number = "";
    formData.message = "";
  };

  const listIcons = [
    {
      icon: <BsFillPhoneFill />,
      disc: "+93-794-153-462",
    },
    {
      icon: <AiOutlineMail />,
      disc: "codingrah@gmail.com",
    },
    {
      icon: <AiOutlineInfoCircle />,
      disc: "https://www.codingrah.com",
    },
    {
      icon: <FaRegAddressBook />,
      disc: "Kabul, Afghanistan",
    },
  ];
  const radioList = [
    {
      radioDis: "Web Design",
    },
    {
      radioDis: "App Design",
    },
    {
      radioDis: "Graphic Design",
    },
    {
      radioDis: "Digital Marketing",
    },
    {
      radioDis: "Other",
    },
  ];

  return (
    <div className="">
      <div className="pb-28 px-3">
        <div className="flex flex-col items-center font-poppins  py-10 justify-center">
          <h1 className="text-3xl text-[48px] font-bold   py-10 pt-20">
            {" "}
            Contact us
          </h1>
          <p className="text-[18px] max-w-2xl text-gray text-center px-5">
            Need help with your web application or mobile app? Our team is here
            to assist you. Contact us today to get started.{" "}
          </p>
        </div>
        <div className="mx-auto">
          <div className="flex flex-wrap-reverse max-w-7xl  mx-auto">
            <div className="w-full md:w-1/2 lg:w-1/3  overflow-hidden rounded-xl  pt-20 md:pt-0">
              <motion.div
                whileInView={{ y: [-100, 0] }}
                transition={{ duration: 1 }}
                className="p-10 bg-[#6854FC] rounded-xl pb-60 relative"
              >
                <p className="py-5 text-[24px] text-white">
                  Contact Information
                </p>
                <p className="text-gray-300 pb-5">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
                {listIcons.map((list, index) => (
                  <div className="py-2 flex justify-start ">
                    <div className="bg-white h-8 w-8 items-center rounded-full relative">
                      <span className="text-xl absolute left-1.5 top-1.5 text-gray-500">
                        {list.icon}
                      </span>
                    </div>
                    <span className="mx-5 text-white text-[18px]">
                      {list.disc}
                    </span>
                  </div>
                ))}
                <img
                  src="images/Ellipse 48.png"
                  className="absolute bottom-0 right-0"
                  alt=""
                />
                <img
                  src="images/Ellipse 48.png"
                  className="h-32 w-36 absolute bottom-0 right-1 "
                  alt=""
                />
              </motion.div>
            </div>
            <motion.div
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 1.5 }}
              className="w-full md:w-1/2 lg:w-2/3 lg:col-span-2 h-[38rem] "
            >
              {isFormSubmitted && (
                <p className="ml-10 px-6 py-3 bg-[#6854FC] rounded-md text-white font-poppins">
                  Thank you for your message. We love to stay in touch with you.
                </p>
              )}

              <div className="flex flex-wrap  px-2 relative">
                <div className=" w-full lg:w-1/2 md:pl-10 lg:py-4 ">
                  <label
                    htmlFor=""
                    className="block text-[18px]  py-2 font-poppins font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                    className="border-b-2 w-full focus:outline-none pt-2 focus:border-[#444BD3] transition-all duration-500 ease-in-out outline-none border-input-border  "
                  />
                </div>
                <div className="w-full lg:w-1/2 md:pl-10 lg:py-4 ">
                  <label
                    htmlFor=""
                    className="block text-[18px] py-2 font-poppins font-semibold "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-b-2 w-full focus:outline-none pt-2 focus:border-[#444BD3] transition-all duration-500 ease-in-out outline-none border-input-border  "
                  />
                </div>
                <div className="w-full lg:w-1/2 md:pl-10 lg:py-4">
                  <label
                    htmlFor=""
                    className="block text-[18px] py-2 font-poppins font-semibold "
                  >
                    Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    className="border-b-2 w-full focus:outline-none pt-2 focus:border-[#444BD3] transition-all duration-500 ease-in-out outline-none border-input-border  "
                  />
                </div>
                <div className="w-full lg:w-1/2 md:pl-10 lg:py-4">
                  <label
                    htmlFor=""
                    className="block text-[18px] py-2 font-poppins font-semibold "
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    className="border-b-2 w-full focus:outline-none pt-2 focus:border-[#444BD3] transition-all duration-500 ease-in-out outline-none border-input-border  "
                  />
                </div>
                <p className="text-[18px] font-poppins flex md:pl-10 pl-0 py-5">
                  What service do you need?
                </p>
                <div className="flex flex-wrap  md:pl-8 pl-0">
                  {radioList.map((radio) => (
                    <div class="flex items-center px-2 py-2">
                      <input
                        checked
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="w-5 h-5 text-blue-600 bg-gray-100 outline-none border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-2"
                        class="ml-2 text-[20px] font-medium font-poppins text-gray-900 dark:text-gray-300"
                      >
                        {radio.radioDis}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="w-full  -pb-28 md:pl-10 lg:py-4">
                  <label
                    htmlFor=""
                    className="block text-[18px] py-2 font-poppins font-semibold "
                  >
                    Message{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    className="border-b-2 w-full focus:outline-none pt-2 focus:border-[#444BD3] transition-all duration-500 ease-in-out outline-none border-input-border  "
                    placeholder="Write your massage..."
                  />
                </div>
                <div className="mb-6">
                  <button
                    onClick={handleSubmit}
                    className="relative md:absolute right-0  md:-bottom-20 font-poppins font-semibold py-3 px-8 border border-gray-200  text-white bg-blue hover:bg-blue-800 rounded-3xl hover: mt-4"
                  >
                    {loading && <span>Sending...</span>}
                    {!loading && <span>Send Message</span>}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
