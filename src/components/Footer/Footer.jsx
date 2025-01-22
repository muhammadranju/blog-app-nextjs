const Footer = () => {
  const date = new Date();
  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-black py-3 px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="flex items-center text-lg font-medium text-gray-50">
          <a href="https://www.mdranju.xyz" target="_blank" rel="noreferrer">
            Md. Ranju
          </a>
        </div>
        <p className="text-sm text-gray-200">
          ©{date.getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
