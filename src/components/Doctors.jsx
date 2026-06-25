function Doctors() {
  const doctors = [
    {
      name: "Dr. Nagrecha",
      specialty: "Orthopedic Surgeon",
      experience: "15+ Years",
    },
    {
      name: "Dr. Doctor 2",
      specialty: "General Physician",
      experience: "10+ Years",
    },
    {
      name: "Dr. Doctor 3",
      specialty: "Specialist",
      experience: "8+ Years",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Meet Our Doctors
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="mb-4 h-40 rounded-xl bg-gray-200"></div>

              <h3 className="text-2xl font-bold">
                {doctor.name}
              </h3>

              <p className="mt-2 text-blue-600">
                {doctor.specialty}
              </p>

              <p className="mt-2 text-gray-600">
                {doctor.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;