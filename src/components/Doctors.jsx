import { FaUserMd, FaStethoscope } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Rajesh Nagrecha",
    degree: "MS (Orthopedics)",
    speciality: "Orthopedic & Joint Replacement Surgeon",
    experience: "15+ Years",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    degree: "MD (General Medicine)",
    speciality: "General Physician",
    experience: "12+ Years",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Amit Verma",
    degree: "MS (General Surgery)",
    speciality: "General Surgeon",
    experience: "10+ Years",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

function Doctors() {
  return (
    <section id="doctors" className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet Our Specialists
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Experienced doctors committed to providing quality healthcare.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-semibold text-blue-600">
                  {doctor.degree}
                </p>

                <div className="mt-4 flex items-start gap-3">
                  <FaUserMd className="mt-1 text-blue-600" />
                  <span className="text-gray-700">
                    {doctor.speciality}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <FaStethoscope className="text-blue-600" />
                  <span className="text-gray-700">
                    {doctor.experience} Experience
                  </span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Book Appointment
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Doctors;