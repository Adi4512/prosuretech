import BlurIn from "../components/ui/blur-in";
import ShineBorder from "../components/ui/shine-border";
import { RainbowButton } from "../components/ui/rainbow-button";
import Swal from "sweetalert2";
import HallOfFame from "../components/HallOfFame";
import { IoLogoWhatsapp } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { NavLink } from "react-router";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6b29028d-2ed9-475f-b972-9335269ca232");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfully 💌",
        icon: "success",
      });
    }
    event.target.reset();
  };

  return (
    <div>
      <div className="mt-5 flex flex-col relative">
        <div className="flex w-full border-b-2 border-neutral-900 justify-between ">
          <div className="flex items-center gap-2">
            <BlurIn
              word={
                <span className=" mb-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  Let's Work together
                </span>
              }
              duration={1.5}
              className={
                " pb-2 w-fit text-3xl sm:text-5xl lg:text-5xl text-left font-sans "
              }
            />
            <div className="mb-2 text-3xl sm:text-2xl lg:text-4xl mt-2">🚀</div>
          </div>

          <NavLink to={"/"}>
            <div className="mb-2 text-xl sm:text-xl lg:text-xl mt-2 mr-10">
              <RainbowButton className={"font-sans font-light"}>
                Home
              </RainbowButton>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="w-3/4 mt-5 mx-auto flex flex-col h-screen  border-b-2 border-gray-900">
        <span className="mb-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-gray-100 dark:via-gray-400 dark:to-gray-600">
          Get in Touch
          <span className="text-black dark:text-white"> ✨</span>
        </span>
        <ShineBorder
          className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-8 md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <form
            onSubmit={onSubmit}
            className="w-full max-w-lg flex flex-col gap-6 text-white"
          >
            <div className="flex flex-col">
              <label className="mb-2 text-lg font-medium">
                Enter your Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded-lg outline-none border border-gray-700 focus:border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-lg font-medium">
                Enter your Email
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg outline-none border border-gray-700 focus:border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-lg font-medium">
                Enter your Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="p-3 rounded-lg resize-none outline-none border border-gray-700 focus:border-gray-300 focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <RainbowButton className="mt-4 px-10 py-3 font-light text-white text-lg ">
                Send Message ✉️
              </RainbowButton>
            </div>
          </form>
        </ShineBorder>
      </div>
      <div className="flex flex-col items-center mt-10 mb-10 ">
        <span className="mb-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-gray-100 dark:via-gray-400 dark:to-gray-600">
          Hall Of Fame
          <span className="text-black dark:text-white"> 🏆</span>
        </span>
        <div className="mt-5">
          <HallOfFame />
        </div>
      </div>
      <div className="items-center mt-14 flex flex-col mb-12 ">
        <span className="mb-6 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-gray-100 dark:via-gray-400 dark:to-gray-600">
          Connect with Us Online
          <span className="text-black dark:text-white"> 🌐</span>
        </span>
        <div className="flex flex-row justify-center mt-5 space-x-10 gap-10 text-6xl">
          <a href="https://wa.me/917021171228" target="_blank">
            {" "}
            <IoLogoWhatsapp className="hover:text-green-500 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.facebook.com/username" target="_blank">
            <FaFacebook className="hover:text-blue-500 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/company/prosure-technologies"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-800 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
          <a href="mailto:1yqKZ@example.com">
            <SiGmail className="hover:text-red-400 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.google.com/maps?q=Prosure+Technologies"
            target="_blank"
          >
            <SiGooglemaps className="hover:text-red-800 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
          <a href="tel:917021171228">
            {" "}
            <IoCall className="hover:text-green-500 hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
}
