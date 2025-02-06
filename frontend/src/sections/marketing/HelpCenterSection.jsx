"use client";

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FaChevronDown } from "react-icons/fa6";

import { FAQ } from "@/static/images";

const accordion_data = [
  {
    _id: 1,
    title: "What is Spectraflix?",
    content:
      "Spectraflix is an OTT (Over-The-Top) streaming platform that offers a wide range of movies, web series, TV shows, and documentaries. It caters to all age groups and interests, and you can watch it on your phone, tablet, laptop, or Smart TV.",
    isOpen: true,
  },
  {
    _id: 2,
    title: "How much does Spectraflix cost?",
    content:
      "Spectraflix offers affordable plans starting at rs 199 per month . There are multiple options available such as Basic , Standard and Premium plans , to suit different budgets and need",
    isOpen: false,
  },
  {
    _id: 3,
    title: "How does Spectraflix work?",
    content:
      "Spectraflix is a subscription-based streaming service You need to create an account and select a subscription plan. Once Subscribed you can access thousands of movies and shows anytime and anywhere , as long as you have an internet connection",
    isOpen: false,
  },
  {
    _id: 4,
    title: "Do I need an account to watch Spectraflix?",
    content:
      "Yes , you need to create an account to watch content on Spectraflix . Having an account help personlize your experience , track your watch history , and provide tailored recommendations based on your preferences.",
    isOpen: false,
  },
  {
    _id: 5,
    title: "Can I try Spectraflix for free?",
    content:
      "Yes, Spectraflix Offers a free trial for new users . this allows you to explore the plateform and its content before committing to a subscription .",
    isOpen: false,
  },
  {
    _id: 6,
    title: "What kind of content is available on Spectraflix?",
    content:
      "Spectraflix Provides a variety of content,including movies, web series, tv shows etc. You will find content across different genres like action, drama, comedy, thriller, romance and more as well as regional and international titles.",
    isOpen: false,
  },
];

const HelpCenterSection = () => {
  const [accordion, setAccordion] = useState(accordion_data);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordion.map((accord) => {
      if (accord._id === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });
    setAccordion(updatedAccordions);
  };

  return (
    <>
      <h3 className="heading mb-10">Help Center</h3>
      <Accordion data={accordion} toggle={toggleAccordion} />
    </>
  );
};

const Accordion = ({ data, toggle }) => (
  <>
    {data.map((item) => (
      <div
        key={item._id}
        className={twMerge(
          "border border-solid border-darkAlt rounded-lg overflow-hidden mb-2",
          item.isOpen && "border-primary"
        )}
      >
        <button
          onClick={() => toggle(item._id)}
          className={twMerge(
            "w-full py-3 px-4 text-left flex justify-between items-center transition duration-500 ",
            item.isOpen && "bg-primary text-dark"
          )}
        >
          <span className="font-semibold">{item.title}</span>
          <FaChevronDown
            className={twMerge("rotate-0", !item.isOpen && "rotate-180")}
          />
        </button>
        {item.isOpen && (
          <div className="p-4">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </>
);

export default HelpCenterSection;
