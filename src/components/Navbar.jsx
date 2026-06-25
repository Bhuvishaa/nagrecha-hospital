function Navbar() {
  return (
    <nav className="flex items-center justify-between px-9 py-6 shadow-md">
      
        <h2 className="text-4xl font-bold text-red-700">
        Nagrecha Hospital TEST123
      </h2>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Doctors</li>
        <li className="cursor-pointer hover:text-blue-600">Facilities</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>

      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-800">
        Book Appointment
      </button>
    </nav>
  );
}

export default Navbar;