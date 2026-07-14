import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Hospital */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Nagrecha Hospital
            </h2>

            <p className="mt-4 text-gray-300">
              Providing trusted multi-speciality healthcare with experienced
              doctors, modern facilities, and compassionate patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Home</li>
              <li>About</li>
              <li>Doctors</li>
              <li>Facilities</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Specialities
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Orthopedics</li>
              <li>General Medicine</li>
              <li>General Surgery</li>
              <li>Physiotherapy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>contact@nagrechahospital.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Chandrapur, Maharashtra</span>
              </div>

            </div>

            <div className="mt-6 flex gap-4 text-2xl">
              <FaFacebook className="cursor-pointer hover:text-blue-400" />
              <FaInstagram className="cursor-pointer hover:text-pink-400" />
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
            </div>

          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Nagrecha Hospital. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;