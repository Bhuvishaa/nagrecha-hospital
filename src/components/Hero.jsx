function Hero() {
  return (
    <section id="home" className="bg-blue-50">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            Trusted Multi-Speciality Healthcare
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Expert Orthopedic & Multi-Speciality Care
          </h1>

          <p className="mt-6 text-base text-gray-600 sm:text-lg">
            Providing quality healthcare with experienced doctors,
            advanced facilities, and compassionate patient care.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Book Appointment
            </button>

            <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center lg:text-left">
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
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600"
            alt="Hospital"
            className="h-72 w-full max-w-sm rounded-3xl object-cover shadow-xl sm:h-96 lg:h-[500px] lg:w-[500px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;