function About() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl items-center gap-12 px-8">

        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
            alt="Hospital"
            className="rounded-3xl shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold">
            About Nagrecha Hospital
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Nagrecha Hospital is a trusted multi-speciality healthcare center
            dedicated to providing quality medical care with experienced
            doctors, modern facilities, and patient-focused treatment.
          </p>

          <p className="mt-4 text-lg text-gray-600">
            Led by experienced orthopedic specialists and supported by expert
            medical professionals, we strive to deliver the best healthcare
            experience for every patient.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;