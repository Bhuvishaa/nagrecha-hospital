import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-gray-600">
          We'd love to help you. Reach out to us or visit our hospital.
        </p>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-600"></div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow">
              <FaMapMarkerAlt className="mt-1 text-2xl text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-gray-600">
                  Nagrecha Hospital,<br />
                  Chandrapur, Maharashtra
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow">
              <FaPhoneAlt className="mt-1 text-2xl text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow">
              <FaEnvelope className="mt-1 text-2xl text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600">
                  contact@nagrechahospital.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow">
              <FaClock className="mt-1 text-2xl text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday<br />
                  9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="rounded-2xl bg-white p-6 shadow">

            <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100">
              <p className="text-lg text-gray-500">
                Google Maps Placeholder
              </p>
            </div>

            <button className="mt-6 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
              Book Appointment
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;