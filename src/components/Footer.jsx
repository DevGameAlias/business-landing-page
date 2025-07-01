const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-4 text-xl text-[#b8693a]">
        <a href="#" aria-label="Facebook" className="hover:text-yellow-600">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-yellow-600">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-yellow-600">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-yellow-600">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Footer Text */}
      <p>&copy; {new Date().getFullYear()} HandyMan Services. All rights reserved.</p>
      <p className="mt-1">Built for demo purposes only.</p>
    </footer>
  );
};

export default Footer;
