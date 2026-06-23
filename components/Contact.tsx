import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import EarthCanvas from "./EarthCanvas";

type Props = {};

function Contact({}: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <div
      className="xl:min-h-full w-full max-w-7xl mx-auto px-6 sm:px-16 py-16 xl:pt-14 xl:pb-0
      flex flex-col-reverse xl:flex-row xl:items-center gap-10 xl:gap-16"
    >
      {/* Contact Form — slides in from left */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="w-full xl:w-1/2 p-8 rounded-2xl bg-gray-800"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-700 py-4 px-6 placeholder:text-gray-400
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-700 py-4 px-6 placeholder:text-gray-400
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-gray-700 py-4 px-6 placeholder:text-gray-400
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-8 rounded-xl outline-none w-fit
            text-black font-bold shadow-md
            hover:shadow-black/90 transition duration-300 ease-in cursor-pointer"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas — slides in from right */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="w-full xl:w-1/2 h-87.5 md:h-125 xl:h-162.5"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default Contact;
