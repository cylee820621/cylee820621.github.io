function Navbar() {
  return (
    <div className="flex bg-white shadow-md justify-end">
      <div className="hidden sm:block sm:ml-6">
        <div className="flex space-x-4 mr-24 py-4">
          <a href="#Home-section" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
            Home
          </a>
          <a href="#About-section" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </a>
          <a href="#Projects-section" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Projects
          </a>
          <a href="#Skills-section" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Skills
          </a>
          <a href="#Tools-section" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Tools
          </a>
          <a href="#contact-section" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
