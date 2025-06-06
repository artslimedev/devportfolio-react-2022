import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS Result:", result);

      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
      form.current.reset();

      setTimeout(() => {
        setStatus({ submitting: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: "Failed to send message. Please try again.",
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-16 sm:pt-16"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form or shoot me an email -{" "}
            <span className="border-b-2 border-[#47b2ff] pb-1">
              <a href="mailto:artslimedev@gmail.com">artslimedev@gmail.com</a>
            </span>
          </p>
        </div>
        {status.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {status.error}
          </div>
        )}

        {status.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            Message sent successfully!
          </div>
        )}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <input
          className="my-2 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-2 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="my-2 p-2 bg-[#ccd6f6]"
          name="message"
          placeholder="Message"
          cols="30"
          rows="5"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#47b2ff] hover:border-[#47b2ff] px-4 py-3 my-8 mx-auto flex items-center">
          Lets Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
