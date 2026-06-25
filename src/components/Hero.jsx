function Hero() {
  return (
    <section className="bg-blue-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-20">

        {/* Left Content */}
        <div className="max-w-xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
            Trusted Multi-Speciality Healthcare
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-gray-900">
            Expert Orthopedic & Multi-Speciality Care
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Providing quality healthcare with experienced doctors,
            advanced facilities, and compassionate patient care.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
              Book Appointment
            </button>

            <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600">
              Call Now
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700">3+</h3>
              <p>Expert Doctors</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-700">5000+</h3>
              <p>Patients Treated</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-700">24/7</h3>
              <p>Emergency Care</p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
            alt="Hospital"
            className="h-[500px] w-[500px] rounded-3xl object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;