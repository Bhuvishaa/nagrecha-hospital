import {
  FaUserMd,
  FaHeartbeat,
  FaHospital,
  FaClock,
  FaAward,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={32} />,
    title: "Experienced Doctors",
    description:
      "Our team of specialists provides expert diagnosis and compassionate treatment.",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is tailored to meet the unique needs of each patient.",
  },
  {
    icon: <FaHospital size={32} />,
    title: "Modern Infrastructure",
    description:
      "Advanced medical equipment and hygienic facilities ensure quality healthcare.",
  },
  {
    icon: <FaClock size={32} />,
    title: "24×7 Emergency Support",
    description:
      "Immediate emergency care is available whenever you need us.",
  },
  {
    icon: <FaAward size={32} />,
    title: "Trusted Healthcare",
    description:
      "Committed to delivering safe, ethical, and high-quality medical services.",
  },
  {
    icon: <FaSmile size={32} />,
    title: "Comfortable Experience",
    description:
      "Friendly staff and a welcoming environment help patients feel at ease.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-blue-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          We combine medical expertise, modern technology, and compassionate care
          to provide the best healthcare experience for every patient.
        </p>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;