import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended to reduce waiting time, but walk-in patients are also welcome.",
  },
  {
    question: "What are your consultation hours?",
    answer:
      "Our outpatient department is open from 9:00 AM to 8:00 PM, Monday to Saturday.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "Yes, emergency medical services are available 24 hours a day.",
  },
  {
    question: "Which specialties are available?",
    answer:
      "We provide Orthopedics, General Medicine, General Surgery, Diagnostic Services, and more.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can call the hospital directly or use the Book Appointment button on this website.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-12 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold"
              >
                {faq.question}

                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;