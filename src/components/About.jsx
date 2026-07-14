function About() {
  return (
    <section id="about" className="py-16 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row lg:gap-12 lg:px-8">

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
            alt="Hospital"
            className="mx-auto w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Nagrecha Hospital
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            Nagrecha Hospital is a trusted multi-speciality healthcare center
            dedicated to providing quality medical care with experienced
            doctors, modern facilities, and patient-focused treatment.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
            Led by experienced orthopedic specialists and supported by expert
            medical professionals, we strive to deliver the best healthcare
            experience for every patient.
          </p>
        </div>

      </div>

      {/* Stats */}
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">

        <div className="rounded-xl bg-blue-50 p-6 text-center shadow">
          <h3 className="text-3xl font-bold text-blue-600">3+</h3>
          <p className="mt-2 text-gray-600">Expert Doctors</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-6 text-center shadow">
          <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
          <p className="mt-2 text-gray-600">Patients Treated</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-6 text-center shadow">
          <h3 className="text-3xl font-bold text-blue-600">10+</h3>
          <p className="mt-2 text-gray-600">Years of Experience</p>
        </div>

        <div className="rounded-xl bg-blue-50 p-6 text-center shadow">
          <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
          <p className="mt-2 text-gray-600">Emergency Care</p>
        </div>

      </div>
    </section>
  );
}

export default About;