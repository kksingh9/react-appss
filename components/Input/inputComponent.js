const Input = ({ type, data, handleInput, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={data}
      onChange={handleInput}
      className={`bg-gray-200 focus:outline-none focus:ring-0 ${className}`}
    />
  );
};

export default Input;
