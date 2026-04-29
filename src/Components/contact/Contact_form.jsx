import React, { act, useEffect, useReducer, useState } from "react";
import Section_title from "../UI/Section_title";
import emailjs from "@emailjs/browser";
const initialValue = {
  fullName: false,
  email: false,
  message: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FULLNAME":
      return { ...state, fullName: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const Contact_form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, dispatchErrors] = useReducer(reducer, initialValue);

  const validationUI = () => {
    const emialRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (fullName.trim() === "") {
      dispatchErrors({ type: "UPDATE_FULLNAME", payload: true });
    } else {
      dispatchErrors({ type: "UPDATE_FULLNAME", payload: false });
    }

    if (message.trim() === "") {
      dispatchErrors({ type: "UPDATE_MESSAGE", payload: true });
    } else {
      dispatchErrors({ type: "UPDATE_MESSAGE", payload: false });
    }

    if (email.trim() === "") {
      dispatchErrors({ type: "UPDATE_EMAIL", payload: true });
    } else if (!emialRegex.test(email)) {
      dispatchErrors({ type: "UPDATE_EMAIL", payload: true });
    } else {
      dispatchErrors({ type: "UPDATE_EMAIL", payload: false });
    }
  };

  const resetErrors = (type) => {
    dispatchErrors({ type, payload: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    validationUI();

    if (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      message.trim() !== ""
    ) {
      setIsloading(true);
      emailjs
        .send(
          "service_ofi2636",
          "template_c3lskx7",
          { name: fullName, email: email, message: message },
          "VCVNa8PTNenhruwtJ",
        )
        .then(
          () => {
            setIsSuccess(true);
            setFullName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error);
            alert("Something went wrong ❌");
          },
        )
        .finally(() => {
          setIsloading(false);
        });
    }
  };

  return (
    <div className="contact_form_area mb-[50px]">
      {isSuccess && (
        <div
          className="w-100 fixed z-100 translate-[-50%] top-[50%] left-[50%] 
        h-75 bg-white rounded-xl fade-in-animation elements-center-column gap-5 shadow-xl "
        >
          <img src="/assets/success.png" className="w-25 " alt="" />
          <p className="text-gray text-md font-bold ">
            Message sent successfully{" "}
          </p>
          <button
            className="bg-main text-white p-2.5 rounded-sm font-bold"
            onClick={() => setIsSuccess(false)}
          >
            Ok
          </button>
        </div>
      )}

      <div className="head ">
        <Section_title title={"Contact Form"} style={"p-5! font-[600]!"} />
      </div>
      <div className="p-5">
        <form onSubmit={onSubmit} className="elements-column relative gap-5">
          {isLoading && (
            <div className="w-full fade-in-animation h-full absolute top-0 left-0 bg-gray-light z-10 elements-center-column ">
              <p>Loading...</p>
            </div>
          )}
          <div className="user_info grid grid-cols-1 sm:grid-cols-2 gap-5 ">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                name="full_name"
                className={`${input_style}`}
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  resetErrors("UPDATE_FULLNAME");
                }}
              />
              {errors.fullName && (
                <p className={error_message_style}>Please enter your name</p>
              )}
            </div>
            <div className="relative">
              <input
                type="Email"
                placeholder="Email Address"
                name="email_address"
                className={`${input_style}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  resetErrors("UPDATE_EMAIL");
                }}
              />
              {errors.email && (
                <p className={error_message_style}>Please enter your email</p>
              )}
            </div>
          </div>
          <div className="relative">
            <textarea
              name="message_content"
              placeholder="Your Message"
              className={`${input_style} w-full h-[100px] `}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                resetErrors("UPDATE_MESSAGE");
              }}
            ></textarea>
            {errors.message && (
              <p className={error_message_style}>Please enter your message</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className={btnStyle}>
              <span>Send Message</span>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
            <a
              className={`${btnStyle} text-white! bg-main! hover:text-main! hover:bg-transparent! border-2 border-main`}
            >
              <span>CV</span> <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

const input_style = `
border-[2px]! border-hover! p-[10px_15px] outline-none duration-300! focus:rounded-0! focus:transition-all focus:border-main!
w-full 
`;

const error_message_style = `
absolute left-0 top-[calc(100%+2px)] text-xs text-red-400
`;

const btnStyle = `
bg-gray-light p-[12px_26px] w-fit rounded-[5px] elements-center-row gap-2.5 font-medium hover:text-main border-2
border-gray-light cursor-pointer
`;

export default Contact_form;
