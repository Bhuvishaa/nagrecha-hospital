function Stats() {
  const stats = [
    {
      number: "3+",
      label: "Expert Doctors",
    },
    {
      number: "5000+",
      label: "Patients Treated",
    },
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "24/7",
      label: "Emergency Care",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-6 px-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl bg-blue-50 p-6 text-center shadow"
          >
            <h2 className="text-4xl font-bold text-blue-700">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;