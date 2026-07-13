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
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-4xl font-bold">
          Meet Our Specialists
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Experienced doctors committed to providing quality healthcare.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {doctor.degree}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <FaUserMd className="text-blue-600" />
                  <span>{doctor.speciality}</span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <FaStethoscope className="text-blue-600" />
                  <span>{doctor.experience} Experience</span>
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