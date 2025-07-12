const Input = ({ type, data, handleInput, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={data}
        onChange={handleInput}
        className="bg-grey-200"
      />
    </>
  );
};

export default Input;
