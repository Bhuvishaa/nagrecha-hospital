import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    review:
      "Excellent treatment and caring doctors. The entire staff was supportive throughout my recovery.",
  },
  {
    name: "Sneha Kulkarni",
    review:
      "Clean hospital, modern facilities and very professional doctors. Highly recommended.",
  },
  {
    name: "Anil Patil",
    review:
      "I received outstanding orthopedic care. The doctors explained everything clearly.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          What Our Patients Say
        </h2>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <FaQuoteLeft className="text-3xl text-blue-600" />

              <div className="mt-4 flex gap-1 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-5 text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;