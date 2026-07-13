import {
  FaHospital,
  FaAmbulance,
  FaXRay,
  FaPills,
  FaProcedures,
  FaWheelchair,
  FaParking,
  FaFlask,
} from "react-icons/fa";

const facilities = [
  {
    title: "Modern Operation Theatre",
    description:
      "Equipped with advanced surgical technology to ensure safe and effective procedures.",
    icon: <FaHospital size={35} />,
  },
  {
    title: "24×7 Emergency Care",
    description:
      "Round-the-clock emergency medical support with rapid response services.",
    icon: <FaAmbulance size={35} />,
  },
  {
    title: "Digital X-Ray",
    description:
      "Fast and accurate digital imaging for quick diagnosis and treatment.",
    icon: <FaXRay size={35} />,
  },
  {
    title: "In-house Pharmacy",
    description:
      "Quality medicines available within the hospital for patient convenience.",
    icon: <FaPills size={35} />,
  },
  {
    title: "Comfortable Patient Rooms",
    description:
      "Clean, hygienic and well-maintained rooms for a comfortable recovery.",
    icon: <FaProcedures size={35} />,
  },
  {
    title: "Wheelchair Accessibility",
    description:
      "Easy accessibility and patient-friendly infrastructure throughout the hospital.",
    icon: <FaWheelchair size={35} />,
  },
  {
    title: "Parking Facility",
    description:
      "Safe and spacious parking area for patients and visitors.",
    icon: <FaParking size={35} />,
  },
  {
    title: "Diagnostic Laboratory",
    description:
      "Reliable laboratory services with modern diagnostic equipment.",
    icon: <FaFlask size={35} />,
  },
];

function Facilities() {
  return (
    // <section className="bg-gradient-to-b from-white to-blue-50 py-20">
    <section
  id="facilities"
  className="bg-gradient-to-b from-white to-blue-50 py-20"
>
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-gray-900">
          Our Facilities
        </h2>

        <p className="mt-4 text-center text-gray-600">
          World-class infrastructure designed to provide safe, comfortable,
          and efficient healthcare services.
        </p>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {facility.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {facility.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {facility.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Facilities;