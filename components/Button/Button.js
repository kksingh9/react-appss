
const Button = ({type,text,handleClick,className}) => {
    return (
        <>
        <button type={type} onClick={handleClick} className={`${className} cursor-pointer`}>{text}</button>
        </>
    )
}

export default Button;