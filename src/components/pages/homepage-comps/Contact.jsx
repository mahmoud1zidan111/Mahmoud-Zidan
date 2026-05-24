import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // ناخد الداتا من الفورم كـ FormData
    const formData = new FormData(event.target);

    try {
      const response = await axios.post(
        "https://forminit.com/f/bhf597tej2q",
        formData,
        {
          headers: {
            // متحطّش Content-Type هنا، axios هيظبطه مع FormData لوحده
            Authorization: `Bearer ${import.meta.env.VITE_FORMINIT_TOKEN}`,
          },
        },
      );

      console.log("Forminit response:", response.data);

      Swal.fire({
        icon: "success",
        iconColor: "#0DFC4B",
        title:
          "Thank you for contacting me. It will be a pleasure to work with you!",
        showConfirmButton: true,
        background: "#191a19",
        color: "#fff",
        confirmButtonColor: "#117911",
      });

      event.target.reset();
    } catch (error) {
      console.log("Forminit error:", error.response?.data || error.message);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: error.response?.data?.message || "Please try again later",
        background: "#191a19",
        color: "#fff",
        confirmButtonColor: "#117911",
      });
    }
  };

  return (
    <section
      name="Contact"
      className="relative w-full md:h-screen p-4 text-white h-unset"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Contact
          </h2>

          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            {/* الاسم: مطابق للـ sender block */}
            <input
              type="text"
              name="fi-sender-fullName"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />

            {/* الإيميل: مطابق للـ sender block */}
            <input
              type="email"
              name="fi-sender-email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            />

            {/* الرسالة: text block */}
            <textarea
              name="fi-text-message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color"
              required
            ></textarea>

            <button className="text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
