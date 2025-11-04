const Footer = () => {
  return (
    <footer
      className="
        bg-black
        text-[#FFD700]
        py-6
        text-center
        mt-10
        shadow-[0_-2px_10px_rgba(255,153,51,0.3)]
        transition-all duration-300
        hover:shadow-[0_-4px_20px_#FF9933]
      "
    >
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">Sri Ayyappa Swamy Temple</span>. All Rights Reserved.
      </p>

      <p className="mt-2 font-bold text-[#FF9933] hover:text-[#FFD700] transition-colors duration-300">
        Swamiye Saranam Ayyappa 🙏
      </p>
    </footer>
  );
};

export default Footer;
