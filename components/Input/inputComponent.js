'use client'
const Input = ({ type, value, handleInput, placeholder, className,onKeyDown }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleInput(e)}
      onKeyDown={onKeyDown}
      className={`bg-gray-200 focus:outline-none focus:ring-0 ${className}`}
    />
  );
};

export default Input;
