/* eslint-disable react/prop-types */
const Header = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 text-white">
      <span className="uppercase text-4xl">{title}</span>
      <span className="text-amber-200">{subtitle}</span>
    </div>
  );
};

export default Header;
