const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <p className="text-purple-50 text-sm">
        © {currentYear} Sajay Prakash. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
